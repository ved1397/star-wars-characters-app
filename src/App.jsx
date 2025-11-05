import { useState, useMemo } from 'react';
import { useSwapi } from './hooks/useSwapi';
import { useDebounce } from './hooks/useDebounce';
import { useAuth } from './hooks/useAuth';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Container from './components/layout/Container';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import CharacterCard from './components/CharacterCard';
import Pagination from './components/Pagination';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import Button from './components/ui/Button';

const FILTER_OPTIONS = {
  homeworld: [
    { value: 'Tatooine', label: 'Tatooine' },
    { value: 'Alderaan', label: 'Alderaan' },
  ],
  film: [
    { value: 'A New Hope', label: 'A New Hope' },
    { value: 'The Empire Strikes Back', label: 'The Empire Strikes Back' },
  ],
  species: [
    { value: 'Human', label: 'Human' },
    { value: 'Droid', label: 'Droid' },
  ],
};

export default function App() {
  return (
    <ProtectedRoute>
      <AppContent />
    </ProtectedRoute>
  );
}

function AppContent() {
  const { user, signOut } = useAuth();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ homeworld: '', film: '', species: '' });

  const debouncedSearch = useDebounce(search, 300);
  const { data, loading, error } = useSwapi('people', page);

  const characters = useMemo(() => {
    if (!data?.results) return [];
    return data.results.map(char => ({
      ...char,
      homeworldName: '',
      speciesName: char.species.length > 0 ? 'Unknown' : 'Human',
    }));
  }, [data]);

  const filteredCharacters = useMemo(() => {
    return characters.filter(char => {
      const matchesSearch = char.name.toLowerCase().includes(debouncedSearch.toLowerCase());
      const matchesHomeworld = !filters.homeworld || char.homeworldName === filters.homeworld;
      const matchesFilm = !filters.film || char.films.some(f => f.includes(filters.film));
      const matchesSpecies = !filters.species || char.speciesName === filters.species;
      return matchesSearch && matchesHomeworld && matchesFilm && matchesSpecies;
    });
  }, [characters, debouncedSearch, filters]);

  const totalPages = data ? Math.ceil(data.count / 10) : 1;

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <Container>
        <header className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h1 className="text-4xl font-bold text-yellow-400">Star Wars Characters</h1>
            <p className="text-gray-400">Welcome, {user?.name}</p>
          </div>
          <Button onClick={signOut} variant="danger">
            Logout
          </Button>
        </header>

        <div className="mb-8 space-y-4">
          <SearchBar value={search} onChange={setSearch} />
          <Filters
            filters={filters}
            onChange={(key, value) => setFilters(prev => ({ ...prev, [key]: value }))}
            options={FILTER_OPTIONS}
          />
        </div>

        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        {!loading && !error && filteredCharacters.length === 0 && (
          <p className="text-center text-gray-400 py-12">No characters found.</p>
        )}

        {!loading && !error && filteredCharacters.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredCharacters.map(char => (
                <CharacterCard key={char.url} character={char} />
              ))}
            </div>

            <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
          </>
        )}
      </Container>
    </div>
  );
}