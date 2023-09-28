import prisma from "../prisma/client";
import Recipe from "./components/recipeCard";

export default async function Home() {
  const data = await prisma.recipe.findMany({ include: { contains: true } });
  return (
    <main className="">
      <ul className="mb-20">
        {data.map((entry) => (
          <li key={entry.id}>
            <Recipe
              contains={entry.contains}
              name={entry.name}
              description={entry.description}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
