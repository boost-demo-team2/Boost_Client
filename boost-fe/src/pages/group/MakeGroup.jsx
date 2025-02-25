import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../../components/group/styles/styled";
import * as G from "../../components/group/styles/MakeGroupStyle";
import BasicHeader from "../../components/common/BasicHeader";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000"; // API URL 환경변수 설정

export default function MakeGroup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [introduction, setIntroduction] = useState("");
  const [password, setPassword] = useState("");

  // ✅ `imageUrl` 상태 변경 감지 (디버깅용)
  useEffect(() => {
    console.log("🔄 변경된 imageUrl 상태:", imageUrl);
  }, [imageUrl]);

  // 이미지 업로드 요청 함수
  const handleImg = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      console.log("📤 이미지 업로드 시작:", file.name);

      const response = await fetch(`${API_URL}/api/image`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const responseText = await response.text();
      console.log("📢 서버 원본 응답:", responseText);

      let imgData;
      try {
        const imgData = JSON.parse(responseText); // JSON 파싱 시도
        if (!response.ok)
          throw new Error(imgData.message || "이미지 업로드 실패");
        setImageUrl(imgData.imageUrl);
      } catch (parseError) {
        console.error("❌ JSON 파싱 오류:", parseError);
        alert("서버 응답이 올바른 JSON 형식이 아닙니다.");
        return;
      }

      if (!response.ok)
        throw new Error(imgData.message || "이미지 업로드 실패");

      console.log("✅ 업로드된 이미지 URL:", imgData.imageUrl);

      // ✅ 상태 업데이트 후 1초 뒤 로그 확인
      setImageUrl(imgData.imageUrl);
      setTimeout(() => {
        console.log("🔄 업데이트 후 imageUrl 상태:", imageUrl);
      }, 1000);
    } catch (error) {
      console.error("❌ 이미지 업로드 실패:", error);
      alert("이미지 업로드에 실패했습니다.");
    }
  };

  // 그룹 생성 요청 함수
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("✅ handleSubmit 실행됨"); //콘솔창 출력 X 문제제

    try {
      console.log("🚀 그룹 생성 요청 전 imageUrl 상태:", imageUrl);

      if (!imageUrl) {
        alert("이미지를 먼저 업로드하세요!");
        return;
      }

      const response = await fetch(`${API_URL}/api/groups`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          groupName: name,
          password,
          imageUrl,
          isPublic,
          introduction,
        }),
      });
      console.log("📤 그룹 생성 요청 데이터:", {
        groupName: name,
        password,
        imageUrl,
        isPublic,
        introduction,
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "그룹 생성 실패");

      alert("그룹이 생성되었습니다.");
      navigate("/");
    } catch (error) {
      console.error("❌ 오류 발생:", error);
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
            value={imageUrl || ""} // ✅ 상태가 null이면 빈 문자열 표시
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
        {/* <S.SubmitButton type="submit" onClick={handleSubmit}>
          만들기
        </S.SubmitButton> */}
        <S.SubmitButton
          type="submit"
          onClick={(e) => {
            console.log("✅ 버튼 클릭됨");
            handleSubmit(e);
          }}
        >
          만들기
        </S.SubmitButton>
      </G.Container>
    </G.PageWrapper>
  );
}
