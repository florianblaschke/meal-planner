"use client";

import { useRef, useState } from "react";
import { uid } from "uid";
import { addRecipe } from "../../lib/functions";

interface Ingredient {
  id: string;
  ingredient: string;
  amount: string;
  unit: string;
}

export default function RecipeForm() {
  const [list, setList] = useState<Ingredient[]>([]);
  const [mode, SetMode] = useState<Boolean>(false);
  const ingredient = useRef<HTMLInputElement>(null);
  const amount = useRef<HTMLInputElement>(null);
  const unit = useRef<HTMLSelectElement>(null);

  function addIngredient() {
    if (ingredient.current?.value === "" || amount.current?.value === "")
      return;
    setList([
      ...list,
      {
        id: uid(5),
        ingredient: ingredient.current!.value,
        amount: amount.current!.value,
        unit: unit.current!.value,
      },
    ]);
    ingredient.current!.value = "";
    amount.current!.value = "";
    ingredient.current!.focus();
  }

  function deleteIngredient(id: string) {
    setList(list.filter((ing) => ing.id !== id));
  }

  return (
    <main className="container min-h-screen mx-auto">
      <form
        action={(event) => addRecipe(event, list)}
        className="form-control flex flex-col"
      >
        <label className="label" htmlFor="name">
          Name for your Recipe
        </label>
        <input className="input input-bordered bg-slate-100" name="name" />
        <div className="container flex flex-col p-2 gap-2">
          <label htmlFor="ingridients">Add an Ingredient</label>
          <label className="label" htmlFor="type">
            Ingredient
            <input
              className="input  input-bordered bg-slate-100"
              type="text"
              name="type"
              id="type"
              ref={ingredient}
            />
          </label>
          <label className="label" htmlFor="measurments">
            How much?
            <input
              className="input input-bordered bg-slate-100 w-24 ml-5"
              type="number"
              name="amount"
              id="amount"
              ref={amount}
            />
            <select
              ref={unit}
              className="select select-bordered bg-slate-100"
              name="unit"
              id="unit"
            >
              <option value="g">g</option>
              <option value="Tbsp">Tbsp</option>
              <option value="tsp">tsp</option>
              <option value="Cups">Cups</option>
              <option value="ml">ml</option>
            </select>
          </label>
          <div className="flex justify-evenly">
            <button
              onClick={addIngredient}
              className="btn btn-secondary btn-square min-w-min"
              type="button"
            >
              Add ingredient
            </button>
            <button
              onClick={() => SetMode(!mode)}
              className="btn btn-secondary btn-square min-w-min self-center"
              type="button"
            >
              Provide description
            </button>
          </div>
        </div>
        {!mode &&
          list.map((ing) => (
            <div key={ing.id} className="flex flex-row gap-2 items-center">
              <span>
                {ing.ingredient}
                {ing.amount}
                {ing.unit}
              </span>
              <button
                onClick={() => deleteIngredient(ing.id)}
                type="button"
                className="btn btn-square"
              >
                -
              </button>
            </div>
          ))}
        {mode && (
          <div className="form-control flex-col h-auto p-2">
            <label className="label" htmlFor="recipe">
              The how:
              <textarea
                id="description"
                name="description"
                className="textarea textarea-bordered bg-slate-100 p-4"
                defaultValue={"How to prepare your recipe"}
              ></textarea>
            </label>
          </div>
        )}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </main>
  );
}
