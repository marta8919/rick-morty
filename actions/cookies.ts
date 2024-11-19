"use server";

import { cookies } from "next/headers";

interface CharacterSimplified {
  name: string;
  id: number;
}

interface CreateCookie {
  type: "CHARACTER" | "PAGE";
  name?: string;
  id?: number;
  page?: number;
}

export const createCookie = async ({ type, name, id, page }: CreateCookie) => {
  const cookieStore = await cookies();

  if (type == "CHARACTER") {
    const prevCharacters = cookieStore.get("characters");

    if (
      prevCharacters != undefined &&
      typeof prevCharacters.value == "string"
    ) {
      let cookiesArray = JSON.parse(prevCharacters.value);

      if (cookiesArray.length > 3) cookiesArray = cookiesArray.slice(-2);

      if (!cookiesArray.some((one: CharacterSimplified) => one.id == id)) {
        if (cookiesArray.length == 3) cookiesArray = cookiesArray.slice(-2);

        cookiesArray.push({ name, id });
        cookieStore.set("characters", JSON.stringify(cookiesArray));
      }
    } else {
      cookieStore.set("characters", JSON.stringify([{ name, id }]));
    }
  }

  if (type == "PAGE") {
    cookieStore.set("page", JSON.stringify(page));
  }
};

export const returnCookies = async ({
  type,
}: {
  type: "CHARACTER" | "PAGE";
}) => {
  const cookieStore = await cookies();

  if (type == "CHARACTER") {
    const cookie = cookieStore.get("characters");

    if (cookie != undefined && typeof cookie.value == "string")
      return JSON.parse(cookie.value);
  }

  if (type == "PAGE") {
    const cookie = cookieStore.get("page");
    if (cookie != undefined && typeof cookie.value == "string")
      return JSON.parse(cookie.value);
  }
};
