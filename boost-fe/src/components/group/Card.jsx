import React from "react";
import PropTypes from "prop-types";
import * as C from "./CardStyle";
import flowerIcon from "../../assets/flower.svg";
import defaultImg from "../../assets/img1.png";

const Card = ({ groupData }) => {
  if (!groupData) return null; // groupData가 없을 경우 렌더링 방지

  return (
    <C.Card>
      {/* 비공개 그룹일 때는 그룹 이미지를 제공하지 않음 */}
      {groupData.isPublic && (
        <C.ImageWrapper>
          <C.GroupImage
            src={groupData.imageUrl ? groupData.imageUrl : defaultImg}
            alt={groupData.name}
          />
        </C.ImageWrapper>
      )}

      <C.CardContent>
        <C.MetaInfo>
          <C.Date>D+{groupData.daysAgo}</C.Date>
          <C.Bar />
          {/* 공개 그룹 여부 표시 */}
          <C.Privacy>{groupData.isPublic ? "공개" : "비공개"}</C.Privacy>
        </C.MetaInfo>

        <C.GroupTitle>{groupData.name}</C.GroupTitle>

        {/* 공개 그룹에서만 설명을 표시 */}
        {groupData.isPublic && groupData.description && (
          <C.GroupDescription>{groupData.description}</C.GroupDescription>
        )}

        <C.Stats>
          {/* 공개 그룹에서만 배지 표시 */}
          {groupData.isPublic && (
            <C.StatItem>
              획득 배지 <strong>{groupData.badges >= 0 ? groupData.badges : "0"}</strong>
            </C.StatItem>
          )}

          <C.StatItem>
            추억 <strong>{groupData.memories}</strong>
          </C.StatItem>

          <C.StatItem>
            그룹 공감{" "}
            <div>
              <img src={flowerIcon} alt="공감" />
              <strong>{groupData.likes}</strong>
            </div>
          </C.StatItem>
        </C.Stats>
      </C.CardContent>
    </C.Card>
  );
};

Card.propTypes = {
  groupData: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    isPublic: PropTypes.bool,
    imageUrl: PropTypes.string,
    days: PropTypes.number,
    description: PropTypes.string,
    badges: PropTypes.number,
    memories: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Card;