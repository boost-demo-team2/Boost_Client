// import styled from "styled-components";

// export const Container = styled.div``
// export const Nickname = styled.div`
// font-weight: 400;
// font-size: 16px;
// line-height: 20.03px;
// letter-spacing: -3%;
// `
// export const IsPublic = styled.div`
// font-weight: 400;
// font-size: 16px;
// line-height: 20.03px;
// letter-spacing: -3%;
// background: #B8B8B8;
// `
// export const PostEdit = styled.div`
// font-family: Spoqa Han Sans Neo;
// font-weight: 400;
// font-size: 14px;
// line-height: 17.53px;
// letter-spacing: -3%;
// text-align: center;
// background: #282828;
// `
// export const PostDelete = styled.div`
// font-family: Spoqa Han Sans Neo;
// font-weight: 400;
// font-size: 14px;
// line-height: 17.53px;
// letter-spacing: -3%;
// text-align: center;
// background: #8D8D8D;
// `
// export const Title = styled.div`
// font-family: Spoqa Han Sans Neo;
// font-weight: 700;
// font-size: 30px;
// line-height: 37.56px;
// letter-spacing: -3%;
// `
// export const MetaInfo = styled.div``
// export const LikeButton = styled.div`
// box-sizing: border-box;
// width: 187px;
// height: 52px;
// border-radius: 6px;
// border-width: 1px;
// padding-top: 15px;
// padding-right: 40px;
// padding-bottom: 15px;
// padding-left: 40px;
// gap: 10px;
// `
// export const PostImage = styled.div`
// width: 780px;
// height: 780px;
// border-radius: 6px;
// `
// export const Content = styled.div`
// font-family: Spoqa Han Sans Neo;
// font-weight: 400;
// font-size: 20px;
// line-height: 28px;
// letter-spacing: -3%;
// background: #282828;
// `
// export const CommentButton = styled.button`
// width: 400px;
// height: 50px;
// border-radius: 6px;
// background: #282828;

import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: "Noto Sans KR", sans-serif;
  color: #333;
`;

export const Nickname = styled.div`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
`;

export const IsPublic = styled.span`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-left: 8px;
`;

export const PostEdit = styled.button`
  background: none;
  border: none;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  margin-right: 10px;
`;

export const PostDelete = styled.button`
  background: none;
  border: none;
  color: #333;
  font-size: 14px;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

export const MetaInfo = styled.div`
  font-size: 14px;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

export const LikeButton = styled.button`
  background: #FAFAFA;
  color: white;
  border: none;
  padding: 10px 16px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: #005bb5;
  }
`;

export const PostImage = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 10px;
`;

export const Content = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  margin-bottom: 30px;
`;

export const CommentButton = styled.button`
  width: 100%;
  background: black;
  color: white;
  font-size: 16px;
  padding: 12px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;