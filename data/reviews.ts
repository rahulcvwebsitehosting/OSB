import { Review } from '../types';

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'tharakesh senthil',
    rating: 4,
    text: 'Good place for evening snacks and dinner. The Pani puri and masala puri were good. It is usually crowded in the evenings but the service is managed well. Prices are budget friendly.',
    source: 'Google',
    date: '3 months ago'
  },
  {
    id: 'r2',
    author: 'Priya Sundaram',
    rating: 5,
    text: 'Best Pani Puri in West Mambalam without a doubt! The spicy water is addictive. Very hygienic preparation compared to other street shops in the area. A must visit spot.',
    source: 'Google',
    date: '2 months ago'
  },
  {
    id: 'r3',
    author: 'Karthik Raja',
    rating: 4,
    text: 'Ordered via Swiggy. Packaging was neat and the food was still warm. The Paneer Butter Masala goes really well with their Chapati. Good quantity for the price.',
    source: 'Swiggy',
    date: '1 week ago'
  },
  {
    id: 'r4',
    author: 'Suresh Kumar',
    rating: 5,
    text: 'Authentic pure veg taste. We have been regular customers for years. Their Sambar Idli and Gobi Manchurian are consistent in taste. Service is quick even during rush hours.',
    source: 'Google',
    date: '1 month ago'
  },
  {
    id: 'r5',
    author: 'Deepa M',
    rating: 5,
    text: 'One of the best places for Chaat items. The Pav Bhaji is buttery and delicious. Highly recommended for a quick evening bite.',
    source: 'Justdial',
    date: '4 months ago'
  }
];

export const RATING_DISTRIBUTION = [
  { stars: 5, percentage: 58, count: 2014 },
  { stars: 4, percentage: 28, count: 980 },
  { stars: 3, percentage: 8, count: 278 },
  { stars: 2, percentage: 3, count: 105 },
  { stars: 1, percentage: 3, count: 100 },
];
