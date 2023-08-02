import { FC } from "react";
import IssueList from "./components/IssueList";
import { ApiProvider } from "./contexts/ApiContext";

const App: FC = () => {
  return (
    <ApiProvider>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Issues in the microsoft/Playwright repo</h1>
        <IssueList />
      </div>
    </ApiProvider>
  );
};

export default App;
