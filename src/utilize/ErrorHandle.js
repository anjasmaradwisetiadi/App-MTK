import Swal from "sweetalert2"

export const errorHandle = {
  errorMessage(text = 'Something wrong please contact your admin'){
    Swal.fire({
      title: "Something Wrong",
      text: text,
      icon: "error",
    })
  },

}

