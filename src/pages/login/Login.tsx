import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../contexts/AuthContext";
import type UsuarioLogin from "../../models/UsuarioLogin";

function Login() {

    const navigate = useNavigate();

    const { usuario, handleLogin, isLoading } = useContext(AuthContext)

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    )

    useEffect(() => {
        if (usuario.token !== "") {
            navigate('/home')
        }
    }, [usuario])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    function login(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(usuarioLogin)
    }

    return (
        <>
            {/* Fundo Roxo Escuro/Vibrante cobrindo toda a tela */}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen place-items-center font-bold bg-violet-950 text-white">
                
                {/* Lado do Formulário */}
                <div className="flex justify-center items-center h-full w-full p-8 lg:p-0">
                    <form className="flex justify-center items-center flex-col w-4/5 lg:w-3/5 gap-6 p-10 rounded-xl bg-violet-900 shadow-2xl shadow-violet-950/50" 
                        onSubmit={login}>
                        
                        {/* Título em Magenta Neon */}
                        <h2 className="text-fuchsia-400 text-5xl font-extrabold mb-4 tracking-tight">Entrar</h2>
                        
                        <div className="flex flex-col w-full">
                            <label htmlFor="usuario" className="text-lg font-medium mb-1">Usuário</label>
                            <input
                                type="text"
                                id="usuario"
                                name="usuario"
                                placeholder="Seu usuário"
                                className="rounded-lg p-3 bg-violet-950/70 border border-violet-700 placeholder:text-gray-400 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all"
                                value={usuarioLogin.usuario}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="senha" className="text-lg font-medium mb-1">Senha</label>
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                placeholder="Sua senha"
                                className="rounded-lg p-3 bg-violet-950/70 border border-violet-700 placeholder:text-gray-400 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all"
                                value={usuarioLogin.senha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                        </div>
                        
                        {/* Botão de Ação Principal em Verde-Água/Ciano */}
                        <button 
                            type='submit' 
                            className="rounded-lg bg-teal-400 flex justify-center mt-4
                                        hover:bg-teal-500 text-violet-950 font-bold text-xl w-full py-3 
                                        shadow-lg shadow-teal-400/50 transition-all duration-300">
                            { isLoading ?
                                <ClipLoader
                                    color="#ffffff"
                                    size={24}
                                /> :
                                <span>Entrar</span>
                            }
                        </button>

                        <hr className="border-violet-700 w-full mt-4" />

                        {/* Link de Cadastro em Magenta Neon */}
                        <p className="text-base mt-2">
                            Ainda não tem uma conta?{' '}
                            <Link to="/cadastro" className="text-fuchsia-400 hover:text-fuchsia-300 hover:underline font-bold transition-colors">
                                Cadastre-se
                            </Link>
                        </p>
                    </form>
                </div>
                
                {/* Lado da Imagem (Manteve-se o estilo original, mas com a imagem criativa em mente) */}
                <div className="lg:block hidden h-full w-full">
                    {/* Se você quiser usar a imagem de fundo criativa: */}
                    <div 
                        className="bg-[url('https://i.imgur.com/6XRZ8HM.png')] lg:block hidden bg-no-repeat 
                                   w-full min-h-screen bg-cover bg-center"
                    >
                        {/* Você pode adicionar um overlay semi-transparente aqui para o "Wow" */}
                        <div className="w-full h-full bg-violet-950/40 backdrop-blur-sm"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;