import styled from "styled-components";

// GroupListPage 관련 스타일

export const Container = styled.div`
  padding: 20px;
  max-width: 100%;
  margin: 200px;
`;

export const CardWrapper = styled.div`
`;

// 데이터 X
export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


// empty 아이콘
export const Icon = styled.img`
  width: 100px;
  margin-top: 250px;
  margin-bottom: 20px;
`;

export const Message = styled.p`
  font-size: 18px;
  color: #8d8d8d;
  line-height: 1.2;
`;

export const SubMessage = styled.p`
  font-size: 14px;
  color: #b8b8b8;
  margin-top: 5px;
  margin-bottom: 100px;
`;

export const CreateButton = styled.button`
  width: 400px;
  height: 50px;
  font-size: 16px;
  background-color: #282828;
  color: #fafafa;
  border: none;
  border-radius: 5px;
  margin-bottom: 180px;
  cursor: pointer;

  &:hover {
    background-color: #282828;
  }
`;

export const GroupList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 20px;
  margin: 50px 0;
`;

export const InfoWrapper = styled.div`
position: static;  
top: 30px;
margin-bottom: 120px;
padding-bottom: 120px;
border-bottom: 1px solid #DDDDDD;
`
export const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: -3%;
  color: #282828;
`
export const Button = styled.button`
    position: absolute;
    width: 200px;
    height: 45px;
    font-size : 16px;
    text-align: center;
    background-color: #282828;
    color: white;
    border-radius: 6px;
    cursor: pointer;
    top: 55px;
    right: 1px;
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 60px;
`