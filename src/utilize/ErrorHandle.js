import axios from "axios"
import Swal from "sweetalert2"
import instanceAxios from "./instanceAxios"

export const errorHandle = {
  errorMessage(text = 'Something wrong please contact your admin'){
    Swal.fire({
      title: "Something Wrong",
      text: text,
      icon: "error",
    })
  },

}

