export interface Resource {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
  priority: number;
  timeToFinish: number;
  active: boolean;
}

export const resources = [
  {
    id: 1,
    title: 'Learning Singleton Pattern',
    description: 'I would like to learn singleton in TS language',
    link: 'https://link.com',
    image: 'https://image.com',
    priority: 3,
    timeToFinish: 120,
    active: true
  },
  {
    id: 2,
    title: 'Resource 2',
    description: 'Resource 2',
    link: 'https://link.com',
    image: 'https://image.com',
    priority: 2,
    timeToFinish: 60,
    active: false,
  },
  {
    id: 3,
    title: 'Resource 3',
    description: 'Resource 3',
    link: 'https://link.com',
    image: 'https://image.com',
    priority: 1,
    timeToFinish: 30,
    active: false,
  }
];