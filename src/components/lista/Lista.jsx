import "./Lista.css"
import Editar from "../../assets/img/penEditar.png"
import Excluir from "../../assets/img/lixeiraExcluir.png"

const Lista = (props) => {
    return(
        <section className="listagem">
            <h1>{props.titulo}</h1>
            <hr />

            <div className="tabela">
                <thead>
                    <tr className="table_cabecalho">
                        <th>{props.tituloEvento}</th>
                        <th style = {{display:props.visibilEvento}}>Tipo Evento</th>
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="item_lista">
                        <td data-cell="Nome" >{props.tdnome}</td>
                        <td data-cell="Evento" style = {{display:props.visibilEvento}}>Titulo Evento</td>
                        <td data-cell="Editar"><img src={Editar} alt="Imagem de uma caneta" /></td>
                        <td data-cell="Excluir"><img src={Excluir} alt="Lixeira" /></td>
                    </tr>
                </tbody>
            </div>
        </section>
    )
}

export default Lista;