import { toast } from 'react-toastify';

const errToast = (msg : string)=>{
    toast.error(msg, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,

    });
}

export default errToast;