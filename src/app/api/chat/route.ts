import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Configuração do OpenRouter
const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY || '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',
  baseURL: process.env.OPENROUTER_BASE_URL || 'https://openrouter.ai/api/v1',
  defaultHeaders: {
    'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    'X-Title': 'Portfólio Álvaro Henrique - Chatbot',
  },
});

export async function POST(request: NextRequest) {
  try {
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
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
} 