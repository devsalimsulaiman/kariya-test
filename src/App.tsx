import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import LandingPage from "./pages/landing-page";
import WaitlistLayout from "./components/layout/WaitlistLayout";
import HowItWorks from "./pages/how-it-works";
import Pricing from "./pages/pricing";
import Faqs from "./pages/faqs";
import Contact from "./pages/contact";
import Waitlist from "./pages/Waitlist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route element={<WaitlistLayout />}>
          <Route path="/waitlist" element={<Waitlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
