import axios from "axios";
import {
    FORM_FIELD_REQUEST,
    FORM_FIELD_SUCCESS,
    FORM_FIELD_FAILURE,
    CLEAR_ERRORS,
} from "../constants/formConstants";


export const getformField = ()=>async (dispatch)=>{
    try{
        dispatch({type:FORM_FIELD_REQUEST});
        let link=`/build`;
        const {data} = await axios.get(link);
        dispatch({
            type:FORM_FIELD_SUCCESS,
            payload: data,
        })
    }catch(error){
        dispatch({
            type: FORM_FIELD_FAILURE,
            payload:error.response.data.message,
        })
    }
};

//clearing errors
export const clearErrors = ()=>async (dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS,
    })
}