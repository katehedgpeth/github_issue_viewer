import { FC, PropsWithChildren, createContext } from "react";
import useApi, { Response } from "../hooks/useApi";

// It's not necessary for this API call to be provided by a context
// at the moment, since it's only being used by one component.
// But if I were building a fully-featured version of this page,
// I would definitely want to share these API responses between
// components (a pagination component, for example), so I'm using
// a context here to demonstrate that I know how to do that.

export const ApiContext = createContext<Response>({
  error: false,
  loading: true,
});

export const ApiProvider: FC<PropsWithChildren> = ({ children }) => {
  const response = useApi();
  return <ApiContext.Provider value={response}>{children}</ApiContext.Provider>;
};
