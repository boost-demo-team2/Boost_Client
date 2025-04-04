import styled from "styled-components";

export const MainTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 30.05px;
  letter-spacing: -0.03em;
  text-align: center;
  margin-bottom: 40px;
`
export const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

`
export const ModalContainer = styled.div`
  box-sizing: border-box;
  width: 480px;
  height: 840px;
  padding: 40px;
  border-radius: 6px;
  opacity: 0px;
  background: #FAFAFA;
`
export const Title = styled.div`
font-size: 16px;
font-weight: 500;
line-height: 20.03px;
letter-spacing: -0.03em;
text-align: left;
padding-bottom: 10px;
`
export const GroupTitleText = styled.input`
  box-sizing: border-box;
  width: 400px;
  height: 45px;
  border-radius: 6px;
  background: #FAFAFA;
  border: 1px solid #DDDDDD;
  margin-bottom: 40px;
  padding-left: 10px;
`
export const ImgInput = styled.input`
  box-sizing: border-box;
  margin-bottom: 40px;
  width: 290px;
  height: 44px;
  border-radius: 6px;
  border-width: 1px;
  background: #FAFAFA;
  border: 1px solid #DDDDDD;
  margin-right: 8px;
  padding-left: 10px;

` 
export const ImgLabel = styled.label`
  padding: 13px 17px;
  border-radius: 6px;
  border: 1px solid #282828;
  `
export const GroupContentText = styled.input`
  box-sizing: border-box;
  width: 400px;
  height: 120px;
  border-radius: 6px;
  background: #FAFAFA;
  border: 1px solid #DDDDDD;
  margin-bottom: 40px;
  padding-left: 10px;
`
export const ToggleContainer = styled.div`
  margin-bottom: 40px;
`
export const ToggleLabel = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 17.53px;
  letter-spacing: -3%;
`
export const ToggleSwitch = styled.input``

export const PasswordInput = styled.input`
  width: 400px;
  height: 45px;
  border-radius: 6px;
  opacity: 0px;
  background: #FAFAFA;
  border: 1px solid #DDDDDD;
  margin-bottom: 60px;
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
export const ModalCloseButton = styled.img`
      display: position;
      position: absolute;
      width:30px;
      height:30px;
      top:20px;
      right:20px;
`