import asymmetricKurtiSet from '@/public/images/asymmetric-kurti-set.jpg'
import checkKaftanTop from '@/public/images/check-kaftan-top.jpg'
import patchworkJacketStudio from '@/public/images/patchwork-jacket-studio.jpg'
import printedKaftanShirt from '@/public/images/printed-kaftan-shirt.jpg'

export const collectionContent = {
  title: 'New in the studio',
  intro: 'Recent pieces from Bibiana. Message us to check sizes and price.',
  pieces: [
    {
      id: 'patchwork-jacket',
      name: 'Patchwork check jacket',
      detail: 'Cotton checks, pieced by hand',
      image: patchworkJacketStudio,
      alt: 'A cropped jacket made of patchwork cotton checks in blue, red and green, on a dress form',
    },
    {
      id: 'printed-kaftan',
      name: 'Printed kaftan shirt',
      detail: 'Floral print with a navy border',
      image: printedKaftanShirt,
      alt: 'An oversized kaftan shirt in cream with rows of blue floral print and a navy border',
    },
    {
      id: 'asymmetric-kurti',
      name: 'Asymmetric kurti set',
      detail: 'Chocolate kurti, mustard trousers',
      image: asymmetricKurtiSet,
      alt: 'A brown asymmetric kurti with mustard yellow collar and cuffs worn with mustard trousers',
    },
    {
      id: 'check-kaftan',
      name: 'Check kaftan top',
      detail: 'Sky-blue micro check, V neck',
      image: checkKaftanTop,
      alt: 'A loose sky-blue check kaftan top with a V neck on a dress form',
    },
  ],
} as const
