import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../components/group/styled";
import * as G from "../components/group/MakeGroupStyle";
import BasicHeader from "../components/common/BasicHeader";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000"; // ✅ API URL 환경변수 설정

export default function MakeGroup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [introduction, setIntroduction] = useState("");
  const [password, setPassword] = useState("");

  // ✅ 이미지 업로드 요청 함수 (수정)
  const handleImg = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      console.log("이미지 업로드 시작:", file.name);

      const response = await fetch(`${API_URL}/api/image`, {
        method: "POST",
        body: formData, // ✅ FormData 사용 시, Content-Type은 자동 설정됨
      });

      const responseText = await response.text();
      console.log("서버 응답:", responseText);

      try {
        const imgData = JSON.parse(responseText); // ✅ JSON 파싱 시도
        if (!response.ok)
          throw new Error(imgData.message || "이미지 업로드 실패");
        setImageUrl(imgData.imageUrl);
      } catch (parseError) {
        console.error("JSON 파싱 오류:", parseError);
        alert("서버 응답이 올바르지 않습니다.");
      }
    } catch (error) {
      console.error("이미지 업로드 실패:", error);
      alert("이미지 업로드에 실패했습니다.");
    }
  };

  // ✅ 그룹 생성 요청 함수
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/api/groups`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          groupName: name, // ✅ 필드명 변경 가능성 확인 필요
          password,
          imageUrl,
          isPublic,
          introduction,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "그룹 생성 실패");

      alert("그룹이 생성되었습니다.");
      navigate("/");
    } catch (error) {
      console.error("오류 발생:", error);
      alert("서버 오류로 인해 그룹을 생성할 수 없습니다.");
    }
  };

  return (
    <G.PageWrapper>
      <BasicHeader />
      <G.Container>
        <G.MainTitle>그룹 만들기</G.MainTitle>
        <div>
          <G.Title>그룹명</G.Title>
          <G.GroupTitleText
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <G.Title>대표 이미지</G.Title>
          <G.ImgInput
            type="text"
            value={imageUrl}
            placeholder="이미지를 업로드하세요"
            readOnly
          />
          <input
            type="file"
            id="fileUpload"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleImg}
          />
          <G.ImgLabel htmlFor="fileUpload">파일 선택</G.ImgLabel>
        </div>
        <div>
          <G.Title>그룹 소개</G.Title>
          <G.GroupContentText
            value={introduction}
            onChange={(e) => setIntroduction(e.target.value)}
          />
        </div>
        <div>
          <G.Title>그룹 공개 선택</G.Title>
          <G.ToggleLabel>공개</G.ToggleLabel>
          <G.ToggleSwitch
            type="checkbox"
            checked={isPublic}
            onChange={() => setIsPublic(!isPublic)}
          />
        </div>
        <div>
          <G.Title>비밀번호</G.Title>
          <G.PasswordInput
            value={password}
            placeholder="비밀번호를 입력해 주세요."
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <S.SubmitButton type="submit" onClick={handleSubmit}>
          만들기
        </S.SubmitButton>
      </G.Container>
    </G.PageWrapper>
  );
}

// import { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import * as S from "../components/group/styled";
// import * as G from "../components/group/MakeGroupStyle";
// import BasicHeader from "../components/common/BasicHeader";

// export default function MakeGroup () {
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const [isPublic, setIsPublic] = useState(true);
//   const [introduction, setIntroduction] = useState("");
//   const [password,setPassword] = useState("");
//   const {groupId} = useParams();

//   const handleImg = async (e) => { // 이미지 업로드 요청 함수
//     const file = e.target.files[0];
//     if(!file) return;

//     const formData = new FormData();
//     formData.append("image", file);

//     try{
//       const response = await fetch("http://localhost:3000/api/image",{
//         method: "POST",
//         body: formData,
//       });
//       const imgData = await response.json();
//       if (!response.ok) throw new Error(imgData.message || "이미지 업로드 실패");
//       setImageUrl(imgData.imageUrl);

//     } catch(error){
//       console.log("이미지 업로드 실패 :", error);
//       alert("이미지 업로드에 실패했습니다.");
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:3000/api/groups", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           password,
//           imageUrl,
//           isPublic,
//           introduction,
//         }),
//       });
//       const data = await response.json();
//       console.log(data);

//       if (!response.ok) {
//         alert(`${data.message}`);

//       }else{
//         console.log("업데이트 완료:", data);
//         alert("그룹이 수정되었습니다.");
//         setName("");
//         setPassword("");
//         setImageUrl("");
//         setIsPublic(true);
//         setIntroduction("");
//         navigate(-1); // 이전 페이지로 돌아가기
//       }
//     } catch (error) {
//       console.error("오류 발생:", error);
//     }

//       console.log("그룹 생성 데이터:", {
//         name,
//         password,
//         imageUrl,
//         isPublic,
//         introduction,
//       });

//       alert("그룹이 생성되었습니다. (백엔드 없이 실행)");

//       // 입력 필드 초기화
//       setName("");
//       setPassword("");
//       setImageUrl("");
//       setIsPublic(true);
//       setIntroduction("");
//   };

//   return (
//     <>
//     <G.PageWrapper>
//     <BasicHeader/>
//     <G.Container>
//       <G.MainTitle>그룹 만들기</G.MainTitle>
//       <div>
//         <G.Title>그룹명</G.Title>
//         <G.GroupTitleText value={name} onChange={(e) => setName(e.target.value)}></G.GroupTitleText>
//       </div>
//       <div>
//         <G.Title>대표 이미지</G.Title>
//         <G.ImgInput type="text" value={imageUrl} placeholder="이미지를 업로드하세요" readOnly/>
//         <input
//             type="file"
//             id="fileUpload"
//             style={{ display: "none" }}
//             onChange={handleImg}/>
//         <G.ImgLabel htmlFor="fileUpload">
//           파일 선택
//         </G.ImgLabel>
//       </div>
//       <div>
//         <G.Title>그룹 소개</G.Title>
//         <G.GroupContentText value={introduction} onChange={(e) => setIntroduction(e.target.value)}></G.GroupContentText>
//       </div>
//       <div>
//         <G.Title>그룹 공개 선택</G.Title>
//         <G.ToggleLabel>공개</G.ToggleLabel>
//         <G.ToggleSwitch type="checkbox" checked={isPublic} onChange={() => setIsPublic(!isPublic)}></G.ToggleSwitch>
//       </div>
//       <div>
//       <G.Title>비밀번호</G.Title>
//       <G.PasswordInput value={password} placeholder="비밀번호를 입력해 주세요." onChange={(e) => setPassword(e.target.value)}></G.PasswordInput>
//       </div>
//       <S.SubmitButton onClick={handleSubmit}>만들기</S.SubmitButton>
//     </G.Container>
//     </G.PageWrapper>
//   </>
//   )
// }
//////////////////////////////잠시 확인용용

// import { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import * as S from "../components/group/styled";
// import * as G from "../components/group/MakeGroupStyle";
// import BasicHeader from "../components/common/BasicHeader";

// export default function MakeGroup() {
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const [isPublic, setIsPublic] = useState(true);
//   const [introduction, setIntroduction] = useState("");
//   const [password, setPassword] = useState("");
//   const { groupId } = useParams();

//   // ✅ 이미지 업로드 핸들러
//   const handleImg = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     console.log("선택된 파일:", file);
//     // 실제 이미지 업로드 로직을 추가하려면 여기서 FormData를 활용하여 API 요청을 보낼 수 있음
//     setImageUrl(URL.createObjectURL(file)); // 임시로 이미지 URL 생성
//   };

//   // ✅ 그룹 생성 핸들러 (백엔드 없이 실행)
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("그룹 생성 데이터:", {
//       name,
//       password,
//       imageUrl,
//       isPublic,
//       introduction,
//     });

//     alert("그룹이 생성되었습니다. (백엔드 없이 실행)");

//     // 입력 필드 초기화
//     setName("");
//     setPassword("");
//     setImageUrl("");
//     setIsPublic(true);
//     setIntroduction("");
//   };

//   return (
//     <>
//       <G.PageWrapper>
//         <BasicHeader />
//         <G.Container>
//           <G.MainTitle>그룹 만들기</G.MainTitle>
//           <div>
//             <G.Title>그룹명</G.Title>
//             <G.GroupTitleText value={name} onChange={(e) => setName(e.target.value)} />
//           </div>
//           <div>
//             <G.Title>대표 이미지</G.Title>
//             <G.ImgInput type="text" value={imageUrl} placeholder="이미지를 업로드하세요" readOnly />
//             <input type="file" id="fileUpload" style={{ display: "none" }} onChange={handleImg} />
//             <G.ImgLabel htmlFor="fileUpload">파일 선택</G.ImgLabel>
//           </div>
//           <div>
//             <G.Title>그룹 소개</G.Title>
//             <G.GroupContentText value={introduction} onChange={(e) => setIntroduction(e.target.value)} />
//           </div>
//           <div>
//             <G.Title>그룹 공개 선택</G.Title>
//             <G.ToggleLabel>공개</G.ToggleLabel>
//             <G.ToggleSwitch type="checkbox" checked={isPublic} onChange={() => setIsPublic(!isPublic)} />
//           </div>
//           <div>
//             <G.Title>비밀번호</G.Title>
//             <G.PasswordInput
//               value={password}
//               placeholder="비밀번호를 입력해 주세요."
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <S.SubmitButton onClick={handleSubmit}>만들기</S.SubmitButton>
//         </G.Container>
//       </G.PageWrapper>
//     </>
//   );
// }
