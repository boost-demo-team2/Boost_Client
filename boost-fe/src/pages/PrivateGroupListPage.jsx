import Header from "../components/common/Header";
import Search from "../components/common/Search";
import PrivateGroup from "../components/group/PrivateGroup";
import * as styled from "../components/group/styled";

const groups = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        isPublic: false,
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
        isPublic: false,
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
        isPublic: false,
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

const PrivateGroupListPage = () => {
    return (
        <styled.Container>
        <Header />
        <Search />
        <styled.GroupList>
            {groups.map((group) => (
              <PrivateGroup key={group.id} groupData={group} />
            ))}
        </styled.GroupList>
      </styled.Container>
    );
};

export default PrivateGroupListPage;
