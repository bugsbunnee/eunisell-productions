import { FilePlus, LogIn, Pencil, Trash2, UserRound, type LucideIcon } from 'lucide-react';

import type { ActivityEntry } from '../../../../services/activity.service';
import dayjs from '../../../../lib/dayjs';

interface ActivityFeedProps {
  items: ActivityEntry[];
}

const ACTION_ICON: Record<ActivityEntry['action'], LucideIcon> = {
  login: LogIn,
  created: FilePlus,
  updated: Pencil,
  deleted: Trash2,
};

const ActivityFeed: React.FC<ActivityFeedProps> = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 py-10 text-center text-muted-foreground">
        <UserRound className="size-6" strokeWidth={1.5} />
        <p className="text-sm">No activity recorded yet.</p>
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-1">
      {items.map((item) => {
        const Icon = ACTION_ICON[item.action];

        return (
          <li key={item.id} className="flex items-center gap-3 rounded-md px-2 py-2.5 -mx-2">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted/60">
              <Icon className="size-3.5 text-muted-foreground" strokeWidth={1.75} />
            </div>
            <span className="min-w-0 flex-1 truncate text-sm text-foreground">{item.description}</span>
            <span className="font-mono text-[11px] text-muted-foreground shrink-0">{dayjs(item.createdAt).fromNow()}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default ActivityFeed;
