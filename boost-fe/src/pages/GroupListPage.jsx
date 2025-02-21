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
  const [isPublic, setIsPublic] = useState(true);  // 공개 상태
  const [groups, setGroups] = useState([]);  // 서버에서 가져온 그룹 데이터 저장
  const [page, setPage] = useState(1); // 현재 페이지
  const [sortOrder, setSortOrder] = useState("latest");
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태

  // 🔹 그룹 목록 가져오기 (API 호출)
  const fetchGroups = async (reset = false) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/groups?page=${reset ? 1 : page}&pageSize=10`);
      const data = await response.json();

      if (response.ok) {
        setGroups((prevGroups) => reset ? data.groups : [...prevGroups, ...data.groups]);
        if (reset) setPage(2); // 새로운 데이터 로드 시 페이지 초기화
        else setPage((prevPage) => prevPage + 1);
      } else {
        console.error("그룹 데이터를 가져오는 데 실패함:", data.message);
      }
    } catch (error) {
      console.error("API 요청 오류:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // 🔹 공개 그룹 & 비공개 그룹 필터링
  const filteredGroups = groups.filter(group => group.isPublic === isPublic);

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
        {isPublic ? "등록된 공개 그룹이 없습니다." : "등록된 비공개 그룹이 없습니다."}
      </G.Message>
      <G.SubMessage>
        "가장 먼저 그룹을 만들어보세요!"
      </G.SubMessage>
      <G.CreateButton>
        "그룹 만들기"
      </G.CreateButton>
    </G.EmptyState>
  );

  return (
    <G.Container>
      <Header />

      {/* 🔹 검색 & 필터 */}
      <Search setIsPublic={setIsPublic} isPublic={isPublic} setSortOrder={setSortOrder} />

      {/* 🔹 그룹 목록 */}
      {sortedGroups.length === 0 ? renderEmptyState() : (
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
                    badges: group.badges
                  }}
                />
              </G.CardWrapper>
            );
          })}
        </G.GroupList>
      )}

      {/* 🔹 더보기 버튼 */}
      {!isLoading && groups.length > 0 && (
        <MoreButton onClick={() => fetchGroups()}>
          더보기
        </MoreButton>
      )}
    </G.Container>
  );
};

export default GroupListPage;
