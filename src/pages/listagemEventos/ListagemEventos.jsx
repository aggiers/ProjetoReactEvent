import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./ListagemEventos.css"
import Comentario from "../../assets/img/coment.png"
import ParticiparSim from "../../assets/img/participar-sim.png"
import ParticiparNao from "../../assets/img/participar-nao.png"
import Toggle from "../../components/toggle/Toggle";



const ListagemEventos = () => {
    return (
        <>
            <Header nomeUsu="Aluno" 
                visibilBotao="none"
                admHeader="Administrador"
            />
            <section className="listagem_evento">
                <h1>Eventos</h1>
                <hr />
                <div className="tabela_evento">
                    <select name="Todos os Eventos" id="" className="select_evento">
                        <option value="" disabled selected>Todos os Eventos</option>
                        <option value="">op 1</option>
                        <option value="">op 2</option>
                        <option value=""> op 3</option>
                    </select>
                    <thead>
                        <tr className="table_evento">
                            <th>Titulo</th>
                            <th>Tipo Evento</th>
                            <th>Comentários</th>
                            <th>Participar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="item_evento">
                            <td data-cell="Nome" >Nome Evento</td>
                            <td data-cell="Evento">Tipo Evento</td>
                            <td data-cell="Comentar"><img src={Comentario} alt="Imagem de um comentario" /></td>
                            <td data-cell="Botao"><Toggle /></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="item_evento">
                            <td data-cell="Nome" >Nome Evento</td>
                            <td data-cell="Evento">Tipo Evento</td>
                            <td data-cell="Comentar"><img src={Comentario} alt="Imagem de um comentario" /></td>
                            <td data-cell="Botao"><Toggle /></td>
                        </tr>
                    </tbody>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ListagemEventos;