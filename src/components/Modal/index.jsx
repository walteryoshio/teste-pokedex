import React, {useEffect, useState} from "react";

import * as S from "./styled";

import { useDispatch, useSelector } from 'react-redux';
import { close } from '../../store/Modal/Modal.actions';
import iconClose from '../../assets/images/close.png';
import pokebola from '../../assets/images/pokeball.png';
import iconEdit from '../../assets/images/editIcon.png';
import InputText from '../../components/InputText';
import checkIcon from '../../assets/images/checkIcon.png';
import Types from './Components/Types';
import Statistics from "./Components/Statistics";

function Modal(){
  
    const dispatch = useDispatch()
    const [editName, setEditName] = useState(false)

    const pokemon = useSelector(state => state.createPokemon)



    return (
       <S.ModalWrapper>
           <S.ModalContainer>
            <div> 
                <S.ModalClose onClick={()=>{dispatch(close())}}>
                    <div>
                        <img src={iconClose} alt="imagem de um x para fechar" />
                    </div>
                </S.ModalClose>  
                <S.ModalImg>
                    <div>
                        <img src={pokemon.sprites.front_default} alt="imagem de um x para fechar" />
                    </div>
                </S.ModalImg>
                <S.Text onClick={()=>{setEditName(true)}}>
                    <h2> {pokemon.name} </h2>
                    <span><img src={iconEdit} alt="imagem de uma caneta para editar" /></span>
                </S.Text>   

                {editName ?      
                <S.ModalNameInput>
                    <InputText/>
                    <button><img src={checkIcon} alt="icone de check" /></button>
                    <button onClick={()=>{setEditName(false)}}>
                        <img src={iconClose} alt="imagem de um x para cancelar"  />
                    </button>
                </S.ModalNameInput>
                :""}  
                
                <S.status>
                    <div>
                        <h3>HP</h3>
                        <h2>{pokemon.stats[0].base_stat}/{pokemon.stats[0].base_stat}</h2>
                    </div>
                    <div>
                        <h3>ALTURA</h3>
                        <h2>{pokemon.height / 10} m</h2>
                    </div>
                    <div>
                        <h3>PESO</h3>
                        <h2>{pokemon.weight / 10} kg</h2>
                    </div>
                </S.status>
                <S.titulo>
                    Tipo
                </S.titulo>
                    <Types/>  
                <S.titulo>
                    Habilidades
                </S.titulo>
                <S.Skills>
                    <h3>
                        {pokemon.abilities.map((skill)=>{
                            return `${skill.ability.name} `
                        })}
                        {/* Overgrow, Clorofila */}
                    </h3>
                </S.Skills>
                <S.titulo>
                    Estatísticas
                </S.titulo>
                <Statistics/>                

            </div>
            
           </S.ModalContainer>
           <S.Pokebola>
                    <img src={pokebola} alt="botão pokebola" />
            </S.Pokebola>
       </S.ModalWrapper>
    )
}

export default Modal;