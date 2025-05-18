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
    <div>
      <Table>
        <TableCaption>A list of users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-4"></TableHead>
            <TableHead className="w-12">Avatar</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="w-20 text-right">Action</TableHead>
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
                <TableRow key={r.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedIds.has(r.id)}
                      onCheckedChange={() => toggleRow(r.id)}
                    />
                  </TableCell>
                  <TableCell>
                    <img
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(r.name)}&background=0D8ABC&color=fff&size=32`}
                      alt={r.name}
                      className="h-8 w-8 rounded-full"
                    />
                  </TableCell>
                  <TableCell>{r.id}</TableCell>
                  <TableCell>{r.name}</TableCell>
                  <TableCell>{r.email}</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="ghost" onClick={() => openDetails(r)}>
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>

      {!loading && (
        <div className="mt-4 flex items-center justify-between text-sm">
          <p>Showing {data.length} of {total} record(s)</p>
          <div className="flex items-center gap-2">
            <span>Show</span>
            <select
              className="border px-2 py-1 rounded"
              value={entriesPerPage}
              onChange={(e) => setEntriesPerPage(Number(e.target.value))}
            >
              {[5, 10, 25, 50].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
            <span>entries</span>
          </div>
        </div>
      )}
    </div>
  );
}
