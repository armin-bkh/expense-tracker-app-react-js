import { IoCheckmarkSharp } from "react-icons/io5";

const RadioBox = ({ checked, id, value, ...rest }) => {
  return (
    <label
      htmlFor={id}
      className={`flex items-center px-5 py-2 rounded-md transition duration-500 cursor-pointer shadow-lg text-sm font-bold mr-2 ${
        checked
          ? "bg-violet-600 dark:bg-violet-200 text-violet-200 dark:text-violet-700 shadow-violet-600/50 dark:shadow-violet-200/50"
          : "bg-violet-200 dark:bg-violet-700 text-violet-600 dark:text-violet-200 shadow-violet-200/50 dark:shadow-violet-700/50"
      }`}
    >
      <input
        type="radio"
        value={value}
        checked={checked}
        id={id}
        className="sr-only"
        {...rest}
      />
      <span
        className={`flex items-center justify-center w-4 h-4 rounded-sm border ${
          checked
            ? "border-violet-200 dark:border-violet-700"
            : "border-violet-600 dark:border-violet-200"
        }  mr-3`}
      >
        {checked && <IoCheckmarkSharp />}
      </span>
      <span>{value}</span>
    </label>
  );
};

export default RadioBox;
