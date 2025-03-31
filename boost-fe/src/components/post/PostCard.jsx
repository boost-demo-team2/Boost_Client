import React from "react";
import PropTypes from "prop-types";
import * as C from "../group/styles/CardStyle";
import flowerIcon from "../../assets/flower.svg";
import defaultImg from "../../assets/img1.png";
import commentIcon from "../../assets/comment.svg";

const PostCard = ({ postData }) => {
  if (!postData) return null; // groupData가 없을 경우 렌더링 방지

  const formatDate = (date) => {
    const [year, month, day] = date.split("-");
    return `${year.slice(2)}.${month}.${day}`
  }

  return (
    <C.Card>
      {/* 비공개 그룹일 때는 그룹 이미지를 제공하지 않음 */}
      {postData.isPublic && (
        <C.ImageWrapper>
          <C.GroupImage
            src={postData.imageUrl ? postData.imageUrl : defaultImg}
            alt={postData.name}
          />
        </C.ImageWrapper>
      )}

      <C.CardContent>
        <C.MetaInfo>
          <C.Date>{postData.nickname}</C.Date>
          <C.Bar />
          {/* 공개 그룹 여부 표시 */}
          <C.Privacy>{postData.isPublic ? "공개" : "비공개"}</C.Privacy>
        </C.MetaInfo>
        <C.GroupTitle>{postData.title}</C.GroupTitle>
        {/* 공개 그룹에서만 설명을 표시 */}
        {postData.isPublic && postData.description && (
          <C.GroupDescription>{postData.title}</C.GroupDescription>
        )}
        {/* 공개 그룹에서만 배지 표시 */}
        { postData.isPublic && (
          <C.TagItem>
            {postData.tags.length >= 0 ? postData.tags.map((tag) => {
              return <C.Tag key={tag}>#{tag}</C.Tag>
            }) : ""}
          </C.TagItem>
        )}
        <C.BottomContainer>
          <C.BottomWrapper>
            <C.BottomContent>{postData.nickname}</C.BottomContent>
            <C.BottomContent>·</C.BottomContent>
            <C.BottomContent>{formatDate(postData.moment)}</C.BottomContent>
          </C.BottomWrapper>
          <C.BottomWrapper>
            <C.Icon src={flowerIcon} />
            <C.IconText>{postData.likeCount}</C.IconText>
            <C.Icon src={commentIcon} />
            <C.IconText>{postData.commentCount}</C.IconText>
          </C.BottomWrapper>
        </C.BottomContainer>
      </C.CardContent>
    </C.Card>
  );
};

PostCard.propTypes = {
  postData: PropTypes.shape({
    id: PropTypes.number,
    nickname: PropTypes.string,
    title: PropTypes.string,
    isPublic: PropTypes.bool,
    imageUrl: PropTypes.string,
    location: PropTypes.string,
    tags: PropTypes.string,
    memories: PropTypes.number,
    moment: PropTypes.string,
    likeCount: PropTypes.number,
    commentCount: PropTypes.number,
  }),
};

export default PostCard;