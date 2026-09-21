import ProgramPageLayout from '../../components/ProgramPageLayout';
import { jeeAdvancedPrograms } from '../../data/jeeAdvancedPrograms';

export default function Nucleus() {
  const program = jeeAdvancedPrograms.find(p => p.id === 'nucleus')!;
  return (
    <ProgramPageLayout 
      program={program} 
      categoryName="JEE Advanced" 
      categoryLink="/jee-advanced" 
    />
  );
}
