import { useState, useEffect } from 'react';
import Modal from './ui/Modal';
import Button from './ui/Button';
import { formatDate } from '../utils/formatDate';

/**
 * @param {{ isOpen: boolean, onClose: () => void, character: import('../types').Character }} props
 */
export default function CharacterModal({ isOpen, onClose, character }) {
  const [homeworld, setHomeworld] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isOpen) return;
    const fetchHomeworld = async () => {
      setLoading(true);
      try {
        const res = await fetch(character.homeworld);
        const data = await res.json();
        setHomeworld(data);
      } catch {
        setHomeworld(null);
      } finally {
        setLoading(false);
      }
    };
    fetchHomeworld();
  }, [character.homeworld, isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={character.name}>
      <div className="grid md:grid-cols-2 gap-6 text-gray-300">
        <div>
          <p><strong>Height:</strong> {character.height !== 'unknown' ? `${character.height / 100} m` : 'Unknown'}</p>
          <p><strong>Mass:</strong> {character.mass !== 'unknown' ? `${character.mass} kg` : 'Unknown'}</p>
          <p><strong>Birth Year:</strong> {character.birth_year}</p>
          <p><strong>Films:</strong> {character.films.length}</p>
          <p><strong>Date Added:</strong> {formatDate(character.created)}</p>
        </div>

        <div>
          <p className="font-semibold text-yellow-300 mb-1">Homeworld</p>
          {loading ? (
            <p className="text-sm">Loading...</p>
          ) : homeworld ? (
            <>
              <p><strong>Name:</strong> {homeworld.name}</p>
              <p><strong>Terrain:</strong> {homeworld.terrain}</p>
              <p><strong>Climate:</strong> {homeworld.climate}</p>
              <p><strong>Population:</strong> {homeworld.population !== 'unknown' ? Number(homeworld.population).toLocaleString() : 'Unknown'}</p>
            </>
          ) : (
            <p className="text-sm text-gray-500">No data</p>
          )}
        </div>
      </div>

      <Button onClick={onClose} className="mt-6 w-full">
        Close
      </Button>
    </Modal>
  );
}