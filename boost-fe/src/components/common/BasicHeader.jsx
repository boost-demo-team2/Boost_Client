import React from "react";
import * as S from "./Styled";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const BasicHeader=()=>{
  const navigate = useNavigate();

    return(
        <S.HeadContainer>
            <S.logo src={logo} alt="로고" /> {/* 로고 중앙 정렬 */}
        </S.HeadContainer>
    )
}
export {logo};
export default BasicHeader;