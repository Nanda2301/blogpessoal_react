import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";

function Cadastro() {

const navigate = useNavigate()
  
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const[confirmarSenha, setConfirmarSenha] = useState<string>('')

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
  })
  
  useEffect(() => {
    if (usuario.id !== 0){
      retornar()
    }
  }, [usuario])

  function retornar(){
    navigate('/')
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })

  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>){
    setConfirmarSenha(e.target.value)
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>){
    e.preventDefault()

    if(confirmarSenha === usuario.senha && usuario.senha.length >= 8){

      setIsLoading(true)

      try{
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario)
        alert('Usuário cadastrado com sucesso!')
      }catch(error){
        alert('Erro ao cadastrar o usuário!')
      }
    }else{
      alert('Dados do usuário inconsistentes! Verifique as informações do cadastro.')
      setUsuario({...usuario, senha: ''})
      setConfirmarSenha('')
    }

    setIsLoading(false)
  }

  return (
    <>
      {/* Fundo Roxo Escuro/Vibrante cobrindo toda a tela */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen 
            place-items-center font-bold bg-violet-950 text-white">
        
        {/* Lado da Imagem (Mantido como na Login, mas na ordem inversa) */}
        <div className="lg:block hidden h-full w-full">
            <div 
                className="bg-no-repeat w-full h-full bg-cover bg-center" 
                style={{ backgroundImage: `url(${'https://i.imgur.com/ZZFAmzo.jpg'})` }} 
            >
                {/* Overlay sutil para harmonizar com a cor principal */}
                <div className="w-full h-full bg-violet-950/40 backdrop-blur-sm"></div>
            </div>
        </div>

        {/* Lado do Formulário */}
        <div className="flex justify-center items-center h-full w-full p-8 lg:p-0">
            <form className='flex justify-center items-center flex-col w-4/5 lg:w-3/5 gap-4 p-10 rounded-xl bg-violet-900 shadow-2xl shadow-violet-950/50' 
                  onSubmit={cadastrarNovoUsuario}>
                
                {/* Título em Magenta Neon */}
                <h2 className='text-fuchsia-400 text-5xl font-extrabold mb-4 tracking-tight'>Cadastre-se</h2>
                
                {/* Campos de Input estilizados */}
                <div className="flex flex-col w-full">
                    <label htmlFor="nome" className="text-lg font-medium mb-1">Nome</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Nome Completo"
                        className="rounded-lg p-3 bg-violet-950/70 border border-violet-700 placeholder:text-gray-400 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all"
                        value={usuario.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="usuario" className="text-lg font-medium mb-1">Usuário</label>
                    <input
                        type="text"
                        id="usuario"
                        name="usuario"
                        placeholder="Nome de Usuário"
                        className="rounded-lg p-3 bg-violet-950/70 border border-violet-700 placeholder:text-gray-400 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all"
                        value={usuario.usuario}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="foto" className="text-lg font-medium mb-1">Link da Foto</label>
                    <input
                        type="text"
                        id="foto"
                        name="foto"
                        placeholder="URL da sua foto de perfil"
                        className="rounded-lg p-3 bg-violet-950/70 border border-violet-700 placeholder:text-gray-400 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all"
                        value={usuario.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="senha" className="text-lg font-medium mb-1">Senha</label>
                    <input
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="Sua Senha"
                        className="rounded-lg p-3 bg-violet-950/70 border border-violet-700 placeholder:text-gray-400 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all"
                        value={usuario.senha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="confirmarSenha" className="text-lg font-medium mb-1">Confirmar Senha</label>
                    <input
                        type="password"
                        id="confirmarSenha"
                        name="confirmarSenha"
                        placeholder="Confirme sua Senha"
                        className="rounded-lg p-3 bg-violet-950/70 border border-violet-700 placeholder:text-gray-400 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all"
                        value={confirmarSenha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
                    />
                </div>
                
                {/* Botões de Ação */}
                <div className="flex justify-around w-full gap-8 mt-4">
                    <button 
                        type='reset'
                        className='rounded-lg text-white bg-red-600 hover:bg-red-700 w-1/2 py-3 font-bold transition-colors'
                        onClick={retornar}
                        >
                        Cancelar
                    </button>
                    <button 
                        type='submit'
                        // Botão de Cadastrar com o Verde-Água/Ciano
                        className='rounded-lg text-violet-950 bg-teal-400 
                                hover:bg-teal-500 w-1/2 py-3 font-bold
                                shadow-lg shadow-teal-400/50 transition-all duration-300' 
                        >
                        { isLoading ?
                          <ClipLoader
                            color="#ffffff"
                            size={24}
                          /> :
                          <span>Cadastrar</span>
                        }
                    </button>
                </div>
            </form>
        </div>
      </div>
    </>
  )
}

export default Cadastro