import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { CreateReportForm } from "./CreateReportForm";

const CreateReportModal = () => {
  return (
    <Dialog>
      <DialogTrigger>Створити запис</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Бажаєте створити запис?</DialogTitle>
        </DialogHeader>
        <CreateReportForm />
      </DialogContent>
    </Dialog>
  );
};

export default CreateReportModal;
