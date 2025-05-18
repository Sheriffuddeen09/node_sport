import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FaWordpressSimple } from "react-icons/fa";

export function DetailModal({ open, onClose, data }) {
  if (!data) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dashboard Detail</DialogTitle>
        </DialogHeader>
        <div className="space-y-2">
          <div>
            <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-blue-700">
            <FaWordpressSimple size={34} />
            </div>
          </div>
          <p><strong>Article Title :</strong> {data.article}</p>
          <p><strong>Keyword[Traffic]:</strong> {data.keyword}</p>
          <p><strong>Words:</strong> {data.words}</p>
          <p><strong>Created On:</strong> {data.created}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
