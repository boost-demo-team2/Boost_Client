import { useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "../group/styled";
import * as G from "./styles/GroupEditModalStyle";
import exitIcon from "../../assets/exitIcon.svg"

export default function GroupEditModal () {
  const [modalOpen, setModalOpen] = useState(true);
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [introduction, setIntroduction] = useState("");
  const [password,setPassword] = useState("");
  const {groupId} = useParams();

  const handleImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      try { const reader = new FileReader();
        reader.readAsDataURL(file); // 이미지 url 변환
        reader.onloadend = () => {
        setImageUrl(reader.result);
      }
      } catch (error) {
        console.log("이미지 불러오기 실패.");
      }
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const formData = new FormData();
    formData.append("name", name);
    formData.append("password", password);
    formData.append("imageUrl", imageUrl);
    formData.append("isPublic", isPublic);
    formData.append("introduction", introduction);
  
    try {
      const response = await fetch("", {
        method: "PUT",
        body: formData,
      });
      const data = await response.json();
      console.log(data);  
      if (!response.ok) {
        alert(`${data.message}`);
      }else{
        console.log("업데이트 완료:", data);
        alert("그룹이 수정되었습니다.");
        setModalOpen(false);
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };
  
  return (
    <>
    { modalOpen && (
      <G.ModalOverlay>
        <G.ModalContainer>
          <G.ModalCloseButton src={exitIcon} onClick={()=>setModalOpen(false)}></G.ModalCloseButton>
          <G.MainTitle>그룹 정보 수정</G.MainTitle>
          <G.Title>그룹명</G.Title>
          <G.GroupTitleText value={name} onChange={(e) => setName(e.target.value)}></G.GroupTitleText>
          <G.Title>대표 이미지</G.Title>
          <span>
            <G.ImgInput type="text" value={imageUrl} placeholder="이미지를 업로드하세요" readOnly/>
            <input
              type="file"
              id="fileUpload"
              style={{ display: "none" }}
              onChange={handleImg}/>
            <G.ImgLabel htmlFor="fileUpload">
              파일 선택
            </G.ImgLabel>
          </span>
          <G.Title>그룹 소개</G.Title>
          <G.GroupContentText value={introduction} onChange={(e) => setIntroduction(e.target.value)}></G.GroupContentText>
          <G.Title>그룹 공개 선택</G.Title>
          <G.ToggleLabel>공개</G.ToggleLabel>
          <G.ToggleContainer>
            <G.ToggleSwitch type="checkbox" checked={isPublic} onChange={() => setIsPublic(!isPublic)}></G.ToggleSwitch>
          </G.ToggleContainer>
          <G.Title>수정 권한 인증</G.Title>
          <G.PasswordInput value={password} placeholder="비밀번호를 입력해 주세요." onChange={(e) => setPassword(e.target.value)}></G.PasswordInput>
          <S.SubmitButton onClick={handleSubmit}>수정하기</S.SubmitButton>
        </G.ModalContainer>
      </G.ModalOverlay>
    )}
  </>
  )
}