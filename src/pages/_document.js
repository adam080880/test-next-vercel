import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico?v=2" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Aplikasi Explorer.Id sebagai platform perjalanan digital yang berbasis di Indonesia, Explorer.Id ingin menjadi solusi perjalanan online Anda dengan menyediakan berbagai paket wisata untuk menjelajahi kepulauan Indonesia melalui open trip, private trip, dan custom trip." />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2&display=swap" rel="stylesheet" />

        <Script dangerouslySetInnerHTML={`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '322812935275969');
          fbq('track', 'PageView');
        `} />

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-1Q22RH6VLG" />

        <Script dangerouslySetInnerHTML={`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1Q22RH6VLG');

          window.gtag = gtag;
        `} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
