export const siteContent = {
  name: 'Bibiana',
  tagline: 'Our Tradition Our Pride',
  taglineBangla: 'আমাদের ঐতিহ্য, আমাদের গর্ব',
  founded: 2001,
  description:
    'Bibiana is a leading fashion house based on handicraft and traditional hand embroidery and textile, with a vision to merge retail fashion with traditional craft.',
  headOffice: {
    label: 'Head office',
    lines: ['House 16, Road 13, Block G', 'Niketon, Gulshan 1', 'Dhaka 1212'],
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=House+16+Road+13+Block+G+Niketon+Gulshan+1+Dhaka+1212',
  },
  facebookReviews: { percent: 84, count: 25 },
  contact: {
    phone: '01714372165',
    phoneDisplay: '01714 372 165',
    whatsapp: '01749842891',
    whatsappDisplay: '01749 842 891',
    email: 'bibianarupokar@gmail.com',
    whatsappGreeting: 'Hello Bibiana, I would like to know more about your collection.',
  },
  social: [
    { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/bibiana2001' },
    { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/user/bibiana2001' },
  ],
  highlights: [
    { id: 'artisans', value: 5000, isCompact: false, label: 'Artisans, most of them women' },
    { id: 'followers', value: 136_000, isCompact: true, label: 'Followers on Facebook' },
    { id: 'years', value: 25, isCompact: false, label: 'Years of hand embroidery' },
  ],
  navigation: [
    { id: 'collection', label: 'Collection', href: '#collection' },
    { id: 'what-we-make', label: 'What we make', href: '#what-we-make' },
    { id: 'story', label: 'Our story', href: '#story' },
    { id: 'visit', label: 'Visit', href: '#visit' },
  ],
  copyrightYear: 2026,
} as const
