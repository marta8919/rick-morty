"use server";

import { cookies } from "next/headers";

interface CharacterSimplified {
  name: string;
  id: number;
}

export const createCookie = async ({ name, id }: CharacterSimplified) => {
  const cookieStore = await cookies();

  const prevCharacters = cookieStore.get("characters");

  if (prevCharacters != undefined && typeof prevCharacters.value == "string") {
    let cookiesArray = JSON.parse(prevCharacters.value);

    //if array larger than 3 return new array with last three added
    if (cookiesArray.length > 3) cookiesArray = cookiesArray.slice(-2);

    if (!cookiesArray.some((one: CharacterSimplified) => one.id == id)) {
      //if character is not repeated we need to remove one more to make space
      if (cookiesArray.length == 3) cookiesArray = cookiesArray.slice(-2);

      cookiesArray.push({ name, id });
      cookieStore.set("characters", JSON.stringify(cookiesArray));
    }
  } else {
    //if cookies empty, set first cookie
    cookieStore.set("characters", JSON.stringify([{ name, id }]));
  }
};

export const returnCookies = async () => {
  const cookieStore = await cookies();

  const cookie = cookieStore.get("characters");

  if (cookie != undefined && typeof cookie.value == "string")
    return JSON.parse(cookie.value);
};
