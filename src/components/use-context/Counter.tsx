import { CtxA, CtxB, CtxC } from "@/contexts";
import { useContext } from "react";

export const Counter = () => {
  const { countA, setCountA } = useContext(CtxA);
  const { countB, setCountB } = useContext(CtxB);
  const { countC, setCountC } = useContext(CtxC);

  const onClickA = () => {
    console.log("---------- increment A ---------");
    setCountA(countA + 1);
  };

  const onClickB = () => {
    console.log("---------- increment B ---------");
    setCountB(countB + 1);
  };

  const onClickC = () => {
    console.log("---------- increment C ---------");
    setCountC(countC + 1);
  };

  return (
    <div>
      <button onClick={onClickA}>Increment A</button>
      <button onClick={onClickB}>Increment B</button>
      <button onClick={onClickC}>Increment C</button>
    </div>
  );
};
