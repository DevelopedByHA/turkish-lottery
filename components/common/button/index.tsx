import { FC } from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};
const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="block w-full flex-1 rounded-2xl border border-indigo-500 bg-gradient-to-t from-indigo-600 to-indigo-500 px-4 py-2 text-center text-xl text-white opacity-90 transition-all hover:opacity-100 dark:border-2 dark:border-purple-500 dark:from-transparent dark:to-transparent dark:text-purple-500 dark:hover:from-purple-900/50 dark:hover:to-purple-900/50"
    >
      <strong className="block leading-tight">{children}</strong>
    </button>
  );
};
export default Button;
