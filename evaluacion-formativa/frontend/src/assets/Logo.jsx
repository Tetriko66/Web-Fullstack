import logoImg from '../assets/logo-dinobox.jpg'

export default function Logo({ width = 45, height = 'auto' }) {
  return (
    <img 
      src={logoImg} 
      alt="Dinobox Logo" 
      style={{ width, height, objectFit: 'contain', borderRadius: '6px' }} 
    />
  )
}