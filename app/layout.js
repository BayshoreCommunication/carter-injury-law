import Footer from "@/components/Footer";
import MainNavbar from "@/components/MainNavbar";
import BlogPopupDesign from "@/components/shared/BlogPopupDesign";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap", // better loading performance
});

export const metadata = {
  metadataBase: new URL("https://www.carterinjurylaw.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Microsoft Clarity */}
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "sxa23gxkxm");
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1171875651343659');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Facebook Pixel NoScript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1171875651343659&ev=PageView&noscript=1"
          />
        </noscript>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WLPW8ML7V9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WLPW8ML7V9', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>

      <body className={montserrat.className}>
        <Providers>
          <div className="overflow-x-hidden text-black bg-white">
            <MainNavbar />
            <BlogPopupDesign />
            {children}
            <Footer />

            {/* AI Chatbot Widget */}
          <Script
              src="https://aibotwidget.bayshorecommunication.org/chatbot-widget.min.js"
              data-api-key="org_sk_3ca4feb8c1afe80f73e1a40256d48e7c"
              async
            />  

          </div>
        </Providers>
      </body>

    </html>
  );
}
