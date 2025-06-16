import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"


export default function Modal({open, onClose,modalContent}){

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent  className="sm:max-w-[800px] h-[90vh] flex flex-col p-0 dark:bg-gray-200 dark:text-gray-50">
                {modalContent}
            </DialogContent>
        </Dialog>
    )

}