import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useEffect } from "react";
import { initializeTheme } from "../utils/themeController";

export default function MainLayout() {
  useEffect(() => {
    initializeTheme();
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
