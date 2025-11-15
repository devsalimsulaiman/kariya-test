import { Outlet } from "react-router-dom";
import WaitlistNavbar from "../waitlist-navbar";

export default function WaitlistLayout() {
  return (
    <>
      <WaitlistNavbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      {/* <WaitlistFooter /> */}
    </>
  );
}
