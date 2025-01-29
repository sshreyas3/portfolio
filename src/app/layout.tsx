import type { Metadata } from "next";
import { Outfit, Ovo, Roboto } from "next/font/google";
import "./globals.css";

const outfitFont = Outfit({
  subsets: ["latin"],
  weight: ["400"],
});

const ovoFont = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Shreyas S | Portfolio",
  description: "Shreyas S | Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfitFont.className} ${ovoFont.className} ${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
