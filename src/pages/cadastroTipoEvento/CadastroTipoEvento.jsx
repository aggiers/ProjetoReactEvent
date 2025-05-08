import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import imgum from "../../assets/img/banner_cadastro.png"

const CadastroTipoEvento = () => {
    return(
        <>
        <Header
            visibilBotao="none"
            adm="Administrador"
        />
        <main>
            <Cadastro
                tituloCadastro="Cadastro Tipo de Eventos"
                namePlace="Título"
                visibilidade="none"
                
                img = {imgum}
                
                />
            
            <Lista
                titulo="Lista tipo de eventos"
                tituloEvento="Título"
                tdnome="Tipo Evento"
                visibilEvento="none"
            />

        </main>
        <Footer/>
        </>
    )
}

export default CadastroTipoEvento;