import { useState } from "react";
import { useParams } from "react-router-dom";
import * as G from "./styles/PostEditModalStyle";
import exitIcon from "../../assets/exitIcon.svg";

export default function PostEditModal () {
  const [modalOpen, setModalOpen] = useState(true); //부모 페이지에서 다룸

  const [nickname, setNickname] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [postPassword,setPostPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [tags,setTags] = useState([]);
  const [location, setLocation] = useState("");
  const [moment, setMoment] = useState(null);
  const [isPublic, setIsPublic] = useState(true);
  const {postId} = useParams();

  const handleKeyDown = (e) => {
    if(e.key != "Enter") return; //엔터키 아닐 경우 바로 리턴
    const value = e.target.value;
    if(!value.trim()) return; //입력값이 없을 경우 바로 리턴
    setTags([...tags, value]);
    e.target.value = "";
  }
  const removeTag = (tagIndex) => { 
    setTags(tags.filter((tag,index) => index !== tagIndex));
  }
  const handleImg = async (e) => { // 이미지 업로드 요청 함수
    const file = e.target.files[0];
    if(!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try{
      const response = await fetch("",{
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data"
        },
        body: formData,
      });
      const imgData = await response.json();
      if (!response.ok) throw new Error(imgData.message || "이미지 업로드 실패");
      setImageUrl(data.imageUrl);

    } catch(error){
      console.log("이미지 업로드 실패 :", error);
      alert("이미지 업로드에 실패했습니다.");
    }
  } 
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    const formData = {
      nickname,
      title,
      content,
      postPassword,
      imageUrl,
      tags,
      location,
      moment,
      isPublic,
    }

    try {
      const response = await fetch("", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);  

      if (!response.ok) {
        alert(`${data.message}`);
      }else{
        console.log("업데이트 완료:", data);
        alert("그룹이 수정되었습니다.");
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
          <G.MainTitle>추억 수정</G.MainTitle>
          <G.FlexBox>
          <div>
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
          </div>
          <div>
            <G.TagContainer>
              <G.Title>태그</G.Title>
              <G.TagInput onKeyDown={handleKeyDown} />
              {
                tags.map((tag, index) => (
                  <G.TagItem key={index}>
                    <span>{tag}</span>
                    <span onClick={() => removeTag(index)}>&times;</span>
                  </G.TagItem>
                ))}
            </G.TagContainer>
            <G.Title>장소</G.Title>
            <G.GroupTitleText value={location} onChange={(e) => setLocation(e.target.value)} />
            <G.Title>추억의 순간</G.Title>
            <G.GroupTitleText type="date" value={moment} onChange={(e) => setMoment(e.target.value)} />
            <G.Title>추억 공개 선택</G.Title>
            <G.ToggleLabel>공개</G.ToggleLabel>
            <G.ToggleSwitch type="checkbox" checked={isPublic} onChange={() => setIsPublic(!isPublic)} />
            <G.Title>수정 권한 인증</G.Title>
            <G.PasswordInput value={postPassword} onChange={(e) => setPostPassword(e.target.value)} />
          </div>
          </G.FlexBox>
          <G.SubmitButton onClick={handleSubmit}>수정하기</G.SubmitButton>
        </G.ModalContainer>
      </G.ModalOverlay>
    )}
  </>
  )
}