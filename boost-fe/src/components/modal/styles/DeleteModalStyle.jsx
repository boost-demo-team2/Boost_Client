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
  background: white;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 480px;
  height: 335px;
`
export const Message = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 30.05px;
  letter-spacing: -0.03em;
  text-align: center;
`
export const Text = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 20.03px;
  letter-spacing: -0.03em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`
export const PasswordInput = style.input`
width: 400px;
height: 45px;
border-radius: 6px;
border: 1px solid #DDDDDD;
`