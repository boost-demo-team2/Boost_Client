import React from "react";
import * as S from "./Styled";
import logo from "../../assets/logo.png";

const Header=()=>{
    return(
        <S.HeadContainer>
            <S.Button>그룹 만들기</S.Button>
            <S.logo src={logo} alt="로고" /> {/* 로고 중앙 정렬 */}
        </S.HeadContainer>

    )

}
export {logo};
export default Header;