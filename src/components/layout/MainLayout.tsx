import { Outlet } from "react-router-dom";
import MainNavbar from "../main-navbar";
import MainFooter from "../main-footer";

export default function MainLayout() {
  return (
    <>
      <MainNavbar />
      <main className="min-h-screen">
        <Outlet /> {/* This renders the nested routes */}
      </main>
      <MainFooter />
    </>
  );
}
