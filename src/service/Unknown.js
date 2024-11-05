// ********** make example service when it can example code used
import instanceAxios from "utilize/instanceAxios";

export const getListUnknownService = (payload) =>{
    return async (dispatch) =>{
        await instanceAxios.get(`unknown?${payload?.concatFilterParams}`)
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

export const createUnknownService = (payload) =>{
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

export const getDetailUnknownService = (id) =>{
    return async (dispatch) =>{
        await instanceAxios.get(`unknown/${id}`,)
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


export const updateUnknownService  = (id, payload) =>{
    return async (dispatch) =>{
        await instanceAxios.patch(`unknown/${id}`, 
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

export const deleteUnknownService  = (id) =>{
    return async (dispatch) =>{
        await instanceAxios.delete(`unknown/${id}` 
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


