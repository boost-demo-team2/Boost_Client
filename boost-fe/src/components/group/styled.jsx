import {styled} from "styled-components";

export const GroupContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    margin: 100px auto 0;
    padding: 30px;
`

export const Title = styled.h2`
    font-size: 24px;
    font-weight: bold;
    margin botton: 20px;
    color: #282828;
`

export const SubmitButton = styled.button`
    width: 100%;
    padding: 12px;
    font-size: 16px;
    background-color: #282828;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: #333;
    }
`

export const ToggleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 15px;
`
export const ToggleLabel = styled.span`
    font-size: 14px;
    color: #282828;
`
export const ToggleTitle = styled.h2`
    font-size: 16px;
    font-weight: bold;
    margin botton: 5px;
    color: #282828;
`
export const ToggleSwitch = styled.label`
    position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  
  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  & span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    border-radius: 20px;
    transition: 0.4s;
  }

  & span:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }

  & input:checked + span {
    background-color: black;
  }

  & input:checked + span:before {
    transform: translateX(20px);
  }
`

export const TagContainer = styled.div`
  display : flex;
  flex-wrap : wrap;
  gap: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f5f5f5;
`
export const Tag = styled.div`
  background-color: #e0e0e0;
  color: black;
  padding: 5px 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #3a3a3a;
    color: white;
  }
`
export const TagInput = styled.input`
  border: none;
  outline: none;
  padding: 5px;
  font-size: 14px;
  background: transparent;
  flex-grow: 1;
  color : black;
`
export const RemoveButton = styled.span`
  cursor: pointer;
  margin-left: 5px;
  font-weight: bold;
`

// PublicGroupListPage 관련 스타일
export const Container = styled.div`
  padding: 20px;
  max-width: 100%;
  margin: 0 auto;
`;

export const EmptyState = styled.div`
  text-align: center;
  margin-top: 50px;
`;

export const Icon = styled.img`
  width: 150px;
  margin-bottom: 20px;
`;

export const Message = styled.p`
  font-size: 18px;
  color: #8d8d8d;
  line-height: 1.5;
`;

export const SubMessage = styled.p`
  font-size: 14px;
  color: #b8b8b8;
  margin-bottom: 20px;
`;

export const CreateGroupButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #282828;
  color: #fafafa;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #282828;
  }
`;

export const GroupList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
  margin: 30px 160px;
`;

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