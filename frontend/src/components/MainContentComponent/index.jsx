import { Subjects } from './SubjectsComponent';
import { Rubrics } from './RubricsComponent';
import { About } from './AboutComponent';
import { HowItWorks } from './HowItWorksComponent';
import { Promo } from './PromoComponent';

export const MainContent = () => {
  return (
    <header className="header">
      <Subjects />
      <Rubrics />
      <About />
      <HowItWorks />
      <Promo />
    </header>
  );
};
