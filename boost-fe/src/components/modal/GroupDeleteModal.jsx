import { useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "../group/styles/styled"
import * as G from "./styles/DeleteModalStyle"
import exitIcon from "../../assets/exitIcon.svg"

export default function GroupDeleteModal ({setDeleteModalOpen}) {
  const [inputPassword,setInputPassword] = useState("");
  // const {groupId} = useParams();

  // // 비밀번호 일치 확인 함수
  // const handleClick = async () => {
  //   try { const response = await fetch(`/posts/${groupId}/verify-password`,{
  //     method: "DELETE",
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify({ password: inputPassword }),
  //   });
  //   const result = await response.json();
  //   console.log(result);

  //   if(response.ok){
  //     alert("그룹이 삭제 되었습니다.");
  //     setDeleteModalOpen(false); // 비밀번호 일치, 모달이 닫힘
  //   }else{
  //     alert(`${result.message}`); // 오류 메세지
  //     setInputPassword(""); // 비밀번호 초기화
  //   }
  // } catch(error) {
  //     console.error("에러 발생 : ", error);
  //     alert("에러가 발생했습니다.다시 시도해 주세요.");
  //   }
  // }

  const mockPassword = "1234";

  const handleClick = () => {
    if (inputPassword === mockPassword) {
      alert("그룹이 삭제 되었습니다. (mock 기반)");
      setDeleteModalOpen(false); // 모달 닫기
    } else {
      alert("비밀번호가 틀렸습니다. 다시 시도해 주세요.");
      setInputPassword(""); // 비밀번호 초기화
    }
  };
  
  return (
    <>
      <G.ModalOverlay>
        <G.ModalContainer>
          <G.ModalCloseButton src={exitIcon} onClick={()=>setDeleteModalOpen(false)}></G.ModalCloseButton>
          <G.Message>그룹 삭제</G.Message>
          <G.Text>삭제 권한 인증</G.Text>
          <G.PasswordInput type="password" placeholder="비밀번호를 입력해 주세요." value={inputPassword} onChange={ e => setInputPassword(e.target.value)}/>
          <S.SubmitButton onClick={handleClick} >삭제하기</S.SubmitButton>
        </G.ModalContainer>
      </G.ModalOverlay>
  </>
  );
}