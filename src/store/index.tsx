import { ReactNode } from "react";
import TodosProvider from "./TodosSotre";

interface AllProviderType {
  children: ReactNode;
}

function AllProvider({ children }: AllProviderType) {
  return <TodosProvider>{children}</TodosProvider>;
}

export default AllProvider;
