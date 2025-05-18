import { useEffect, useState } from "react";
import { MainLayout } from "@/layout/MainLayout";
import { Filters } from "./Filter";
import { DataTable } from "./DataTable";
import { DetailModal } from "./DetailModal";

const mock = [
  { id: 1, name: "John Doe",  email: "john@example.com" },
  { id: 2, name: "Jane Doe",  email: "jane@example.com" },
  { id: 3, name: "Bob Smith", email: "bob@example.com" },
  { id: 4, name: "Alice Lee", email: "alice@example.com" },
];

export function Dashboard() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState(5);
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [showDetails, setShowDetails] = useState(false);
  const [detailsRow, setDetailsRow] = useState(null);

  useEffect(() => setData(mock), []);

  const filtered = data.filter(
    (r) =>
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.email.toLowerCase().includes(search.toLowerCase())
  );

  const pageRows = filtered.slice(0, pageSize);

  const toggleRow = (id) =>
    setSelectedIds((prev) => {
      const copy = new Set(prev);
      copy.has(id) ? copy.delete(id) : copy.add(id);
      return copy;
    });

  const openDetails = (row) => {
    setDetailsRow(row);
    setShowDetails(true);
  };

  return (
    <MainLayout>
      <Filters searchTerm={search} setSearchTerm={setSearch} />

      <DataTable
        data={pageRows}
        total={filtered.length}
        entriesPerPage={pageSize}
        setEntriesPerPage={setPageSize}
        selectedIds={selectedIds}
        toggleRow={toggleRow}
        openDetails={openDetails}
      />

      <DetailModal
        open={showDetails}
        onClose={() => setShowDetails(false)}
        data={detailsRow}
      />
    </MainLayout>
  );
}
