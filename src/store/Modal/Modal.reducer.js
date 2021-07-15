export default function(state = false, action){
    switch(action.type){
        case 'OPEN':
            return action.payload
        
        case 'CLOSE':
            return action.payload

        default:
            return state
    }
}