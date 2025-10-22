type Project = {
  name: string
  description: string
  link: string
  image: string
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
      'description here',
    link: 'https://www.w2cai.com/',
    image:
      'https://i.imgur.com/RnLQkFz.png',
    id: 'project1',
  },
  
]

export const WORK_EXPERIENCE: Experience[] = [
  {
    company: 'Company Industries',
    title: 'Founder',
    start: '2024',
    end: 'Present',
    link: 'https://google.com',
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
    link: 'https://www.instagram.com/gurmehers',
  },
]

export const EMAIL = 'gurmeher AT berkeley DOT edu'
