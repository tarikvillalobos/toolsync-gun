import Moldura from "../components/Moldura";
import Tela from "../components/Tela";

export default function AppPage() {
  return (
    <Tela titulo="App">
      {/* card fixo de 1280x800 (+1px de borda) com 48px de respiro pra sombra */}
      <Moldura
        titulo="App"
        src="/telas/kiosk.html"
        largura={1378}
        altura={898}
        semBorda
      />
    </Tela>
  );
}
