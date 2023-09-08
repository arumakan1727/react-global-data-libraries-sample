import { CtxB } from "@/contexts";
import { ReactNode, useContext } from "react";

export const ComponentB = ({ children }: { children?: ReactNode }) => {
  console.log("Rendered: B");
  const { countB } = useContext(CtxB);
  return (
    <div className="B">
      <p>ComponentB: {countB}</p>
      {children}
    </div>
  );
};
