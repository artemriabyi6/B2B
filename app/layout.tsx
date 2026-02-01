import "./globals.css";

export const metadata = {
  title: "B2B постачання товарів з Китаю",
  description: "Прямі поставки з фабрик Китаю для магазинів та маркетплейсів",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className="bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
