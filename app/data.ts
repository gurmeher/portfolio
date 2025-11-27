type Project = {
  name: string
  description: string
  link: string
  image: string
  technologies?: string
  id: string
}

type Experience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'W2C AI',
    description:
      'AI-powered product discovery platform for Asian fashion, with integrated Reddit reviews',
    link: 'https://www.w2cai.com/',
    image:
      'https://i.imgur.com/1GHY12t.png',
    technologies: 'PostgreSQL, BeautifulSoup, ChatGPT, React, Next.js, Tailwind CSS, TypeScript, Python',
    id: 'project1',
  },
  {
    name: 'VIN Blockchain',
    description:
      'Lightweight blockchain for car VINs, verifying ownership and vehicle history to prevent vehicle fraud',
    link: 'https://gurmeher.github.io/vin_blockchain/',
    image:
      'https://i.imgur.com/gweeJYB.jpeg',
    technologies: 'Flask, REST API, Docker, Blockchain, Python',
    id: 'project2',
  },
  
  
]

export const WORK_EXPERIENCE: Experience[] = [
  {
    company: 'San Jose Museum of Art',
    title: 'Software & Data Engineer (Contract)',
    start: 'August 2025',
    end: 'Present',
    link: 'https://sjmusart.org',
    id: 'work4',
  },
  {
    company: 'Gonga AI',
    title: 'Software Engineer (Contract)',
    start: 'August 2025',
    end: 'Present',
    link: 'https://gonga.ai',
    id: 'work3',
  },
  {
    company: 'Walmart',
    title: 'Technology Strategy Consultant (Contract)',
    start: 'January 2025',
    end: 'April 2025',
    link: 'https://tech.walmart.com',
    id: 'work2',
  },
  {
    company: 'Greybeam',
    title: 'Strategy Intern',
    start: 'December 2024',
    end: 'May 2025',
    link: 'https://www.greybeam.ai',
    id: 'work1',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  /*{
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  }*/
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/gurmeher',
  },
  {
    label: 'Github',
    link: 'https://github.com/gurmeher',
  },

  {
    label: 'Instagram',
    link: 'https://www.instagram.com/grmeher',
  },
]

export const EMAIL = 'gurmeher [at] berkeley [dot] edu'
