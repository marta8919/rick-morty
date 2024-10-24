import Link from "next/link";

export default async function ListPage() {
  return (
    <div style={{ marginLeft: "250px" }}>
      <h1>List page</h1>
      <Link href="/detail">Detail page</Link>
    </div>
  );
}
