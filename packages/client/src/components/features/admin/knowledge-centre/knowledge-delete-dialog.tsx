import type { KnowledgeResource } from '../../../../services/knowledge-resource.service';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../../../ui/alert-dialog';

interface KnowledgeDeleteDialogProps {
  resource: KnowledgeResource | null;
  isPending: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}

const KnowledgeDeleteDialog: React.FC<KnowledgeDeleteDialogProps> = ({ resource, isPending, onOpenChange, onConfirm }) => {
  return (
    <AlertDialog open={!!resource} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this resource?</AlertDialogTitle>
          <AlertDialogDescription>“{resource?.title}” will be permanently removed, including its cover image and file. This can&apos;t be undone.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline" size="default">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction variant="ghost" size="default" disabled={isPending} onClick={onConfirm} className="bg-destructive text-white hover:bg-destructive/90">
            {isPending ? 'Deleting…' : 'Delete'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default KnowledgeDeleteDialog;
