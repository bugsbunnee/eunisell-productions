import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface PublishingChartProps {
  data: { month: string; posts: number }[];
}

const PublishingChart: React.FC<PublishingChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
        <CartesianGrid vertical={false} stroke="var(--border)" />
        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'var(--muted-foreground)', fontFamily: 'var(--font-mono)' }} />
        <YAxis allowDecimals={false} axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: 'var(--muted-foreground)', fontFamily: 'var(--font-mono)' }} width={28} />
        <Tooltip
          cursor={{ fill: 'var(--muted)' }}
          contentStyle={{ background: 'var(--popover)', border: '1px solid var(--border)', borderRadius: 6, fontSize: 12, fontFamily: 'var(--font-sans)' }}
          labelStyle={{ color: 'var(--foreground)', fontWeight: 500 }}
        />
        <Bar dataKey="posts" fill="var(--primary)" radius={[3, 3, 0, 0]} maxBarSize={28} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PublishingChart;
