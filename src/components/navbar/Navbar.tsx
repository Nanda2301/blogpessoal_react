import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
                            bg-indigo-950 text-white'>
            
                <div className="container flex justify-between text-lg mx-8">
                    <Link to='/home' className="text-2xl font-bold text-fuchsia-400">Blog Pessoal</Link>

                    <div className='flex gap-4'>
                        <Link to='/postagens' className="hover:text-teal-400">Postagens</Link>
                        <Link to='/temas' className="hover:text-teal-400">Temas</Link>
                        <Link to='/cadastrotema' className="hover:text-teal-400">Cadastrar tema</Link>
                        <Link to='/perfil' className="hover:text-teal-400">Perfil</Link>
                        <Link to='/login' className="hover:text-teal-400">Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar