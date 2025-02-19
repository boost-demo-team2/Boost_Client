import React from "react";
import * as S from "./Styled";

const MoreButton = ({ onClick }) => {
  return (
    <S.MoreButton onClick={onClick}>더보기</S.MoreButton>
  );
};

export default MoreButton;
