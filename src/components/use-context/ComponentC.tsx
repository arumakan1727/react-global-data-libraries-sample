import { CtxC } from "@/contexts";
import { ReactNode, useContext } from "react";

export const ComponentC = ({ children }: { children?: ReactNode }) => {
  console.log("Rendered: C");
  const { countC } = useContext(CtxC);
  return (
    <div className="C">
      <p>ComponentC: {countC}</p>
      {children}
    </div>
  );
};
