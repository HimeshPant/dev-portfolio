export const metadata = {
  title: "Himesh's Portfolio",
  description: "Personal Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
