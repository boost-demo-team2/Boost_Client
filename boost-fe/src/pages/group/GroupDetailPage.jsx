import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Search from "../../components/common/Search";
import PostCard from "../../components/post/PostCard";
import * as G from "../../components/group/styles/GroupStyle";
import emptyImg from "../../assets/empty.svg";
import MoreButton from "../../components/common/Button";
import GroupInfo from "../../components/common/GroupInfo";
import BasicHeader from "../../components/common/BasicHeader";

const groupDetail =
  {
    "id": 1,
    "name": "string",
    "imageUrl": "string",
    "isPublic": true,
    "likeCount": 0,
    "badges": ["badge1", "badge2"],
    "postCount": 0,
    "createdAt": "2024-02-22T07:47:49.803Z",
    "introduction": "string"
  } // 클릭한 그룹의 id가 1 일 때, 해당 id의 데이터만 API로 불러온다.

const post = [
      {
        "id": 1,
        "nickname": "달봉이",
        "title": "달봉이와의 추억",
        "imageUrl": "",
        "tags": [ "string", "string", "string", "string","string", "string", "string", "string" ],
        "location": "string",
        "moment": "2024-02-21",
        "isPublic": true,
        "likeCount": 120,
        "commentCount": 8,
        "createdAt": "2024-02-22T07:47:49.803Z"
      },
      {
        "id": 2,
        "nickname": "개똥이",
        "title": "개똥이와의 추억",
        "imageUrl": "",
        "tags": [ "string", "string" ],
        "location": "string",
        "moment": "2024-02-21",
        "isPublic": true,
        "likeCount": 0,
        "commentCount": 0,
        "createdAt": "2024-02-22T07:47:49.803Z"
      },
      {
        "id": 3,
        "nickname": "달봉이",
        "title": "달봉이와의 추억",
        "imageUrl": "",
        "tags": [ "string", "string" ],
        "location": "string",
        "moment": "2024-02-21",
        "isPublic": true,
        "likeCount": 0,
        "commentCount": 0,
        "createdAt": "2024-02-22T07:47:49.803Z"
      },
      {
        "id": 4,
        "nickname": "개똥이",
        "title": "개똥이와의 추억",
        "imageUrl": "",
        "tags": [ "string", "string" ],
        "location": "string",
        "moment": "2024-02-21",
        "isPublic": true,
        "likeCount": 0,
        "commentCount": 0,
        "createdAt": "2024-02-22T07:47:49.803Z"
      },
];

const GroupDetailPage = () => {
  const navigate = useNavigate();
  const [isPublic, setIsPublic] = useState(true); // 공개 상태
  const [posts, setPosts] = useState(post); // 서버에서 가져온 포스트 데이터 저장은 []
  const [page, setPage] = useState(1); // 현재 페이지
  const [sortOrder, setSortOrder] = useState("latest");
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태
  const [keyword, setKeyword] = useState("");
  const { groupId } = useParams();

  // const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

  // const fetchPosts = async (reset = false) => {
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch(
  //       `${API_URL}/api/${groupId}/posts?page=${reset ? 1 : page}&pageSize=10`,
  //       {
  //         headers: {
  //           Accept: "application/json",
  //         },
  //       }
  //     );

  //     console.log(
  //       "API 요청 URL:",
  //       `${API_URL}/api/${groupId}/posts?page=${reset ? 1 : page}&pageSize=10`
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
  //       console.error("post 데이터가 올바르지 않음:", data);
  //       return;
  //     }

  //     setPosts(data.data); // 서버 그룹 데이터 저장
  //     console.log("setPosts() 실행 완료", data.data);

  //     if (reset) setPage(2);
  //     else setPage((prevPage) => prevPage + 1);
  //   } catch (error) {
  //     console.error("API 요청 오류:", error); // 오류 확인용 로그 추가
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   console.log("현재 posts 데이터 상태:", posts);
  // }, [posts]);

  // 공개 그룹 & 비공개 그룹 필터링, 검색 기능
  const filteredPosts = (posts || []).filter(
    (post) => Boolean(post.isPublic) === Boolean(isPublic) && post.title.toLowerCase().includes(keyword.toLowerCase()) );

  // // `filteredPosts` 상태 확인
  // useEffect(() => {
  //   console.log("현재 filteredPosts 데이터 상태:", filteredPosts);
  // }, [filteredPosts]);

  const calculateDaysAgo = (createdAt) => {
    const createdDate = new Date(createdAt);
    const currentDate = new Date();
    const timeDifference = currentDate - createdDate;
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  };
  

  // 정렬 로직
  const sortedPosts = [...filteredPosts].sort((a, b) => {
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
      <G.Icon src={emptyImg} alt="No Posts" />
      <G.Message>"게시된 추억이 없습니다."</G.Message>
      <G.SubMessage>"첫번째 추억을 올려보세요!"</G.SubMessage>
      <G.CreateButton>추억 올리기</G.CreateButton>
    </G.EmptyState>
  );  

  // const convertImageUrl = (url) => {
  //   if (!url) return ""; // URL이 없는 경우 빈 문자열 반환
  //   if (url.startsWith("http")) return url; // 이미 절대경로면 그대로 사용
  //   return `${API_URL}${url}`; // 상대경로라면 절대경로로 변환
  // };
  

  return (
    <G.Container>
      <BasicHeader />
      <G.InfoWrapper>
        <GroupInfo />
      </G.InfoWrapper>
      <G.TitleWrapper>
        <G.Title>추억 목록</G.Title>
        <G.Button onClick={() => navigate(`/groups/${groupId}/posts`)}>추억 올리기</G.Button>
      </G.TitleWrapper>
      <Search
        keyword={keyword}
        onSearch={setKeyword}
        setIsPublic={setIsPublic}
        isPublic={isPublic}
        setSortOrder={setSortOrder}
        placeholder="제목을 입력하세요."
      />
      {sortedPosts.length === 0 ? (
        renderEmptyState()
      ) : (
        <G.GroupList>
          {sortedPosts.map((post) => {
            const daysAgo = calculateDaysAgo(post.createdAt);
            // const fullImageUrl = convertImageUrl(group.imageUrl);
            return (
              <G.CardWrapper
                key={post.id}
                onClick={() => {
                  if (!post.isPublic) {
                    navigate(`/api/posts/${post.id}/verify-password`); // 비공개 추억 클릭 시 이동
                  }
                }
              }
              >
                <PostCard
                  postData={post
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
      {!isLoading && posts.length > 0 && (
        <MoreButton onClick={() => fetchPosts()}>더보기</MoreButton>
      )}
    </G.Container>
  );
};

export default GroupDetailPage;