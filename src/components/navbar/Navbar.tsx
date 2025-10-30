import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {

    const navigate = useNavigate();

    const { handleLogout } = useContext(AuthContext)

    function logout() {

        handleLogout()
        alert('O Usuário foi desconectado com sucesso!')
        navigate('/')
    }

    return (
        <>
            {/* Fundo Roxo Escuro/Vibrante com borda inferior sutil */}
            <div className='w-full flex justify-center py-4 bg-violet-950 text-white border-b border-teal-400'>
                
                <div className="container flex justify-between text-lg mx-8 items-center">
                    {/* Logotipo/Título com Magenta Neon e Fonte Mais Estilosa */}
                    <Link to='/home' className="text-3xl font-extrabold tracking-wider text-fuchsia-400 hover:text-teal-400 transition-colors duration-300">
                        Blog Pessoal
                    </Link>

                    <div className='flex gap-6 font-medium'>
                        {/* Links com o Verde-Água como cor de hover principal */}
                        <Link to='/postagens' className="hover:text-teal-400 transition-colors duration-300">Postagens</Link>
                        <Link to='/temas' className="hover:text-teal-400 transition-colors duration-300">Temas</Link>
                        <Link to='/cadastrartema' className="hover:text-teal-400 transition-colors duration-300">Cadastrar tema</Link>
                        <Link to='/perfil' className="hover:text-teal-400 transition-colors duration-300">Perfil</Link>
                        <Link to='' onClick={logout} className="hover:text-red-500 transition-colors duration-300">Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar