import { returnCookies } from "@/actions/cookies";
import Link from "next/link";

export default async function LastSeen() {
  const lastCookie = await returnCookies({ type: "CHARACTER" });
  return (
    <div>
      <p>Last seen: </p>
      <ol>
        {lastCookie.map((one: { name: string; id: number }, index: number) => (
          <li key={index}>
            <Link href={`/detail/${one.id}`}>{one.name}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
