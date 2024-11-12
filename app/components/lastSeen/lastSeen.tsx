import { returnCookies } from "@/actions/cookies";
import Link from "next/link";

export default async function LastSeen() {
  const lastCookie = await returnCookies();
  return (
    <div>
      <p>Last seen</p>
      <ol>
        {lastCookie && lastCookie.length
          ? lastCookie.map(
              (one: { name: string; id: number }, index: number) => (
                <div key={index}>
                  <li>
                    <Link href={`/detail/${one.id}`}>{one.name}</Link>
                  </li>
                </div>
              )
            )
          : null}
      </ol>
    </div>
  );
}
