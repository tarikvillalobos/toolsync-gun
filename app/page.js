import Link from "next/link";

const opcoes = [
  { href: "/locker", label: "Locker" },
  { href: "/aplicativo", label: "App" },
  { href: "/plataforma", label: "Plataforma" },
];

export default function Home() {
  return (
    <div className="menu">
      {opcoes.map((opcao) => (
        <Link key={opcao.href} href={opcao.href}>
          <button className="btn" type="button">
            {opcao.label}
          </button>
        </Link>
      ))}
    </div>
  );
}
