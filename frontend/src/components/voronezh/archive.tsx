import { Card, Progress, Typography } from 'antd';
const { Text } = Typography;

interface ArchiveStatsProps {
  title: string;
  depth: number;
  usedPercent: number;
  usedSpace: string;
  totalSpace: string;
  norm: string;
  forecast: string;
  bitrate: string;
  offlineCameras: string;
}

export function ArchiveStats({
  title, depth, usedPercent, usedSpace, totalSpace, norm, forecast, bitrate, offlineCameras
}: ArchiveStatsProps) {
  return (
    <Card 
      title={
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{title}</div>
         
        </div>
      }
      style={{ borderRadius: '12px', textAlign: 'left', height: '100%' }}
    >
      {/* Глубина архива */}
      <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '16px' }}>
        <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#111b2e', lineHeight: 1 }}>{depth}</span>
        <span style={{ fontSize: '14px', color: '#8c9baa', marginLeft: '8px' }}>суток глубина архива</span>
      </div>

      {/* Прогресс-бар */}
      <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
        <span>Занято {usedSpace} ({usedPercent} %)</span>
        <span style={{ color: '#8c9baa' }}>Ёмкость {totalSpace}</span>
      </div>
      <Progress 
        percent={usedPercent} 
        showInfo={false} 
        strokeColor='#00c298' 
        size={['100%', 8]} 
        style={{ marginBottom: '24px' }}
      />

      {/* Список параметров */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span><span style={{ color: '#faad14', marginRight: '8px' }}>●</span>Норматив глубины</span>
          <b style={{ color: '#faad14' }}>{norm}</b>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span><span style={{ color: '#faad14', marginRight: '8px' }}>●</span>Прогноз переполнения</span>
          <b style={{ color: '#faad14' }}>{forecast}</b>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span><span style={{ color: '#00c298', marginRight: '8px' }}>●</span>Средний битрейт записи</span>
          <b>{bitrate}</b>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span><span style={{ color: '#faad14', marginRight: '8px' }}>●</span>Камеры без записи</span>
          <b style={{ color: '#faad14' }}>{offlineCameras}</b>
        </div>
      </div>
    </Card>
  );
}