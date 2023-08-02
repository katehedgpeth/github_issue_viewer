import { FC } from "react";
import IIssue from "../types/Issue";
import User from "../types/User";

const IssueNumber: FC<{ number: number }> = ({ number }) => {
  return <span>#{number} </span>;
};

const OpenedOn: FC<{ date: Date }> = ({ date }) => {
  const dateStr = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const timeStr = date.toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric" });
  return (
    <span>
      opened on {dateStr} at {timeStr}{" "}
    </span>
  );
};

const OpenedBy: FC<{ user: User | null }> = ({ user }) => {
  return (
    user && (
      <span>
        by{" "}
        <a href={user.html_url} className="hover:underline">
          {user.login}{" "}
        </a>
      </span>
    )
  );
};

const Issue: FC<IIssue> = (issue) => {
  return (
    <div className="border-t-[1px] border-black-500 p-4">
      <div>
        <a href={issue.html_url} className="hover:underline font-semibold">
          {issue.title}
        </a>
      </div>
      <div className="text-gray-400 text-xs">
        <IssueNumber number={issue.number} />
        <OpenedOn date={new Date(issue.created_at)} />
        <OpenedBy user={issue.user} />
      </div>
    </div>
  );
};

export default Issue;
