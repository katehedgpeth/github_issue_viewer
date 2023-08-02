import "unfetch/polyfill";
import { useEffect, useState } from "react";
import Issue from "../types/Issue";

interface Data {
  items: Issue[];
  total_count: number;
}

export interface Response {
  loading: boolean;
  error: boolean;
  data?: Data;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
if (!API_BASE_URL) throw new Error("missing env var $BASE_URL");

const useApi = () => {
  const [response, setResponse] = useState<Response>({
    error: false,
    loading: true,
  });
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/v1/issues`)
      .then((resp) =>
        resp.json().then((data) => setResponse({ data, error: false, loading: false }))
      )
      .catch(() => {
        setResponse({ error: true, loading: false });
      });
  }, []);
  return response;
};

export default useApi;
