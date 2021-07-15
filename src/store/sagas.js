import { takeLatest, put, call } from 'redux-saga/effects'
import api from "../services/api"


function* asyncOpen(){
    
    yield put({ type: 'OPEN',  payload: true})

}

function* getPokemonCreate(){
    const id = Math.floor(Math.random() * 807) + 1;
    try {
        const response = yield call(api.get, `pokemon/${id}`)
        yield put({ type: 'REQUEST_POKEMON',  payload: response.data})
        yield asyncOpen()

    }catch(err){

    }
}


export default function* root(){
    yield takeLatest('ASYNC_OPEN', asyncOpen);
    yield takeLatest('ASYNC_REQUEST_POKEMON', getPokemonCreate)
} 