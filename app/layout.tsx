import "../styles/globals.css";

export const metadata = {
  title: "SaleG8",
  description: "Livestock sales, data capture, and reporting platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
