import { useEffect, useLayoutEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useLayoutEffect(() => {
    const theme = JSON.parse(localStorage.getItem("ExpenseTrackerTheme"));
    setIsDark(theme);
    document.documentElement.classList.toggle(theme && "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("ExpenseTrackerTheme", isDark);
  }, [isDark]);

  const changeHandler = () => {
    setIsDark((prevIsDark) => !prevIsDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div>
      <label
        className="relative flex justify-between items-center px-3 text-violet-200 w-20 h-10 rounded-full cursor-pointer overflow-hidden shadow-inner shadow-violet-600/50 dark:shadow-violet-800/50"
        htmlFor="darkModeToggle"
      >
        <input
          type="checkbox"
          checked={isDark}
          className="sr-only"
          id="darkModeToggle"
          value={isDark}
          onChange={changeHandler}
        />
        <div
          className={`absolute rounded-full w-full h-full top-0 bg-violet-600 dark:bg-violet-800 ease-in-out duration-300 transition-all ${
            isDark ? "-left-10" : "left-10"
          }`}
        ></div>
        <BsMoon />
        <BsSun />
      </label>
    </div>
  );
};

export default DarkModeToggle;
