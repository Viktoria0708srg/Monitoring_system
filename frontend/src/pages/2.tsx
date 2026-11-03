import { VoronezhHeader } from '../components/vorohezh';

export function VoronezhPage() {
  return (
    <div style={{ padding: '24px', minHeight: '100vh' }}>
      
      <h1 style={{ 
        margin: '0 0 24px 0', 
        fontSize: '28px', 
        fontWeight: 'bold', 
        color: '#000000', 
      }}>
        ВПП Воронеж (Чертовицкое)
      </h1>

      {/* канал и карточки */}
      <VoronezhHeader />
      
    </div>
  );
}