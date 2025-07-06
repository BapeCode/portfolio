import type { Metadata } from "next";
import NavigationComponent from "@/components/navigation/Navigation";
import "./globals.scss";

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
        <NavigationComponent />
        {children}
      </body>
    </html>
  );
}
