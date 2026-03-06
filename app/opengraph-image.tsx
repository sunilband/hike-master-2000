import { ImageResponse } from 'next/og';
import { fetchData } from '@/lib/fetchData';

export const runtime = 'edge';

// Image metadata
export const alt = 'Dashboard Open Graph Image';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  const data = await fetchData();
  const description = `${data.role}${data.team ? ` | ${data.team}` : ''}`;

  const initials = data.name
    .split(' ')
    .filter(Boolean)
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        backgroundColor: '#f8fafc',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 160,
            height: 160,
            borderRadius: 80,
            backgroundColor: '#0f172a',
            color: '#ffffff',
            fontSize: 70,
            fontWeight: 700,
            letterSpacing: '0.05em',
            marginBottom: '60px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          }}
        >
          {initials}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 80,
            fontWeight: 700,
            color: '#0f172a',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '30px',
          }}
        >
          {data.name}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 36,
            color: '#475569',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          {description}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          height: '140px',
          width: '100%',
          backgroundColor: '#0f172a',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            color: '#94a3b8',
            fontSize: 24,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
          }}
        >
          Advergame Technologies Private Limited
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
