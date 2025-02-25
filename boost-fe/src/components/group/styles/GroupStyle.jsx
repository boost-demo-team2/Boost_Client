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
