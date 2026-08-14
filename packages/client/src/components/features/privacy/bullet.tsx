interface BulletProps {
  title: string;
  description: string;
}

const Bullet: React.FC<BulletProps> = ({ title, description }) => (
  <div className="flex gap-4 items-start w-full">
    <div className="flex flex-col pt-2.5 shrink-0">
      <div className="bg-secondary rounded-full size-2" />
    </div>
    <div className="flex flex-col items-start">
      <p className="font-bold text-accent text-base leading-6">{title}</p>
      <p className="font-light text-navy-subtle text-base leading-6">{description}</p>
    </div>
  </div>
);

export default Bullet;
