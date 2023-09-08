import { atomB } from "@/jotai-atoms";
import { useAtomValue } from "jotai";
import { ReactNode } from "react";

export const ComponentB = ({ children }: { children?: ReactNode }) => {
  console.log("Rendered: B");
  const count = useAtomValue(atomB);
  return (
    <div className="B">
      <p>ComponentB: {count}</p>
      {children}
    </div>
  );
};
