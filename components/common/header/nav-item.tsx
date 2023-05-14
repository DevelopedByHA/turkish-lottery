import Link from 'next/link';
import Button from '../button';

const NavItem = ({
  title,
  path,
  onClick,
}: {
  title: string;
  path: string;
  onClick?: () => void;
}) => {
  return (
    <Link scroll shallow href={path} className="min-w-[120px]">
      <Button onClick={onClick}>{title}</Button>
    </Link>
  );
};
export default NavItem;
