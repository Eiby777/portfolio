/**
 * Email thread data model for EmailAnalyzer animation
 * Contains realistic Gmail-style email messages for business project conversation
 */

/**
 * Interface for a single email message
 */
export interface EmailMessage {
  /** Unique identifier for the email */
  id: string;
  /** Sender email address */
  from: string;
  /** Recipient email addresses */
  to: string[];
  /** CC recipients (optional) */
  cc?: string[];
  /** Email subject line */
  subject: string;
  /** Email body content */
  body: string;
  /** Email timestamp */
  date: Date;
  /** Animation delay in milliseconds */
  animationDelay: number;
  /** Whether the email is read */
  isRead: boolean;
  /** Whether the email is starred */
  isStarred: boolean;
  /** Whether the email is marked important */
  isImportant: boolean;
}

/**
 * Interface for an email thread containing multiple messages
 */
export interface EmailThread {
  /** Unique identifier for the thread */
  id: string;
  /** Thread subject line */
  subject: string;
  /** Array of email messages in the thread */
  messages: EmailMessage[];
  /** Thread creation date */
  createdDate: Date;
  /** Whether the thread is expanded */
  isExpanded?: boolean;
}

/**
 * Array of 10 realistic email messages forming a coherent business conversation
 * about a website redesign project
 */
export const emailThreadsData: EmailThread[] = [
  {
    id: 'thread-1',
    subject: 'Website Redesign Project Proposal',
    createdDate: new Date('2025-10-15T09:00:00'),
    messages: [
      {
        id: 'email-1',
        from: 'sarah.johnson@techcorp.com',
        to: ['mike.wilson@techcorp.com', 'david.chen@techcorp.com'],
        subject: 'Website Redesign Project Proposal',
        body: `Hi Team,

I hope this email finds you well. I'm excited to share our proposal for the Q4 website redesign project. Based on our initial discussions, we've outlined a comprehensive approach to modernize our online presence.

Key objectives:
- Improve user experience and navigation
- Update visual design to match our new brand guidelines
- Optimize for mobile responsiveness
- Increase conversion rates by 15%

I've attached the detailed proposal document. Please review it before our meeting on Thursday.

Best regards,
Sarah Johnson
Project Manager
TechCorp Inc.`,
        date: new Date('2025-10-15T09:00:00'),
        animationDelay: 0,
        isRead: false,
        isStarred: true,
        isImportant: true
      },
      {
        id: 'email-2',
        from: 'mike.wilson@techcorp.com',
        to: ['sarah.johnson@techcorp.com', 'david.chen@techcorp.com'],
        subject: 'Re: Website Redesign Project Proposal',
        body: `Hi Sarah,

Thanks for sharing the proposal. I've reviewed it and I'm impressed with the comprehensive approach. The objectives align well with our Q4 goals.

I have a few questions:
1. What's the estimated timeline for completion?
2. Do we have budget approval for this initiative?
3. Should we involve the marketing team in the design phase?

I'm available for the Thursday meeting at 2 PM if that still works.

Best,
Mike Wilson
Head of Marketing`,
        date: new Date('2025-10-15T10:30:00'),
        animationDelay: 500,
        isRead: true,
        isStarred: false,
        isImportant: true
      },
      {
        id: 'email-3',
        from: 'david.chen@techcorp.com',
        to: ['sarah.johnson@techcorp.com', 'mike.wilson@techcorp.com'],
        subject: 'Re: Website Redesign Project Proposal',
        body: `Hi Sarah and Mike,

Great proposal! From a technical standpoint, everything looks feasible. I particularly like the emphasis on mobile optimization.

I've started researching the best tech stack for this project. Based on our requirements, I'm thinking:
- Frontend: React with Next.js for SSR
- Backend: Node.js with Express
- Database: PostgreSQL for content, Redis for caching
- Deployment: AWS with CI/CD pipeline

Can we discuss the technical architecture during our meeting?

Thanks,
David Chen
Lead Developer`,
        date: new Date('2025-10-15T11:45:00'),
        animationDelay: 1000,
        isRead: true,
        isStarred: false,
        isImportant: false
      },
      {
        id: 'email-4',
        from: 'sarah.johnson@techcorp.com',
        to: ['mike.wilson@techcorp.com', 'david.chen@techcorp.com', 'emily.rodriguez@techcorp.com'],
        cc: ['ceo@techcorp.com'],
        subject: 'Re: Website Redesign Project Proposal - Meeting Confirmation',
        body: `Hi Team,

Thanks for your feedback on the proposal. I'm glad to see we're all aligned on the project goals.

To answer Mike's questions:
1. Timeline: 8-10 weeks from kickoff to launch
2. Budget: Preliminary approval received, final confirmation pending
3. Marketing team: Yes, absolutely essential for design phase

David, your tech stack recommendations look perfect. Let's dive deeper into the architecture on Thursday.

I've also invited Emily Rodriguez from Design to join our meeting. She'll be leading the UI/UX work.

Meeting details:
- Date: Thursday, October 17
- Time: 2:00 PM - 3:30 PM
- Location: Conference Room B / Zoom option available

Looking forward to our discussion!

Best,
Sarah`,
        date: new Date('2025-10-15T14:20:00'),
        animationDelay: 1500,
        isRead: true,
        isStarred: true,
        isImportant: true
      },
      {
        id: 'email-5',
        from: 'emily.rodriguez@techcorp.com',
        to: ['sarah.johnson@techcorp.com'],
        subject: 'Re: Website Redesign Project Proposal - Design Ideas',
        body: `Hi Sarah,

Excited to join the website redesign project! I've been following the email thread and have some initial design ideas I'd like to share.

I've created a mood board with three potential design directions:
1. Modern Minimalist - Clean lines, lots of white space
2. Bold & Vibrant - Dynamic colors, engaging animations
3. Corporate Professional - Traditional layout with modern touches

Should I prepare a presentation for Thursday's meeting, or would you prefer I share the designs beforehand?

Also, do we have brand guidelines I should reference? I want to ensure our designs align with the company's visual identity.

Looking forward to collaborating with everyone!

Best,
Emily Rodriguez
Senior UI/UX Designer`,
        date: new Date('2025-10-16T09:15:00'),
        animationDelay: 2000,
        isRead: false,
        isStarred: false,
        isImportant: true
      },
      {
        id: 'email-6',
        from: 'sarah.johnson@techcorp.com',
        to: ['emily.rodriguez@techcorp.com'],
        subject: 'Re: Website Redesign Project Proposal - Design Ideas',
        body: `Hi Emily,

Great to hear you're already thinking about design directions! Your three concepts sound promising.

Please prepare a brief presentation for Thursday's meeting (5-10 minutes max). Focus on the Modern Minimalist approach as it aligns best with our brand evolution, but feel free to show elements from the other styles as well.

I've attached our latest brand guidelines document. You'll find our color palette, typography, and visual principles there. Let me know if you have any questions.

The team is excited to see your ideas!

Best,
Sarah`,
        date: new Date('2025-10-16T10:30:00'),
        animationDelay: 2500,
        isRead: true,
        isStarred: false,
        isImportant: false
      },
      {
        id: 'email-7',
        from: 'mike.wilson@techcorp.com',
        to: ['team@techcorp.com'],
        subject: 'Re: Website Redesign Project Proposal - Marketing Requirements',
        body: `Team,

In preparation for tomorrow's meeting, I wanted to share some key marketing requirements for the website redesign:

1. SEO Optimization:
   - Target keywords: "enterprise software solutions", "digital transformation"
   - Page load speed under 2 seconds
   - Mobile-first indexing

2. Lead Generation:
   - Prominent CTA buttons above the fold
   - Contact forms on key landing pages
   - Integration with our CRM system

3. Content Strategy:
   - Blog section for thought leadership
   - Case studies showcase
   - Product demo videos

Looking forward to discussing how we can implement these requirements effectively.

Best,
Mike`,
        date: new Date('2025-10-16T15:45:00'),
        animationDelay: 3000,
        isRead: true,
        isStarred: true,
        isImportant: true
      },
      {
        id: 'email-8',
        from: 'david.chen@techcorp.com',
        to: ['team@techcorp.com'],
        subject: 'Re: Website Redesign Project Proposal - Technical Considerations',
        body: `Hi Everyone,

Building on Mike's marketing requirements, here are some technical considerations:

Performance:
- Implement lazy loading for images
- Use CDN for static assets
- Optimize Core Web Vitals

Security:
- HTTPS implementation
- Input validation and sanitization
- Regular security audits

Analytics & Tracking:
- Google Analytics 4 integration
- Heat mapping tools
- A/B testing framework

I've created a technical architecture diagram that I'll share in tomorrow's meeting. It addresses all these points while maintaining scalability.

Cheers,
David`,
        date: new Date('2025-10-16T16:30:00'),
        animationDelay: 3500,
        isRead: false,
        isStarred: false,
        isImportant: true
      },
      {
        id: 'email-9',
        from: 'sarah.johnson@techcorp.com',
        to: ['team@techcorp.com'],
        subject: 'Re: Website Redesign Project Proposal - Meeting Agenda',
        body: `Hi Team,

Here's the agenda for tomorrow's meeting:

1. Project Overview & Goals (5 min) - Sarah
2. Design Concepts & Brand Alignment (10 min) - Emily
3. Technical Architecture (10 min) - David
4. Marketing Requirements & SEO (5 min) - Mike
5. Timeline & Milestones Discussion (10 min)
6. Budget Review (5 min)
7. Next Steps & Action Items (5 min)

Please come prepared with any questions or concerns. I've booked Conference Room B and set up a Zoom link for remote participants.

Zoom link: https://zoom.us/j/123456789

See you all tomorrow at 2 PM!

Best,
Sarah`,
        date: new Date('2025-10-16T17:00:00'),
        animationDelay: 4000,
        isRead: true,
        isStarred: false,
        isImportant: false
      },
      {
        id: 'email-10',
        from: 'ceo@techcorp.com',
        to: ['sarah.johnson@techcorp.com'],
        subject: 'Re: Website Redesign Project Proposal',
        body: `Sarah,

I've been following the email thread about the website redesign project. I'm impressed with the thoroughness of the planning and the collaborative approach your team is taking.

The proposal looks solid, and I'm pleased to see alignment between marketing, design, and technical requirements.

I've approved the budget as requested. Please proceed with confidence and keep me updated on the progress.

Let me know if you need any additional support from my end.

Best regards,
Alex Thompson
CEO
TechCorp Inc.`,
        date: new Date('2025-10-17T08:30:00'),
        animationDelay: 4500,
        isRead: false,
        isStarred: true,
        isImportant: true
      }
    ],
    isExpanded: false
  }
];

export default emailThreadsData;