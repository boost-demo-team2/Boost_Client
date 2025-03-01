import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/common/Header";
import Search from "../../components/common/Search";
import Card from "../../components/group/Card";
import * as G from "../../components/group/styles/GroupStyle";
import emptyImg from "../../assets/empty.svg";
import MoreButton from "../../components/common/Button";

const group = [
  {
      id: 1,
      name: "그룹1",
      description: "그룹1 설명",
      imageUrl: "",
      createdAt: "2024-02-22T07:47:49.803Z",
      isPublic: true,
      badges: 3,
      memories: 10,
      likes: 50,
  },
  {
      id: 2,
      name: "그룹2",
      description: "그룹2 설명",
      imageUrl: "",
      createdAt: "2024-02-22T07:47:49.803Z",
      isPublic: true,
      badges: 3,
      memories: 10,
      likes: 50,
  },
  {
      id: 3,
      name: "그룹3",
      description: "그룹3 설명",
      imageUrl: "",
      createdAt: "2024-02-22T07:47:49.803Z",
      isPublic: true,
      badges: 3,
      memories: 10,
      likes: 50,
  },
  {
      id: 4,
      name: "그룹4",
      description: "그룹4 설명",
      imageUrl: "",
      createdAt: "2024-02-22T07:47:49.803Z",
      isPublic: false,
      badges: 3,
      memories: 10,
      likes: 50,
  },
  {
    id: 5,
    name: "그룹1",
    description: "그룹1 설명",
    imageUrl: "",
    createdAt: "2024-02-22T07:47:49.803Z",
    isPublic: true,
    badges: 3,
    memories: 10,
    likes: 50,
  },
  {
      id: 6,
      name: "그룹1",
      description: "그룹1 설명",
      imageUrl: "",
      createdAt: "2024-02-22T07:47:49.803Z",
      isPublic: true,
      badges: 3,
      memories: 10,
      likes: 50,
  },
  {
      id: 7,
      name: "그룹1",
      description: "그룹1 설명",
      imageUrl: "",
      createdAt: "2024-02-22T07:47:49.803Z",
      isPublic: true,
      badges: 3,
      memories: 10,
      likes: 50,
  },
  {
      id: 8,
      name: "그룹1",
      description: "그룹1 설명",
      imageUrl: "",
      createdAt: "2024-02-22T07:47:49.803Z",
      isPublic: false,
      badges: 3,
      memories: 10,
      likes: 50,
  },
];

const GroupListPage = () => {
  const navigate = useNavigate();
  const [isPublic, setIsPublic] = useState(true); // 공개 상태
  const [groups, setGroups] = useState(group); // 서버에서 가져온 그룹 데이터 저장은 []
  const [page, setPage] = useState(1); // 현재 페이지
  const [sortOrder, setSortOrder] = useState("latest");
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태
  const [keyword, setKeyword] = useState("");

  // const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

  // const fetchGroups = async (reset = false) => {
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch(
  //       `${API_URL}/api/groups?page=${reset ? 1 : page}&pageSize=10`,
  //       {
  //         headers: {
  //           Accept: "application/json",
  //         },
  //       }
  //     );

  //     console.log(
  //       "API 요청 URL:",
  //       `${API_URL}/api/groups?page=${reset ? 1 : page}&pageSize=10`
  //     );
  //     console.log("API 응답 상태 코드:", response.status);
  //     const text = await response.text();
  //     console.log("API 응답 (raw text):", text);

  //     let data;
  //     try {
  //       data = JSON.parse(text); // JSON 변환 시도
  //     } catch (error) {
  //       console.error("JSON 변환 오류: 응답이 JSON이 아닙니다.", error);
  //       return;
  //     }

  //     console.log("변환된 JSON 데이터:", data); // 추가됨
  //     if (!data || !Array.isArray(data.data)) {
  //       console.error("groups 데이터가 올바르지 않음:", data);
  //       return;
  //     }

  //     setGroups(data.data); // 서버 그룹 데이터 저장
  //     console.log("setGroups() 실행 완료", data.data);

  //     if (reset) setPage(2);
  //     else setPage((prevPage) => prevPage + 1);
  //   } catch (error) {
  //     console.error("API 요청 오류:", error); // 오류 확인용 로그 추가
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   console.log("현재 groups 데이터 상태:", groups);
  // }, [groups]);

  // 공개 그룹 & 비공개 그룹 필터링, 검색 기능
  const filteredGroups = (groups || []).filter(
    (group) => Boolean(group.isPublic) === Boolean(isPublic) && group.name.toLowerCase().includes(keyword.toLowerCase()) );

  // // `filteredGroups` 상태 확인
  // useEffect(() => {
  //   console.log("현재 filteredGroups 데이터 상태:", filteredGroups);
  // }, [filteredGroups]);

  // 날짜 계산
  const calculateDaysAgo = (createdAt) => {
    const createdDate = new Date(createdAt);
    const currentDate = new Date();
    const timeDifference = currentDate - createdDate;
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  };

  // 정렬 로직
  const sortedGroups = [...filteredGroups].sort((a, b) => {
    if (sortOrder === "latest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
    if (sortOrder === "likes") {
      return b.likes - a.likes;
    }
    return 0;
  });

  // // 첫 렌더링 시 그룹 데이터 가져오기
  // useEffect(() => {
  //   fetchGroups(true);
  // }, [isPublic]);

  // 빈 상태 화면
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

  // const convertImageUrl = (url) => {
  //   if (!url) return ""; // URL이 없는 경우 빈 문자열 반환
  //   if (url.startsWith("http")) return url; // 이미 절대경로면 그대로 사용
  //   return `${API_URL}${url}`; // 상대경로라면 절대경로로 변환
  // };
  

  return (
    <G.Container>
      <Header />
      <Search
        keyword={keyword}
        onSearch={setKeyword}
        setIsPublic={setIsPublic}
        isPublic={isPublic}
        setSortOrder={setSortOrder}
      />
      {sortedGroups.length === 0 ? (
        renderEmptyState()
      ) : (
        <G.GroupList>
          {sortedGroups.map((group) => {
            const daysAgo = calculateDaysAgo(group.createdAt);
            // const fullImageUrl = convertImageUrl(group.imageUrl);
            return (
              <G.CardWrapper
                key={group.id}
                onClick={() => {
                  if (!group.isPublic) {
                    navigate(`/groups/${group.id}/verify-password`); // 비공개 그룹 클릭 시 이동
                  }
                }
              }
              >
                <Card
                  groupData={group
                    // ...group,
                    // imageUrl: fullImageUrl,
                    // daysAgo,
                    // badges: group.badges,
                  }
                />
              </G.CardWrapper>
            );
          })}
        </G.GroupList>
      )}
      {!isLoading && groups.length > 0 && (
        <MoreButton onClick={() => fetchGroups()}>더보기</MoreButton>
      )}
    </G.Container>
  );
};

export default GroupListPage;
