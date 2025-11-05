/**
 * @param {{ children: React.ReactNode, onClick?: () => void, className?: string }} props
 */
export default function Card({ children, onClick, className = '' }) {
  return (
    <div
      onClick={onClick}
      className={`bg-gray-800 rounded-lg overflow-hidden cursor-pointer transform transition hover:scale-105 border-2 border-gray-700 shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}