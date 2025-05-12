import { useEffect, useState } from 'react';

export type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  created: string;
  creator: string;
  status: 'active' | 'completed' | 'pending';
  category: string;
  deadline: string;
  location: 'Remote' | 'On-site' | 'Hybrid';
  budget: { min: number; max: number; currency: string };
  tags: string[];
  requirements: string[];
};

const projectsData: Project[] = [
  {
    id: 1,
    name: 'Coffee Shop',
    description: 'A cozy place to enjoy premium coffee and pastries.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    created: '2023-05-15',
    creator: 'Sarah Johnson',
    status: 'active',
    category: 'Design',
    deadline: '2023-12-31',
    location: 'Remote',
    budget: { min: 500, max: 1500, currency: 'USD' },
    tags: ['coffee', 'branding', 'restaurant'],
    requirements: ['Logo design', 'Previous branding experience']
  },
  {
    id: 2,
    name: 'Tech Hub',
    description: 'Co-working space with high-speed internet and meeting rooms.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    created: '2023-06-22',
    creator: 'Michael Lee',
    status: 'completed',
    category: 'Development',
    deadline: '2023-11-15',
    location: 'On-site',
    budget: { min: 1000, max: 3000, currency: 'USD' },
    tags: ['office', 'tech', 'workspace'],
    requirements: ['Office setup', 'Internet connectivity']
  },
  {
    id: 3,
    name: 'City Park',
    description: 'Large urban park with walking trails and playgrounds.',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
    created: '2022-03-10',
    creator: 'Emily Clark',
    status: 'active',
    category: 'Recreation',
    deadline: '2024-06-01',
    location: 'Hybrid',
    budget: { min: 1500, max: 3000, currency: 'USD' },
    tags: ['park', 'urban', 'nature'],
    requirements: ['Park maintenance', 'Playground setup'],
  },
  {
    id: 4,
    name: 'Luxury Apartments',
    description: 'Modern apartments with premium amenities and city views.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    created: '2023-01-05',
    creator: 'David Kim',
    status: 'pending',
    category: 'Residential',
    deadline: '2024-01-15',
    location: 'On-site',
    budget: { min: 3000, max: 8000, currency: 'USD' },
    tags: ['apartments', 'luxury', 'city'],
    requirements: ['Interior design', 'Furniture sourcing'],
  },
  {
    id: 5,
    name: 'Bookstore',
    description: 'Independent bookstore with a curated selection of books.',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    created: '2023-04-12',
    creator: 'Anna White',
    status: 'active',
    category: 'Retail',
    deadline: '2024-03-15',
    location: 'Remote',
    budget: { min: 800, max: 2000, currency: 'USD' },
    tags: ['books', 'retail', 'curated'],
    requirements: ['Book curation', 'Web design'],
  },
  {
    id: 6,
    name: 'Bakery',
    description: 'Freshly baked bread and pastries every day.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    created: '2023-05-30',
    creator: 'Sophia Green',
    status: 'completed',
    category: 'Food & Beverage',
    deadline: '2023-10-01',
    location: 'On-site',
    budget: { min: 500, max: 1200, currency: 'USD' },
    tags: ['bakery', 'food', 'pastries'],
    requirements: ['Recipe development', 'Bakery branding'],
  },
  {
    id: 7,
    name: 'Music Studio',
    description: 'Professional recording studio for musicians and bands.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
    created: '2023-06-10',
    creator: 'James Wilson',
    status: 'active',
    category: 'Entertainment',
    deadline: '2024-05-01',
    location: 'Hybrid',
    budget: { min: 2000, max: 5000, currency: 'USD' },
    tags: ['music', 'studio', 'recording'],
    requirements: ['Soundproofing', 'Audio engineering'],
  }
  // Add more projects as needed for prototype
];

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setProjects(projectsData);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return { projects, loading };
} 