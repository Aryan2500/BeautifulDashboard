import { toast } from 'react-toastify';

const okToast = (msg : string)=>{
    toast.success(msg, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,

    });
}

export default okToast;