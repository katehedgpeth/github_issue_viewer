import "unfetch/polyfill";
import { useEffect, useState } from "react";

interface ApiResponse {
  message: string;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
if (!API_BASE_URL) throw new Error("missing env var $BASE_URL");

const useApi = () => {
  const [response, setResponse] = useState<ApiResponse | null>(null);
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/v1/issues`)
      .then((resp) => resp.json().then(setResponse))
      .catch((error) => {
        console.log({ error });
        setResponse({ message: "There was an error" });
      });
  }, []);
  return response;
};

export default useApi;
