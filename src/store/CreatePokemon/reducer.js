export default function(state = {}, action){
    switch(action.type){
        case 'REQUEST_POKEMON':
            return action.payload
      
    
        default:
            return state
    }
}