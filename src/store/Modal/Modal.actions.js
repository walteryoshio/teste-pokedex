export function open(){
    return {
        type: 'ASYNC_OPEN',
        payload: true
    }
}

export function close (){
    return {
        type: 'CLOSE',
        payload: false
    }
}