interface SectionHeadingProps {
  number: string;
  title: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ number, title }) => (
  <div className="flex gap-4 items-baseline">
    <span className="font-light text-secondary text-lg">{number}</span>
    <h2 className="font-bold text-accent text-3xl leading-normal">{title}</h2>
  </div>
);

export default SectionHeading;
