import "./globals.css";

export const metadata = {
  title: "ToolSync",
  description: "Locker, App e Plataforma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <main className="shell">{children}</main>
      </body>
    </html>
  );
}
