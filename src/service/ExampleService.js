// ********** make example service when it can example code used
import instanceAxios from "utilize/instanceAxios";

export const getListExampleService = () =>{
    return async (dispatch) =>{
        await instanceAxios.get('')
        .then((response)=>{
            console.log("response = ");
            console.log(response)
        })
        .catch((error)=>{
            console.log("error message = ");
            console.log(error)
        })
    }
}

export const createExampleService = (payload) =>{
    return async (dispatch) =>{
        await instanceAxios.post('',
            payload
        )
        .then((response)=>{
            console.log("response = ");
            console.log(response)
        })
        .catch((error)=>{
            console.log("error message = ");
            console.log(error)
        })
    }
}

export const getDetailExampleService = (id) =>{
    return async (dispatch) =>{
        await instanceAxios.get(`${id}`,)
        .then((response)=>{
            console.log("response = ");
            console.log(response)
        })
        .catch((error)=>{
            console.log("error message = ");
            console.log(error)
        })
    }
}

export const updateExampleService  = (id, payload) =>{
    return async (dispatch) =>{
        await instanceAxios.patch(`${id}`, 
            payload
        )
        .then((response)=>{
            console.log("response = ");
            console.log(response)
        })
        .catch((error)=>{
            console.log("error message = ");
            console.log(error)
        })
    }
}

export const deleteExampleService  = (id) =>{
    return async (dispatch) =>{
        await instanceAxios.delete(`${id}` 
        )
        .then((response)=>{
            console.log("response = ");
            console.log(response)
        })
        .catch((error)=>{
            console.log("error message = ");
            console.log(error)
        })
    }
}
