// lib/data.ts – All data lives here. Import ONLY via lib/fetchData.ts everywhere else.

export type ImpactLevel = 'high' | 'medium' | 'low';
export type MiscStatus = 'in-progress' | 'upcoming' | 'planned' | 'completed';
export type MiscType = 'learning' | 'upcoming' | 'goal' | 'personal' | 'other';
export type ChartType = 'line' | 'bar' | 'before-after';

export interface CodeActivity {
  date: string; // "YYYY-MM-DD"
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface ChartDataPoint {
  label: string;
  value: number;
  unit?: string;
}

export interface AchievementChart {
  type: ChartType;
  title: string;
  unit?: string;
  data: ChartDataPoint[];
  beforeLabel?: string;
  afterLabel?: string;
}

export interface SupportingDoc {
  id: string;
  title: string;
  url: string;
  type: 'doc' | 'design' | 'recording' | 'report' | 'other';
}

export interface AchievementTestimonial {
  id: string;
  name: string;
  designation: string;
  image?: string;
  comment: string;
}

export interface Achievement {
  id: string;
  title: string;
  category: string;
  impact: ImpactLevel;
  date?: string;
  metric?: string;
  description?: string;
  tickets?: Array<{ label: string; url: string }>;
  prs?: Array<{ label: string; url: string }>;
  chart?: AchievementChart;
  supportingDocs?: SupportingDoc[];
  testimonials?: AchievementTestimonial[];
}

export type SkillCategory = 'improved' | 'new';

export interface Skill {
  name: string;
  level: number;
  category?: SkillCategory;
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  image?: string;
  comment: string;
}

export interface Badge {
  id: string;
  title: string;
  description?: string;
  earnedOn?: string; // "YYYY-MM"
  icon: string; // Emoji fallback
  color: string; // Theme color variable
  imageUrl?: string; // Optional image (e.g., shields.io)
  imageWidth?: number; // Optional custom width
  imageHeight?: number; // Optional custom height
  viewUrl?: string; // Link to credly or evidence
}

export interface Certification {
  id: string;
  title: string;
  issuer?: string;
  issuedOn?: string;
  expiresOn?: string | null;
  credentialUrl?: string;
  icon?: string;
  registered?: boolean;
}

export interface MiscItem {
  id: string;
  type: MiscType;
  title: string;
  status: MiscStatus;
  progress?: number | null;
  note?: string;
  icon?: string;
}

export interface ProfileMetrics {
  projectsShipped: number | string;
  prsReviewed: number | string;
  prsMerged: number | string;
  techDiscussions: number | string;
}

export interface BragData {
  name: string;
  role: string;
  team?: string;
  period: string;
  years: string[];
  metrics: ProfileMetrics;
  achievements: Achievement[];
  skills: Skill[];
  testimonials: Testimonial[];
  badges: Badge[];
  certifications: Certification[];
  misc: MiscItem[];
  codeActivity: CodeActivity[];
}

export const BRAG_DATA: BragData = {
  name: 'Anagha Yawale',
  role: 'Packaged App Development Associate',
  team: 'Supplier Platform-Sustainability',
  period: 'July 2024 – Current',
  years: ['2026', '2025', '2024'],
  metrics: {
    projectsShipped: 12,
    prsReviewed: 134,
    prsMerged: 89,
    techDiscussions: 28,
  },
  achievements: [
    {
      id: '1',
      title: 'Improved API response time from 4s to 300ms',
      category: 'Performance',
      impact: 'high',
      date: '2024-02',
      metric: '~93% faster',
      description:
        'Profiled and rewrote the core data-fetch layer, added Redis caching, and eliminated N+1 queries across 3 critical endpoints. The change unblocked the mobile team who had been dealing with timeout errors for months.',
      tickets: [
        {
          label: 'PERF-1204',
          url: 'https://linear.app/example/issue/PERF-1204',
        },
        {
          label: 'PERF-1210',
          url: 'https://linear.app/example/issue/PERF-1210',
        },
      ],
      prs: [
        { label: '#891', url: 'https://github.com/example/repo/pull/891' },
        { label: '#904', url: 'https://github.com/example/repo/pull/904' },
      ],
      chart: {
        type: 'before-after',
        title: 'API Response Time by Endpoint',
        unit: 'ms',
        beforeLabel: 'Before (Jan 2024)',
        afterLabel: 'After (Feb 2024)',
        data: [
          { label: '/api/feed', value: 3800 },
          { label: '/api/feed', value: 210 },
          { label: '/api/user/stats', value: 4200 },
          { label: '/api/user/stats', value: 280 },
          { label: '/api/search', value: 5100 },
          { label: '/api/search', value: 340 },
        ],
      },
      supportingDocs: [
        {
          id: 'd1',
          title: 'Performance Audit Report',
          url: 'https://example.com/perf-report',
          type: 'report',
        },
        {
          id: 'd2',
          title: 'Architecture Decision Record',
          url: 'https://example.com/adr',
          type: 'doc',
        },
      ],
      testimonials: [
        {
          id: 'at1',
          name: 'Priya Sharma',
          designation: 'Engineering Manager',
          image: 'https://i.pravatar.cc/80?img=47',
          comment:
            'This single change unblocked our mobile team who had been dealing with timeout errors for months. Exceptional root-cause analysis and clean execution.',
        },
      ],
    },
    {
      id: '2',
      title: 'Led design system migration across 3 squads',
      category: 'Leadership',
      impact: 'high',
      date: '2024-04',
      metric: '3 teams unblocked',
      description:
        'Drove adoption of the new Radix-based component library across Growth, Checkout, and Onboarding squads. Reduced UI inconsistencies by 80% and cut per-squad component duplication significantly.',
      tickets: [
        { label: 'DS-330', url: 'https://linear.app/example/issue/DS-330' },
      ],
      prs: [
        { label: '#712', url: 'https://github.com/example/repo/pull/712' },
        { label: '#750', url: 'https://github.com/example/repo/pull/750' },
      ],
      chart: {
        type: 'bar',
        title: 'Components Migrated per Squad',
        unit: 'components',
        data: [
          { label: 'Growth', value: 34 },
          { label: 'Checkout', value: 28 },
          { label: 'Onboarding', value: 21 },
        ],
      },
      supportingDocs: [],
      testimonials: [
        {
          id: 'at2',
          name: 'Jordan Lee',
          designation: 'Staff Engineer',
          image: 'https://i.pravatar.cc/80?img=12',
          comment:
            'Alex ran the migration playbook with zero drama. Clear docs, patient pairing sessions, and a smooth rollout across every squad.',
        },
      ],
    },
    {
      id: '3',
      title: 'Shipped full accessibility audit and remediation',
      category: 'Quality',
      impact: 'medium',
      date: '2024-06',
      metric: 'WCAG AA compliant',
      description:
        'Fixed 47 a11y violations across the product and added automated axe-core checks into the CI pipeline to prevent regressions.',
      tickets: [
        { label: 'A11Y-55', url: 'https://linear.app/example/issue/A11Y-55' },
        { label: 'A11Y-61', url: 'https://linear.app/example/issue/A11Y-61' },
      ],
      prs: [{ label: '#834', url: 'https://github.com/example/repo/pull/834' }],
      chart: {
        type: 'bar',
        title: 'Violations Fixed by Type',
        unit: 'issues',
        data: [
          { label: 'Color Contrast', value: 18 },
          { label: 'ARIA Labels', value: 12 },
          { label: 'Focus Traps', value: 9 },
          { label: 'Alt Text', value: 8 },
        ],
      },
      supportingDocs: [
        {
          id: 'd3',
          title: 'a11y Audit Figma File',
          url: 'https://example.com/figma',
          type: 'design',
        },
      ],
      testimonials: [],
    },
    {
      id: '4',
      title: 'Mentored 2 junior engineers to promotion',
      category: 'Mentorship',
      impact: 'medium',
      date: '2024-08',
      metric: '2 promotions',
      description:
        'Ran structured weekly 1:1s, detailed code reviews with written feedback, and career coaching sessions across 6 months for two junior engineers, both of whom were promoted at the next cycle.',
      tickets: [],
      prs: [],
      supportingDocs: [],
      testimonials: [
        {
          id: 'at3',
          name: 'Maria Chen',
          designation: 'Product Manager',
          image: 'https://i.pravatar.cc/80?img=23',
          comment:
            'Alex took real ownership of growing the junior members of our team. Both engineers have noticeably levelled up in confidence and output.',
        },
      ],
    },
    {
      id: '5',
      title: 'Launched real-time analytics dashboard',
      category: 'Delivery',
      impact: 'high',
      date: '2024-10',
      metric: '10k DAU at launch',
      description:
        'Delivered a 6-week project on time with zero post-launch P0 bugs. Used WebSockets for live data and React Query for optimistic updates.',
      tickets: [
        { label: 'DASH-100', url: 'https://linear.app/example/issue/DASH-100' },
        { label: 'DASH-145', url: 'https://linear.app/example/issue/DASH-145' },
      ],
      prs: [
        { label: '#960', url: 'https://github.com/example/repo/pull/960' },
        { label: '#975', url: 'https://github.com/example/repo/pull/975' },
      ],
      chart: {
        type: 'line',
        title: 'Daily Active Users — First 30 Days',
        unit: 'users',
        data: [
          { label: 'Day 1', value: 340 },
          { label: 'Day 5', value: 1200 },
          { label: 'Day 10', value: 3800 },
          { label: 'Day 15', value: 6500 },
          { label: 'Day 20', value: 8200 },
          { label: 'Day 25', value: 9400 },
          { label: 'Day 30', value: 10100 },
        ],
      },
      supportingDocs: [
        {
          id: 'd4',
          title: 'Launch Demo Recording',
          url: 'https://example.com/recording',
          type: 'recording',
        },
      ],
      testimonials: [],
    },
  ],
  skills: [
    { name: 'AI Agents & Workflow Integration', level: 3, category: 'new' },
    { name: 'Node.js', level: 3, category: 'improved' },
    { name: 'JavaScript', level: 3, category: 'improved' },
    {
      name: 'Multiplatform Front End Development Angular',
      level: 3.5,
      category: 'improved',
    },
    { name: 'Python (Programming Language)', level: 2, category: 'improved' },
    { name: 'ML', level: 1, category: 'improved' },
    { name: 'Deep Learning', level: 1, category: 'improved' },
    { name: 'Microsoft Azure Iaas', level: 1, category: 'improved' },
    { name: 'Microsoft Azure Paas', level: 1, category: 'improved' },
    {
      name: 'Microsoft Azure Active Directory',
      level: 1,
      category: 'improved',
    },
    { name: 'Microsoft Azure Data Services', level: 1, category: 'improved' },
    { name: 'AWS Storage Database', level: 2, category: 'new' },
    { name: 'AWS Governance', level: 2, category: 'new' },
    { name: 'AWS Compute', level: 2, category: 'new' },
    { name: 'AWS Security', level: 2, category: 'new' },
    { name: 'Amazon Web Services (AWS)', level: 2, category: 'new' },
  ],
  testimonials: [
    {
      id: 't1',
      name: 'Parag Ved',
      designation: 'AI LLM Technology Architecture Manager',
      comment:
        'Kudos on the excellent work done on the most important of SH epics - P+ workflow and SAP Integration. Despite being among most junior team members your contribution to build, analysis remediation of bugs and getting things across the line have been significant. Your habit of understanding and dissecting requirements is a big differentiator. Looking forward to a great FY26 with opportunities for you to learn, grow and contribute to the project.',
    },
    {
      id: 't2',
      name: 'Supriti Pandey',
      designation: 'Custom Software Engineering Team Lead',
      comment:
        'Anagha has successfully completed the priority of taking on complex tasks, demonstrating her ability to tackle challenging projects with confidence. Her collaboration with the SAP team on the SAP transformation and SAP-SH migration showcases her analytical skills and strategic execution. Additionally, her work in analyzing and enabling old workflows for migrated suppliers highlights her adaptability and technical proficiency in CSNS, IRQ logic, and BI/BDA. To further her development, Anagha is encouraged to explore additional technologies that will enhance her capabilities in full stack development. This proactive approach will not only bolster her skill set but also contribute to her growth within the organization. Overall, her performance in this priority has been commendable, and I look forward to seeing her continued success in future endeavors.',
    },
    {
      id: 't3',
      name: 'Vedant Baviskar',
      designation: 'Custom Software Engineering Analyst',
      comment:
        'Anagha has strong technical foundations and consistently demonstrates solid problem-solving skills. She collaborates well in teams, contributing effectively to discussions and ensuring alignment within the group. Overall, she is a valuable team member whose contributions strengthen the team, and with continued focus on composure during unforeseen challenges, she will only increase her impact further.',
    },
  ],
  badges: [
    {
      id: 'b1',
      title: 'Reinvention with Agentic AI',
      icon: '⚡',
      description:
        'Understanding and practical expertise in applying agentic AI to real-world challenges',
      color: 'var(--secondary)',
      earnedOn: '2026-02',
      imageWidth: 100,
      imageHeight: 100,
      imageUrl: 'anagha/badges/anagha-reinvention-with-agentic-ai-badge.png',
      viewUrl:
        'https://www.credly.com/badges/1aee6038-39d5-43bb-92d1-a97f4512968f/public_url',
    },
    {
      id: 'b2',
      title: 'AWS Certified Cloud Practitioner',
      icon: '🌱',
      description:
        'Fundamental understanding of IT services and their uses in the AWS Cloud',
      color: 'var(--secondary)',
      earnedOn: '2025-10',
      imageWidth: 100,
      imageHeight: 100,
      imageUrl: 'anagha/badges/anagha-aws-cloud-practioner-badge.png',
      viewUrl:
        'https://www.credly.com/badges/5d62f167-5c3b-4a52-8869-99cb7acb4e2d/public_url',
    },
    {
      id: 'b3',
      title: 'AWS Cloud Quest: Cloud Practitioner - Training Badge',
      icon: '♿',
      description: 'Demonstrated basic solution knowledge using AWS services',
      color: 'var(--secondary)',
      earnedOn: '2025-07',
      imageWidth: 100,
      imageHeight: 100,
      imageUrl:
        'anagha/badges/anagha-aws-cloud-quest-cloud-practitioner-badge.png',
      viewUrl:
        'https://www.credly.com/badges/d014d4a0-1e27-4474-83ef-0471b7509090/public_url',
    },
    {
      id: 'b4',
      title: 'LFC131: Green Software for Practitioners',
      icon: '🏅',
      description:
        'Understanding the application of green software principles to the design and development of software applications',
      color: 'var(--secondary)',
      earnedOn: '2024-07',
      imageWidth: 100,
      imageHeight: 100,
      imageUrl:
        'anagha/badges/anagha-lfc131-green-software-for-practitioners-badge.png',
      viewUrl:
        'https://www.credly.com/badges/c8fb38d8-50c5-4c15-a464-8c0035585b0c/public_url',
    },
  ],
  certifications: [
    {
      id: 'c1',
      title: 'Microsoft Github Copilot',
      issuer: 'Microsoft',
      issuedOn: '2025-11',
      expiresOn: '2027-11',
      credentialUrl:
        'https://learn.microsoft.com/en-in/users/anaghayawale-3755/credentials/3da0fbed9c509340',
      icon: '🔄',
    },
    {
      id: 'c2',
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      issuedOn: '2025-10',
      expiresOn: '2028-10',
      credentialUrl:
        'https://cp.certmetrics.com/amazon/en/public/verify/credential/c81e52b62b7243389613576570744811',
      icon: '☁️',
    },
    {
      id: 'c3',
      title: 'AWS App Developer Associate',
      issuer: 'Amazon Web Services',
      issuedOn: '',
      expiresOn: '',
      credentialUrl: '',
      registered: true,
      icon: '☁️',
    },
  ],
  misc: [
    {
      id: 'm1',
      type: 'learning',
      title: 'Learning German',
      status: 'in-progress',
      progress: 42,
      note: 'Training under Accenture LKM Language Trainings',
      icon: '🇩🇪',
    },
    {
      id: 'm2',
      type: 'learning',
      title: 'Udacity Cloud Developer Nanodegree Program',
      status: 'in-progress',
      progress: 82,
      note: 'Learning path for AWS App Developer Associate certification',
      icon: '🛠️',
    },
    {
      id: 'm3',
      type: 'learning',
      title: 'Agentic AI Ecosystem Tools Level 3A',
      status: 'completed',
      progress: 100,
      note: 'Accenture Assets in conjunction with Ecosystem tools, Agentic AI Ecosystem tools (with hands-on labs) - Amazon Q Developer.',
      icon: '✍️',
    },
    {
      id: 'm4',
      type: 'learning',
      title: 'Agentic AI Frameworks Level 3B',
      status: 'completed',
      progress: 100,
      note: 'Exploring the Fundamentals, Developing Multi AI Agent Systems Using CrewAI, Multi AI Agents and Advanced Use Cases with CrewAI, Building AI Agents with LangGraph,Develop Context AI Apps with Anthropic, Agent Communication Protocol, Vibe Coding Overview with Repli',
      icon: '✍️',
    },
    {
      id: 'm5',
      type: 'learning',
      title: 'TQ at Accenture',
      status: 'completed',
      progress: 100,
      note: 'TQ (Technology Quotient) builds understanding of how key technologies are changing the world',
      icon: '🦀',
    },
    {
      id: 'm5',
      type: 'learning',
      title: 'Udacity Full Stack JavaScript Developer Nanodegree Program',
      status: 'in-progress',
      progress: 46,
      note: 'Backend Development with Node.js, Creating API with PostgresSQL and Express, Angular Fundamentals, Deployment Process',
      icon: '🦀',
    },
  ],
  codeActivity: (() => {
    const acts: Array<{
      date: string;
      count: number;
      level: 0 | 1 | 2 | 3 | 4;
    }> = [];
    const end = new Date('2024-12-31');
    const peaks: Record<string, number> = {
      '2023-03': 3,
      '2023-06': 4,
      '2023-09': 3,
      '2023-11': 4,
      '2024-02': 4,
      '2024-04': 4,
      '2024-06': 3,
      '2024-08': 3,
      '2024-10': 4,
    };
    for (let d = new Date('2023-01-01'); d <= end; d.setDate(d.getDate() + 1)) {
      const iso = d.toISOString().slice(0, 10);
      const ym = iso.slice(0, 7);
      const base = peaks[ym] ?? 2;
      const weekend = d.getDay() === 0 || d.getDay() === 6;
      const count = weekend
        ? Math.max(0, Math.floor(Math.random() * 2))
        : base + Math.floor(Math.random() * 3);
      const level = (
        count === 0 ? 0 : count <= 2 ? 1 : count <= 4 ? 2 : count <= 6 ? 3 : 4
      ) as 0 | 1 | 2 | 3 | 4;
      acts.push({ date: iso, count, level });
    }
    return acts;
  })(),
};
