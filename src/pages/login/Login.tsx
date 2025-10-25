import { Link } from "react-router-dom";

function Login() {

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold bg-indigo-950 text-white">
                <form className="flex justify-center items-center flex-col w-1/2 gap-4" >
                    <h2 className="text-fuchsia-400 text-5xl ">Entrar</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuario"
                            className="border-2 border-indigo-900 rounded p-2 bg-indigo-900 placeholder:text-gray-400"

                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="border-2 border-indigo-900 rounded p-2 bg-indigo-900 placeholder:text-gray-400"

                        />
                    </div>
                    <button 
                        type='submit' 
                        className="rounded bg-teal-400 flex justify-center
                                 hover:bg-teal-500 text-indigo-950 w-1/2 py-2">
                        <span>Entrar</span>
                    </button>

                    <hr className="border-indigo-900 w-full" />

                   <p>
                        Ainda não tem uma conta?{' '}
                        <Link to="/cadastro" className="text-fuchsia-400 hover:underline">
                            Cadastre-se
                        </Link>
                    </p>
                </form>
                   <div className="bg-[url('https://i.imgur.com/ZZFAmzo.jpg')] lg:block hidden bg-no-repeat 
                                w-full min-h-screen bg-cover bg-center"
                ></div>
            </div>
        </>
    );
}

export default Login;