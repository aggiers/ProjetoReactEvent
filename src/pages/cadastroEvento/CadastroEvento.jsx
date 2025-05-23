import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import imgum from "../../assets/img/banner_cad_evento.png"

const CadastroEvento = () => {
    return(
        <>
        <Header
            visibilBotao = "none"
            admHeader = "Administrador"
        />
        <main>
            <Cadastro
                tituloCadastro = "Cadastro de Eventos"
                botaoNome = "Nome"
                
                img = {imgum}
                
                />
            
            <Lista
                titulo = "Lista de eventos"
                tituloEvento = "Nome"
                tabelaNome = "Nome Evento"
            />

        </main>
        <Footer/>
        </>
    )
}

export default CadastroEvento;