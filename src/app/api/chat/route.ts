import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Rate limiting simples em memória (Útil para barrar rajadas básicas de spam no mesmo containter serverless)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const MAX_REQUESTS_PER_MINUTE = 10;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;

// Configuração do OpenRouter
const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY || 'missing-key',
  baseURL: process.env.OPENROUTER_BASE_URL || 'https://openrouter.ai/api/v1',
  defaultHeaders: {
    'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'https://alvaro-portifolio-ten.vercel.app/',
    'X-Title': 'Portfólio Álvaro Henrique - Chatbot',
  },
});

export async function POST(request: NextRequest) {
  try {
    // 001: Validação da variável de ambiente ao invés de usar fallback exposto
    if (!process.env.OPENROUTER_API_KEY) {
      console.error('Erro crítico: OPENROUTER_API_KEY não configurada no ambiente.');
      return NextResponse.json({ error: 'Erro interno de configuração de servidor.' }, { status: 500 });
    }

    // 002: Proteção de Rate Limiting simples
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || request.headers.get('x-real-ip') || 'unknown';
    const now = Date.now();
    
    if (rateLimitMap.has(ip)) {
      const rateData = rateLimitMap.get(ip)!;
      if (now - rateData.timestamp < RATE_LIMIT_WINDOW_MS) {
        if (rateData.count >= MAX_REQUESTS_PER_MINUTE) {
          return NextResponse.json(
            { error: 'Muitas requisições. Aguarde um momento e tente novamente.' },
            { status: 429 }
          );
        }
        rateData.count += 1;
      } else {
        rateLimitMap.set(ip, { count: 1, timestamp: now });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, timestamp: now });
    }

    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Mensagens são obrigatórias e devem ser um array' },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: process.env.OPENROUTER_MODEL || 'openai/gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: process.env.CHATBOT_SYSTEM_PROMPT || 
            'Você é um assistente virtual profissional especializado em ajudar visitantes do portfólio de Álvaro Henrique. Você é cordial, prestativo e pode responder perguntas sobre suas habilidades, projetos, experiência e serviços. Mantenha as respostas concisas e profissionais.'
        },
        ...messages
      ],
      max_tokens: 500,
      temperature: 0.7,
      stream: false,
    });

    const response = completion.choices[0]?.message?.content || 'Desculpe, não consegui processar sua mensagem.';

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Erro na API do chatbot:', error);
    
    // Tratamento para repassar a mensagem real da OpenRouter em vez de esconder atrás de 500 genérico
    const err = error as { message?: string; status?: number };
    const errorMessage = err?.message || 'Erro interno do servidor';
    const statusCode = err?.status || 500;
    
    return NextResponse.json(
      { error: errorMessage },
      { status: statusCode }
    );
  }
} 