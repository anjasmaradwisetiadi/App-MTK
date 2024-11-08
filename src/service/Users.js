// ********** make example service when it can example code used
import instanceAxios from "../utilize/InitializeAxios";
import { 
    usersListReducer,
    userListFilterReducer,
    createUsersResponseReducer,
    getDetailUsersResponseReducer,
    updateUsersResponseReducer,
    deleteUsersResponseReducer,
    loadingReducer,
    loadingFormReducer
} from "../store/Users/Users";
import { errorHandle } from "../utilize/ErrorHandle";

export const getListUsersService = (payload) =>{
    return async (dispatch) =>{
        dispatch(loadingReducer(true))
        await instanceAxios.get(`users?${payload.concatFilterParams}`)
        .then((response)=>{
            dispatch(usersListReducer(response?.data))
            dispatch(loadingReducer(false))
        })
        .catch((error)=>{
            errorHandle.errorMessage()
            dispatch(loadingReducer(false))
        })
    }
}


export const createUsersService = (payload) =>{
    return async (dispatch) =>{
        dispatch(loadingReducer(true))
        await instanceAxios.post('users',
            payload
        )
        .then((response)=>{
            const payload = {
                status: true,
                message: 'create'
            }
            dispatch(createUsersResponseReducer(payload ))
            dispatch(loadingReducer(false))
        })
        .catch((error)=>{
            console.log("error message = ");
            console.log(error)
            errorHandle.errorMessage()
            dispatch(loadingReducer(false))
        })
    }
}

export const getDetailUsersService = (id) =>{
    return async (dispatch) =>{
        dispatch(loadingFormReducer(true))
        await instanceAxios.get(`users/${id}`)
        .then((response)=>{
            dispatch(getDetailUsersResponseReducer(response?.data?.data))
            dispatch(loadingFormReducer(false))
        })
        .catch((error)=>{
            console.log("error message = ");
            console.log(error)
            errorHandle.errorMessage()
            dispatch(loadingFormReducer(false))
        })
    }
}

export const updateUsersService  = (id, payload) =>{
    return async (dispatch) =>{
        dispatch(loadingFormReducer(true))
        await instanceAxios.patch(`users/${id}`, 
            payload
        )
        .then((response)=>{
            dispatch(loadingFormReducer(false))
            const payload = {
                status: true,
                message: 'update'
            }
            dispatch(updateUsersResponseReducer(payload))
        })
        .catch((error)=>{
            console.log("error message = ");
            console.log(error)
            errorHandle.errorMessage()
            dispatch(loadingFormReducer(false))
        })
    }
}

export const deleteUsersService  = (id) =>{
    return async (dispatch) =>{
        dispatch(loadingReducer(true))
        await instanceAxios.delete(`users/${id}` 
        )
        .then((response)=>{
            const payload = {
                status: true,
                message: 'delete'
            }
            dispatch(deleteUsersResponseReducer(payload))
            dispatch(loadingReducer(false))
        })
        .catch((error)=>{
            console.log("error message = ");
            console.log(error)
            errorHandle.errorMessage()
            dispatch(loadingReducer(false))
        })
    }
}

export const filterUserService = (payload, paramsFilter) => {
    return async (dispatch) =>{
        dispatch(loadingReducer(true))
        await instanceAxios.get(`users?${payload.concatFilterParams}`)
        .then((response)=>{
            const payloadReducer = {
                data: response?.data,
                params_filter: paramsFilter
            }
            dispatch(userListFilterReducer(payloadReducer))
        })
        .catch((error)=>{
            errorHandle.errorMessage()
            dispatch(loadingReducer(false))
        })
    }
}