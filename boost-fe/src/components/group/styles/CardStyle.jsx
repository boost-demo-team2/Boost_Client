import styled from "styled-components";

// Card 관련 스타일
export const Card = styled.div`
  width: 100%;
  max-width: 340px;
  background: #fafafa;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-5px);
  } 
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
`;

export const GroupImage = styled.img`
  width: 90%;
  height: 90%;
  border-radius: 5px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 0px 16px;
`;

export const MetaInfo = styled.div`
  display: flex;
  font-size: 14px;
  color: #282828;
  margin-bottom: 6px;
`;

export const Bar = styled.div`
  border-left: 1px solid #B8B8B8;
  padding-left: 10px;
  margin-top: 3px;
  height: 16px;
`;

export const Date = styled.div`
  font-weight: bold;
  padding-right: 10px;
`;

export const Privacy = styled.div`
  color: #8D8D8D;
`;

export const GroupTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 6px;
`;

export const GroupDescription = styled.p`
  font-size: 14px;
  color: #282828;
  margin-bottom: 12px;
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding-bottom: 16px;
`;

export const StatItem = styled.div`
  font-size: 14px;
  color: #B8B8B8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;

  img {
    width: 16px;
    height: 16px;
  }

  strong {
    font-weight: bold;
    color: #282828;

  }
`;
export const Tag = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: -3%;
  color: #B8B8B8;
`
export const TagItem = styled.div`
  display: flex;
  gap: 3px 10px;
  flex-wrap: wrap;
`
export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const BottomWrapper = styled.div`
  display: flex;
  padding: 20px 0px 15px 0px;
  gap: 4px;
`
export const BottomContent = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: -3%;
`
export const Icon = styled.img`
  width: 18px;
  height: 18px;
  padding: 0 0 0 10px ;
`
export const IconText = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: -3%;
  color: #8D8D8D;
`