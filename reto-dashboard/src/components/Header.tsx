import { useEffect, useState } from "react";

export const Header = () => {
    const [darkMode, setDarkMode] = useState(false)
  const handleClick = () => {
    setDarkMode(!darkMode)
  }
  useEffect (()=>{
    if (darkMode) {
        document.documentElement.classList.add('dark')
    }else {
        document.documentElement.classList.remove('dark')
    }
  }, [darkMode])
  return (
    <header className="bg-very-pale-blue dark:bg-very-dark-blue h-[235px] rounded-b-[20px] pt-8 px-6 mb-[950px] md:mb-[480px] xl:mb-[200px]">
      <h1 className="mb-1 text-2xl font-bold text-very-dark-blue dark:text-very-pale-blue">
        Social Media Dashboard
      </h1>
      <p className="mb-6 font-bold text-dark-grayish-blue dark:text-desaturated-blue-text">
        Total Followers: 23,004
      </p>
      <hr className="text-black mb-[19px] dark:text-white" />
      <div className="flex justify-between">
        <p className="font-bold text-dark-grayish-blue dark:text-desaturated-blue-text">Dark Mode</p>
        <label htmlFor="darkmode" className="w-12 h-6 bg-Toggle rounded-full cursor-pointer p-[3px] relative overflow-hidden">
          <input onClick={handleClick} id="darkmode" title="mode" type="checkbox" className="sr-only peer" />
          <div className="absolute top-0 left-0 w-full h-full peer-checked:bg-gradient-to-r from-[#3498db] to-[hsl(146,68%,55%)]"></div>
          <div className="w-[18px] h-[18px] bg-light-grayish-blue rounded-full peer-checked:translate-x-[24px] transition-all"></div>
        </label>
      </div>
    </header>
  );
};
