import { FormFeedback as FormFeedbackType } from '@/types/common';
import ErrorFeedback from './ErrorFeedback';
import SuccessFeedback from './SuccessFeedback';

type FormFeedbackProps = {
  formFeedback: FormFeedbackType;
  resetFeedback: () => void;
};

function FormFeedback({ formFeedback, resetFeedback }: FormFeedbackProps) {
  return (
    <>
      {formFeedback.type === 'error' && (
        <ErrorFeedback
          text={formFeedback.message}
          resetFeedback={resetFeedback}
        />
      )}
      {formFeedback.type === 'success' && (
        <SuccessFeedback
          text={formFeedback.message}
          resetFeedback={resetFeedback}
        />
      )}
    </>
  );
}

export default FormFeedback;
