import { useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "../group/styled";
import * as G from "./styles/CommentModalStyle";

export default function CommentUploadModal () {
    /*
  const [modalOpen, setModalOpen] = useState(true); 부모 페이지에서 다루기
  <div>
      <button onClick={() => setModalOpen(true)}>댓글 수정</button>
      {isModalVisible && <CommentEditModal />}
    </div>
  */
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [password,setPassword] = useState("");
  const {groupId} = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault(); 
  
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          nickname,
          content,
          password,
        }),
      });
      const data = await response.json();
      console.log(data);  

      if (!response.ok) {
        alert(`${data.message}`);
        setModalOpen(false);
        setNickname("");
        setContent("");  
        setPassword("");
      }else{
        console.log("등록 완료:", data);
        alert("댓글이 등록되었습니다.");
        setModalOpen(false);
        setNickname(""); 
        setContent(""); 
        setPassword("");
      }
    } catch (error) {
      console.error("오류 발생:", error);
      setModalOpen(false);
      setNickname("");
      setContent(""); 
      setPassword(""); 
    }
  };
  
  return (
    <>
      <G.ModalOverlay>
        <G.ModalContainer>
          <G.MainTitle>댓글 등록</G.MainTitle>
          <G.Title>닉네임</G.Title>
          <G.GroupTitleText value={nickname} onChange={(e) => setNickname(e.target.value)}></G.GroupTitleText>
          <G.Title>댓글</G.Title>
          <G.GroupContentText value={content} onChange={(e) => setContent(e.target.value)}></G.GroupContentText>
          <G.Title>비밀번호</G.Title>
          <G.PasswordInput value={password} placeholder="비밀번호를 입력해 주세요." onChange={(e) => setPassword(e.target.value)}></G.PasswordInput>
          <S.SubmitButton onClick={handleSubmit}>등록하기</S.SubmitButton>
        </G.ModalContainer>
      </G.ModalOverlay>
  </>
  )
}