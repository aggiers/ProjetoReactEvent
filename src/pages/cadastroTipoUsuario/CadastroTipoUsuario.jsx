import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import imgdois from "../../assets/img/banner_usuario.png"

const CadastroTipoUsuario = () => {
    return(
        <>
        <Header
            visibilBotao="none"
            adm="Administrador"
        />
        <main>
            <Cadastro
                tituloCadastro="Cadastro Tipo de Usuário"
                namePlace="Título"
                visibilidade="none"
                
                img = {imgdois}
                
                />
            <Lista
                titulo="Lista tipo de Usuário"
                tituloEvento="Título"
                tabelaNome="Tipo Usuário"
                visibilEvento="none"
            />
        </main>
        <Footer/>
        </>
    )
}

export default CadastroTipoUsuario;