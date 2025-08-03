import { Outlet } from "react-router";

export default function Layouts() {
  return (
    <main className="section-container overflow-hidden">
      <Outlet />
    </main>
  );
}
