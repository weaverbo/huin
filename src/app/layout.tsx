import "../styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

// 영문 — PP Neue Montreal
const neueMontreal = localFont({
  src: [
    { path: "../fonts/PPNeueMontreal-Hairline.otf", weight: "100", style: "normal" },
    { path: "../fonts/PPNeueMontreal-Light.otf", weight: "300", style: "normal" },
    { path: "../fonts/PPNeueMontreal-Regular.otf", weight: "400", style: "normal" },
    { path: "../fonts/PPNeueMontreal-Semibold.otf", weight: "600", style: "normal" },
    { path: "../fonts/PPNeueMontreal-ExtraBold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-neue",
  display: "swap",
});

// 한글 — Pretendard
const pretendard = localFont({
  src: [
    { path: "../fonts/Pretendard-Light.otf", weight: "300", style: "normal" },
    { path: "../fonts/Pretendard-Regular.otf", weight: "400", style: "normal" },
    { path: "../fonts/Pretendard-Medium.otf", weight: "500", style: "normal" },
    { path: "../fonts/Pretendard-SemiBold.otf", weight: "600", style: "normal" },
    { path: "../fonts/Pretendard-ExtraBold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-pretendard",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HUIN",
  description: "설계가 바뀌면, 공간의 경험이 바뀝니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${neueMontreal.variable} ${pretendard.variable}`}>
      <body className="font-sans">
        <Header />
        <div className="overflow-x-hidden">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
