import Footer from "@/components/static/footer";
import Navbar from "@/components/static/navbar";
import type { Metadata } from "next";
// import "./globals.css";

export const metadata: Metadata = {
  title: "Kariyapay",
  description: "Kariyapay",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section lang="en">
      <Navbar />

      <div className="font-sans antialiased">{children}</div>

      <Footer />
    </section>
  );
}
