import { atomA, atomB, atomC } from "@/jotai-atoms";
import { useAtom } from "jotai";

export const Counter = () => {
  const [countA, setCountA] = useAtom(atomA);
  const [countB, setCountB] = useAtom(atomB);
  const [countC, setCountC] = useAtom(atomC);

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
