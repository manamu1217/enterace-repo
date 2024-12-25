import { ApiResponse } from "../types";

const API_URL = import.meta.env.VITE_GOOGLE_URL;

export const fetchPeople = async (): Promise<ApiResponse> => {
  try {
    const response = await fetch(
      // "https://script.google.com/macros/s/AKfycbw8ELPS1hr05mcC8n_5lVssYIS5Z2BbP4xGDqICWA5wAWrfJQLbbNbX8RIop2dEvc6VYw/exec"
      `${API_URL}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: "入退室情報の取得に失敗しました",
    };
  }
};

// export const updatePersonStatus = async (
//   id: string,
//   status: "in" | "out"
// ): Promise<ApiResponse> => {
//   try {
//     const response = await fetch(API_CONFIG.GAS_ENDPOINT, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         action: "updateStatus",
//         id,
//         status,
//       }),
//     });
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     return {
//       success: false,
//       error: "状態の更新に失敗しました",
//     };
//   }
// };
