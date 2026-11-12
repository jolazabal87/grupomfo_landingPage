import { ASSETS_PATH } from '@/data/content';

interface LogoProps {
  src: string;
  name: string;
}

export function Logo({ src, name }: LogoProps) {
  return (
    <div 
      className="logo-box"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', // 👈 Aquí estaba el error (era justifyContent)
        padding: '24px',
        minHeight: '130px',
        width: '100%'
      }}
    >
      <img 
        src={ASSETS_PATH + src} 
        alt={name} 
        style={{
          maxHeight: '80px',
          maxWidth: '85%',
          width: 'auto',
          height: 'auto',
          objectFit: 'contain',
          display: 'block'
        }}
      />
    </div>
  );
}