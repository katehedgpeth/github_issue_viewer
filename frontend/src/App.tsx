import useApi from "./hooks/useApi";

const App = () => {
  const response = useApi();
  return <div>{response?.message ?? "Loading..."}</div>;
};

export default App;
