import Header from "@/components/Header/Header";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className="scroll-smooth bg-scroll">
        <ThemeProvider
          attribute={"class"}
          enableSystem={true}
        >
          <Header />

          <main className="container mx-auto px-6">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
