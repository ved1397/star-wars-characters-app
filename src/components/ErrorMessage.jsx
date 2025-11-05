export default function ErrorMessage({ message }) {
  return (
    <div className="text-center py-8 text-red-400">
      <p className="text-lg font-semibold">Error</p>
      <p>{message}</p>
    </div>
  );
}