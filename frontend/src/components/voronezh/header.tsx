import { Flex } from 'antd';

export function VoronezhHeader({ channelStats }: { channelStats: any[] }) {
  return (
    <div style={{ marginBottom: '24px' }}>
      {/* Плашка канала */}
      <div style={{ 
        backgroundColor: '#e6f4ff', 
        borderRadius: '12px', 
        padding: '16px 24px', 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div style={{ textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#00c298', fontSize: '14px' }}>●</span>
            <span style={{ fontWeight: 'bold', fontSize: '16px', color: '#111b2e' }}>
              Канал ViPNet · ПП → Центральный аппарат
            </span>
          </div>
          <div style={{ fontSize: '14px', color: '#6d7985', marginTop: '6px' }}>
            Туннель активен · координатор ЦА-01 · шифрование ГОСТ
          </div>
        </div>

        <Flex gap="large" style={{ textAlign: 'right' }}>
          {channelStats.map((stat, idx) => (
            <div key={idx}>
              <div style={{ fontSize: '13px', color: '#6d7985' }}>{stat.label}</div>
              <div style={{ fontSize: '15px', color: stat.color, fontWeight: 'bold' }}>{stat.value}</div>
            </div>
          ))}
        </Flex>
      </div>
    </div>
  );
}