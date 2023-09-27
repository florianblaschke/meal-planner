import Link from "next/link";

export default function NavBar() {
  return (
    <div className="btm-nav">
      <Link href={"/"}>Home</Link>
      <Link href={"/add"}>Add Recipe</Link>
    </div>
  );
}
