import { returnCookies } from "@/actions/cookies";

export default async function LastSeen() {
  const lastCookie = await returnCookies();
  return (
    <div>
      <h2>Last seen</h2>
      <ol>
        {lastCookie.map((one: { name: string; id: number }, index: number) => (
          <div key={index}>
            <li>{one.name}</li>
          </div>
        ))}
      </ol>
    </div>
  );
}
