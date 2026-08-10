import { useState, useEffect, useCallback } from 'react';
import { focusAnalyticsService, type FocusAnalytics } from '../services/focusAnalyticsService';

export function useFocusAnalytics() {
  const [data, setData] = useState<FocusAnalytics | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchAnalytics = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const analytics = await focusAnalyticsService.getAnalytics();
      setData(analytics);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch analytics'));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAnalytics();
  }, [fetchAnalytics]);

  const refresh = () => {
    fetchAnalytics();
  };

  return {
    data,
    isLoading,
    error,
    refresh
  };
}
