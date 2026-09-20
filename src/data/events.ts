import { EventItem, UpcomingEventItem } from '../types';

export const completedEvents: EventItem[] = [
  {
    id: 'claude-ai-workshop-2026',
    title: 'Claude AI Workshop',
    date: '2026-08-19',
    displayDate: '19 August 2026',
    location: 'Skill Development Cell, Sir Isaac Newton College of Engineering and Technology, Pappakovil, Nagapattinam',
    badges: ['Workshop', 'AI', 'Prompt Engineering', 'Hands-on', '19 AUG 2026'],
    shortDescription: 'Denshi Innovation Club conducted a hands-on Claude AI Workshop on 19 August 2026 for students interested in exploring AI tools and practical applications.',
    fullDescription: 'Denshi Innovation Club conducted a hands-on Claude AI Workshop on 19 August 2026 for students interested in exploring AI tools and practical applications. The workshop was designed to make Claude AI easier to understand and use practically. By the end of the session, even participants who were completely new to Claude were able to understand its basic capabilities and use Claude more comfortably.',
    topicsAndActivities: [
      'Introduction to Claude AI',
      'Claude AI features',
      'Prompt Engineering',
      'Connectors',
      'Technical games',
      'Non-technical games',
      'Practical activities with participants',
      'Prompt Engineering task',
      'Image Creation task',
      'Skill-based activity'
    ],
    practicalTasks: [
      {
        number: 1,
        title: 'Prompt Engineering',
        description: 'Formulating structured, contextual prompts to solve specific engineering and logic challenges.'
      },
      {
        number: 2,
        title: 'Image Creation',
        description: 'Crafting descriptive visual instructions to generate precise, high-fidelity conceptual outputs.'
      },
      {
        number: 3,
        title: 'Skill-Based Activity',
        description: 'Applying newly acquired AI techniques to practical problem-solving scenarios.'
      }
    ],
    outcomes: [
      'Certificates were provided to all participants upon completion.',
      'Prizes were awarded to the winners of technical and non-technical games.',
      'Participants completely new to Claude gained confidence in basic capabilities and practical daily usage.'
    ],
    highlights: [
      'Interactive hands-on methodology',
      'Zero prior AI barrier to entry',
      'Competitive technical games & prize awards'
    ],
    status: 'completed'
  }
];

export const upcomingEvents: UpcomingEventItem[] = [
  {
    id: 'first-year-guidance-session',
    title: 'Guidance Session for First-Year Students',
    status: 'Planned',
    statusBadge: 'Planned / Tentative',
    description: 'A possible guidance session aimed at helping first-year students understand modern skills, technology domains, learning opportunities and ways to build better clarity for their academic and career journey.',
    targetAudience: 'First-Year Engineering Students (All Branches)',
    learningFocus: [
      'Modern skill requirements in engineering & tech',
      'Core technology domains & exploration paths',
      'Learning opportunities & student community support',
      'Building clarity for academic & career milestones'
    ]
  }
];
