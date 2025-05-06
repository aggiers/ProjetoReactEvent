import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import imgdois from "../../assets/img/banner_usuario.png"

const CadastroTipoUsuario = () => {
    return(
        <>
        <Header/>
        <main>
            <Cadastro
                tituloCadastro="Cadastro Tipo de Usuário"
                namePlace="Título"

                img = {imgdois}

            />
            <Lista
                tituloLista="Lista tipo de Usuário"
            />
        </main>
        <Footer/>
        </>
    )
}

export default CadastroTipoUsuario;