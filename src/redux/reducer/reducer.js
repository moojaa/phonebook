import { type } from "@testing-library/user-event/dist/type";

let initialState = {
    contactList:[],
    searchIndex:""
}

function reducer(state=initialState,action){
    const {type,payload}=action
    switch(type){
        case "ADD_CONTACT":
        return{...state,contactList:[...state.contactList,{name:payload.name,phoneNumber:payload.phoneNumber}]}
        case "SEARCH_ON":
            return{...state,searchIndex:payload.searchIndex}
    default:
        return{...state}}
    
}

export default reducer;