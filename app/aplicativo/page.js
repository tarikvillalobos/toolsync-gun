import Tela from "../components/Tela";

export default function AppPage() {
  return (
    <Tela titulo="App">
      <iframe className="frame" src="/telas/kiosk.html" title="App" />
    </Tela>
  );
}
