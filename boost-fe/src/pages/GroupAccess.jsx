// import { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import GroupAccessModal from "../components/modal/GroupAccessModal";
// import * as G from "../components/group/AccessStyle";
// import * as S from "../components/group/styled";
// import BasicHeader from "../components/common/BasicHeader";

// export default function GroupAccess() {
//   const navigate = useNavigate();
//   const {groupId} = useParams();
//   const [inputPassword, setInputPassword] = useState("");
//   const [isMatch, setIsMatch] = useState(false);

//   // 비밀번호 일치 확인 함수
//   const handleClick = async () => {
//     try { const response = await fetch(`/groups/${groupId}/verify-password`,{
//       method: "POST",
//       headers: {"Content-Type": "application/json"},
//       body: JSON.stringify({ password: inputPassword }),
//     });
//     const result = await response.json();
//     console.log(result);
    
//     if(response.ok) {
//       navigate(`/groups/${groupId}`); // 확인 성공, 비공개 그룹 페이지로 이동
//     }else{
//       setIsMatch(true); // 비밀번호 확인 실패, 모달 띄우기
//     }} catch (error) {
//       console.error("에러 발생 : ", error);
//       alert("에러가 발생했습니다. 다시 시도해 주세요.");
//     }
//   }

//   return (
//     <>
//     <BasicHeader />
//       <G.PageWrapper>
//         <G.AccessContainer>
//           <G.Title>비공개 그룹</G.Title>
//           <G.Text>비공개 그룹에 접근하기 위한 권한 확인이 필요합니다</G.Text>
//           <G.Label>비밀번호를 입력해 주세요</G.Label>
//           <G.PasswordInput type="password" placeholder="비밀번호를 입력해 주세요." value={inputPassword} onChange={ e => setInputPassword(e.target.value)}/>
//           <S.SubmitButton onClick={handleClick}>제출하기</S.SubmitButton>
//           {isMatch && <GroupAccessModal onClose={() => setIsMatch(false)}/>}
//         </G.AccessContainer>
//       </G.PageWrapper>
//     </>
//   )
// }

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GroupAccessModal from "../components/modal/GroupAccessModal";
import * as G from "../components/group/AccessStyle";
import * as S from "../components/group/styled";
import BasicHeader from "../components/common/BasicHeader";

export default function GroupAccess() {
  const navigate = useNavigate();
  const { groupId } = useParams();
  const [inputPassword, setInputPassword] = useState("");
  const [isMatch, setIsMatch] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // 오류 메시지 상태 추가

  // 비밀번호 검증 함수
  const handleClick = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/groups/${groupId}/verify-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: inputPassword }),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        navigate(`/groups/${groupId}`); // 인증 성공 시 해당 그룹 페이지로 이동
      } else {
        setIsMatch(true); // 모달 띄우기
        setErrorMessage(result.message || "비밀번호가 일치하지 않습니다."); // 오류 메시지 설정
      }
    } catch (error) {
      console.error("에러 발생:", error);
      alert("에러가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <>
      <BasicHeader />
      <G.PageWrapper>
        <G.AccessContainer>
          <G.Title>비공개 그룹</G.Title>
          <G.Text>비공개 그룹에 접근하기 위한 권한 확인이 필요합니다</G.Text>
          <G.Label>비밀번호를 입력해 주세요</G.Label>
          <G.PasswordInput
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
          <S.SubmitButton onClick={handleClick}>제출하기</S.SubmitButton>

          {/* 비밀번호 오류 시 모달 표시 */}
          {isMatch && <GroupAccessModal message={errorMessage} onClose={() => setIsMatch(false)} />}
        </G.AccessContainer>
      </G.PageWrapper>
    </>
  );
}
