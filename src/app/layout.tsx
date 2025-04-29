import Header from "@/components/Header/Header";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
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
