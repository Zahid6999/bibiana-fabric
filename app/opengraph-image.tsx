/* eslint-disable @next/next/no-img-element */
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

import { ImageResponse } from 'next/og'

import { siteContent } from '@/lib/content/site'

export const alt = `${siteContent.name}, hand embroidery and traditional craft since ${siteContent.founded}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
  const [photo, logo] = await Promise.all([
    readFile(join(process.cwd(), 'public/images/runway-white-kaftan.jpg')),
    readFile(join(process.cwd(), 'public/images/bibiana-logo.jpg')),
  ])
  const photoSrc = `data:image/jpeg;base64,${photo.toString('base64')}`
  const logoSrc = `data:image/jpeg;base64,${logo.toString('base64')}`

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #8c0b1f 0%, #c8102e 55%, #ff6a4d 100%)',
        color: '#ffffff',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: 680,
          padding: 64,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <img src={logoSrc} width={88} height={88} style={{ borderRadius: 44 }} alt="" />
          <span style={{ fontSize: 44, fontWeight: 700, letterSpacing: 2 }}>BIBIANA</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <span style={{ fontSize: 76, fontWeight: 800, lineHeight: 1, letterSpacing: -1 }}>
            OUR TRADITION, OUR PRIDE
          </span>
          <span style={{ fontSize: 30, opacity: 0.9 }}>
            Hand embroidery and traditional craft from Bangladesh, since {siteContent.founded}
          </span>
        </div>
      </div>
      <img
        src={photoSrc}
        width={520}
        height={630}
        style={{ objectFit: 'cover', objectPosition: 'top' }}
        alt=""
      />
    </div>,
    size,
  )
}
