{/*import React from 'react';
import LightButton from "../../assets/website/light-mode-icon.png";
import DarkButton from "../../assets/website/dark-mode-icon.png";

const DarkMode = () => {
    // Initialize theme state based on localStorage or default to "light"
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    // Reference to the document's root element
    const element = document.documentElement;

    // Effect to handle theme change
    React.useEffect(() => {
        if (theme === "dark") {
            // Add "dark" class and save "dark" theme to localStorage
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            // Remove "dark" class and save "light" theme to localStorage
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]); // Use square brackets for dependency array

    return (
        <div className="relative">
            {theme === "light" ? (
                // Light mode button (shown in light mode)
                <img
                    src={LightButton}
                    alt="Switch to Dark Mode"
                    onClick={() => setTheme("dark")}
                    className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10"
                />
            ) : (
                // Dark mode button (shown in dark mode)
                <img
                    src={DarkButton}
                    alt="Switch to Light Mode"
                    onClick={() => setTheme("light")}
                    className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10"
                />
            )}
        </div>
    );
}

export default DarkMode;*/}
