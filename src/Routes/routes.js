import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import CadastroTipoEvento from "../pages/cadastroTipoEvento/CadastroTipoEvento";
import CadastroTipoUsuario from "../pages/cadastroTipoUsuario/CadastroTipoUsuario";
import CadastroEvento from "../pages/cadastroEvento/CadastroEvento";
import HomeEvent from "../pages/homeEvent/HomeEvent";
import ListagemEventos from "../pages/listagemEventos/ListagemEventos";

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/TipoEvento" element={<CadastroTipoEvento/>}/>
                <Route path="/TipoUsuario" element={<CadastroTipoUsuario/>}/>
                <Route path="/Evento" element={<CadastroEvento/>}/>
                <Route path="/Home" element={<HomeEvent/>}/>
                <Route path="/Listagem" element={<ListagemEventos/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;