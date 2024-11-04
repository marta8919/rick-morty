"use client";

import { useParams } from "next/navigation";

export default function Detail() {
  const { id } = useParams<{ id: string }>();

  return (
    <div style={{ marginLeft: "250px" }}>
      <h1>Detail page</h1>
    </div>
  );
}
