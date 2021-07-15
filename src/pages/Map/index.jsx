import React, { useState } from "react";

import Sidebar from "components/Sidebar";

import * as S from "./styled";

import Ashfont from "../../assets/images/ashFront.png";
import Search from "../../assets/images/searchTooltip.png";
import Modal from "../../components/Modal";
import { useSelector, useDispatch  } from 'react-redux';
import { open } from '../../store/Modal/Modal.actions';
import { Request } from '../../store/CreatePokemon/actions'


function MapPage(){

const [showSearch, setShowSearch] = useState(0);

const dispatch = useDispatch()

const handleModal = useSelector(state => state.modal)

return (
  <S.MapWrapper className="map" >
    
    <Sidebar />

    <S.AshWrapper>
      <div onMouseOver={()=>{setShowSearch(1)}} onMouseLeave={()=>{setShowSearch(0)}} onClick={()=>{ dispatch(Request())}}>
          <S.image src={Search} alt="balão com uma lupa" opacity={showSearch}/>
          <img src={Ashfont} alt="Imagem do Ash de fronte" />
      </div>
    </S.AshWrapper>
    {handleModal ?
    <Modal/> 
    : ''
    }
    {handleModal}
  </S.MapWrapper>
);
}

export default MapPage;
