import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "../group/styled";
import * as G from "../components/group/MakeGroupStyle";

export default function MakeGroup () {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [introduction, setIntroduction] = useState("");
  const [password,setPassword] = useState("");
  const {groupId} = useParams();

  const handleImg = async (e) => { // 이미지 업로드 요청 함수
    const file = e.target.files[0];
    if(!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try{
      const response = await fetch("/api/image",{
        method: "POST",
        body: formData,
      });
      const imgData = await response.json();
      if (!response.ok) throw new Error(imgData.message || "이미지 업로드 실패");
      setImageUrl(imgData.imageUrl);

    } catch(error){
      console.log("이미지 업로드 실패 :", error);
      alert("이미지 업로드에 실패했습니다.");
    }
  } 

  const handleSubmit = async (e) => {
    e.preventDefault(); 
  
    try {
      const response = await fetch("/api/groups", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          password,
          imageUrl,
          isPublic,
          introduction,
        }),
      });
      const data = await response.json();
      console.log(data);  

      if (!response.ok) {
        alert(`${data.message}`);
        
      }else{
        console.log("업데이트 완료:", data);
        alert("그룹이 수정되었습니다.");
        setName("");
        setPassword("");
        setImageUrl("");
        setIsPublic(true);
        setIntroduction("");
        navigate(-1); // 이전 페이지로 돌아가기
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };
  
  
  return (
    <>
      <G.MainTitle>그룹 만들기</G.MainTitle>
      <G.Title>그룹명</G.Title>
      <G.GroupTitleText value={name} onChange={(e) => setName(e.target.value)}></G.GroupTitleText>
      <G.Title>대표 이미지</G.Title>
      <G.ImgInput type="text" value={imageUrl} placeholder="이미지를 업로드하세요" readOnly/>
      <input
          type="file"
          id="fileUpload"
          style={{ display: "none" }}
          onChange={handleImg}/>
      <G.ImgLabel htmlFor="fileUpload">
        파일 선택
      </G.ImgLabel>
      <G.Title>그룹 소개</G.Title>
      <G.GroupContentText value={introduction} onChange={(e) => setIntroduction(e.target.value)}></G.GroupContentText>
      <G.Title>그룹 공개 선택</G.Title>
      <G.ToggleLabel>공개</G.ToggleLabel>
      <G.ToggleSwitch type="checkbox" checked={isPublic} onChange={() => setIsPublic(!isPublic)}></G.ToggleSwitch>
      <G.Title>비밀번호</G.Title>
      <G.PasswordInput value={password} placeholder="비밀번호를 입력해 주세요." onChange={(e) => setPassword(e.target.value)}></G.PasswordInput>
      <S.SubmitButton onClick={handleSubmit}>만들기</S.SubmitButton>
  </>
  )
}