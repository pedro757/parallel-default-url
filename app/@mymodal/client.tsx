"use client";

import { useRouter } from "next/navigation";

export function Button() {
  const router = useRouter();
  return (
    <>
      <button onClick={() => router.push("?id=" + getRamdomNumber(1, 10))}>New Random ID</button>
    </>
  );
}
function getRamdomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
