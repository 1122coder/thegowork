import * as types from './types'

const intitial_state = {
    theme:'dark',
    loading:true
}


export const generalReducer = (state = intitial_state, action)=>{
    switch(action.type){
        case types.CHANGE_THEME:
            if (state.theme === 'dark'){
                return {...state,theme:'light'}
            }
            else return {...state,theme:'dark'}
        case types.LOADING_TRUE:
            return {...state, loading:true}
        case types.LOADING_FALSE:
            return {...state, loading:false}
        default:
            return state;
    }
}