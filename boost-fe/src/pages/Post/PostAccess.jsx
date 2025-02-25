import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostAccessModal from "../../components/modal/PostAccessModal";
import * as G from "../../components/group/styles/AccessStyle";
import * as S from "../../components/group/styles/styled";
import BasicHeader from "../../components/common/BasicHeader";

export default function PostAccess() {
  const navigate = useNavigate();
  const {postId} = useParams();
  const [inputPassword, setInputPassword] = useState("");
  const [isMatch, setIsMatch] = useState(false);

  // 비밀번호 일치 확인 함수
  const handleClick = async () => {
    try { const response = await fetch(`/posts/${postId}/verify-password`,{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ password: inputPassword }),
    });
    const result = await response.json();
    console.log(result);
    
    if(response.ok) {
      navigate(`/posts/${postId}`); // 확인 성공, 비공개 추억 페이지로 이동
    }else{
      setIsMatch(true); // 비밀번호 확인 실패, 모달 띄우기 
    }} catch (error) {
      console.error("에러 발생 : ", error);
      alert("에러가 발생했습니다. 다시 시도해 주세요.");
    }
  }

  return (
    <>
    <BasicHeader/>
      <G.PageWrapper>
        <G.AccessContainer>
          <G.Title>비공개 추억</G.Title>
          <G.Text>비공개 추억에 접근하기 위한 권한 확인이 필요합니다</G.Text>
          <G.Label>비밀번호를 입력해 주세요</G.Label>
          <G.PasswordInput type="password" placeholder="비밀번호를 입력해 주세요." value={inputPassword} onChange={ e => setInputPassword(e.target.value)}/>
          <S.SubmitButton onClick={handleClick}>제출하기</S.SubmitButton>
          {isMatch && <PostAccessModal onClose={() => setIsMatch(false)}/>}
        </G.AccessContainer>
      </G.PageWrapper>
    </>
  )
}