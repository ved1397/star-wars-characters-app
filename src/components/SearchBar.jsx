import Input from './ui/Input';

/**
 * @param {{ value: string, onChange: (value: string) => void }} props
 */
export default function SearchBar({ value, onChange }) {
  return (
    <Input
      value={value}
      onChange={onChange}
      placeholder="Search characters by name..."
      className="max-w-md"
    />
  );
}