import { FC, useContext } from "react";
import Issue from "./Issue";
import { ApiContext } from "../contexts/ApiContext";

const IssueList: FC = () => {
  const response = useContext(ApiContext);
  if (response.loading) return <div>Loading...</div>;
  if (response.error) return <div>Error loading issues, please try again</div>;
  if (!response.data) throw new Error("No data!");
  return (
    <div>
      <div>{response.data.total_count} open issues</div>
      <div className="border-[1px] border-black-500">
        {response.data.items.map((item) => (
          <Issue {...item} key={item.number} />
        ))}
      </div>
    </div>
  );
};

export default IssueList;
