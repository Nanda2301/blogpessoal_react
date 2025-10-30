import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import FormPostagem from '../formpostagem/FormPostagem';

function ModalPostagem() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='rounded-full text-violet-950 bg-teal-400 
                                 hover:bg-teal-500 transition-colors duration-300 
                                   font-bold text-xl px-8 py-3 shadow-lg shadow-teal-400/50'>
                        Nova Postagem
                    </button>
                }
                modal
                contentStyle={{
                    borderRadius: '1rem',
                    paddingBottom: '2rem'
                }}
            >
                <FormPostagem />
            </Popup>
        </>
    );
}

export default ModalPostagem;