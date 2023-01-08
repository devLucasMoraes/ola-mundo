import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Inicio from "./pages/Inicio";
import SobreMim from "./pages/SobreMim";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/sobremim" element={<SobreMim/>}></Route>
        <Route path="*" element={<div>Pagina não encontrada</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
