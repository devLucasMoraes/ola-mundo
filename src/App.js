import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import SobreMim from "./pages/SobreMim";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/sobremim" element={<SobreMim/>}></Route>
        <Route path="*" element={<div>Pagina não encontrada</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
