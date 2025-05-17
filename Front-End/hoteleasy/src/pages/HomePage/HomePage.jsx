import Header from "../../layout/Header.jsx"
import { useEffect } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';


export default function HomePage() {
    const navegate = useNavigate();
    const { state } = useLocation();

    const functionToast = () => {
        toast.success('Usuario logado com sucesso!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
    }

    useEffect(() => {
        if (state?.executarFuncao) {
            functionToast();
            navegate('.', { replace: true, state: {} });
        }
    }, [state]);

    return (
        <div>
            <Header />
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Bounce}
            />
        </div>
    )
}