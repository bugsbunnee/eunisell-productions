import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface PublishingTrendChartProps {
  data: { month: string; published: number; draft: number }[];
}

const tickStyle = { fontSize: 11, fill: 'var(--muted-foreground)', fontFamily: 'var(--font-mono)' };

const PublishingTrendChart: React.FC<PublishingTrendChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
        <CartesianGrid vertical={false} stroke="var(--border)" />
        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={tickStyle} />
        <YAxis allowDecimals={false} axisLine={false} tickLine={false} tick={tickStyle} width={28} />
        <Tooltip
          cursor={{ stroke: 'var(--border)', strokeWidth: 1 }}
          contentStyle={{ background: 'var(--popover)', border: '1px solid var(--border)', borderRadius: 6, fontSize: 12, fontFamily: 'var(--font-sans)' }}
          labelStyle={{ color: 'var(--foreground)', fontWeight: 500 }}
        />
        <Line
          type="monotone"
          dataKey="published"
          name="Published"
          stroke="var(--stamp-published)"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4, strokeWidth: 2, stroke: 'var(--primary-foreground)' }}
        />
        <Line
          type="monotone"
          dataKey="draft"
          name="Draft"
          stroke="var(--stamp-draft)"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4, strokeWidth: 2, stroke: 'var(--primary-foreground)' }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PublishingTrendChart;
