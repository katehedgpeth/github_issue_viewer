import User from "./User";
import Label from "./Label";

interface Issue {
  body: string | null;
  created_at: string;
  html_url: string;
  labels: Label[];
  number: number;
  state: "open" | "closed";
  state_reason: "completed" | "reopened" | "not_planned" | null;
  title: string;
  user: User | null;
}

export default Issue;
