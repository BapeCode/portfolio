import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio - Mathieu",
  description: "Site officiel de Mathieu",
  icons: {
    icon: [{ url: "/logo.png", sizes: "32x32", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
