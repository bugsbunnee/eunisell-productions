import { Link } from 'react-router-dom';
import { ArrowUpDown, FileText, MoreVertical, SquarePen, Trash2 } from 'lucide-react';
import { Activity } from 'react';

import type { KnowledgeResource } from '../../../../services/knowledge-resource.service';
import { adminPaths } from '../../../../lib/data';
import { formatFileSize } from '../../../../lib/utils';

import StatusPill from '../blog/status-pill';
import dayjs from '../../../../lib/dayjs';

import { Button } from '../../../ui/button';
import { Skeleton } from '../../../ui/skeleton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../../ui/dropdown-menu';

interface KnowledgeListTableProps {
  resources: KnowledgeResource[];
  isLoading: boolean;
  skeletonRowCount: number;
  docNumberForIndex: (index: number) => number;
  onSortToggle: () => void;
  emptyMessage: string;
  onDeleteRequest: (resource: KnowledgeResource) => void;
}

const KnowledgeListTable: React.FC<KnowledgeListTableProps> = ({ resources, isLoading, skeletonRowCount, docNumberForIndex, onSortToggle, emptyMessage, onDeleteRequest }) => {
  return (
    <div className="flex flex-col gap-px">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-border">
            <TableHead className="w-24">No.</TableHead>
            <TableHead>Resource</TableHead>
            <TableHead className="w-40">Category</TableHead>
            <TableHead className="w-24">File</TableHead>
            <TableHead className="w-28">
              <button type="button" onClick={onSortToggle} className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                Created
                <ArrowUpDown className="size-3.5" />
              </button>
            </TableHead>
            <TableHead className="w-28">Status</TableHead>
            <TableHead className="w-10" />
          </TableRow>
        </TableHeader>

        <TableBody>
          <Activity mode={isLoading ? 'visible' : 'hidden'}>
            {Array.from({ length: skeletonRowCount }).map((_, index) => (
              <TableRow key={index} className="border-border">
                <TableCell>
                  <Skeleton className="h-4 w-16" />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Skeleton className="size-9 rounded-lg shrink-0" />
                    <Skeleton className="h-4 w-40" />
                  </div>
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-16" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-10" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-14" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-16 rounded-full" />
                </TableCell>
                <TableCell>
                  <Skeleton className="size-8 rounded-md" />
                </TableCell>
              </TableRow>
            ))}
          </Activity>

          <Activity mode={isLoading ? 'hidden' : 'visible'}>
            <Activity mode={resources.length === 0 ? 'visible' : 'hidden'}>
              <TableRow>
                <TableCell colSpan={7} className="h-48 text-center">
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <FileText className="size-6" strokeWidth={1.5} />
                    <p className="text-sm">{emptyMessage}</p>
                  </div>
                </TableCell>
              </TableRow>
            </Activity>

            <Activity mode={resources.length > 0 ? 'visible' : 'hidden'}>
              {resources.map((resource, index) => (
                <TableRow key={resource.id} className="border-border">
                  <TableCell className="text-xs text-muted-foreground">EUN-KC-{String(docNumberForIndex(index)).padStart(4, '0')}</TableCell>
                  <TableCell className="whitespace-normal max-w-0">
                    <Link to={adminPaths.knowledgeCentreEdit(resource.id)} className="flex items-center gap-3 group min-w-0">
                      <img src={resource.coverImage} alt="" className="size-9 rounded-lg object-cover border border-border shrink-0" />
                      <span title={resource.title} className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1 min-w-0">
                        {resource.title}
                      </span>
                    </Link>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{resource.category}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {resource.fileType} · {formatFileSize(resource.fileSizeBytes)}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{dayjs(resource.createdAt).format('DD/MM/YY')}</TableCell>
                  <TableCell>
                    <StatusPill status={resource.status} />
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon-sm" aria-label={`Actions for ${resource.title}`}>
                          <MoreVertical className="size-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link to={adminPaths.knowledgeCentreEdit(resource.id)}>
                            <SquarePen className="size-3.5" /> Edit
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem variant="destructive" onSelect={() => onDeleteRequest(resource)}>
                          <Trash2 className="size-3.5" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </Activity>
          </Activity>
        </TableBody>
      </Table>
    </div>
  );
};

export default KnowledgeListTable;
