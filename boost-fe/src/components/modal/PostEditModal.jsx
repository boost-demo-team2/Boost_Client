import { useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "../group/styled";
import * as G from "./styles/GroupEditModalStyle";

export default function PostEditModal () {
  const [modalOpen, setModalOpen] = useState(true);
  const [nickname, setNickname] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [postPassword,setPostPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [tags,setTags] = useState([]);
  const [location, setLocation] = useState("");
  const [moment, setMoment] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const {postId} = useParams();

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
  const handleKeyDown = (e) => {
    if(e.key != "Enter") return; //엔터키 아닐 경우 바로 리턴
    const value = e.target.value;
    if(!value.trim()) return; //입력값이 없을 경우 바로 리턴
    setTags([...tags, value]);
    e.target.value = "";
  }
  const removeTag = (tagIndex) => { 
    setTag(tags.filter((tag,index) => index !== tagIndex));
  }
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const formData = new FormData();
    formData.append("nickname", nickname);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("postPassword", postPassword);
    formData.append("imageUrl", imageUrl);
    formData.append("tags", JSON.stringify(tags));
    formData.append("location", location);
    formData.append("moment", moment);
    formData.append("isPublic", isPublic);
    
  
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
          <G.MainTitle>추억 수정</G.MainTitle>
          <G.Title>닉네임</G.Title>
          <G.GroupTitleText value={nickname} onChange={(e) => setNickname(e.target.value)} />
          <G.Title>제목</G.Title>
          <G.GroupTitleText value={title} onChange={(e) => setTitle(e.target.value)} />
          <G.Title>이미지</G.Title>
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
          <G.Title>본문</G.Title>
          <G.GroupContentText value={content} onChange={(e) => setContent(e.target.value)} />
          <G.TagContainer>
            <G.Title>태그</G.Title>
            <G.TagInput onKeyDown={handleKeyDown} />
            {
              tags.map((tag, index) => (
                <G.TagItem>
                  <span>{tag}</span>
                  <span onClick={() => removeTag(index)}>&times;</span>
                </G.TagItem>
              ))}
          </G.TagContainer>
          <G.Title>장소</G.Title>
          <G.GroupTitleText value={location} onChange={(e) => setLocation(e.target.value)} />
          <G.Title>추억의 순간</G.Title>
          <G.GroupTitleText value={moment} onChange={(e) => setMoment(e.target.value)} />
          <G.Title>추억 공개 선택</G.Title>
          <G.ToggleLabel>공개</G.ToggleLabel>
          <G.ToggleSwitch type="checkbox" checked={isPublic} onChange={() => setIsPublic(!isPublic)} />
          <G.Title>수정 권한 인증</G.Title>
          <G.PasswordInput value={postPassword} onChange={(e) => setPostPassword(e.target.value)} />
          <S.SubmitButton onClick={handleSubmit}>수정하기</S.SubmitButton>
        </G.ModalContainer>
      </G.ModalOverlay>
    )}
  </>
  )
}