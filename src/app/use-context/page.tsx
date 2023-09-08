"use client";
import { useState } from "react";
import { CtxA, CtxB, CtxC } from "@/contexts";
import { ComponentA } from "@/components/use-context/ComponentA";
import { ComponentB } from "@/components/use-context/ComponentB";
import { ComponentC } from "@/components/use-context/ComponentC";
import { Counter } from "@/components/use-context/Counter";
import { Links } from "@/components/Links";

export default function Home() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [countC, setCountC] = useState(0);
  return (
    <CtxA.Provider value={{ countA, setCountA }}>
      <CtxB.Provider value={{ countB, setCountB }}>
        <CtxC.Provider value={{ countC, setCountC }}>
          <Links />
          <Counter />
          <ComponentA>
            <ComponentB>
              <ComponentC></ComponentC>
            </ComponentB>
          </ComponentA>
          <ComponentA />
          <ComponentB />
        </CtxC.Provider>
      </CtxB.Provider>
    </CtxA.Provider>
  );
}
