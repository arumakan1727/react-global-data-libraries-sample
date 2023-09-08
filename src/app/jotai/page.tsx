"use client";
import { Links } from "@/components/Links";
import { ComponentA } from "@/components/jotai/ComponentA";
import { ComponentB } from "@/components/jotai/ComponentB";
import { ComponentC } from "@/components/jotai/ComponentC";
import { Counter } from "@/components/jotai/Counter";

export default function Page() {
  return (
    <>
      <Links />
      <Counter />
      <ComponentA>
        <ComponentB>
          <ComponentC />
        </ComponentB>
      </ComponentA>
      <ComponentA />
      <ComponentB />
    </>
  );
}
