interface StatTileProps {
  value: string | number;
  label: string;
  accent?: string;
}

const StatTile: React.FC<StatTileProps> = ({ value, label, accent = 'var(--primary)' }) => {
  return (
    <div className="relative bg-card border border-border rounded-lg overflow-hidden">
      <div className="h-[3px] w-full" style={{ background: accent }} />
      <div className="flex flex-col gap-1.5 px-5 py-5">
        <span className="font-mono text-3xl font-medium text-foreground tabular-nums">{value}</span>
        <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{label}</span>
      </div>
    </div>
  );
};

export default StatTile;
