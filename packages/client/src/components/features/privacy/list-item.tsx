import type { PropsWithChildren } from 'react';

const ListItem: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="flex gap-4 items-start w-full">
    <div className="flex flex-col pt-2.5 shrink-0">
      <div className="bg-secondary rounded-full size-2" />
    </div>

    <p className="font-light text-navy-subtle text-lg leading-normal">{children}</p>
  </div>
);

export default ListItem;
