import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./pages/app";
import Contato from "./pages/contato";
import NotFound from './pages/notFound';
import Eventos from "./pages/eventos";

export default function Navegecao() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/eventos" element= { <Eventos/> } />
        <Route path="*" element = { <NotFound/> }/>
      </Routes>
    </BrowserRouter>
  );

}
