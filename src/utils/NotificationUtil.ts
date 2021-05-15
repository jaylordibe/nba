import {toast} from 'react-toastify';

export default class NotificationUtil {

    static success(message: string): void {
        toast(message, {
            type: toast.TYPE.SUCCESS,
            hideProgressBar: true,
            pauseOnHover: true
        });
    }

    static error(message: string): void {
        toast(message, {
            type: toast.TYPE.ERROR,
            hideProgressBar: true,
            pauseOnHover: true
        });
    }

    static default(): void {
        const message = 'You are unable to connect to our server at the moment. Please check your internet connection and try again.';
        toast(message, {
            type: toast.TYPE.ERROR,
            hideProgressBar: true,
            pauseOnHover: true
        });
    }
}
