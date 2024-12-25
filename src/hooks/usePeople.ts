import { useState, useEffect } from "react";
import { Person } from "../types";
import { fetchPeople } from "../services/api";

export const usePeople = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadPeople = async () => {
    setLoading(true);
    const response = await fetchPeople();
    if (response.success && response.data) {
      setPeople(response.data);
      setError(null);
    } else {
      setError(response.error || "入退室情報の取得に失敗しました");
    }
    setLoading(false);
  };

  // const handleStatusChange = async (id: string) => {
  //   const person = people.find((p) => p.id === id);
  //   if (!person) return;

  //   const newStatus = person.status === "in" ? "out" : "in";
  //   const response = await updatePersonStatus(id, newStatus);

  //   if (response.success) {
  //     await loadPeople(); // 最新データを再取得
  //   } else {
  //     setError(response.error || "状態の更新に失敗しました");
  //   }
  // };

  useEffect(() => {
    loadPeople();
    // 定期的に更新（1分ごと）
    const interval = setInterval(loadPeople, 60000);
    return () => clearInterval(interval);
  }, []);

  return {
    people,
    loading,
    error,
    // handleStatusChange,
    refreshPeople: loadPeople,
  };
};
