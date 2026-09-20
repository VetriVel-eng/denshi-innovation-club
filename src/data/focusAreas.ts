import { FocusArea } from '../types';

export const focusAreas: FocusArea[] = [
  {
    id: 'career-growth',
    number: '01',
    title: 'Career Growth',
    tagline: 'Understanding career paths, opportunities and ways to move forward.',
    description: 'We help students identify realistic progression roadmaps, bridge the gap between academic curricula and industrial realities, and navigate clear trajectories toward internships and emerging tech careers.',
    keyPillars: ['Trajectory Roadmaps', 'Industry Alignment', 'Opportunities Awareness'],
    studentOutcome: 'Clear insight into milestones required to transition from student to working technologist.',
    initiatives: [
      'Resume & technical portfolio audits for tech roles',
      'Direct alumni and industry professional Q&A panels',
      'Step-by-step roadmap for securing summer tech internships',
      'Navigating off-campus hiring platforms & competitive programming'
    ],
    recommendedTools: ['GitHub Profiles', 'LinkedIn Optimization', 'LeetCode/HackerRank', 'Notion Roadmaps'],
    primaryDomains: ['Career Guidance', 'Internship Prep', 'Industry Trajectory']
  },
  {
    id: 'skill-development',
    number: '02',
    title: 'Skill Development',
    tagline: 'Encouraging students to develop practical, relevant and modern skills.',
    description: 'Fostering hands-on technical proficiency beyond theoretical rote learning—focusing on modern tools, computational thinking, iterative building, and contemporary engineering practices.',
    keyPillars: ['Tool Literacy', 'Modern Engineering Practices', 'Iterative Building'],
    studentOutcome: 'Confidence with tools and methodologies actively used in current professional environments.',
    initiatives: [
      'Hands-on Git & modern version control bootcamps',
      'Applied command-line proficiency & Linux environments',
      'Clean code architecture and API integration workshops',
      'Rapid prototyping from schematics to working software'
    ],
    recommendedTools: ['Git & GitHub', 'VS Code', 'Linux Shell', 'Docker Basics', 'Postman'],
    primaryDomains: ['Software Engineering', 'Systems Tooling', 'Applied Computation']
  },
  {
    id: 'future-scope',
    number: '03',
    title: 'Future Scope',
    tagline: 'Helping students understand emerging opportunities, changing industries and future possibilities.',
    description: 'Decoding how shifting paradigms—from machine intelligence to embedded systems and automation—are transforming engineering disciplines, preparing students to adapt ahead of industry pivots.',
    keyPillars: ['Emerging Paradigms', 'Industry Transitions', 'Future-Proof Mindset'],
    studentOutcome: 'Anticipating industry evolution instead of being blindsided by changing job markets.',
    initiatives: [
      'Deep dives into Generative AI & developer tooling shifts',
      'Embedded edge compute, TinyML & robotics convergence',
      'Smart grid automation and sustainable electronics',
      'Continuous analysis of next-generation hardware requirements'
    ],
    recommendedTools: ['Gemini API', 'Hugging Face', 'Edge Impulse', 'TensorFlow Lite', 'ROS 2'],
    primaryDomains: ['Generative AI', 'Edge Computing', 'Automated Systems']
  },
  {
    id: 'career-clarity',
    number: '04',
    title: 'Career Clarity',
    tagline: 'Helping students gain better understanding of different domains, roles and possible directions.',
    description: 'De-mystifying the vast electronics and technology landscape. We guide students in discovering which domains—hardware, software, AI, or research—resonate with their individual strengths.',
    keyPillars: ['Domain Exploration', 'Role Demystification', 'Self-Assessment'],
    studentOutcome: 'Replacing career anxiety with focused direction and self-determined career choices.',
    initiatives: [
      'Breakdown of Hardware vs. Software vs. Embedded career tracks',
      '1-on-1 diagnostic sessions to identify technical affinities',
      'Overview of higher studies (GATE, GRE, MS/PhD) vs. industry entry',
      'Demystifying role titles: Firmware Engineer, Full Stack, SRE, Data Engineer'
    ],
    recommendedTools: ['Domain Competency Matrix', 'Skills Gap Tracker', 'Specialization Playbooks'],
    primaryDomains: ['Domain Discovery', 'Self Assessment', 'Specialization Paths']
  },
  {
    id: 'practical-learning',
    number: '05',
    title: 'Practical Learning',
    tagline: 'Learning through workshops, activities, experimentation and hands-on experiences.',
    description: 'Believing that true understanding arrives through execution. Our sessions emphasize live exercises, problem-solving sprints, code and circuit labs, and real-time guided experimentation.',
    keyPillars: ['Interactive Workshops', 'Experimentation Labs', 'Direct Application'],
    studentOutcome: 'Tangible deliverables, muscle memory, and genuine understanding of how things work.',
    initiatives: [
      'Live code-along and hardware breadboard sessions',
      'Zero-to-one project sprints with concrete deliverables',
      'Debugging challenges and live collaborative troubleshooting',
      'Practical tear-downs of real-world electronic gadgets and software stacks'
    ],
    recommendedTools: ['ESP32 / Arduino', 'Tinkercad', 'Vite & React', 'PlatformIO', 'Figma'],
    primaryDomains: ['Hardware Labs', 'Full-Stack Labs', 'Hands-On Sprints']
  },
  {
    id: 'knowledge-sharing',
    number: '06',
    title: 'Knowledge Sharing',
    tagline: 'Sharing useful knowledge, experiences and resources with fellow students.',
    description: 'Cultivating an egalitarian peer-to-peer ecosystem where discoveries, tools, and lessons learned are actively circulated. Every student teaches what they master and learns what they need.',
    keyPillars: ['Peer Mentorship', 'Curated Resources', 'Collaborative Discussion'],
    studentOutcome: 'An open, supportive student collective where no student is left behind in isolation.',
    initiatives: [
      'Weekly peer-led technical lightning talks ("Show & Tell")',
      'Open-access repository of curated study notes and cheat sheets',
      'Junior-Senior pairing for project guidance and bug fixing',
      'Community discussion forums and Discord/WhatsApp technical channels'
    ],
    recommendedTools: ['Open Source Repos', 'Shared Documentation', 'Discord Channels', 'Study Repositories'],
    primaryDomains: ['Peer Mentorship', 'Open Source', 'Community Culture']
  }
];
