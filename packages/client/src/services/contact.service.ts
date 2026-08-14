import http from './http';
import type { EnquiryFormValues } from '../components/features/contact/enquiry-form.constants';

const contactService = {
  submitEnquiry(values: EnquiryFormValues) {
    return http.post('/api/v1/contact/enquiries', values);
  },
};

export default contactService;
