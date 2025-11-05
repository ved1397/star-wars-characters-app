import Select from './ui/Select';

/**
 * @param {{ filters: Record<string, string>, onChange: (key: string, value: string) => void, options: Record<string, { value: string, label: string }[]> }} props
 */
export default function Filters({ filters, onChange, options }) {
  return (
    <div className="flex flex-wrap gap-3">
      {Object.entries(options).map(([key, opts]) => (
        <Select
          key={key}
          value={filters[key] || ''}
          onChange={(value) => onChange(key, value)}
          options={opts}
          placeholder={`All ${key}s`}
        />
      ))}
    </div>
  );
}