import { Card, Progress, Tag } from 'antd';

interface DataCenterStatsProps {
  clusterLoad: number;      // Нагрузка кластера (62)
  clusterNodes: string;     // Узлы (12 из 18 узлов)
  storageLoad: number;      // Использование СХД (78)
  storageSize: string;      // Объем 
  temperature: string;      // Температура 
  tempStatus: 'ok' | 'warn'; // Статус температуры
}

export function DataCenterStats({ 
  clusterLoad, clusterNodes, storageLoad, storageSize, temperature, tempStatus 
}: DataCenterStatsProps) {
  return (
    <Card 
      title={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '18px', fontWeight: 'bold' }}>КЦОД — центр обработки данных</span>
          <Tag color="success" style={{ borderRadius: '12px', margin: 0 }}>Норма</Tag>
        </div>
      }
      style={{ borderRadius: '12px', textAlign: 'left', height: '100%' }}
    >
      {/* диаграммы */}
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '24px' }}>
        <div style={{ textAlign: 'center' }}>
          <Progress type="circle" percent={clusterLoad} size={90} strokeColor="#0084ff" />
          <div style={{ marginTop: '8px', fontSize: '13px', fontWeight: 500 }}>Нагрузка кластера</div>
          <div style={{ fontSize: '12px', color: '#8c9baa' }}>{clusterNodes}</div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Progress type="circle" percent={storageLoad} size={90} strokeColor="#ffab02" />
          <div style={{ marginTop: '8px', fontSize: '13px', fontWeight: 500 }}>Использование СХД</div>
          <div style={{ fontSize: '12px', color: '#8c9baa' }}>{storageSize}</div>
        </div>
      </div>

      {/* Список параметров */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span><span style={{ color: '#52c41a', marginRight: '8px' }}>●</span>Доступность сервисов</span>
          <b>34 / 34</b>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span><span style={{ color: '#52c41a', marginRight: '8px' }}>●</span>ИБП - автономность</span>
          <b>42 мин · заряд 100 %</b>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span><span style={{ color: tempStatus === 'warn' ? '#faad14' : '#52c41a', marginRight: '8px' }}>●</span>Температура холодного коридора</span>
          <b style={{ color: tempStatus === 'warn' ? '#faad14' : '#111b2e' }}>{temperature} °C</b>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span><span style={{ color: '#52c41a', marginRight: '8px' }}>●</span>Влажность</span>
          <b>44 %</b>
        </div>
      </div>
    </Card>
  );
}