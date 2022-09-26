import {initialState} from './context'
export const appReducer = (state = initialState, { type,payload }) => {
    switch(type){
        case "ADD":
            return  {...state, transactions: [...state.transactions, payload]}
        case "REMOVE":
            return {...state, transactions: state.transactions.filter((obj)=> obj.id !== payload)}

        default: 
            return state   
    }
}
