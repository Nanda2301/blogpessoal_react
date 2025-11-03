import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { useContext, type ReactNode } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Footer() {
  const data = new Date().getFullYear();
  const { usuario } = useContext(AuthContext);

  let component: ReactNode = null;

  if (usuario.token !== "") {
    component = (
      // Fundo Roxo mais Escuro que o Navbar, harmonizando com o fundo principal
      <div className="flex justify-center bg-violet-900 text-white">
        <div className="container flex flex-col items-center py-6">
          <p className="text-xl font-semibold mb-2">
            Blog Pessoal Generation | Copyright: {data}
          </p>
          <p className="text-lg mb-4 opacity-80">
            Acesse minhas redes sociais
          </p>

          {/* Ícones de redes sociais em Verde-Água/Ciano */}
          <div className="flex gap-4 text-teal-400">
            <a
              href="https://www.linkedin.com/in/fernandabritodev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogo
                size={36}
                weight="fill"
                className="hover:text-teal-300 transition-colors duration-300"
              />
            </a>
            <a
              href="https://www.instagram.com/seu_usuario"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogo
                size={36}
                weight="fill"
                className="hover:text-teal-300 transition-colors duration-300"
              />
            </a>
            <a
              href="https://www.facebook.com/seu_usuario"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookLogo
                size={36}
                weight="fill"
                className="hover:text-teal-300 transition-colors duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return <>{component}</>;
}

export default Footer;
