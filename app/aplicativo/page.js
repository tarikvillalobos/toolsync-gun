import Moldura from "../components/Moldura";
import Tela from "../components/Tela";

export default function AppPage() {
  return (
    <Tela titulo="App">
      {/* card fixo de 1280x800 (+1px de borda) com 32px de respiro em volta */}
      <Moldura
        titulo="App"
        src="/telas/kiosk.html"
        largura={1346}
        altura={866}
        semBorda
      />
    </Tela>
  );
}
