import Cats from '../assets/cats.jpg';
import Dogs from '../assets/dogs.jpg';
import Birds from '../assets/birds.jpg';
import Rodents from '../assets/rodents.jpg';
import Fish from '../assets/fish.jpg';
import Reptilies from '../assets/reptiles.jpg';

const Categorys = [
  {
    src: Cats,
    title: 'cats',
    id: 1,
  },
  {
    src: Dogs,
    title: 'dogs',
    id: 2,
  },
  {
    src: Birds,
    title: 'birds',
    id: 3,
  },
  {
    src: Rodents,
    title: 'rodents',
    id: 4,
  },
  {
    src: Fish,
    title: 'fishes',
    id: 5,
  },
  {
    src: Reptilies,
    title: 'reptiles',
    id: 6,
  },
];

const subcategoryList = {
  cats: [
    {
      url: 'dryFeed',
      label: 'Dry feed',
    },
    {
      url: 'weetFeed',
      label: 'Wet feed',
    },
    {
      url: 'treats',
      label: 'Treats',
    },
    {
      url: 'vitamins',
      label: 'Vitamins',
    },
    {
      url: 'accessories',
      label: 'Accessories',
    },
    {
      url: 'clothes',
      label: 'Clothes',
    },
    {
      url: 'toys',
      label: 'Toys',
    },
    {
      url: 'hygiene',
      label: 'Hygiene',
    },
    {
      url: 'medicine',
      label: 'Medicine',
    },
  ],
  dogs: [
    {
      url: 'dryFeed',
      label: 'Dry feed',
    },
    {
      url: 'weetFeed',
      label: 'Wet feed',
    },
    {
      url: 'treats',
      label: 'Treats',
    },
    {
      url: 'vitamins',
      label: 'Vitamins',
    },
    {
      url: 'accessories',
      label: 'Accessories',
    },
    {
      url: 'clothes',
      label: 'Clothes',
    },
    {
      url: 'toys',
      label: 'Toys',
    },
    {
      url: 'hygiene',
      label: 'Hygiene',
    },
    {
      url: 'medicine',
      label: 'Medicine',
    },
  ],
  birds: [
    {
      url: 'feed',
      label: 'Feed',
    },
    {
      url: 'treats',
      label: 'Treats',
    },
    {
      url: 'vitamins',
      label: 'Vitamins',
    },
    {
      url: 'accessories',
      label: 'Accessories',
    },
    {
      url: 'toys',
      label: 'Toys',
    },
    {
      url: 'hygiene',
      label: 'Hygiene',
    },
    {
      url: 'medicine',
      label: 'Medicine',
    },
  ],
  rodents: [
    {
      url: 'feed',
      label: 'Feed',
    },
    {
      url: 'treats',
      label: 'Treats',
    },
    {
      url: 'vitamins',
      label: 'Vitamins',
    },
    {
      url: 'accessories',
      label: 'Accessories',
    },
    {
      url: 'toys',
      label: 'Toys',
    },
    {
      url: 'hygiene',
      label: 'Hygiene',
    },
    {
      url: 'medicine',
      label: 'Medicine',
    },
  ],
  fishes: [
    {
      url: 'feed',
      label: 'Feed',
    },
    {
      url: 'accessories',
      label: 'Accessories',
    },
    {
      url: 'hygiene',
      label: 'Hygiene',
    },
    {
      url: 'medicine',
      label: 'Medicine',
    },
  ],
  reptiles: [
    {
      url: 'feed',
      label: 'Feed',
    },
    {
      url: 'vitamins',
      label: 'Vitamins',
    },
    {
      url: 'accessories',
      label: 'Accessories',
    },
    {
      url: 'hygiene',
      label: 'Hygiene',
    },
    {
      url: 'medicine',
      label: 'Medicine',
    },
  ],
};

export { Categorys, subcategoryList };
