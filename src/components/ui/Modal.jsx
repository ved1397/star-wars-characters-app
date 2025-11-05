import { X } from "lucide-react";

/**
 * @param {{ isOpen: boolean, onClose: () => void, title: string, children: React.ReactNode }} props
 */
export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div
        className="bg-gray-800 rounded-xl max-w-2xl w-full max-h-screen overflow-y-auto p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-3xl font-bold text-yellow-400">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition p-1 rounded-full hover:bg-gray-700">
           <X size={26} strokeWidth={2.5} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}