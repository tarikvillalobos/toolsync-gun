"use client";

import { useRouter } from "next/navigation";

export default function Tela({ titulo, children }) {
  const router = useRouter();

  return (
    <div className="tela">
      <button
        className="back"
        type="button"
        onClick={() => router.back()}
        aria-label="Voltar"
      >
        ←
      </button>
      {children}
    </div>
  );
}
