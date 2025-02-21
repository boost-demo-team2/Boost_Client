// import { useEffect, useState } from "react";

// const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

// export default function GroupListPage() {
//   const [groups, setGroups] = useState([]); // ✅ 기본값을 빈 배열로 설정

//   useEffect(() => {
//     fetch(`${API_URL}/api/groups`)
//       .then((res) => res.json())
//       .then((data) => setGroups(data.groups || [])) // ✅ 데이터가 없을 경우 빈 배열로 초기화
//       .catch((error) => {
//         console.error("데이터 로딩 오류:", error);
//         setGroups([]); // ✅ API 요청 실패 시 빈 배열로 설정
//       });
//   }, []);

//   const filteredGroups = groups?.filter((group) => group.isPublic) || []; // ✅ optional chaining 사용

//   return (
//     <div>
//       <h1>그룹 목록</h1>
//       {filteredGroups.length > 0 ? (
//         <ul>
//           {filteredGroups.map((group) => (
//             <li key={group.id}>{group.name}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>그룹이 없습니다.</p>
//       )}
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Search from "../components/common/Search";
import Card from "../components/group/Card";
import * as G from "../components/group/GroupStyle";
import emptyImg from "../assets/empty.svg";
import MoreButton from "../components/common/Button";
import { useNavigate } from "react-router-dom";

const GroupListPage = () => {
  const navigate = useNavigate();
  const [isPublic, setIsPublic] = useState(true); // 공개 상태
  const [groups, setGroups] = useState([]); // 서버에서 가져온 그룹 데이터 저장
  const [page, setPage] = useState(1); // 현재 페이지
  const [sortOrder, setSortOrder] = useState("latest");
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태

  // // 🔹 그룹 목록 가져오기 (API 호출)
  // const fetchGroups = async (reset = false) => {
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch(`/api/groups?page=${reset ? 1 : page}&pageSize=10`);
  //     const data = await response.json();

  //     if (response.ok) {
  //       setGroups((prevGroups) => reset ? data.groups : [...prevGroups, ...data.groups]);
  //       if (reset) setPage(2); // 새로운 데이터 로드 시 페이지 초기화
  //       else setPage((prevPage) => prevPage + 1);
  //     } else {
  //       console.error("그룹 데이터를 가져오는 데 실패함:", data.message);
  //     }
  //   } catch (error) {
  //     console.error("API 요청 오류:", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000"; // ✅ 추가

  const fetchGroups = async (reset = false) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${API_URL}/api/groups?page=${reset ? 1 : page}&pageSize=10`,
        {
          // ✅ API_URL을 사용하여 요청 URL 수정
          headers: {
            Accept: "application/json", // ✅ JSON 응답을 요청하도록 헤더 추가
          },
        }
      );

      console.log(
        "✅ API 요청 URL:",
        `${API_URL}/api/groups?page=${reset ? 1 : page}&pageSize=10`
      ); // ✅ API 요청 URL 확인용 로그 추가
      console.log("✅ API 응답 상태 코드:", response.status); // ✅ 응답 코드 확인
      const text = await response.text();
      console.log("✅ API 응답 (raw text):", text); // ✅ API 응답 데이터 확인

      let data;
      try {
        data = JSON.parse(text); // ✅ JSON 변환 시도
      } catch (error) {
        console.error("❌ JSON 변환 오류: 응답이 JSON이 아닙니다.", error); // ✅ JSON 변환 오류 확인용 로그 추가
        return;
      }

      console.log("✅ 변환된 JSON 데이터:", data); // ✅ 추가됨
      if (!data || !Array.isArray(data.data)) {
        console.error("❌ groups 데이터가 올바르지 않음:", data);
        return;
      }

      setGroups(data.data); // ✅ groups 설정 시 기본값 처리
      console.log("✅ setGroups() 실행 완료", data.data);

      if (reset) setPage(2);
      else setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("❌ API 요청 오류:", error); // ✅ 오류 확인용 로그 추가
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("✅ 현재 groups 데이터 상태:", groups);
  }, [groups]);

  // 🔹 공개 그룹 & 비공개 그룹 필터링
  const filteredGroups = (groups || []).filter(
    (group) => Boolean(group.isPublic) === Boolean(isPublic) // ✅ isPublic 필터링 방식 수정
  );

  // ✅ `filteredGroups` 상태 확인
  useEffect(() => {
    console.log("✅ 현재 filteredGroups 데이터 상태:", filteredGroups);
  }, [filteredGroups]);

  // 🔹 날짜 계산
  const calculateDaysAgo = (createdAt) => {
    const createdDate = new Date(createdAt);
    const currentDate = new Date();
    const timeDifference = currentDate - createdDate;
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  };

  // 🔹 정렬 로직
  const sortedGroups = [...filteredGroups].sort((a, b) => {
    if (sortOrder === "latest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
    if (sortOrder === "likes") {
      return b.likes - a.likes;
    }
    return 0;
  });

  // 🔹 첫 렌더링 시 그룹 데이터 가져오기
  useEffect(() => {
    fetchGroups(true);
  }, [isPublic]);

  // 🔹 빈 상태 화면
  const renderEmptyState = () => (
    <G.EmptyState>
      <G.Icon src={emptyImg} alt="No Groups" />
      <G.Message>
        {isPublic
          ? "등록된 공개 그룹이 없습니다."
          : "등록된 비공개 그룹이 없습니다."}
      </G.Message>
      <G.SubMessage>"가장 먼저 그룹을 만들어보세요!"</G.SubMessage>
      <G.CreateButton>그룹 만들기</G.CreateButton>
    </G.EmptyState>
  );

  return (
    <G.Container>
      <Header />

      {/* 🔹 검색 & 필터 */}
      <Search
        setIsPublic={setIsPublic}
        isPublic={isPublic}
        setSortOrder={setSortOrder}
      />

      {/* 🔹 그룹 목록 */}
      {sortedGroups.length === 0 ? (
        renderEmptyState()
      ) : (
        <G.GroupList>
          {sortedGroups.map((group) => {
            const daysAgo = calculateDaysAgo(group.createdAt);
            return (
              <G.CardWrapper
                key={group.id}
                onClick={() => {
                  if (!group.isPublic) {
                    navigate(`/groups/${group.id}/verify-password`); // 비공개 그룹 클릭 시 이동
                  }
                }}
              >
                <Card
                  groupData={{
                    ...group,
                    daysAgo,
                    badges: group.badges,
                  }}
                />
              </G.CardWrapper>
            );
          })}
        </G.GroupList>
      )}

      {/* 🔹 더보기 버튼 */}
      {!isLoading && groups.length > 0 && (
        <MoreButton onClick={() => fetchGroups()}>더보기</MoreButton>
      )}
    </G.Container>
  );
};

export default GroupListPage;
