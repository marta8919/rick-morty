import { cookies } from "next/headers";

export const createCookie = async ({
  name,
  id,
}: {
  name: string;
  id: number;
}) => {
  const cookieStore = await cookies();

  cookieStore.set("name", name);
};
