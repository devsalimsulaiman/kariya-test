import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Arrowback = () => {
  const navigate = useNavigate();

  // Visible only on first load (top of page)
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY === 0;

      // Only show at top
      setVisible(atTop);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBack = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate("/");
  };

  return (
    <div
      className={`fixed top-50 left-6 lg:left-16 md:left-16 transition-all duration-300 z-50
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }
      `}>
      <button
        type="button"
        aria-label="Go back"
        onClick={handleBack}
        className="bg-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg">
        <IoIosArrowBack size={22} className="text-green-600" />
      </button>
    </div>
  );
};

export default Arrowback;
