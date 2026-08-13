import { ref, computed } from 'vue';
import type { GithubStatsResponse } from '~/server/api/github/stats';

export const useGithubStats = () => {
  const { data, pending, error, refresh } = useFetch<{ success: boolean; data: GithubStatsResponse }>('/api/github/stats', {
    key: 'github-user-stats-mahardikakdenie',
    lazy: true,
  });

  const stats = computed(() => data.value?.data || null);

  const formatRelativeTime = (isoString: string): string => {
    if (!isoString) return '';
    const date = new Date(isoString);
    const now = new Date();
    const diffSec = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffSec < 60) return 'Just now';
    if (diffSec < 3600) return `${Math.floor(diffSec / 60)}m ago`;
    if (diffSec < 86400) return `${Math.floor(diffSec / 3600)}h ago`;
    if (diffSec < 2592000) return `${Math.floor(diffSec / 86400)}d ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return {
    stats,
    pending,
    error,
    refreshStats: refresh,
    formatRelativeTime,
  };
};
