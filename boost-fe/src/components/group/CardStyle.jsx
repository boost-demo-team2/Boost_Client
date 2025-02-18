import styled from "styled-components";

// export const Card = styled.div`
//   border-radius: 12px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   padding: 16px;
//   display: flex;
//   flex-direction: column;
//   width: 340px;
//   height: ${({ $isPublic }) => ($isPublic ? "520px" : "330px")};
//   transition: transform 0.2s ease-in-out;
//   overflow: hidden;

//   &:hover {
//     transform: translateY(-5px);
//   }
// `;

// export const ImageWrapper = styled.div`
//   width: 100%;
//   height: 340px; /* 이미지 높이 설정 */
//   overflow: hidden;
//   border-radius: 6px;
//   margin-bottom: 16px;
// `;

// export const GroupImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;


// export const CardContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   flex-grow: 1;
// `;

// export const MetaInfo = styled.div`
//   display: flex;
//   font-size: 14px;
//   color: #282828;
//   margin-bottom: 8px;
// `;

// export const Date = styled.div`
//   font-size: 14px;
//   color: #888;
// `;

// export const Bar = styled.div`
//   border: 1px solid #ddd;
//   height: 100%;
// `;

// export const Privacy = styled.div`
//   font-size: 14px;
//   color: #333;
// `;

// export const GroupTitle = styled.h3`
//   font-size: 18px;
//   margin: 12px 0;
//   color: #333;
// `;

// export const GroupDescription = styled.p`
//   font-size: 14px;
//   color: #555;
// `;

// export const Stats = styled.div`
//   margin-top: 16px;
// `;

// export const StatItem = styled.div`
//   font-size: 14px;
//   margin-bottom: 8px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// export const StatItemImage = styled.img`
//   margin-right: 8px;
// `;


// GroupCard 관련 스타일
export const Card = styled.div`
  //width: 100%;
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
  padding: 16px;
`;

export const MetaInfo = styled.div`
  display: flex;
  font-size: 14px;
  color: #282828;
  margin-bottom: 8px;
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
`;

export const StatItem = styled.div`
  font-size: 14px;
  color: #B8B8B8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;

  img {
    width: 16px;
    height: 16px;
  }

  strong {
    font-weight: bold;
    color: #282828;

  }
`;