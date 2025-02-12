import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/common/Header";
import * as G from "../components/group/GroupAccessStyle";
import * as S from "../components/group/styled";

export default function GroupAccess() {
  const {groupId} = useParams();
  const [inputPassword, setInputPassword] = useState("");

  const handleClick = () => {

  }

  return (
    <Header>
      <G.GroupAccessContainer>
        <G.Title>비공개 그룹</G.Title>
        <G.Text>비공개 그룹에 접근하기 위한 권한 확인이 필요합니다</G.Text>
        <G.Label>비밀번호를 입력해 주세요</G.Label>
        <G.PasswordInput type="password" placeholder="비밀번호를 입력해 주세요." value={inputPassword} onChange={ e => setInputPassword(e.target.value)}/>
        <S.SubmitButton onClick={handleClick}>제출하기</S.SubmitButton>
      </G.GroupAccessContainer>
    </Header>
  )
}