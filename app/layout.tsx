import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import styles from "./page.module.css";
import Footer from "./components/footer";
import WrapperProvider from "./components/provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rick and Morty",
  description: "NextJS app with graphql",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <main className={styles.main}>
          <Header />
          <WrapperProvider>{children}</WrapperProvider>
          <Footer />
        </main>
      </body>
    </html>
  );
}
