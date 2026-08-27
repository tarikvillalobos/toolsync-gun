import Moldura from "../components/Moldura";
import Tela from "../components/Tela";

export default function PlataformaPage() {
  return (
    <Tela titulo="Plataforma">
      <Moldura
        titulo="Plataforma"
        src="/telas/plataforma.html"
        largura={1600}
        altura={1000}
      />
    </Tela>
  );
}
