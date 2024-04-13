import Header from "@/components/Header";
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the styles
import "./globals.css";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "Road Assistant",
  description: "Bubble introduces a new way to build a web application. It’s a no-code point-and-click programming tool. Bubble hosts all applications on its cloud platform.",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/icon.png',
        href: '/icon.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/icon.png',
        href: '/icon.png',
      },
    ],
  },
}

// interface RootLayoutProps {
//   children: React.ReactNode;
//   params: {
//     locale: string;
//   }
// }

export default function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode
  params: {
    locale: string
  }
}) {
  return (
    <html lang={locale} className="scroll-smooth">
      <Head>
        <meta name="description" content={metadata.description} />
      </Head>
      <body suppressHydrationWarning={true}>
        <Header/>
        {children}
        <Footer/>
        <ScrollToTopButton />
        <ToastContainer/>
      </body>
    </html>
  )
}