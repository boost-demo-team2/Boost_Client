import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "../styles/PostDetailStyle";
import BasicHeader from "../components/common/BasicHeader";

const PostDetailPage = () => {
  const { postId } = useParams(); // URL에서 postId 가져오기
  const [postData, setPostData] = useState(null); // 게시글 데이터
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 에러 상태

  // ✅ 게시글 상세 정보 불러오기
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/${postId}`);
        if (!response.ok) throw new Error("게시글을 불러오는 데 실패했습니다.");
        const data = await response.json();
        setPostData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (loading) return <p>게시글을 불러오는 중...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <S.Container>
      {postData && (
        <>
        <BasicHeader/>
        <S.Nickname>{postData.nickname}</S.Nickname>
        <S.IsPublic>{postData.isPublic ? "공개" : "비공개"}</S.IsPublic>
        <S.PostEdit>추억 수정하기</S.PostEdit>
        <S.PostDelete>추억 삭제하기</S.PostDelete>
          <S.Title>{postData.title}</S.Title>
          <S.MetaInfo>
            <span>{postData.location} · {new Date(postData.createdAt).toLocaleString()}</span>
            <span>❤️ {postData.likeCount} · 💬 {postData.commentCount}</span>
          </S.MetaInfo>
          <S.LikeButton>공감 보내기</S.LikeButton>
          <S.PostImage>
            {postData.imageUrl && <S.Image src={postData.imageUrl} alt="게시글 이미지" />}
          </S.PostImage>
          <S.Content>{postData.content}</S.Content>
          
          {/* ✅ 댓글 등록 버튼 */}
          <S.CommentButton onClick={() => console.log("댓글 등록 버튼 클릭됨")}>
            댓글 등록하기
          </S.CommentButton>
        </>
      )}
    </S.Container>
  );
};

export default PostDetailPage;





// import React, { useEffect, useState } from "react";
// import "./CommentList.css"; // 스타일 적용

// const CommentList = ({ postId }) => {
//   const [comments, setComments] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const commentsPerPage = 3; // 한 페이지당 표시할 댓글 수

//   const [nickname, setNickname] = useState("");
//   const [password, setPassword] = useState("");
//   const [content, setContent] = useState("");

//   // ✅ Mock Data (가짜 댓글 데이터 5개)
//   const mockComments = [
//     { commentId: 1, nickname: "김철수", content: "정말 멋진 경험이네요!", createdAt: "2024-02-21 10:00" },
//     { commentId: 2, nickname: "이영희", content: "낚시 좋아하는데 저도 가보고 싶어요!", createdAt: "2024-02-21 11:30" },
//     { commentId: 3, nickname: "박지성", content: "와 60cm면 엄청 크네요!", createdAt: "2024-02-21 13:45" },
//     { commentId: 4, nickname: "손흥민", content: "바다 풍경이 너무 좋네요~", createdAt: "2024-02-21 15:00" },
//     { commentId: 5, nickname: "정대세", content: "월척 축하드립니다! 🎣", createdAt: "2024-02-21 16:10" },
//   ];

//   // ✅ API 대신 Mock Data를 바로 적용
//   useEffect(() => {
//     setComments(mockComments);
//   }, []);

//   // 댓글 등록
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!nickname || !password || !content) {
//       alert("닉네임, 비밀번호, 내용을 입력해주세요.");
//       return;
//     }

//     const newComment = {
//       commentId: comments.length + 1,
//       nickname,
//       content,
//       createdAt: new Date().toISOString().slice(0, 16).replace("T", " "), // 날짜 포맷 변환
//     };

//     setComments((prev) => [...prev, newComment]); // 새 댓글 추가
//     setNickname("");
//     setPassword("");
//     setContent("");
//     alert("댓글이 등록되었습니다.");
//   };

//   // 페이지네이션을 위한 인덱스 계산
//   const indexOfLastComment = currentPage * commentsPerPage;
//   const indexOfFirstComment = indexOfLastComment - commentsPerPage;
//   const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);

//   return (
//     <div className="comment-section">
//       <h2 className="comment-title">댓글 {comments.length}</h2>

//       {/* 댓글 등록 폼 */}
//       <form onSubmit={handleSubmit} className="comment-form">
//         <input
//           type="text"
//           placeholder="닉네임"
//           value={nickname}
//           onChange={(e) => setNickname(e.target.value)}
//           className="input-field"
//         />
//         <input
//           type="password"
//           placeholder="비밀번호"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="input-field"
//         />
//         <textarea
//           placeholder="댓글을 입력하세요"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           className="textarea-field"
//         />
//         <button type="submit" className="submit-button">댓글 등록하기</button>
//       </form>

//       {/* 댓글 목록 */}
//       {currentComments.length > 0 ? (
//         <ul className="comment-list">
//           {currentComments.map((comment) => (
//             <li key={comment.commentId} className="comment-item">
//               <div className="comment-header">
//                 <span className="comment-author">{comment.nickname}</span>
//                 <span className="comment-date">{comment.createdAt}</span>
//               </div>
//               <p className="comment-content">{comment.content}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p className="no-comments">댓글이 없습니다.</p>
//       )}

//       {/* 페이지네이션 */}
//       {comments.length > commentsPerPage && (
//         <div className="pagination">
//           {Array.from({ length: Math.ceil(comments.length / commentsPerPage) }, (_, i) => (
//             <button
//               key={i + 1}
//               className={`page-button ${currentPage === i + 1 ? "active" : ""}`}
//               onClick={() => setCurrentPage(i + 1)}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CommentList;