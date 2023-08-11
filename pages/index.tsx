import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main
      style={{
        maxWidth: "130rem",
        margin: "0 auto",
      }}
    >
      <h1>App load Successfully</h1>
      <p>
        To view App products, <Link href="/products">Click Here</Link>
      </p>
    </main>
  );
}
