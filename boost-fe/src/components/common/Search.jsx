import React, { useState, useEffect } from "react";
import search from "../../assets/search.svg";
import * as S from "./Styled";

const Search = ({ setIsPublic, isPublic, setSortOrder, onSearch, keyword }) => {

  const handleKeywordChange = (e) => {
    onSearch(e.target.value);
  };

  const handleKeyword = (e) => {
    if (e.key === "Enter") {
      console.log("검색어:", keyword);
    }
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value); // 정렬 기준 전달
  };

  const handleToggle = (status) => {
    setIsPublic(status); // 클릭 시 공개/비공개 상태 변경
  };

  return (
    <S.ButtonContainer>
      <S.ToggleButton $active={isPublic} onClick={() => handleToggle(true)}>
        공개
      </S.ToggleButton>
      <S.ToggleButton $active={!isPublic} onClick={() => handleToggle(false)}>
        비공개
      </S.ToggleButton>
      <S.SearchContainer>
        <S.SearchBar
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="검색어를 입력하세요"
          onKeyUp={handleKeyword}
        />
        <S.Icon src={search} alt="검색" />
      </S.SearchContainer>
      <S.Dropdown onChange={handleSortChange}>
        <option value="latest">최신순</option>
        <option value="comments">댓글순</option>
        <option value="likes">공감순</option>
      </S.Dropdown>
    </S.ButtonContainer>
  );
};

export default Search;
