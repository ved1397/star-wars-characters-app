import Button from './ui/Button';

/**
 * @param {{ currentPage: number, totalPages: number, onPageChange: (page: number) => void }} props
 */
export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center gap-2 mt-8 flex-wrap">
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        variant="secondary"
      >
        Previous
      </Button>
      <span className="px-4 py-2 bg-gray-800 rounded text-white">
        Page {currentPage} of {totalPages}
      </span>
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        variant="secondary"
      >
        Next
      </Button>
    </div>
  );
}