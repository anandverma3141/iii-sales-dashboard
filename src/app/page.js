
import HeaderMenu from "./components/HeaderMenu";
import Dashboard from "./pages/Dashboard";

export default function Home() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <HeaderMenu />
        <Dashboard />
      </div>
    </>
  );
}
