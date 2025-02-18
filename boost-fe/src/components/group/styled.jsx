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
    margin-bottom: 20px;
    color: #282828;
`

export const SubmitButton = styled.button`
    width: 100%;
    padding: 12px;
    font-size: 16px;
    background-color: black;
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
    margin-bottom: 5px;
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