import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { NoteProvider } from "@/context/NoteContext";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Dream Notes",
  description: "A melhor aplicação de anotações do mundo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} antialiased min-h-screen overflow-hidden`}
      >
          <NoteProvider>
            {children}
          </NoteProvider>
      </body>
    </html>
  );
}
