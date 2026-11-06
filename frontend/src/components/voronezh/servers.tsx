import { Card, Progress, Tag } from 'antd';

const ServerProgress = ({ label, percent, color = '#00c298' }: { label: string, percent: number, color?: string }) => (
  <div style={{ flex: 1 }}>
    <div style={{ marginBottom: '4px', fontSize: '12px' }}>{label} <b>{percent} %</b></div>
    <Progress percent={percent} showInfo={false} strokeColor={color} size={['100%', 4]} />
  </div>
);

export function ServersList({ servers, otherEquipment }: { servers: any[], otherEquipment: any[] }) {
  return (
    <Card 
      title={<span style={{ fontSize: '18px', fontWeight: 'bold' }}>Серверы и оборудование</span>}
      extra={<Tag color='#00c298' style={{ borderRadius: '12px' }}>3 в норме</Tag>}
      style={{ borderRadius: '12px', textAlign: 'left', height: '100%' }}
      bodyStyle={{ padding: '16px' }}>

      {servers.map((srv, index) => (
        <div key={index} style={{ marginBottom: '24px' }}>
          
          {/* Шапка сервера */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#00c298' }}>●</span>
              <span style={{ fontWeight: 'bold' }}>{srv.name}</span>
            </div>
            <span style={{ fontSize: '12px', color: '#8c9baa' }}>Аптайм {srv.uptime}</span>
          </div>
          <div style={{ fontSize: '11px', color: '#8c9baa', marginBottom: '8px' }}>{srv.model}</div>
          
          {/* Полоски прогресса */}
          <div style={{ display: 'flex', gap: '16px' }}>
            {srv.cpu > 0 && <ServerProgress label="ЦП" percent={srv.cpu} />}
            {srv.cpu > 0 && <ServerProgress label="ОЗУ" percent={srv.ram} />}
            {srv.disk > 0 && <ServerProgress label={srv.cpu > 0 ? 'Диск' : 'Объём'} percent={srv.disk} color="#faad14" />}
            {srv.raid && <ServerProgress label="RAID" percent={srv.raid} />}
            {srv.temp && <ServerProgress label="Темп." percent={srv.temp} />}
          </div>
        </div>
      ))}
      
      {/* Прочее оборудование */}
      <div style={{ fontSize: '13px', marginTop: '16px' }}>
        <div style={{ color: '#8c9baa', marginBottom: '8px' }}>Прочее оборудование</div>
        {otherEquipment.map((item, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span><span style={{ color: '#00c298', marginRight: '8px' }}>●</span>{item.label}</span>
            <b>{item.value}</b>
          </div>
        ))}
      </div>
    </Card>
  );
}