import { Cairo } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
const cairo = Cairo({ subsets: ["latin"] });

export const metadata = {
  title: "Şeyban Giyim | شيبان للالبسة",
  description: "ابدء بتكوين مظهر جيدا",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cairo.className}`}>
        <Header />
        <div className="mt-[80px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
