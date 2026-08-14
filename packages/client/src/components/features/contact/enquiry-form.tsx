import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  SERVICES,
  COUNTRIES,
  PROJECT_STAGES,
  ENQUIRY_FORM_DEFAULT_VALUES,
  enquirySchema,
  type EnquiryFormValues,
  INPUT_CLASSNAME,
  LABEL_CLASSNAME,
  ERROR_CLASSNAME,
} from './enquiry-form.constants';

const EnquiryForm: React.FC = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: ENQUIRY_FORM_DEFAULT_VALUES,
  });

  const onSubmit = async (values: EnquiryFormValues) => {
    console.log('Contact enquiry submitted', values);
    await new Promise((resolve) => setTimeout(resolve, 600));
    reset(ENQUIRY_FORM_DEFAULT_VALUES);
  };

  return (
    <section id="enquiry-form" className="bg-white flex flex-col items-start px-9 md:px-16 lg:px-66 py-16 lg:py-35">
      <div className="flex flex-col gap-16 items-start max-w-300 w-full">
        <div className="flex flex-col gap-4 items-center w-full text-center">
          <h2 className="font-light text-accent text-[32px] md:text-[40px] lg:text-5xl leading-[1.5] tracking-[-0.2px]">Detailed Project Enquiry</h2>
          <p className="font-light text-navy-subtle text-lg tracking-[-0.07px]">Provide us with your project details and our team will get back to you with a tailored response.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col lg:flex-row gap-16 items-start w-full">
          <div className="flex flex-1 flex-col gap-8 items-start w-full min-w-0">
            <h4 className="font-light text-accent text-xl border-b border-line pb-4 w-full">Contact Information</h4>

            <div className="flex flex-col gap-5 items-start w-full">
              <div className="flex flex-col gap-2 items-start w-full">
                <label className={LABEL_CLASSNAME} htmlFor="fullName">
                  Full Name *
                </label>
                <input id="fullName" placeholder="John Doe" className={INPUT_CLASSNAME} {...register('fullName')} />
                {errors.fullName && <span className={ERROR_CLASSNAME}>{errors.fullName.message}</span>}
              </div>

              <div className="flex flex-col gap-2 items-start w-full">
                <label className={LABEL_CLASSNAME} htmlFor="companyName">
                  Company Name *
                </label>
                <input id="companyName" placeholder="Enter company name" className={INPUT_CLASSNAME} {...register('companyName')} />
                {errors.companyName && <span className={ERROR_CLASSNAME}>{errors.companyName.message}</span>}
              </div>

              <div className="flex flex-col gap-2 items-start w-full">
                <label className={LABEL_CLASSNAME} htmlFor="jobTitle">
                  Job Title
                </label>
                <input id="jobTitle" placeholder="e.g. Operations Manager" className={INPUT_CLASSNAME} {...register('jobTitle')} />
              </div>

              <div className="flex flex-col gap-2 items-start w-full">
                <label className={LABEL_CLASSNAME} htmlFor="email">
                  Email Address *
                </label>
                <input id="email" type="email" placeholder="email@company.com" className={INPUT_CLASSNAME} {...register('email')} />
                {errors.email && <span className={ERROR_CLASSNAME}>{errors.email.message}</span>}
              </div>

              <div className="flex flex-col gap-2 items-start w-full">
                <label className={LABEL_CLASSNAME} htmlFor="phone">
                  Phone Number
                </label>
                <input id="phone" type="tel" placeholder="+234 ..." className={INPUT_CLASSNAME} {...register('phone')} />
              </div>

              <div className="flex flex-col gap-2 items-start w-full">
                <label className={LABEL_CLASSNAME} htmlFor="country">
                  Country
                </label>
                <select id="country" className={`${INPUT_CLASSNAME} appearance-none`} {...register('country')}>
                  {COUNTRIES.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-8 items-start w-full min-w-0">
            <h4 className="font-light text-accent text-xl border-b border-line pb-4 w-full">Enquiry Details</h4>

            <div className="flex flex-col gap-4 items-start w-full">
              <label className={LABEL_CLASSNAME}>Service of Interest *</label>

              <Controller
                control={control}
                name="serviceOfInterest"
                render={({ field }) => (
                  <div className="flex flex-wrap gap-2 items-center w-full">
                    {SERVICES.map((service) => {
                      const selected = field.value === service;
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => field.onChange(service)}
                          aria-pressed={selected}
                          className={`px-4 py-2 rounded-full text-[13px] font-light whitespace-nowrap border transition-colors ${
                            selected ? 'bg-secondary border-secondary text-white' : 'bg-ice-blue border-line text-accent'
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                )}
              />
              {errors.serviceOfInterest && <span className={ERROR_CLASSNAME}>{errors.serviceOfInterest.message}</span>}
            </div>

            <div className="flex flex-col gap-5 items-start w-full">
              <div className="flex flex-col sm:flex-row gap-5 items-start justify-center w-full">
                <div className="flex flex-1 flex-col gap-2 items-start w-full min-w-0">
                  <label className={LABEL_CLASSNAME} htmlFor="projectLocation">
                    Project Location
                  </label>
                  <input id="projectLocation" placeholder="e.g. Niger Delta" className={INPUT_CLASSNAME} {...register('projectLocation')} />
                </div>

                <div className="flex flex-1 flex-col gap-2 items-start w-full min-w-0">
                  <label className={LABEL_CLASSNAME} htmlFor="projectStage">
                    Project Stage
                  </label>
                  <select id="projectStage" className={`${INPUT_CLASSNAME} appearance-none`} {...register('projectStage')}>
                    {PROJECT_STAGES.map((stage) => (
                      <option key={stage} value={stage}>
                        {stage}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2 items-start w-full">
                <label className={LABEL_CLASSNAME} htmlFor="subject">
                  Subject
                </label>
                <input id="subject" placeholder="Message subject" className={INPUT_CLASSNAME} {...register('subject')} />
              </div>

              <div className="flex flex-col gap-2 items-start w-full">
                <label className={LABEL_CLASSNAME} htmlFor="message">
                  Message *
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us more about your requirements..."
                  rows={5}
                  className={`${INPUT_CLASSNAME} h-40 py-5 resize-none`}
                  {...register('message')}
                />
                {errors.message && <span className={ERROR_CLASSNAME}>{errors.message.message}</span>}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center bg-accent rounded-xl h-15 w-full font-light text-white text-base mt-3 disabled:opacity-60"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {isSubmitSuccessful && <span className="text-sm text-secondary">Thanks — your enquiry has been sent. Our team will be in touch shortly.</span>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;
