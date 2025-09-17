import "bootstrap/dist/css/bootstrap.min.css";
import Script from 'next/script';

export const metadata = {
  title: "Excess Access-TEST  ",
  description: "React-Bootstrap Navbar Example",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <main>{children}</main>
        <Script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
          strategy="afterInteractive" 
        />
      </body>
    </html>
  );
}
