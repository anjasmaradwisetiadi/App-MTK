import Swal from "sweetalert2"

export const successHandle = {
    successSwalData(text = "create"){
        let textPrint  = ''
        if(text === 'create'){
            textPrint = 'Successfull create data'
        } else if(text === 'edit'){
            textPrint = 'Successfull edit data'
        } else {
            textPrint = 'Successfull delete data'
        }
        Swal.fire({
          title: "Success",
          text: textPrint,
          icon: "success",
          confirmButtonColor:"#1874e7",
        })
    },

    successSwalInform(text= 'Success'){
        Swal.fire({
            title: "Success",
            text: text,
            icon: "success",
            confirmButtonColor:"#1874e7",
          })
    }
}