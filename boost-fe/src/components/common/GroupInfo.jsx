import { useState } from "react";
import GroupEditModal from "./GroupEditModal";
import GroupDeleteModal from "./GroupDeleteModal";
import * as G from "./GroupInfoStyle";
import flower from "../../assets/flower.svg";

function GroupInfo() {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const group = [
    {
      id: 1,
      name: "너구리와 라쿤과 레서판다.",
      imageUrl: "https://img.freepik.com/premium-photo/baby-raccoon-procyon-lotor-white-isolated_191971-10155.jpg",
      isPublic: true,
      likeCount: 0,
      badges: ["너구리제왕 등극", "라쿤 솜사탕씻기 대회 1등"],
      postCount: 0,
      createdAt: "2024-02-22T07:47:49.803Z",
      introduction: "안녕하세요 저는 너구리입니다. 안녕하세요 저는 너구리입니다. 안녕하세요 저는 너구리입니다. 안녕하세요 저는 너구리입니다. 안녕하세요 저는 너구리입니다. 안녕하세요 저는 너구리입니다. ..........너구리 처음보세요?"
    } // 클릭한 그룹의 id가 1 일 때, 해당 id의 데이터만 API로 불러온다.
  ]

  const currentGroup = group[0]; // group 데이터가 하나일 때, 0번째 인덱스를 사용

  const calculateDays = (createdAt) => {
    const createdDate = new Date(createdAt);
    const today = new Date();
    const timeDifference = today - createdDate;

    const dayDifference = Math.floor(Math.abs(timeDifference) / (1000 * 60 * 60 * 24));
    return dayDifference;
  };

  return (
    <G.InfoWrapper>
      <div>
        <G.ImgContainer>
          <G.Img src={currentGroup.imageUrl || ""} alt="Group Image" />
        </G.ImgContainer>
      </div>
      <div>
        <G.DetailContainer>
          <G.Div>
            <G.Day>D+{calculateDays(currentGroup.createdAt) || ""}</G.Day>
            <G.Line>|</G.Line>
            <G.IsPublic>{currentGroup.isPublic ? "공개" : "비공개"}</G.IsPublic>
          </G.Div>
          <G.Div>
            <G.GroupEditButton onClick={() => setEditModalOpen(true)}>그룹 정보 수정하기</G.GroupEditButton>
            {editModalOpen && <GroupEditModal setEditModalOpen={setEditModalOpen} />}
            <G.GroupDeleteButton onClick={() => setDeleteModalOpen(true)}>그룹 삭제하기</G.GroupDeleteButton>
            {deleteModalOpen && <GroupDeleteModal setDeleteModalOpen={setDeleteModalOpen} />}
          </G.Div>
        </G.DetailContainer>
        <G.TitleContainer>
          <G.Title>{currentGroup.name || "그룹이름"}</G.Title>
          <G.Div>
            <G.PostCount>추억 {currentGroup.postCount}</G.PostCount>
            <G.Line>|</G.Line>
            <G.LikeCount>그룹 공감 {currentGroup.likeCount}</G.LikeCount>
          </G.Div>
        </G.TitleContainer>
        <G.ContentContainer>{currentGroup.introduction || "소개 내용이 없습니다."}</G.ContentContainer>
        <G.BottomContainer>
          <G.BadgeTitle>획득 배지</G.BadgeTitle>
          <G.DivBottom>
            <G.Div>
              {currentGroup.badges.map((badge, id) => {
                return <G.Badge key={id}>{badge}</G.Badge>
              })}
            </G.Div>
            <G.Div>
              <G.LikeButton><G.Icon src={flower} />공감 보내기</G.LikeButton>
            </G.Div>
          </G.DivBottom>
        </G.BottomContainer>
      </div>
    </G.InfoWrapper>
  );
}
export default GroupInfo;