import React, { useEffect, useState } from "react";
import themes from "../utils/themes";
import { useTranslation } from "react-i18next";

export default function Switcher() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  // Update state on theme selection and close the dropdown
  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    setIsOpen(false);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // Add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <select
      className="select select-ghost w-full max-w-[150px]"
      onChange={(e) => handleThemeChange(e.target.value)}
      value={theme}
    >
      <option disabled value="">
        {t("themes.Theme")}
      </option>
      {themes.map((theme) => (
        <option key={theme} value={theme}>
          {theme}
        </option>
      ))}
    </select>
  );
}