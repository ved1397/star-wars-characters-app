/**
 * @param {{ value: string, onChange: (value: string) => void, options: { value: string, label: string }[], placeholder?: string, className?: string }} props
 */
export default function Select({ value, onChange, options, placeholder, className = '' }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`px-3 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 ${className}`}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}