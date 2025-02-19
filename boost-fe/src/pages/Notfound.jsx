import React from "react";
import { logo } from "../components/common/Header";
import * as S from "../components/common/Styled";
import NotfoundImg from "../assets/404.svg";

const Notfound = () => {
    return (
        <S.Container>
            <S.logo src={logo} alt="logo" />
            <S.Notfound src={NotfoundImg} alt="Page Not Found" />
        </S.Container>
    );
};

export default Notfound;