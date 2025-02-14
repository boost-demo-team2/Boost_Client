import PropTypes from "prop-types";
import * as S from "./styled";
import flowerIcon from "../../assets/flower.svg";

const PrivateCard = ({ groupData }) => {
  return (
    <S.Card>
      <S.CardContent>
        <S.MetaInfo>
          <S.Date>D+{groupData.days}</S.Date>
          <S.Bar />
          <S.Privacy>{groupData.isPublic ? "공개" : "비공개"}</S.Privacy>
        </S.MetaInfo>
        <S.GroupTitle>{groupData.name}</S.GroupTitle>
        <S.Stats>
          {groupData.isPublic && (
            <S.StatItem>
              획득 배지 <strong>{groupData.badges}</strong>
            </S.StatItem>
          )}
          <S.StatItem>
            추억 <strong>{groupData.memories}</strong>
          </S.StatItem>
          <S.StatItem>
            그룹 공감{" "}
            <div>
              <img src={flowerIcon} alt="공감" />{" "}
              <strong>{groupData.likes}</strong>
            </div>
          </S.StatItem>
        </S.Stats>
      </S.CardContent>
    </S.Card>
  );
};

PrivateCard.propTypes = {
  groupData: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    days: PropTypes.number.isRequired,
    isPublic: PropTypes.bool.isRequired,
    badges: PropTypes.number,
    memories: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    description: PropTypes.string,
  }).isRequired,
};

export default PrivateCard;
