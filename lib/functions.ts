"use server";

import prisma from "../prisma/client";

interface Ingredient {
  ingredient: string;
  amount: string;
  unit: string;
}

export async function addRecipe(event: FormData, arg: Ingredient[]) {
  const name: any = event.get("name");
  const description: any = event.get("description");

  const data = arg;
  const newRecipe = await prisma.recipe.create({
    data: {
      name: name,
      description: description,
      contains: {
        createMany: { data },
      },
    },
  });
}
