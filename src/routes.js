import PaginaPadrao from "components/PaginaPadrao";
import Post from "components/Post";
import Rodape from "components/Rodape";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Inicio from "./pages/Inicio";
import SobreMim from "./pages/SobreMim";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<Inicio/>}/>
          <Route path="/sobremim" element={<SobreMim/>}/>
          <Route path="post/:id" element={<Post/>}/>
        </Route>
        <Route path="*" element={<div>Pagina não encontrada</div>}/>
      </Routes>
      <Rodape/>
    </BrowserRouter>
  );
}

export default AppRoutes;
