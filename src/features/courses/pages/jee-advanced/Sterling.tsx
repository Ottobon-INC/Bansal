import ProgramPageLayout from '../../components/ProgramPageLayout';
import { jeeAdvancedPrograms } from '../../data/jeeAdvancedPrograms';

export default function Sterling() {
  const program = jeeAdvancedPrograms.find(p => p.id === 'sterling')!;
  return (
    <ProgramPageLayout 
      program={program} 
      categoryName="JEE Advanced" 
      categoryLink="/jee-advanced" 
    />
  );
}
