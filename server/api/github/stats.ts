import { defineEventHandler, setHeader } from 'h3';

export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  fork: boolean;
}

export interface GithubUser {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  bio: string | null;
  company: string | null;
  location: string | null;
}

export interface GithubEvent {
  id: string;
  type: string;
  repo: {
    name: string;
    url: string;
  };
  payload?: {
    commits?: Array<{ message: string; sha: string }>;
    action?: string;
    ref_type?: string;
  };
  created_at: string;
}

export interface LanguageStat {
  name: string;
  count: number;
  percentage: number;
  color: string;
}

export interface FormattedActivity {
  id: string;
  title: string;
  repoName: string;
  repoUrl: string;
  timestamp: string;
  type: string;
}

export interface WeeklyActivityPoint {
  day: string;
  count: number;
}

export interface ContributionGridPoint {
  level: number; // 0 (empty) to 4 (high density)
}

export interface GithubStatsResponse {
  user: GithubUser;
  totalStars: number;
  totalForks: number;
  totalRepos: number;
  followers: number;
  topLanguages: LanguageStat[];
  featuredRepos: GithubRepo[];
  recentActivities: FormattedActivity[];
  weeklyActivity: WeeklyActivityPoint[];
  contributionGrid: ContributionGridPoint[];
  fetchedAt: string;
  isFallback?: boolean;
}

const LANGUAGE_COLORS: Record<string, string> = {
  Vue: '#42b883',
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  HTML: '#e34f26',
  CSS: '#563d7c',
  PHP: '#4f5d95',
  Python: '#3572A5',
  Dart: '#00B4AB',
  Java: '#b07219',
  Go: '#00ADD8',
  Shell: '#89e051',
  Blade: '#f7523f',
};

const DEFAULT_COLOR = '#10b981';

// Generate mock contribution grid data (53 weeks * 7 days = 371 squares)
const generateMockGrid = (): ContributionGridPoint[] => {
  const grid: ContributionGridPoint[] = [];
  // Seed random distribution with higher density on weekdays
  for (let i = 0; i < 371; i++) {
    const isWeekend = i % 7 === 0 || i % 7 === 6;
    const rand = Math.random();
    let level = 0;
    if (isWeekend) {
      level = rand > 0.85 ? Math.floor(rand * 3) : 0;
    } else {
      level = rand > 0.4 ? Math.floor(rand * 5) : 0;
    }
    grid.push({ level });
  }
  return grid;
};

const FALLBACK_DATA: GithubStatsResponse = {
  user: {
    login: 'mahardikakdenie',
    name: 'Mahardika Kessuma Denie',
    avatar_url: 'https://avatars.githubusercontent.com/u/mahardikakdenie?v=4',
    html_url: 'https://github.com/mahardikakdenie',
    public_repos: 28,
    public_gists: 4,
    followers: 18,
    following: 12,
    created_at: '2019-04-12T00:00:00Z',
    bio: 'Software Engineer | SaaS Architect | Full Stack Developer',
    company: null,
    location: 'Indonesia',
  },
  totalStars: 42,
  totalForks: 15,
  totalRepos: 28,
  followers: 18,
  topLanguages: [
    { name: 'Vue', count: 12, percentage: 40, color: '#42b883' },
    { name: 'TypeScript', count: 9, percentage: 30, color: '#3178c6' },
    { name: 'PHP', count: 5, percentage: 17, color: '#4f5d95' },
    { name: 'JavaScript', count: 4, percentage: 13, color: '#f7df1e' },
  ],
  featuredRepos: [
    {
      id: 1,
      name: 'resume',
      full_name: 'mahardikakdenie/resume',
      description: 'Personal Branding & Executive Portfolio built with Nuxt 3, Tailwind CSS & Glassmorphism UI.',
      html_url: 'https://github.com/mahardikakdenie/resume',
      stargazers_count: 14,
      forks_count: 5,
      language: 'Vue',
      topics: ['nuxt3', 'tailwindcss', 'portfolio', 'typescript'],
      updated_at: new Date().toISOString(),
      fork: false,
    },
    {
      id: 2,
      name: 'agent-skills',
      full_name: 'mahardikakdenie/agent-skills',
      description: 'Enterprise AI agent skills & automated design system tools package.',
      html_url: 'https://github.com/mahardikakdenie/agent-skills',
      stargazers_count: 18,
      forks_count: 6,
      language: 'TypeScript',
      topics: ['ai-agent', 'monorepo', 'design-system'],
      updated_at: new Date().toISOString(),
      fork: false,
    },
  ],
  recentActivities: [
    {
      id: 'evt-1',
      title: 'Pushed updates to main branch',
      repoName: 'mahardikakdenie/resume',
      repoUrl: 'https://github.com/mahardikakdenie/resume',
      timestamp: new Date().toISOString(),
      type: 'PushEvent',
    },
    {
      id: 'evt-2',
      title: 'Created release v1.0.1',
      repoName: 'mahardikakdenie/agent-skills',
      repoUrl: 'https://github.com/mahardikakdenie/agent-skills',
      timestamp: new Date(Date.now() - 86400000).toISOString(),
      type: 'CreateEvent',
    },
  ],
  weeklyActivity: [
    { day: 'Mon', count: 5 },
    { day: 'Tue', count: 8 },
    { day: 'Wed', count: 3 },
    { day: 'Thu', count: 12 },
    { day: 'Fri', count: 6 },
    { day: 'Sat', count: 2 },
    { day: 'Sun', count: 4 },
  ],
  contributionGrid: generateMockGrid(),
  fetchedAt: new Date().toISOString(),
  isFallback: true,
};

let cachedResponse: { data: GithubStatsResponse; timestamp: number } | null = null;
const CACHE_TTL_MS = 15 * 60 * 1000;

export default defineEventHandler(async (event) => {
  setHeader(event, 'Cache-Control', 'public, max-age=900, s-maxage=900');

  const now = Date.now();
  if (cachedResponse && now - cachedResponse.timestamp < CACHE_TTL_MS) {
    return { success: true, data: cachedResponse.data };
  }

  const username = 'mahardikakdenie';
  const headers = {
    'User-Agent': 'Mahardika-Portfolio-App',
    Accept: 'application/vnd.github.v3+json',
  };

  try {
    const [userRes, reposRes, eventsRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers }),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, { headers }),
      fetch(`https://api.github.com/users/${username}/events/public?per_page=30`, { headers }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      throw new Error(`GitHub API error`);
    }

    const userData: GithubUser = await userRes.json();
    const reposData: GithubRepo[] = await reposRes.json();
    const eventsData: GithubEvent[] = eventsRes.ok ? await eventsRes.json() : [];

    const ownRepos = reposData.filter((r) => !r.fork);
    const totalStars = reposData.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
    const totalForks = reposData.reduce((sum, r) => sum + (r.forks_count || 0), 0);

    // Language Stats
    const langCounts: Record<string, number> = {};
    let totalLangCount = 0;
    ownRepos.forEach((repo) => {
      if (repo.language) {
        langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
        totalLangCount++;
      }
    });

    const topLanguages: LanguageStat[] = Object.entries(langCounts)
      .map(([name, count]) => ({
        name,
        count,
        percentage: Math.round((count / (totalLangCount || 1)) * 100),
        color: LANGUAGE_COLORS[name] || DEFAULT_COLOR,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    // Featured Repos
    const featuredRepos = [...ownRepos]
      .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
      .slice(0, 4);

    // Recent Activities
    const recentActivities: FormattedActivity[] = eventsData.slice(0, 5).map((evt) => {
      let title = `Activity in ${evt.repo.name}`;
      if (evt.type === 'PushEvent' && evt.payload?.commits?.length) {
        const commitMsg = evt.payload.commits[0].message;
        title = `Commit: ${commitMsg.length > 50 ? commitMsg.substring(0, 47) + '...' : commitMsg}`;
      } else if (evt.type === 'CreateEvent') {
        title = `Created ${evt.payload?.ref_type || 'repository'} in ${evt.repo.name.split('/')[1] || evt.repo.name}`;
      } else if (evt.type === 'WatchEvent') {
        title = `Starred ${evt.repo.name}`;
      } else if (evt.type === 'PullRequestEvent') {
        title = `Pull Request action in ${evt.repo.name}`;
      }

      return {
        id: evt.id,
        title,
        repoName: evt.repo.name,
        repoUrl: `https://github.com/${evt.repo.name}`,
        timestamp: evt.created_at,
        type: evt.type,
      };
    });

    // Calculate Weekly Activity (Last 7 days event frequency)
    const daysName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const weeklyCountsMap: Record<string, number> = {};
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      weeklyCountsMap[daysName[d.getDay()]] = 0;
    }

    eventsData.forEach((evt) => {
      const evtDate = new Date(evt.created_at);
      const diffDays = Math.floor((Date.now() - evtDate.getTime()) / (1000 * 3600 * 24));
      if (diffDays >= 0 && diffDays < 7) {
        const dayName = daysName[evtDate.getDay()];
        if (weeklyCountsMap[dayName] !== undefined) {
          weeklyCountsMap[dayName]++;
        }
      }
    });

    const weeklyActivity: WeeklyActivityPoint[] = Object.entries(weeklyCountsMap).map(([day, count]) => ({
      day,
      count,
    }));

    const payload: GithubStatsResponse = {
      user: userData,
      totalStars,
      totalForks,
      totalRepos: userData.public_repos || reposData.length,
      followers: userData.followers || 0,
      topLanguages,
      featuredRepos,
      recentActivities,
      weeklyActivity,
      contributionGrid: generateMockGrid(),
      fetchedAt: new Date().toISOString(),
      isFallback: false,
    };

    cachedResponse = { data: payload, timestamp: now };
    return { success: true, data: payload };
  } catch (err: any) {
    return {
      success: true,
      data: FALLBACK_DATA,
      warning: 'Using fallback stats data.',
    };
  }
});
