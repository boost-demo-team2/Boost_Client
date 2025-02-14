import Header from "../components/common/Header";
import Search from "../components/common/Search";
import GroupCard from "../components/group/GroupCard";
import * as styled from "../components/group/styled";
import emptytImg from "../assets/empty.svg";

const groups = [
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
        id: 3,
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
        id: 4,
        name: "그룹1",
        description: "그룹1 설명",
        imageUrl: "",
        days: 5,
        isPublic: false,
        badges: 3,
        memories: 10,
        likes: 50,
    },
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
      id: 3,
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
      id: 4,
      name: "그룹1",
      description: "그룹1 설명",
      imageUrl: "",
      days: 5,
      isPublic: false,
      badges: 3,
      memories: 10,
      likes: 50,
  },
];

const PublicGroupListPage = () => {
    return (
      <styled.Container>
        <Header />
        <Search />
        {groups.length === 0 ? (
          <styled.EmptyState>
            <styled.Icon src={emptytImg} alt="No Groups" />
            <styled.Message>등록된 공개 그룹이 없습니다.</styled.Message>
            <styled.SubMessage>가장 먼저 그룹을 만들어보세요!</styled.SubMessage>
            <styled.CreateGroupButton>그룹 만들기</styled.CreateGroupButton>
          </styled.EmptyState>
        ) : (
          <styled.GroupList>
            {groups.map((group) => (
              <GroupCard key={group.id} groupData={group} />
            ))}
          </styled.GroupList>
        )}
      </styled.Container>
    );
  };
  
  export default PublicGroupListPage;