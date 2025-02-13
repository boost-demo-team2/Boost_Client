import * as S from "../group/styled"
import * as G from "./AccessModalStyle"

export default function PostAccessModal ({ onClose }) {
  return (
    <G.ModalOverlay>
      <G.ModalContainer>
        <G.Message>비공개 추억 접근 실패</G.Message>
        <G.Text>비밀번호가 일치하지 않습니다.</G.Text>
        <S.SubmitButton onClick={onClose} >확인</S.SubmitButton>
      </G.ModalContainer>
    </G.ModalOverlay>
  )
}