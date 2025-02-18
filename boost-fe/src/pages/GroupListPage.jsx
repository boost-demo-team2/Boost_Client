import React, { useState } from "react";
import Header from "../components/common/Header";
import Search from "../components/common/Search";
import Card from "../components/group/Card";
import * as G from "../components/group/GroupStyle";
import emptyImg from "../assets/empty.svg";
import MoreButton from "../components/common/Button";

const groups = [
  // 공개 그룹
  {
    id: 1,
    name: "그룹1",
    description: "그룹1 설명",
    imageUrl: "",
    days: 5,
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
    days: 7,
    isPublic: true,
    badges: 2,
    memories: 5,
    likes: 30,
  },
  {
    id: 3,
    name: "그룹3",
    description: "그룹3 설명",
    imageUrl: "",
    days: 10,
    isPublic: true,
    badges: 4,
    memories: 20,
    likes: 60,
  },
  {
    id: 4,
    name: "그룹4",
    description: "그룹4 설명",
    imageUrl: "",
    days: 15,
    isPublic: true,
    badges: 5,
    memories: 25,
    likes: 40,
  },
  {
    id: 5,
    name: "그룹5",
    description: "그룹5 설명",
    imageUrl: "",
    days: 3,
    isPublic: true,
    badges: 1,
    memories: 5,
    likes: 15,
  },
  {
    id: 6,
    name: "그룹6",
    description: "그룹6 설명",
    imageUrl: "",
    days: 4,
    isPublic: true,
    badges: 2,
    memories: 7,
    likes: 20,
  },
  {
    id: 7,
    name: "그룹7",
    description: "그룹7 설명",
    imageUrl: "",
    days: 6,
    isPublic: true,
    badges: 3,
    memories: 10,
    likes: 30,
  },
  {
    id: 8,
    name: "그룹8",
    description: "그룹8 설명",
    imageUrl: "",
    days: 8,
    isPublic: true,
    badges: 4,
    memories: 15,
    likes: 35,
  },
  // 비공개 그룹
  {
    id: 9,
    name: "그룹9",
    description: "그룹9 설명",
    imageUrl: "",
    days: 9,
    isPublic: false,
    badges: 2,
    memories: 5,
    likes: 25,
  },
  {
    id: 10,
    name: "그룹10",
    description: "그룹10 설명",
    imageUrl: "",
    days: 11,
    isPublic: false,
    badges: 1,
    memories: 10,
    likes: 10,
  },
  {
    id: 11,
    name: "그룹11",
    description: "그룹11 설명",
    imageUrl: "",
    days: 13,
    isPublic: false,
    badges: 3,
    memories: 15,
    likes: 40,
  },
  {
    id: 12,
    name: "그룹12",
    description: "그룹12 설명",
    imageUrl: "",
    days: 17,
    isPublic: false,
    badges: 4,
    memories: 20,
    likes: 50,
  },
];

const GroupListPage = () => {
  const [isPublic, setIsPublic] = useState(true);  // 공개 상태
  const [visibleGroups, setVisibleGroups] = useState(8);

  const publicGroups = groups.filter(group => group.isPublic);
  const privateGroups = groups.filter(group => !group.isPublic);

  const filteredGroups = isPublic ? publicGroups : privateGroups;  
  const groupsToDisplay = filteredGroups.slice(0, visibleGroups);  

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

  const loadMoreGroups = () => {
    setVisibleGroups(visibleGroups + 4);
  };

  return (
    <G.Container>
      <Header />

      <Search setIsPublic={setIsPublic} isPublic={isPublic} /> 

      {/* 그룹 목록 */}
      {groupsToDisplay.length === 0 ? renderEmptyState() : (
        <G.GroupList>
          {groupsToDisplay.map((group) => (
            <Card key={group.id} groupData={group} />
          ))}
        </G.GroupList>
      )}

      {/* 더보기 버튼 */}
      <MoreButton onClick={loadMoreGroups}>더보기</MoreButton>
    </G.Container>
  );
};

export default GroupListPage;
