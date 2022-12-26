import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="https://cdn.discordapp.com/attachments/1052258751681400902/1056990540371075102/a7066cc536bc180d4d6bcaaee5780058.gif" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="Hiç ara vermeden müzik dinlemeye ne dersiniz? 750'den fazla desteklenen ses platformuyla kendi çalma listelerinizi oluşturun ve dinlemeye başlayın."
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@MusicMaker" />
          <meta name="twitter:creator" content="@MusicMaker" />
          <meta property="og:url" content="https://musicmaker.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Made By İtalyan" />
          <link
            rel="icon"
            href="https://cdn.discordapp.com/attachments/1052258751681400902/1056990540371075102/a7066cc536bc180d4d6bcaaee5780058.gif"
            type="image/x-icon"
          />
          <meta
            property="og:description"
            content="Hiç ara vermeden müzik dinlemeye ne dersiniz? 750'den fazla desteklenen ses platformuyla kendi çalma listelerinizi oluşturun ve dinlemeye başlayın."
          />
          <meta property="og:image" content="https://cdn.discordapp.com/attachments/1052258751681400902/1056990540371075102/a7066cc536bc180d4d6bcaaee5780058.gif" />
          <meta property="og:image:alt" content="İtalyan" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:site_name"
            content="Astra Bot"
          />
          <meta name="theme-color" content="#6108dd" />
          <link rel="icon" href="https://cdn.discordapp.com/attachments/1052258751681400902/1056990540371075102/a7066cc536bc180d4d6bcaaee5780058.gif" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
