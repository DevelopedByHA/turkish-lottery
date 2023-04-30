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
    <div className="min-w-[120px]">
      <Button onClick={onClick}>
        <Link scroll shallow href={path}>
          {title}
        </Link>
      </Button>
    </div>
  );
};
export default NavItem;
