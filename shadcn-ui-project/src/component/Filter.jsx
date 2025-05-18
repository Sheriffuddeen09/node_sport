// Filter.jsx
import { Input } from "@/components/ui/input";

export function Filters({ searchTerm, setSearchTerm }) {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <Input
        type="search"
        placeholder="Search by name or email "
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 h-8 w-64 translate-x-7 md:translate-x-20 lg:translate-x-72"
      />
    </div>
  );
}
