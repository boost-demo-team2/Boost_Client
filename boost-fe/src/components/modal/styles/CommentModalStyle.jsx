import styled from "styled-components";

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
  height: 700px;
  padding: 40px;
  border-radius: 6px;
  opacity: 0px;
  background: #FAFAFA;
`
export const MainTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 30.05px;
  letter-spacing: -0.03em;
  text-align: center;
  margin-bottom: 40px;
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
export const GroupContentText = styled.input`
  box-sizing: border-box;
  width: 400px;
  height: 160px;
  border-radius: 6px;
  background: #FAFAFA;
  border: 1px solid #DDDDDD;
  margin-bottom: 40px;
  padding-left: 10px;
`
export const PasswordInput = styled.input`
  width: 400px;
  height: 45px;
  border-radius: 6px;
  border-width: 1px;
  background: #FAFAFA;
  border: 1px solid #DDDDDD;
`