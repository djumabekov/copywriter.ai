import { Nav } from './NavComponent';
import { HeaderContent } from './HeaderContentComponent';

export const Header = () => {
  return (
    <header className="header">
      <Nav />

      <HeaderContent />
    </header>
  );
};
