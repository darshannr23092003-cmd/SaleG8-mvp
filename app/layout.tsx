import "../styles/globals.css";

export const metadata = {
  title: "SaleG8",
  description: "Sales and invoice management MVP",
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
