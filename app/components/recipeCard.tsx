interface Ingredient {
  ingredient: string;
  amount: string;
  unit: string;
}

interface Props {
  name: string;
  description: string | null;
  contains: Ingredient[];
}

export default function Recipe({ name, description, contains }: Props) {
  return (
    <div className="flex flex-col m-2 p-2 ">
      <h2 className="self-center">{name}</h2>
      <article>Instructions: {description}</article>
      <ul className="flex flex-col p-2 self-center list-disc">
        Ingredients:
        {contains.map((entry) => (
          <li className="list-item">
            <span>{entry.ingredient}</span>
            <span>
              {entry.amount}
              {entry.unit}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
