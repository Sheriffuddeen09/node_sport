import {
  Table, TableBody, TableCaption, TableCell,
  TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ChevronDown, Eye } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { loadingCtx } from "../layout/MainLayout";
import { FaWordpressSimple } from "react-icons/fa";

export function DataTable({
  data = [],
  entriesPerPage,
  setEntriesPerPage,
  selectedIds,
  toggleRow,
  openDetails,
}) {
  const loading = useContext(loadingCtx);
  const [check, setCheck] = useState(false);

  // Sync header checkbox with selectedIds
  useEffect(() => {
    if (!loading) {
      setCheck(selectedIds.size === data.length && data.length > 0);
    }
  }, [selectedIds, data, loading]);

  // Handle header checkbox change (select all / unselect all)
  const handleChange = (checked) => {
    setCheck(checked);
    if (checked) {
      // Select all rows
      data.forEach((item) => {
        if (!selectedIds.has(item.id)) {
          toggleRow(item.id);
        }
      });
    } else {
      // Deselect all rows
      data.forEach((item) => {
        if (selectedIds.has(item.id)) {
          toggleRow(item.id);
        }
      });
    }
  };

  return (
    <div className=" z_index lg:ml-0 ml-0 flex height-t justify-start sm:justify-center sm:items-center flex-col flex w-72 lg-w-full mx-auto scroll-wid rounded-lg scrollb sm:scrollbar-thumb-transparent  scroll-p-0 scroll-smooth scrollbar scrollbar-thumb-blue-300  scrollbar-thin scrollbar-track-white my-2">
      <Table>
        <TableHeader >
           <TableRow className="border border-black border-r-0 border-l-0 border-t-0">
      <TableHead >
              <Checkbox
                onCheckedChange={handleChange}
                checked={check}
              />
            </TableHead>
            <TableHead className="font-bold text-black whitespace-nowrap">Article Title</TableHead>
             <TableHead className="font-bold text-black inline-flex items-center whitespace-nowrap">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
              </svg>Keyword[Traffic]</TableHead>
            <TableHead className="font-bold text-black">Words</TableHead>
            <TableHead className="font-bold text-black inline-flex items-center whitespace-nowrap">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
              </svg>

              Created On</TableHead>
            <TableHead className="font-bold text-black w-20 text-right">Action</TableHead>
            <TableHead className="font-bold text-black w-12">Publish</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="border border-black border-r-0 border-l-0 border-t-0 text-xs font-semibold mt-20">
          {loading
            ? Array.from({ length: 5 }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell><Skeleton className="h-4 w-4" /></TableCell>
                  <TableCell><Skeleton className="h-8 w-8 rounded-full" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-6" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                  <TableCell><Skeleton className="h-8 w-8" /></TableCell>
                </TableRow>
              ))
            : data.map((r) => (
                <TableRow  key={r.id} className="border text-small border-black border-r-0 border-l-0 border-t-0 text-xs font-semibold">
                  <TableCell>
                    <Checkbox
                      checked={selectedIds.has(r.id)}
                      onCheckedChange={() => toggleRow(r.id)}
                    />
                  </TableCell>  
                  <TableCell>{r.article}</TableCell>
                  <TableCell>{r.keyword}</TableCell>
                  <TableCell>{r.words}</TableCell>
                  <TableCell>{r.created}</TableCell>
                  <TableCell className="text-right">
                    <Button className="text-green-600 border-2 h-7 border-green-600 w-20" size="sm" variant="ghost" onClick={() => openDetails(r)}>
                     View 
                    </Button>
                  </TableCell>
                  <TableCell>
                    <div className="inline-flex items-center">
                     <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-blue-700">
                      <FaWordpressSimple size={28} />
                    </div>
                    <ChevronDown className="h-4 w-4" />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>

     {!loading && (
  <div className="mt-4 mb-10 pb-10 flex justify-start whitespace-nowrap items-center gap-1 text-xs">
    <p>Total {data.length} Article Title </p>
    <div className="flex items-center gap-2 ml-2">
      <span>| Show</span>
      <select
        className="border px-2 py-1 rounded text-blue-400"
        value={entriesPerPage}
        onChange={(e) => setEntriesPerPage(Number(e.target.value))}
      >
        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((n) => (
          <option key={n}>{n}</option>
        ))}
      </select>
      <span>entries per page</span>
    </div>
  </div>
)}

    </div>
  );
}
