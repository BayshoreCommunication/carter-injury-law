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
  metadataBase: new URL("https://www.carterinjurylaw.com/"),
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

            {/* AI Chatbot Widget  */}
            <Script
              src="https://aibotwidget.bayshorecommunication.org/chatbot-widget.min.js"
              data-api-key="org_sk_3ca4feb8c1afe80f73e1a40256d48e7c"
              data-fallback-api-key="org_sk_dfa12d518116dbe59240794fe05d8541"
              data-widget-name="Carter Injury Law Assistant"
              data-widget-color="blue"
              data-auto-open="false"
              data-lead-capture="true"
              async
            />
            
            {/* Fallback script for widget error handling */}
            <Script id="chatbot-fallback" strategy="afterInteractive">
              {`
                // Fallback configuration if the main widget fails to load
                window.addEventListener('load', function() {
                  setTimeout(function() {
                    // Check if the chatbot widget loaded successfully
                    if (!window.chatbotWidgetLoaded) {
                      console.log('Chatbot widget failed to load, using fallback configuration');
                      
                      // Create a simple fallback chat button
                      const fallbackButton = document.createElement('div');
                      fallbackButton.innerHTML = \`
                        <div style="
                          position: fixed;
                          bottom: 20px;
                          right: 20px;
                          width: 60px;
                          height: 60px;
                          background-color: #0066cc;
                          border-radius: 50%;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          cursor: pointer;
                          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                          z-index: 9999;
                          color: white;
                          font-size: 24px;
                        ">
                          💬
                        </div>
                      \`;
                      
                      fallbackButton.addEventListener('click', function() {
                        // Open contact form or phone number
                        window.open('tel:8139220228', '_self');
                      });
                      
                      document.body.appendChild(fallbackButton);
                    }
                  }, 5000); // Wait 5 seconds for widget to load
                });
              `}
            </Script>

            {/* Diagnostic script for API troubleshooting */}
            <Script id="chatbot-diagnostic" strategy="afterInteractive">
              {`
                // Diagnostic script to help troubleshoot API issues
                async function diagnoseChatbotAPI() {
                  const apiKeys = [
                    'org_sk_3ca4feb8c1afe80f73e1a40256d48e7c',
                    'org_sk_dfa12d518116dbe59240794fe05d8541'
                  ];
                  
                  console.log('🔍 Starting chatbot API diagnosis...');
                  
                  for (const apiKey of apiKeys) {
                    try {
                      console.log(\`Testing API key: \${apiKey.substring(0, 10)}...\`);
                      
                      const response = await fetch('https://api.bayshorecommunication.org/api/chatbot/settings', {
                        method: 'GET',
                        headers: {
                          'X-API-Key': apiKey,
                          'Content-Type': 'application/json'
                        }
                      });
                      
                      console.log(\`API Key \${apiKey.substring(0, 10)}... - Status: \${response.status}\`);
                      
                      if (response.ok) {
                        const data = await response.json();
                        console.log('✅ API working with key:', apiKey.substring(0, 10) + '...');
                        console.log('Settings:', data);
                        return true;
                      } else {
                        console.log(\`❌ API failed with status \${response.status} for key: \${apiKey.substring(0, 10)}...\`);
                      }
                    } catch (error) {
                      console.log(\`❌ API error for key \${apiKey.substring(0, 10)}...: \${error.message}\`);
                    }
                  }
                  
                  console.log('❌ All API keys failed. This indicates a backend issue.');
                  console.log('💡 Solutions:');
                  console.log('1. Check if the backend server is running');
                  console.log('2. Verify the organization exists in the database');
                  console.log('3. Check database connection');
                  console.log('4. Review server logs for errors');
                  
                  return false;
                }
                
                // Run diagnosis after page loads
                window.addEventListener('load', function() {
                  setTimeout(diagnoseChatbotAPI, 3000);
                });
              `}
            </Script>
          </div>
        </Providers>
      </body>
    </html>
  );
}
