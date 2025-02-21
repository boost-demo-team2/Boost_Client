// import React, { useState, useEffect } from "react";
// import Header from "../components/common/Header";
// import Search from "../components/common/Search";
// import Card from "../components/group/Card";
// import * as G from "../components/group/GroupStyle";
// import emptyImg from "../assets/empty.svg";
// import MoreButton from "../components/common/Button";
// import { useNavigate } from "react-router-dom";







// const groups = [
//   // 공개 그룹
//   {
//     "id": 1,
//     "name": "그룹1",
//     "description": "그룹1 설명",
//     "imageUrl": "",
//     "days": 5,
//     "isPublic": true,
//     "badges": 2,
//     "memories": 12,
//     "likes": 25,
//     "createdAt": "2025-01-15T09:30:00+09:00"
//   },
//   {
//     "id": 2,
//     "name": "그룹2",
//     "description": "그룹2 설명",
//     "imageUrl": "",
//     "days": 4,
//     "isPublic": true,
//     "badges": 1,
//     "memories": 8,
//     "likes": 17,
//     "createdAt": "2025-01-16T12:45:00+09:00"
//   },
//   {
//     "id": 6,
//     "name": "그룹6",
//     "description": "그룹6 설명",
//     "imageUrl": "",
//     "days": 6,
//     "isPublic": true,
//     "badges": 2,
//     "memories": 18,
//     "likes": 28,
//     "createdAt": "2025-01-18T16:00:00+09:00"
//   },
//   {
//     "id": 7,
//     "name": "그룹7",
//     "description": "그룹7 설명",
//     "imageUrl": "",
//     "days": 1,
//     "isPublic": true,
//     "badges": 0,
//     "memories": 2,
//     "likes": 5,
//     "createdAt": "2025-01-19T11:20:00+09:00"
//   },
//   {
//     "id": 9,
//     "name": "그룹9",
//     "description": "그룹9 설명",
//     "imageUrl": "",
//     "days": 3,
//     "isPublic": true,
//     "badges": 3,
//     "memories": 10,
//     "likes": 18,
//     "createdAt": "2025-01-21T13:30:00+09:00"
//   },
//   {
//     "id": 10,
//     "name": "그룹10",
//     "description": "그룹10 설명",
//     "imageUrl": "",
//     "days": 4,
//     "isPublic": true,
//     "badges": 2,
//     "memories": 12,
//     "likes": 24,
//     "createdAt": "2025-01-22T09:00:00+09:00"
//   },
//   {
//     "id": 12,
//     "name": "그룹12",
//     "description": "그룹12 설명",
//     "imageUrl": "",
//     "days": 2,
//     "isPublic": true,
//     "badges": 3,
//     "memories": 15,
//     "likes": 22,
//     "createdAt": "2025-01-23T14:00:00+09:00"
//   },
//   {
//     "id": 14,
//     "name": "그룹14",
//     "description": "그룹14 설명",
//     "imageUrl": "",
//     "days": 6,
//     "isPublic": true,
//     "badges": 1,
//     "memories": 10,
//     "likes": 19,
//     "createdAt": "2025-01-25T12:00:00+09:00"
//   },
//   {
//     "id": 15,
//     "name": "그룹15",
//     "description": "그룹15 설명",
//     "imageUrl": "",
//     "days": 4,
//     "isPublic": true,
//     "badges": 2,
//     "memories": 11,
//     "likes": 28,
//     "createdAt": "2025-01-26T16:30:00+09:00"
//   },
//   {
//     "id": 17,
//     "name": "그룹17",
//     "description": "그룹17 설명",
//     "imageUrl": "",
//     "days": 2,
//     "isPublic": true,
//     "badges": 4,
//     "memories": 13,
//     "likes": 26,
//     "createdAt": "2025-01-28T08:30:00+09:00"
//   },
//   {
//     "id": 19,
//     "name": "그룹19",
//     "description": "그룹19 설명",
//     "imageUrl": "",
//     "days": 3,
//     "isPublic": true,
//     "badges": 1,
//     "memories": 9,
//     "likes": 22,
//     "createdAt": "2025-01-30T12:00:00+09:00"
//   },

//   // 비공개 그룹
//   {
//     "id": 3,
//     "name": "그룹3",
//     "description": "그룹3 설명",
//     "imageUrl": "",
//     "days": 7,
//     "isPublic": false,
//     "badges": 3,
//     "memories": 15,
//     "likes": 30,
//     "createdAt": "2025-01-17T10:00:00+09:00"
//   },
//   {
//     "id": 4,
//     "name": "그룹4",
//     "description": "그룹4 설명",
//     "imageUrl": "",
//     "days": 2,
//     "isPublic": false,
//     "badges": 4,
//     "memories": 20,
//     "likes": 40,
//     "createdAt": "2025-01-17T14:00:00+09:00"
//   },
//   {
//     "id": 5,
//     "name": "그룹5",
//     "description": "그룹5 설명",
//     "imageUrl": "",
//     "days": 3,
//     "isPublic": false,
//     "badges": 1,
//     "memories": 5,
//     "likes": 12,
//     "createdAt": "2025-01-18T08:30:00+09:00"
//   },
//   {
//     "id": 8,
//     "name": "그룹8",
//     "description": "그룹8 설명",
//     "imageUrl": "",
//     "days": 8,
//     "isPublic": false,
//     "badges": 5,
//     "memories": 25,
//     "likes": 50,
//     "createdAt": "2025-01-20T17:45:00+09:00"
//   },
//   {
//     "id": 11,
//     "name": "그룹11",
//     "description": "그룹11 설명",
//     "imageUrl": "",
//     "days": 5,
//     "isPublic": false,
//     "badges": 4,
//     "memories": 18,
//     "likes": 33,
//     "createdAt": "2025-01-22T12:45:00+09:00"
//   },
//   {
//     "id": 13,
//     "name": "그룹13",
//     "description": "그룹13 설명",
//     "imageUrl": "",
//     "days": 3,
//     "isPublic": false,
//     "badges": 5,
//     "memories": 20,
//     "likes": 40,
//     "createdAt": "2025-01-24T10:00:00+09:00"
//   },
//   {
//     "id": 16,
//     "name": "그룹16",
//     "description": "그룹16 설명",
//     "imageUrl": "",
//     "days": 1,
//     "isPublic": false,
//     "badges": 3,
//     "memories": 8,
//     "likes": 15,
//     "createdAt": "2025-01-27T17:00:00+09:00"
//   },
//   {
//     "id": 18,
//     "name": "그룹18",
//     "description": "그룹18 설명",
//     "imageUrl": "",
//     "days": 7,
//     "isPublic": false,
//     "badges": 2,
//     "memories": 18,
//     "likes": 35,
//     "createdAt": "2025-01-29T10:00:00+09:00"
//   },
//   {
//     "id": 20,
//     "name": "그룹20",
//     "description": "그룹20 설명",
//     "imageUrl": "",
//     "days": 4,
//     "isPublic": false,
//     "badges": 2,
//     "memories": 10,
//     "likes": 18,
//     "createdAt": "2025-01-31T13:30:00+09:00"
//   }
// ];

// const GroupListPage = () => {
//   const navigate = useNavigate();
//   const [isPublic, setIsPublic] = useState(true);  // 공개 상태
//   const [visibleGroups, setVisibleGroups] = useState(8);
//   const [sortOrder, setSortOrder] = useState('latest');

//   const publicGroups = groups.filter(group => group.isPublic);
//   const privateGroups = groups.filter(group => !group.isPublic);

//   const filteredGroups = isPublic ? publicGroups : privateGroups;

//   //날짜 계산
//   const calculateDaysAgo = (createdAt) => {
//     const createdDate = new Date(createdAt);
//     const currentDate = new Date();
//     const timeDifference = currentDate - createdDate; 
//     const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//     return daysAgo >= 0 ? daysAgo : 0;
//   };

//   // 정렬
//   const sortedGroups = [...filteredGroups].sort((a, b) => {
//     if (sortOrder === 'latest') {
//       const daysAgoA = calculateDaysAgo(a.createdAt);
//       const daysAgoB = calculateDaysAgo(b.createdAt);
//       return daysAgoA - daysAgoB;
//     }

//     if (sortOrder === 'likes') {
//       if (b.likes === a.likes) {
//         const daysAgoA = calculateDaysAgo(a.createdAt);
//         const daysAgoB = calculateDaysAgo(b.createdAt);
//         return daysAgoA - daysAgoB;
//       }
//       return b.likes - a.likes;
//     }

//     if (sortOrder === 'comments') {
//       if (b.comments === a.comments) {
//         const daysAgoA = calculateDaysAgo(a.createdAt);
//         const daysAgoB = calculateDaysAgo(b.createdAt);
//         return daysAgoA - daysAgoB;
//       }
//       return b.comments - a.comments;
//     }
//     return 0;
//   });

//   const groupsToDisplay = sortedGroups.slice(0, visibleGroups);

//   const renderEmptyState = () => (
//     <G.EmptyState>
//       <G.Icon src={emptyImg} alt="No Groups" />
//       <G.Message>
//         {isPublic ? "등록된 공개 그룹이 없습니다." : "게시된 추억이 없습니다."}
//       </G.Message>
//       <G.SubMessage>
//         {isPublic ? "가장 먼저 그룹을 만들어보세요!" : "첫 번째 추억을 올려보세요!"}
//       </G.SubMessage>
//       <G.CreateButton>
//         {isPublic ? "그룹 만들기" : "추억 만들기"}
//       </G.CreateButton>
//     </G.EmptyState>
//   );

//   const loadMoreGroups = () => {
//     setVisibleGroups(prevVisibleGroups => prevVisibleGroups + 4);
//   };

//   useEffect(() => {
//     setVisibleGroups(8);
//   }, [isPublic]);

//   return (
//     <G.Container>
//       <Header />

//       {/* Search 컴포넌트에 전달 */}
//       <Search setIsPublic={setIsPublic} isPublic={isPublic} setSortOrder={setSortOrder} />

//       {/* 그룹 목록 */}
//       {groupsToDisplay.length === 0 ? renderEmptyState() : (
//         <G.GroupList>
//           {groupsToDisplay.map((group) => {
//             const daysAgo = calculateDaysAgo(group.createdAt);
//             return (
//               <G.CardWrapper 
//               onClick={() => {
//                 console.log("클릭됨:", group.name); // 클릭 이벤트 확인용 로그 추가
//                 if (!group.isPublic) {
//                   navigate(`/groups/${group.id}/verify-password`); // 비공개 그룹 클릭 시 이동
//                 }
//             }}
//             >
//               <Card 
//                 key={group.id} 
//                 groupData={{ 
//                 ...group, 
//                 daysAgo, 
//                 badges: group.badges
//               }}
//               />
//               </G.CardWrapper>
//             );
//           })}
//         </G.GroupList>
//       )}

//       {/* 더보기 버튼 */}
//       {groupsToDisplay.length > 0 && filteredGroups.length > visibleGroups && (
//         <MoreButton onClick={loadMoreGroups}>더보기</MoreButton>
//       )}
//     </G.Container>
//   );
// };

// export default GroupListPage;

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
      const response = await fetch(`http://localhost:3000/api/groups?page=${reset ? 1 : page}&pageSize=10`);
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
        {isPublic ? "등록된 공개 그룹이 없습니다." : "게시된 추억이 없습니다."}
      </G.Message>
      <G.SubMessage>
        {isPublic ? "가장 먼저 그룹을 만들어보세요!" : "첫 번째 추억을 올려보세요!"}
      </G.SubMessage>
      <G.CreateButton>
        {isPublic ? "그룹 만들기" : "추억 만들기"}
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
