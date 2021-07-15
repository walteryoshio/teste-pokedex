import React from 'react';

import { useSelector } from 'react-redux';

import * as S from "./styled"

function Types(){

    const tradutor = {
        normal: {type:'Normal', color: '#c4c0b4'},
        bug: {type:'Inseto', color: '#87950c'},
        dark: {type:'Sombrio', color: '#413831'},
        dragon: {type:'Dragão', color: '#7361d1'},
        eletric: {type:'Eletrico', color: '#e08d00'},
        fairy: {type:'Fada', color:'#e29fe6'},
        fighting: {type:'Lutador', color:'#852816'},
        fire: {type:'Fogo', color:'#cf2c03'},
        flying: {type:'Voador', color:'#8fa4ff'},
        ghost: {type:'Fantasma', color:'#6969af'},
        grass: {type:'Grama', color:'#67af32'},
        ground: {type:'Terrestre', color:'#c5a455'},
        ice: {type:'Gelo', color:'#b4edf8'},
        poison:{type:'Venenoso', color:'#924990'},
        psychic: {type:'Psíquico', color:'#e25484'},
        rock:{type:'Pedra', color:'#5e491c'},
        steel:{type: 'Aço', color:'#7f8488'},
        water: {type:'Água', color:'#3b9bf1'},
    }

    const types = useSelector(state => state.createPokemon.types)
    

    return(
        <S.TypesWrapper>
            {types.map((type, index)=>{
                return(
         
                    <S.container key={index} backgroundColor={tradutor[type.type.name].color}>
                        {tradutor[type.type.name].type}
                    </S.container>                             
                )
            })}
     
           
        </S.TypesWrapper>
    )

}

export default Types