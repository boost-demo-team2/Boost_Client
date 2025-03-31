import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #FAFAFA;

`
export const AccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  width: 400px;
  gap: 10px;
`
export const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 30.05px;
  letter-spacing: -0.03em;
  text-align: center;
  margin-bottom: 10px;
`
export const Text = styled.div`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.03em;
  text-align: center;
  margin-bottom: 50px;
`
export const Label = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 20.03px;
  letter-spacing: -0.03em;
  text-align: left;
`
export const PasswordInput = styled.input`
  box-sizing: border-box;
  padding-left: 20px;
  width: 100%;
  height: 45px;
  border-radius: 6px;
  border: 1px solid #DDDDDD;
  margin-bottom: 50px;
`