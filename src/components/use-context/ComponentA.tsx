import { CtxA } from "@/contexts";
import { ReactNode, useContext } from "react";

export const ComponentA = ({ children }: { children?: ReactNode }) => {
  console.log("Rendered: A");
  const { countA } = useContext(CtxA);
  return (
    <div className="A">
      <p>ComponentA: {countA}</p>
      {children}
    </div>
  );
};
