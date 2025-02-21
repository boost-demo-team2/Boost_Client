import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export default function GroupListPage() {
  const [groups, setGroups] = useState([]); // ✅ 기본값을 빈 배열로 설정

  useEffect(() => {
    fetch(`${API_URL}/api/groups`)
      .then((res) => res.json())
      .then((data) => setGroups(data.groups || [])) // ✅ 데이터가 없을 경우 빈 배열로 초기화
      .catch((error) => {
        console.error("데이터 로딩 오류:", error);
        setGroups([]); // ✅ API 요청 실패 시 빈 배열로 설정
      });
  }, []);

  const filteredGroups = groups?.filter((group) => group.isPublic) || []; // ✅ optional chaining 사용

  return (
    <div>
      <h1>그룹 목록</h1>
      {filteredGroups.length > 0 ? (
        <ul>
          {filteredGroups.map((group) => (
            <li key={group.id}>{group.name}</li>
          ))}
        </ul>
      ) : (
        <p>그룹이 없습니다.</p>
      )}
    </div>
  );
}
