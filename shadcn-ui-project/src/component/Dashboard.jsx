import { useEffect, useState } from "react";
import { MainLayout } from "@/layout/MainLayout";
import { Filters } from "./Filter";
import { DataTable } from "./DataTable";
import { DetailModal } from "./DetailModal";

const mock = [
  { id: 1, article: "How to improve Your Skills in League of Legends ",  keyword: "League of Legends [2240000]", words:"4575", created:"20 hours ago" },
  { id: 1, article: "How to Master Last Hitting in League of Legends ",  keyword: "League of Legends [2240000]", words:"3480", created:"21 hours ago" },
  { id: 1, article: "7 Tips for better Teamplay in League of Legends ",  keyword: "League of Legends [2240000]", words:"2676", created:"a day ago" },
  { id: 1, article: "Top Virtual Executive Assistant Services [2024] ",  keyword: " virtual executive assistant[2900]", words:"2408", created:"1 OCT,24" },
  { id: 1, article: "Unlimited Graphics Design Solutions ",  keyword: "unlimited graphic design services [390]", words:"1793", created:"---" },
  { id: 1, article: "Top Amazon Payment Methods for Quick Access",  keyword: "amazon payment methods [3600]", words:"2647", created:"---" },
  { id: 1, article: "Backlinks 101: What are backlinks and why they're important [Free template]",  keyword: "backlinks [8100]", words:"2261", created:"---" },
  { id: 1, article: "7 Leading AI SEO Tools in 2024 [Ranked & Compared]",  keyword: "ai seo software [880]", words:"1543", created:"" },
  { id: 1, article: "Unlimited Graphic Design Services You Can Rely On]",  keyword: "unlimited graphic design services [390]", words:"1974", created:"---" },
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
      r.article.toLowerCase().includes(search.toLowerCase()) ||
      r.keyword.toLowerCase().includes(search.toLowerCase())
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
