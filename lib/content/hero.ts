import asymmetricKurtiSet from '@/public/images/asymmetric-kurti-set.jpg'
import patchworkJacketStudio from '@/public/images/patchwork-jacket-studio.jpg'
import runwayWhiteKaftan from '@/public/images/runway-white-kaftan.jpg'

export const heroContent = {
  badge: 'Hand embroidery since 2001',
  titleLines: ['Our tradition,', 'our pride'],
  panelTitle: 'Made by hand, worn every day',
  panelBody:
    'Everyday, bridal and traditional wear for women, men and kids, stitched by artisans across Bangladesh.',
  image: runwayWhiteKaftan,
  imageAlt:
    'A model walks the runway in a layered white kaftan with a long red bead necklace and red hairpins',
  floatingCards: [
    {
      id: 'patchwork',
      label: 'New in',
      name: 'Patchwork jacket',
      image: patchworkJacketStudio,
      alt: 'A patchwork check jacket on a dress form',
    },
    {
      id: 'kurti',
      label: 'New in',
      name: 'Kurti set',
      image: asymmetricKurtiSet,
      alt: 'A brown asymmetric kurti with mustard trousers',
    },
  ],
  marquee: ['Hand embroidery', 'Kantha', 'Bridal', 'Handloom', 'Since 2001', 'Made in Bangladesh'],
  features: [
    {
      id: 'artisans',
      value: 5000,
      suffix: '+',
      title: 'Artisans across the country',
      body: 'Most of them women, stitching every piece by hand.',
    },
    {
      id: 'heritage',
      value: 25,
      suffix: ' years',
      title: 'Of traditional craft',
      body: 'Hand embroidery rooted in Bangladeshi heritage since 2001.',
    },
    {
      id: 'community',
      value: 136_000,
      suffix: '',
      title: 'People follow us',
      body: 'Join the Bibiana community on Facebook.',
    },
  ],
} as const
