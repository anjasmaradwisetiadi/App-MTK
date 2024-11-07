import { utilize } from "../utilize";
import instanceAxios from "../utilize/InitializeAxios";
import Swal from "sweetalert2";

export const signInService = async (payload) =>{
        //********* for state reset file */
        try {
            const response = await instanceAxios.post('login', payload);

            const payloadLocalStorage = {
                email: payload.email,
                password: payload.password,
                token: response.data.token
            }
            const dataResponse = JSON.stringify(payloadLocalStorage)
            localStorage.setItem('user', dataResponse);
            return { success: true, data: response }; // Kembalikan status success
          } catch (error) {
            return { success: false, error:error }; // Kembalikan status failure jika ada error
          }
}

export const registerService = async (payload) =>{
    //********* for state reset file */  
    try {
        const response = await instanceAxios.post('register', payload);
        return { success: true, data: response }; // Kembalikan status success
      } catch (error) {
        return { success: false, error:error }; // Kembalikan status failure jika ada error
    }
}

export const signOutService = async (payload) => {
    try {
        const response = await instanceAxios.post('auth/logout', payload)
        return { success: true, data: response }; // Kembalikan status success
      } catch (error) {
        return { success: false, error:error }; // Kembalikan status failure jika ada error
    }
}