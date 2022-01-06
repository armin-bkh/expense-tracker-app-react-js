import { forwardRef } from "react";

const Input = forwardRef(({ ...rest }, ref) => {
  return (
    <input
      ref={ref}
      className="block w-full mb-5 focus:outline-none border-none rounded-sm px-3 py-2 bg-violet-200
       dark:bg-violet-700 shadow-md shadow-violet-200/50 dark:shadow-violet-700/50 text-violet-600
        placeholder:text-violet-400 dark:text-violet-200"
      {...rest}
    />
  );
});

export default Input;
