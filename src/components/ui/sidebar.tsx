import { Link } from "@tanstack/react-router";

export default function Sidebar() {
  return (
    <div className="bg-background min-w-[156px] w-[156px] max-w[156px]">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{' '}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
      <h1>Sidebar</h1>
    </div>
  );
}
