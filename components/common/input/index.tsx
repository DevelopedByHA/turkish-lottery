import classNames from 'classnames';
import { ChangeEventHandler, FC } from 'react';

type InputProps = {
  type: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  error?: string;
};
type TextAreaProps = {
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  name: string;
  error?: string;
};
const Input: FC<Partial<HTMLInputElement> & InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  className,
  ...rest
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classNames(
          'border-2 w-full border-primary focus:border-indigo-500   focus:outline-none bg-lightbase  p-2 rounded-xl text-primary  font-bold mb-2 placeholder-primary',
          className
        )}
        min={0}
      />
      {rest.error && <p className="text-red-500 text-sm">{rest.error}</p>}
    </>
  );
};
const Textarea: FC<Partial<HTMLTextAreaElement> & TextAreaProps> = ({
  placeholder,
  value,
  onChange,
  name,
  className,
  ...rest
}) => {
  return (
    <>
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border-2 w-full border-primary focus:border-indigo-500   focus:outline-none bg-lightbase  p-2 rounded-xl text-primary  font-bold mb-2 placeholder-primary"
      />
      {rest.error && <p className="text-red-500 text-sm">{rest.error}</p>}
    </>
  );
};
export { Textarea };
export default Input;
