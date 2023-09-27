"use server";

interface Ingredient {
  id: string;
  ingredient: string;
  amount: string;
  unit: string;
}

export async function addRecipe(event: FormData, arg: Ingredient[]) {
  const name = event.get("name");
  const description = event.get("description");

  const data = {
    name,
    description,
    ingredients: arg,
  };

  console.log(data);
}
