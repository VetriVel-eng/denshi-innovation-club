import { WorkItem } from '../types';

export const workItems: WorkItem[] = [
  // {
  //   id: 'work-6',
  //   title: 'Denshi Innovation Club Team & Cohort',
  //   category: 'Team Activities',
  //   filename: 'IMG-20260902-WA0007',
  //   originalFilename: 'team.webp',
  //   image: '/work/team.webp',
  //   aspectRatio: '16:9',
  //   featured: true,
  //   date: '19 AUG 2026',
  //   tag: 'Official Cohort',
  //   description: 'The student organizing committee and core members of Denshi Innovation Club in front of the workshop backdrop.'
  // },
  // {
  //   id: 'work-2',
  //   title: 'Claude AI Workshop Cohort Assembly',
  //   category: 'Workshops',
  //   filename: 'den2.jpeg',
  //   originalFilename: 'IMG-20260912-WA0035.jpg',
  //   image: '/work/IMG-20260912-WA0035.jpg',
  //   aspectRatio: '16:9',
  //   featured: false,
  //   date: '19 AUG 2026',
  //   tag: 'SDC Computer Lab',
  //   description: 'Full batch assembly of B.E. ECE students engaged in interactive AI engineering tasks and live prompt challenges at SINCET.'
  // },
  // {
  //   id: 'work-1',
  //   title: 'Hands-on Student Mentoring Session',
  //   category: 'Workshops',
  //   filename: 'den1.jpeg',
  //   originalFilename: 'IMG-20260912-WA0034.jpg',
  //   image: '/work/IMG-20260912-WA0034.jpg',
  //   aspectRatio: '3:4',
  //   featured: false,
  //   date: '19 AUG 2026',
  //   tag: 'Workshop Lab',
  //   description: 'Active peer mentorship and technical guidance during the Claude AI Workshop hands-on prompt laboratory.'
  // },
  {
    id: 'work-10',
    title: 'Technical Presentation: Cloud & Claude AI Projects',
    category: 'Presentations',
    filename: 'den10.jpeg',
    originalFilename: 'team.webp',
    image: '/team.webp',
    aspectRatio: '16:9',
    featured: false,
    date: '19 AUG 2026',
    tag: 'Seminar Hall',
    description: 'Student presentation demonstrating Claude Projects interface and generative AI workflows on the interactive flat panel.'
  },
  {
    id: 'work-5',
    title: 'Interactive Claude AI Quiz & Wheel Session',
    category: 'Workshops',
    filename: 'den5.jpeg',
    originalFilename: 'workshop-1.jpeg',
    image: '/workshop-1.jpeg',
    aspectRatio: '3:4',
    featured: false,
    date: '19 AUG 2026',
    tag: 'Digital Panel',
    description: 'Live audience participation and interactive prompt testing conducted on the smart board display.'
  },
  {
    id: 'work-3',
    title: 'Denshi Club - The Beginning of Something New',
    category: 'Team Activities',
    filename: 'den3.jpeg',
    originalFilename: 'workshop-2.jpeg',
    image: '/workshop-2.jpeg',
    aspectRatio: '3:4',
    featured: false,
    date: '19 AUG 2026',
    tag: 'INAUGURAL MOMENT',
    description: 'Capturing the inaugural moment of Denshi Club — bringing students together to explore technology, share ideas, build projects, and turn curiosity into real-world innovation.'
  },
  {
    id: 'work-4',
    title: 'Inside the Denshi Collective',
    category: 'Events',
    filename: 'den4.jpeg',
    originalFilename: 'workshop-3.jpeg',
    image: '/workshop-3.jpeg',
    aspectRatio: '3:4',
    featured: false,
    date: '19 AUG 2026',
    tag: 'DENSHI COMMUNITY',
    description: 'Students, ideas, and perspectives converging around a shared purpose — learning, experimenting, collaborating, and creating with technology.'
  },
  // {
  //   id: 'work-7',
  //   title: 'Workshop Participant Recognition',
  //   category: 'Events',
  //   filename: 'den7.jpeg',
  //   originalFilename: 'IMG-20260912-WA0029.jpg',
  //   image: '/work/IMG-20260912-WA0029.jpg',
  //   aspectRatio: '16:9',
  //   featured: false,
  //   date: '19 AUG 2026',
  //   tag: 'Awards Stage',
  //   description: 'Presenting tokens of appreciation to students for active engagement and innovative solutions.'
  // },
  // {
  //   id: 'work-8',
  //   title: 'Competition Winners & Team Celebration',
  //   category: 'Team Activities',
  //   filename: 'den8.jpeg',
  //   originalFilename: 'IMG-20260912-WA0028.jpg',
  //   image: '/work/IMG-20260912-WA0028.jpg',
  //   aspectRatio: '16:9',
  //   featured: false,
  //   date: '19 AUG 2026',
  //   tag: 'Celebration',
  //   description: 'Celebrating the conclusion of the inaugural Claude AI Workshop with organizers and winners.'
  // },
  // {
  //   id: 'work-11',
  //   title: 'Denshi Student Leadership Coordinators',
  //   category: 'Team Activities',
  //   filename: 'den11.jpeg',
  //   originalFilename: 'IMG-20260912-WA0032.jpg',
  //   image: '/work/IMG-20260912-WA0032.jpg',
  //   aspectRatio: '16:9',
  //   featured: false,
  //   date: '19 AUG 2026',
  //   tag: 'Lead Organizers',
  //   description: 'Key student coordinators of the B.E. ECE department who organized and executed the inaugural Claude AI Workshop.'
  // },
  // {
  //   id: 'work-9',
  //   title: 'Technical Presentation: Google Drive + Claude Integration',
  //   category: 'Presentations',
  //   filename: 'den9.jpeg',
  //   originalFilename: 'IMG-20260912-WA0036.jpg',
  //   image: '/work/IMG-20260912-WA0036.jpg',
  //   aspectRatio: '3:4',
  //   featured: false,
  //   date: '19 AUG 2026',
  //   tag: 'Seminar Presentation',
  //   description: 'Detailed technical session explaining Google Drive document synthesis and Claude AI contextual search integration.'
  // }
];

export const workCategories = [
  'All Work',
  'Workshops',
  'Presentations',
  'Team Activities',
  'Events'
] as const;
