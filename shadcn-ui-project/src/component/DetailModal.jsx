import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function DetailModal({ open, onClose, data }) {
  if (!data) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>User Detail</DialogTitle>
        </DialogHeader>
        <div className="space-y-2">
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(data.name)}&background=0D8ABC&color=fff&size=64`}
            alt={data.name}
            className="h-16 w-16 rounded-full"
          />
          <p><strong>ID:</strong> {data.id}</p>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
