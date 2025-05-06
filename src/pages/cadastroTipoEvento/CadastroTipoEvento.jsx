import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import imgum from "../../assets/img/banner_cadastro.png"

const CadastroTipoEvento = () => {
    return(
        <>
        <Header/>
        <main>
            <Cadastro
                tituloCadastro="Cadastro Tipo de Eventos"
                namePlace="Título"

                img = {imgum}
             
            />
            
            <Lista
                tituloLista="Lista tipo de eventos"
            />

        </main>
        <Footer/>
        </>
    )
}

export default CadastroTipoEvento;