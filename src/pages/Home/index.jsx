import React from "react";

import * as S from "./styled";

import Logo from "../../assets/images/pokemonLogo.png"
import Button from "../../components/Button" 


const HomePage = (props) => (
  <S.HomeWrapper>
    <img src={Logo} alt="Logo do pokémon" />
    <Button text={'Start'} onClick={()=>{props.history.push("/map")}}/>
  </S.HomeWrapper>
);

export default HomePage;
