import { UseFormReturn, FormProvider as Form } from 'react-hook-form';

// ----------------------------------------------------------------------

export default function RHFFormProvider({ children, onSubmit, methods }) {
  return (
    <div className='w-full'>
 <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
    </div>
   
  );
}
