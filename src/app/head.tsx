export default function Head() {
  return (
    <>
      {/* Preload critical resources */}
      <link
        rel="preload"
        href="/profile/foto_perfil.jpg"
        as="image"
        type="image/jpeg"
      />
      <link
        rel="preload"
        href="/icon.png"
        as="image"
        type="image/png"
      />
      
      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* Critical CSS hint */}
      <link rel="preload" href="/globals.css" as="style" />
      
      {/* Resource hints */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Performance hints */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
    </>
  )
}