import classNames from 'classnames';
import { FC } from 'react';

type InputLabelProps = {
  label: string;
};
const InputLabel: FC<InputLabelProps & Partial<HTMLDivElement>> = ({
  label,
  ...rest
}) => {
  const { className } = rest;
  return (
    <div className={classNames('text-lg text-indigo-500 font-bold', className)}>
      {label}
    </div>
  );
};

export default InputLabel;
