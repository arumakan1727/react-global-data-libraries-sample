import { Dispatch, SetStateAction, createContext } from "react";

export const CtxA = createContext(
  {} as {
    countA: number;
    setCountA: Dispatch<SetStateAction<number>>;
  }
);
export const CtxB = createContext(
  {} as {
    countB: number;
    setCountB: Dispatch<SetStateAction<number>>;
  }
);
export const CtxC = createContext(
  {} as {
    countC: number;
    setCountC: Dispatch<SetStateAction<number>>;
  }
);
