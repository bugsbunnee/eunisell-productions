import { Fragment } from 'react';
import { Stagger, StaggerItem } from '../../common/motion';

const steps = [
  { number: '01', title: 'Discover' },
  { number: '02', title: 'Design' },
  { number: '03', title: 'Execute' },
  { number: '04', title: 'Commission' },
  { number: '05', title: 'Support' },
];

const Process: React.FC = () => {
  return (
    <section className="bg-accent flex flex-col items-center px-9 md:px-16 lg:px-36 py-25">
      <Stagger className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-y-10 max-w-360 w-full">
        {steps.map(({ number, title }, index) => (
          <Fragment key={number}>
            {index > 0 && <div className="hidden lg:block h-px flex-1 bg-secondary" />}
            <StaggerItem className="flex flex-col gap-3 items-center lg:items-start shrink-0 w-1/2 sm:w-auto">
              <div className="border border-secondary rounded-full flex items-center mx-auto justify-center size-10">
                <span className="font-inter font-bold text-white text-base">{number}</span>
              </div>
              <h3 className="font-inter font-bold text-white text-xl leading-normal whitespace-nowrap">{title}</h3>
            </StaggerItem>
          </Fragment>
        ))}
      </Stagger>
    </section>
  );
};

export default Process;
