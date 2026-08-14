import { Bar, BarChart, Cell, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface CategoryBarChartProps {
  data: { category: string; count: number }[];
}

const PALETTE = ['var(--viz-1)', 'var(--viz-2)', 'var(--viz-3)', 'var(--viz-4)', 'var(--viz-5)', 'var(--viz-6)'];
const MAX_SLOTS = 6;

const CategoryBarChart: React.FC<CategoryBarChartProps> = ({ data }) => {
  const sorted = [...data].sort((a, b) => b.count - a.count);
  const head = sorted.slice(0, MAX_SLOTS);
  const otherCount = sorted.slice(MAX_SLOTS).reduce((sum, item) => sum + item.count, 0);
  const chartData = otherCount > 0 ? [...head, { category: 'Other', count: otherCount }] : head;

  return (
    <ResponsiveContainer width="100%" height={Math.max(chartData.length * 36, 120)}>
      <BarChart data={chartData} layout="vertical" margin={{ top: 4, right: 28, left: 0, bottom: 0 }}>
        <XAxis type="number" hide allowDecimals={false} />
        <YAxis type="category" dataKey="category" axisLine={false} tickLine={false} width={150} tick={{ fontSize: 12, fill: 'var(--foreground)' }} />
        <Tooltip
          cursor={{ fill: 'var(--muted)' }}
          contentStyle={{ background: 'var(--popover)', border: '1px solid var(--border)', borderRadius: 6, fontSize: 12, fontFamily: 'var(--font-sans)' }}
          labelStyle={{ color: 'var(--foreground)', fontWeight: 500 }}
        />
        <Bar dataKey="count" radius={[0, 4, 4, 0]} maxBarSize={20}>
          {chartData.map((entry, index) => (
            <Cell key={entry.category} fill={entry.category === 'Other' ? 'var(--muted-foreground)' : PALETTE[index % PALETTE.length]} />
          ))}
          <LabelList dataKey="count" position="right" style={{ fill: 'var(--muted-foreground)', fontSize: 12 }} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CategoryBarChart;
