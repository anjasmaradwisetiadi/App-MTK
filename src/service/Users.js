// ********** make example service when it can example code used
import instanceAxios from "utilize/instanceAxios";

export const getListUsersService = (payload) =>{
    return async (dispatch) =>{
        await instanceAxios.get(`users?${payload?.concatFilterParams}`)
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

export const createUsersService = (payload) =>{
    return async (dispatch) =>{
        await instanceAxios.post('users',
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

export const getDetailUsersService = (id) =>{
    return async (dispatch) =>{
        await instanceAxios.get(`users/${id}`,)
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

export const updateUsersService  = (id, payload) =>{
    return async (dispatch) =>{
        await instanceAxios.patch(`users/${id}`, 
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

export const deleteUsersService  = (id) =>{
    return async (dispatch) =>{
        await instanceAxios.delete(`users/${id}` 
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
