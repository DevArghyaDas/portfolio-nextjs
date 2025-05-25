import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ThemeProvider from "@/components/ThemeProvider";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import "./globals.css";
import { CSSProperties } from "react";
import GridForBg from "@/components/ui/GridForBg";

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const styleHtml: CSSProperties = {
  scrollBehavior: "smooth",
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={styleHtml}
    >
      <body>
        <ThemeProvider
          attribute={"class"}
          enableSystem={true}
        >
          <ScrollProgressBar />
          <Header />
          <GridForBg />
          <main className="container mx-auto max-w-5xl border">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
