import { Card, Progress, Tag } from 'antd';

export function DataCenterStats({ 
  clusterLoad, clusterNodes, storageLoad, storageSize, temperature, tempStatus, availability, ups, humidity 
}: { 
  clusterLoad: number; 
  clusterNodes: string; 
  storageLoad: number; 
  storageSize: string; 
  temperature: string; 
  tempStatus: 'ok' | 'warn'; 
  availability: string; 
  ups: string; 
  humidity: string;
}) {

  return (
    <Card 
      title={
        <div style={{ display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' }}>
          <span style={{ fontSize: '18px', fontWeight: 'bold' }}>КЦОД — центр обработки данных</span>
          <Tag color="success" style={{ borderRadius: '12px', margin: 0 }}>Норма</Tag>
        </div>
      }
      style={{ borderRadius: '12px', textAlign: 'left', height: '100%' }}>
        
      <div style={{ display: 'flex', 
        justifyContent: 'space-around',
        marginBottom: '24px' }}>
        <div style={{ textAlign: 'center' }}>

          <Progress type="circle" percent={clusterLoad} size={90} strokeColor="#80EE98" />
          <div style={{ marginTop: '8px', 
            fontSize: '13px', 
            fontWeight: 500 }}>Нагрузка кластера</div>
          <div style={{ fontSize: '12px', color: '#8c9baa' }}>{clusterNodes}</div>
        </div>
        <div style={{ textAlign: 'center' }}>

          <Progress type="circle" percent={storageLoad} size={90} strokeColor="#09D1C7" />
          <div style={{ marginTop: '8px', 
            fontSize: '13px', 
            fontWeight: 500 }}>Использование СХД</div>
          <div style={{ fontSize: '12px', 
            color: '#8c9baa' }}>{storageSize}</div>
        </div>
      </div>

      <div style={{ display: 'flex', 
        flexDirection: 'column', 
        gap: '12px', 
        fontSize: '13px' }}>
        {[
          { label: 'Доступность сервисов', value: availability, color: '#52c41a' },
          { label: 'ИБП - автономность', value: ups, color: '#52c41a' },
          { label: 'Температура', value: `${temperature} °C`, color: tempStatus === 'warn' ? '#faad14' : '#52c41a' },
          { label: 'Влажность', value: humidity, color: '#52c41a' },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span><span style={{ color: item.color, marginRight: '8px' }}>●</span>{item.label}</span>
            <b style={{ color: item.label === 'Температура' && tempStatus === 'warn' ? '#faad14' : '#111b2e' }}>{item.value}</b>
          </div>
        ))}
      </div>
    </Card>
  );
}