import Header from "../../components/header/Header";
import bannerHome from "../../assets/img/banner_home.png"
import "./HomeEvent.css";


const HomeEvent = () => {
    return(
         <>
            <Header
                visibilHeader="none"
            />
            <main className="main_home">
                <section id="banner">
                    <div class="layout-grid banner-flex">
                        <img src={bannerHome} height="680"/>
                    </div>
                </section>

                <section className="layout_grid proximos_eventos">
                    <div className="eventos_flex">
                        <div className="titulo_eventos">
                            <h1>Próximos eventos</h1>
                            <hr/>
                        </div>

                    <div className="caixas">
                        <div className="caixinhas">
                            <p>Título do evento</p>
                            <p2>Breve descrição do evento, pode ser um paragrafo pequeno</p2>
                            <p3>Conectar</p3>
                        </div>
                        <div className="caixinhas">
                            <p>Título do evento</p>
                            <p2>Breve descrição do evento, pode ser um paragrafo pequeno</p2>
                            <p3>Conectar</p3>
                        </div>
                        <div className="caixinhas">
                            <p>Título do evento</p>
                            <p2>Breve descrição do evento, pode ser um paragrafo pequeno</p2>
                            <p3>Conectar</p3>
                        </div>
                        <div className="caixinhas">
                            <p>Título do evento</p>
                            <p2>Breve descrição do evento, pode ser um paragrafo pequeno</p2>
                            <p3>Conectar</p3>
                        </div>
                    </div>          
                    </div>
                </section>

                <section className="banner_2">
                    <div className="banner_flex2">
                        <div className="retas">
                            <article className="reta"></article>
                            <article className="reta2"></article>
                        </div>
                        <div className="banner_info">
                            <h1>Visão</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>

                    </div>
                </section>
            </main>

        </>
    )
}

export default HomeEvent;