import { LoaderCircle } from "lucide-react";

interface InputBoxProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onSend: () => void;
  loading: boolean;
  clearMessages: () => void; // ⬅️ add loading prop
}

const InputBox = ({
  searchTerm,
  setSearchTerm,
  onSend,
  loading,
  clearMessages,
}: InputBoxProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !loading) {
      onSend();
    }
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        placeholder={loading ? "Searching..." : "Ask me something..."}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={loading}
        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-60"
      />
      <button
        onClick={onSend}
        disabled={loading}
        className={`px-5 py-3 rounded-xl transition text-white ${
          loading
            ? "bg-blue-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <LoaderCircle className="animate-spin" />
            <span className="ml-2">Searching...</span>
          </div>
        ) : (
          "Search"
        )}
      </button>
      <button
        onClick={clearMessages}
        disabled={loading}
        className="px-4 py-3 rounded-xl transition text-white bg-red-500 hover:bg-red-600 disabled:opacity-50"
      >
        Clear
      </button>
    </div>
  );
};

export default InputBox;
