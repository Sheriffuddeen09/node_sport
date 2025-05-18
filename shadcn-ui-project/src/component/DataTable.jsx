import {
  Table, TableBody, TableCaption, TableCell,
  TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { useContext } from "react";
import { LoadingCtx } from "../layout/MainLayout";
import { FaWordpressSimple } from "react-icons/fa";

export function DataTable({
  data = [],
  total,
  entriesPerPage,
  setEntriesPerPage,
  selectedIds,
  toggleRow,
  openDetails,
}) {
  const loading = useContext(LoadingCtx);

  return (
    <div className=" flex justify-start sm:justify-center sm:items-center flex-col flex w-72 lg-w-full mx-auto scroll-wid rounded-lg scrollb sm:scrollbar-thumb-transparent  scroll-p-0 scroll-smooth scrollbar scrollbar-thumb-blue-300  scrollbar-thin scrollbar-track-white my-2">
      <Table>
        <TableHeader >
          <TableRow >
            <TableHead className="w-4"></TableHead>
            <TableHead className="font-bold text-black whitespace-nowrap">Article Title</TableHead>
            <TableHead className="font-bold text-black">Keyword[Traffic]</TableHead>
            <TableHead className="font-bold text-black">Words</TableHead>
            <TableHead className="font-bold text-black whitespace-nowrap">Created On</TableHead>
            <TableHead className="font-bold text-black w-20 text-right">Action</TableHead>
            <TableHead className="font-bold text-black w-12">Publish</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
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
                <TableRow key={r.id} className="text-xs font-semibold">
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
                    <Button className="text-green-600 border-2 border-green-600 w-24" size="sm" variant="ghost" onClick={() => openDetails(r)}>
                     View 
                    </Button>
                  </TableCell>
                  <TableCell>
                     <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-blue-700">
                      <FaWordpressSimple size={34} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>

      {!loading && (
        <div className="mt-4 mb-10 pb-10 flex items-center gap-1 inline-flex text-xs sm:text-sm">
          <p>Total {data.length} Article(s) Title </p>
          <div className="flex items-center gap-2">
            <span> | Show</span>
            <select
              className="border px-2 py-1 rounded text-blue-400 "
              value={entriesPerPage}
              onChange={(e) => setEntriesPerPage(Number(e.target.value))}
            >
              {[1,2,3,4,5,6,7,8,9, 10,11,12,13,14,15,16,17,18,19,20].map((n) => (
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
