import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ThemeProvider from "@/components/ThemeProvider";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import "./globals.css";
import { CSSProperties } from "react";

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
          <main className="container mx-auto">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
