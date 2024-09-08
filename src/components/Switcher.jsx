import React, { useEffect, useState } from "react";
import themes from "../utils/themes";
import { useTranslation } from "react-i18next";

export default function Switcher() {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? savedTheme : "light";
    });

    const { t } = useTranslation();

    // Update the theme and close the dropdown
    const handleThemeChange = (selectedTheme) => {
        setTheme(selectedTheme);
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        // Add custom data-theme attribute to html tag required to update theme using DaisyUI
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <select
            className="select select-ghost w-full max-w-[150px]"
            onChange={(e) => handleThemeChange(e.target.value)}
            value={theme}
        >
            <option disabled value="">
                {t("themes.Theme")}
            </option>
            {themes.map((themeOption) => (
                <option key={themeOption} value={themeOption}>
                    {themeOption}
                </option>
            ))}
        </select>
    );
}
