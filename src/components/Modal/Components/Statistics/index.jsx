import React from "react";

import * as S from "./styled";

import { useSelector } from 'react-redux';
import shield from "../../../../assets/images/shield.png";
import sword from "../../../../assets/images/sword.png"
import speed from "../../../../assets/images/speed.png"

function Statistics(){

    const status = useSelector(state => state.createPokemon.stats)

    return(
        <S.StatisticsWrapper>
            <S.Container>
                <div>
                    <div><img src={shield} alt="escudo" /></div>
                    <span>Defesa</span>
                </div>
                <span>{status[2].base_stat}</span>
            </S.Container>
            <S.Container>
                <div>
                    <div><img src={sword} alt="espada" /></div>
                    <span>Ataque</span>
                </div>
                <span>{status[1].base_stat}</span>
            </S.Container>
            <S.Container>
                <div>
                    <div><img src={shield} alt="escudo" /></div>
                    <span>Defesa especial</span>
                </div>
                <span>{status[4].base_stat}</span>
            </S.Container>
            <S.Container>
                <div>
                    <div><img src={sword} alt="espada" /></div>
                    <span>Ataque Especial</span>
                </div>
                <span>{status[3].base_stat}</span>
            </S.Container>
            <S.Container>
                <div>
                    <div><img src={speed} alt="espada" /></div>
                    <span>Velocidade</span>
                </div>
                <span>{status[5].base_stat}</span>
            </S.Container>
            

        </S.StatisticsWrapper>
    )

}

export default Statistics