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

    await instanceAxios.post('register', payload)
    .then((response)=>{
        const dataResponse = JSON.stringify(response.data)
        localStorage.setItem('user', dataResponse);

        Swal.fire({
          title: "Successfull Register ",
          text: "You will redirect to Register",
          icon: "success",
          confirmButtonText: "Go To Register",
          confirmButtonColor:"#1874e7",
        }).then((result) => {
          if (result.isConfirmed) {
            location.reload('/')
          }
        });
    })
    .catch((error)=>{
        console.log("error?.response? = ")
        console.log(error?.response)
        
        // Swal.fire({
        //   title: "Something Wrong",
        //   text: error?.response?.data?.message,
        //   icon: "error",
        // })
        errorHandle.errorMessage()
    })
}