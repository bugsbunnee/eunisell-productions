import { Link } from 'react-router-dom';
import { ArrowUpDown, FileText, MoreVertical, SquarePen, Trash2 } from 'lucide-react';

import type { BlogPost } from '../../../../services/blog.service';
import { adminPaths } from '../../../../lib/data';
import dayjs from '../../../../lib/dayjs';

import { Button } from '../../../ui/button';
import { Skeleton } from '../../../ui/skeleton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../../ui/dropdown-menu';
import StatusPill from './status-pill';

interface BlogListTableProps {
  posts: BlogPost[];
  isLoading: boolean;
  skeletonRowCount: number;
  docNumberForIndex: (index: number) => number;
  onSortToggle: () => void;
  emptyMessage: string;
  onDeleteRequest: (post: BlogPost) => void;
}

const BlogListTable: React.FC<BlogListTableProps> = ({ posts, isLoading, skeletonRowCount, docNumberForIndex, onSortToggle, emptyMessage, onDeleteRequest }) => {
  return (
    <div className="flex flex-col gap-px">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-border">
            <TableHead className="w-24">No.</TableHead>
            <TableHead>Post</TableHead>
            <TableHead className="w-32">Category</TableHead>
            <TableHead className="w-24">Read time</TableHead>
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
          {isLoading ? (
            Array.from({ length: skeletonRowCount }).map((_, index) => (
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
            ))
          ) : posts.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="h-48 text-center">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <FileText className="size-6" strokeWidth={1.5} />
                  <p className="text-sm">{emptyMessage}</p>
                </div>
              </TableCell>
            </TableRow>
          ) : (
            posts.map((post, index) => (
              <TableRow key={post.id} className="border-border">
                <TableCell className="text-xs text-muted-foreground">EUN-BLG-{String(docNumberForIndex(index)).padStart(4, '0')}</TableCell>
                <TableCell className="whitespace-normal max-w-0">
                  <Link to={adminPaths.blogEdit(post.id)} className="flex items-center gap-3 group min-w-0">
                    <img src={post.coverImage} alt="" className="size-9 rounded-lg object-cover border border-border shrink-0" />
                    <span title={post.title} className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1 min-w-0">
                      {post.title}
                    </span>
                  </Link>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">{post.category}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{post.readTime}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{dayjs(post.createdAt).format('DD/MM/YY')}</TableCell>
                <TableCell>
                  <StatusPill status={post.status} />
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon-sm" aria-label={`Actions for ${post.title}`}>
                        <MoreVertical className="size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link to={adminPaths.blogEdit(post.id)}>
                          <SquarePen className="size-3.5" /> Edit
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem variant="destructive" onSelect={() => onDeleteRequest(post)}>
                        <Trash2 className="size-3.5" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default BlogListTable;
