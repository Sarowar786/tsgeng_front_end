import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux/ReduxProvider";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "The Fleet Queen",
  description: "Your ultimate travel companion for planning the perfect vacation",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>

      <body
        className={`${poppins.className} antialiased bg-white text-slate-900`}
      >
        <ReduxProvider>
          {children}

          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: "rgba(10, 26, 47, 0.75)",
                backdropFilter: "blur(10px)",
                color: "#fff",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                padding: "12px 14px",
                fontSize: "14px",
                fontWeight: 600,
              },
            }}
          />
        </ReduxProvider>
      </body>
    </html>
  );
}