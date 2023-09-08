import { atomC } from "@/jotai-atoms";
import { useAtomValue } from "jotai";
import { ReactNode } from "react";

export const ComponentC = ({ children }: { children?: ReactNode }) => {
  console.log("Rendered: C");
  const count = useAtomValue(atomC);
  return (
    <div className="C">
      <p>ComponentC: {count}</p>
      {children}
    </div>
  );
};
