import ProgramPageLayout from '../../components/ProgramPageLayout';
import { jeeAdvancedPrograms } from '../../data/jeeAdvancedPrograms';

export default function BullsEye() {
  const program = jeeAdvancedPrograms.find(p => p.id === 'bulls-eye')!;
  return (
    <ProgramPageLayout 
      program={program} 
      categoryName="JEE Advanced" 
      categoryLink="/jee-advanced" 
    />
  );
}
