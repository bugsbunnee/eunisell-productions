import { createFormHook } from '@tanstack/react-form';

import { fieldContext, formContext } from './form-context';

import TextField from './TextField';
import TextAreaField from './TextAreaField';
import SelectField from './SelectField';
import SubmitButton from './SubmitButton';

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
    TextAreaField,
    SelectField,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
});
