import { useState } from 'react';
import Card from './ui/Card';
import CharacterModal from './CharacterModal';

/**
 * @param {{ character: import('../types').Character }} props
 */
export default function CharacterCard({ character }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const species = character.species[0]?.name || 'Human';
  const colorMap = {
    Human: 'border-blue-500',
    Droid: 'border-yellow-500',
    Wookiee: 'border-amber-600',
    default: 'border-gray-500',
  };
  const borderColor = colorMap[species] || colorMap.default;

  const seed = character.name.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
  const imageUrl = `https://picsum.photos/seed/${seed}/400/300`;

  return (
    <>
      <Card onClick={() => setIsModalOpen(true)} className={`border-2 ${borderColor}`}>
        <img src={imageUrl} alt={character.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold text-yellow-400">{character.name}</h3>
          <p className="text-sm text-gray-400">{species}</p>
        </div>
      </Card>

      <CharacterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        character={character}
      />
    </>
  );
}