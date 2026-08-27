"use client";

import { useEffect, useState } from "react";

// espaco livre ao redor da moldura, pro botao de voltar nao encostar nela
const MARGEM = 140;

export default function Moldura({ titulo, src, largura, altura }) {
  const [escala, setEscala] = useState(0);

  useEffect(() => {
    const ajustar = () =>
      setEscala(
        Math.min(
          1,
          (window.innerWidth - MARGEM) / largura,
          (window.innerHeight - MARGEM) / altura
        )
      );

    ajustar();
    window.addEventListener("resize", ajustar);
    return () => window.removeEventListener("resize", ajustar);
  }, [largura, altura]);

  return (
    <div
      className="moldura"
      style={{ width: largura * escala, height: altura * escala }}
    >
      <iframe
        src={src}
        title={titulo}
        width={largura}
        height={altura}
        style={{ transform: `scale(${escala})` }}
      />
    </div>
  );
}
