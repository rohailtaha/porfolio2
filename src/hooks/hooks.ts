import { FormFeedback } from '@/types/common';
import { useCallback, useMemo, useState } from 'react';

export function useFormFeedback() {
  const [formFeedback, setFormFeedback] = useState<null | FormFeedback>(null);

  const setError = useCallback((message: string, interval?: number) => {
    setFormFeedback({ type: 'error', message });
    if (interval) {
      setTimeout(() => {
        setFormFeedback(null);
      }, interval);
    }
  }, []);

  const setSuccess = useCallback((message: string, interval?: number) => {
    setFormFeedback({ type: 'success', message });
    if (interval) {
      setTimeout(() => {
        setFormFeedback(null);
      }, interval);
    }
  }, []);

  const resetFeedback = useCallback(() => setFormFeedback(null), []);

  return useMemo(
    () => ({
      formFeedback,
      setError,
      setSuccess,
      resetFeedback,
    }),
    [formFeedback, resetFeedback, setError, setSuccess]
  );
}
