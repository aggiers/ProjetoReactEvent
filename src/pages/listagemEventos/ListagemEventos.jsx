import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./ListagemEventos.css";
import Comentario from "../../assets/img/coment.png";
import ParticiparSim from "../../assets/img/participar-sim.png";
import ParticiparNao from "../../assets/img/participar-nao.png";

const ListagemEventos = () => {
    return(
        <>
            <Header
              visibilBotao="none"  
              adm="Aluno"
            />
            <main>
                <section className="layout_grid listagem_eventos">
                    <h1>Eventos</h1>
                    <hr/>

                    <div className="campo_cad_eventos">
                            <label htmlFor="tipo evento"></label>
                            <select name="tipo evento" id="">
                                <option value=""disabled selected>Todos os eventos</option>
                                <option value="">op 1</option>
                                <option value="">op 2</option>
                                <option value="">op 3</option>
                            </select>
                        </div>

                <div className="tabela_listagem">
                    <thead>
                        <tr className="table_cabecalho_eventos">
                            <th>Título</th>
                            <th>Tipo Evento</th>
                            <th>Comentários</th>
                            <th>Participar</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr className="item_listagem">
                        <td data-cell="Titulo" >Nome Evento</td>
                        <td data-cell="Tipo Evento">Titulo Evento</td>
                        <td data-cell="Comentários"><img src={Comentario} alt="Comentario" /></td>
                        <td data-cell="Excluir"><img src={ParticiparNao} alt="Lixeira" /></td>
                    </tr>
                </tbody>
                </div>









                </section>

            </main>
            <Footer/>
        </>
    )
}

export default ListagemEventos;