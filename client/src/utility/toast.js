import { toast } from 'react-toastify';

// Create toast
export const createToast = (msg) => {
    toast.error(msg);
}