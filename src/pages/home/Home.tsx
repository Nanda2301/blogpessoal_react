import ListaPostagens from "../../components/postagem/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem"

function Home() {
    return (
        <>
            {/* Fundo Roxo Escuro/Vibrante cobrindo toda a tela */}
            <div className="bg-violet-950 min-h-[90vh] flex justify-center py-16">
                <div className='container grid grid-cols-2 text-white items-center gap-12'>
                    {/* Conteúdo de Texto e Botão */}
                    <div className="flex flex-col gap-6 items-start justify-center p-8">
                        {/* Título principal em Magenta Neon com fonte extragrande */}
                        <h2 className='text-7xl font-extrabold tracking-tighter text-fuchsia-400 leading-tight'>
                            Seja Bem Vindo!
                        </h2>
                        {/* Subtítulo em fonte grande e elegante */}
                        <p className='text-2xl font-light opacity-85'>
                            Expresse aqui seus pensamentos e opiniões.
                        </p>

                        <div className="flex justify-around gap-4">

                            <ModalPostagem />
                            
                        </div>
                    </div>

                    {/* Imagem Reposicionada e com Estilo */}
                    <div className="flex justify-center p-8">
                        <img
                            src="https://i.imgur.com/gaEzoH4.png"
                            alt="Imagem Página Home"
                            // Estilo para dar um toque criativo: sombra neon e tamanho grande
                            className='w-full max-w-lg h-auto object-contain 
                                        drop-shadow-[0_0_20px_rgba(75,223,195,0.7)]'
                        />
                    </div>
                </div>
            </div>
             <ListaPostagens />
        </>
    )
}

export default Home