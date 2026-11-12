import runwayWhiteKaftan from '@/public/images/runway-white-kaftan.jpg'

export const recognitionContent = {
  title: 'On the runway and in the news',
  image: runwayWhiteKaftan,
  imageAlt:
    'A model walks the runway in a layered white kaftan with a long red bead necklace and red hairpins',
  shows: [
    { id: 'peace', year: '2023', title: '“Peace” collection, Bangladesh Fashion Week' },
    { id: 'ahmedabad', year: '2018', title: 'Fashion show in Ahmedabad, India' },
    { id: 'london', year: null, title: 'Bangladesh Fashion Week in London' },
  ],
  pressTitle: 'Featured in',
  press: [
    'Prothom Alo',
    'The Daily Star',
    'Samakal',
    'The Daily Ittefaq',
    'Bangla Tribune',
    'BD News 24',
    'NTV',
    'RTV',
  ],
} as const
