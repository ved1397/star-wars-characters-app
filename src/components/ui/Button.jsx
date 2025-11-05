/**
 * @param {{ children: React.ReactNode, onClick?: () => void, variant?: 'primary' | 'secondary' | 'danger', disabled?: boolean, className?: string }} props
 */
export default function Button({ children, onClick, variant = 'primary', disabled, className = '' }) {
  const variants = {
    primary: 'bg-yellow-600 hover:bg-yellow-500 text-white',
    secondary: 'bg-gray-700 hover:bg-gray-600 text-white',
    danger: 'bg-red-600 hover:bg-red-500 text-white',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-lg font-medium transition disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}