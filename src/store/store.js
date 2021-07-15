import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas'

import modalReducer from "./Modal/Modal.reducer";
import createPokemonReducer from "./CreatePokemon/reducer"

const rootReducer = combineReducers({
    modal: modalReducer,
    createPokemon: createPokemonReducer
})

const sagaMiddleware = createSagaMiddleware();
 
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store