"use client";
import Header from "@/app/ui/Header";
import CustomCursor from "@/app/ui/CustomCursor";
import Footer from "@/app/ui/Footer";
import "swiper/css";
import "swiper/css/pagination";
import "./scss/index.scss";
import { Poppins, Open_Sans } from "next/font/google";
import Div from "../ui/Div";
import Cta from "../ui/Cta";
import Spacing from "../ui/Spacing";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";

const poppins = Poppins({
      subsets: ["latin"],
      weight: ["400", "600", "700"],
      variable: "--primary-font",
});
const openSans = Open_Sans({
      subsets: ["latin"],
      weight: ["400", "600", "700"],
      variable: "--secondary-font",
});

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
      return (
            <html lang="en">
                  <head>
                        <meta name="author" content="GalaxySpark" />
                        <link
                              rel="icon"
                              href="/images/favicon.png"
                              sizes="any"
                              type="image/png"
                        />
                        <link
                              rel="apple-touch-icon"
                              href="/images/favicon.png"
                        />
                        <link
                              rel="shortcut icon"
                              href="/images/favicon.png"
                              type="image/x-icon"
                        />
                        <title>Pioneering Pixel</title>
                  </head>

                  <body className={`${openSans.variable} ${poppins.variable}`}>
                        <QueryClientProvider client={queryClient}>
                              <Header />
                              <div 
                              style={
                                    {
                                          minHeight: "100vh",
                                    }
                              }
                              >{children}</div>
                              <Spacing lg="150" md="80" />
                              <Div className="container">
                                    <Cta
                                          title="Let’s discuss to make <br />something <i>BadAss</i> together"
                                          btnText="Apply For a Date 🫣"
                                          btnLink="/contact"
                                          bgSrc="/images/cta_bg.jpeg"
                                    />
                              </Div>
                              <Footer />
                              <CustomCursor />
                              <Toaster />
                        </QueryClientProvider>
                  </body>
            </html>
      );
}
