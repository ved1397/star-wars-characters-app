/**
 * @param {{ value: string, onChange: (value: string) => void, placeholder?: string, type?: string, className?: string }} props
 */
export default function Input({ value, onChange, placeholder, type = 'text', className = '' }) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400 ${className}`}
    />
  );
}