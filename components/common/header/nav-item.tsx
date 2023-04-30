import Link from 'next/link';
import Button from '../button';

const NavItem = ({ title, path }: { title: string; path: string }) => {
  return (
    <div className="min-w-[120px]">
      <Button>
        <Link href={path}>{title}</Link>
      </Button>
    </div>
  );
};
export default NavItem;
