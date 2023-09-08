import { atomA } from "@/jotai-atoms";
import { useAtomValue } from "jotai";
import { ReactNode } from "react";

export const ComponentA = ({ children }: { children?: ReactNode }) => {
  console.log("Rendered: A");
  const count = useAtomValue(atomA);
  return (
    <div className="A">
      <p>ComponentA: {count}</p>
      {children}
    </div>
  );
};
