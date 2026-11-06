import { Flex,Card } from 'antd';
import { VoronezhHeader } from '../components/voronezh/header';
import { CamerasTable } from '../components/voronezh/cameraTable';
import { ServersList } from '../components/voronezh/servers';
import { KpiCard } from '../components/KpiCard';
import { ArchiveStats } from '../components/voronezh/archive';


const channelStats = [
  { label: 'RTT', value: '28 мс', color: '#00c298' },
  { label: 'Потери пакетов', value: '0,1 %', color: '#00c298'},
  { label: 'Полоса', value: '14 / 200 Мбит/с', color: '#111b2e' },
  { label: 'Передано за сутки', value: '1,6 ГБ', color: '#111b2e' },
  { label: 'Последняя синхронизация', value: '12:41:07', color: '#111b2e' },
];

// таблица камер
const camerasData = [
  { key: '1', id: 'KAM-01', name: 'Въезд, полоса 1', status: 'Онлайн', res: '1920×1080 · 25 к/с', bitrate: '3,8 Мбит/с', record: 'ведётся', archive: '27 сут', time: '12:41:07' },
  { key: '2', id: 'KAM-02', name: 'Въезд, полоса 2', status: 'Онлайн', res: '1920×1080 · 25 к/с', bitrate: '3,9 Мбит/с', record: 'ведётся', archive: '27 сут', time: '12:41:07' },
  { key: '3', id: 'KAM-03', name: 'Досмотровая площадка', status: 'Онлайн', res: '2560×1440 · 25 к/с', bitrate: '4,6 Мбит/с', record: 'ведётся', archive: '27 сут', time: '12:41:07' },
  { key: '4', id: 'KAM-04', name: 'Перрон, сектор А', status: 'Без записи', res: '1920×1080 · 25 к/с', bitrate: '3,7 Мбит/с', record: 'не ведётся', archive: '11 сут', time: '12:41:07' },
  { key: '5', id: 'KAM-05', name: 'Зал прилёта', status: 'Онлайн', res: '1920×1080 · 25 к/с', bitrate: '3,2 Мбит/с', record: 'ведётся', archive: '27 сут', time: '12:41:07' },
  { key: '6', id: 'KAM-06', name: 'Зал вылета', status: 'Онлайн', res: '1920×1080 · 25 к/с', bitrate: '3,4 Мбит/с', record: 'ведётся', archive: '27 сут', time: '12:41:07' },
  { key: '7', id: 'KAM-07', name: 'Служебный проход', status: 'Офлайн', res: 'нет сигнала', bitrate: '—', record: 'нет', archive: '26 сут', time: '12:29:14' },
  { key: '8', id: 'KAM-08', name: 'Периметр, вышка 2', status: 'Офлайн', res: 'нет сигнала', bitrate: '—', record: 'нет', archive: '24 сут', time: '09:29:41' },
];

// серверы
const serversData = [
  { name: 'Видеосервер VS-01', model: 'Aquarius T50 D216PC · 10.42.7.11', uptime: '128 сут', cpu: 34, ram: 61, disk: 78 },
  { name: 'Сервер приложений AS-01', model: 'Yadro Vegman S220 · 10.42.7.12', uptime: '97 сут', cpu: 22, ram: 48, disk: 41 },
   { name: 'СХД / архив NAS-01', model: 'Kulon RAID-6 · 10.42.7.20', uptime: '210 сут', cpu: 0, ram: 68, disk: 100, temp: 52, raid: 100 },
];

const otherEquipment: { label: string; value: string }[] = [
  { label: 'Коммутатор SW-01 · 24 порта', value: '23 порта активны' },
  { label: 'ИБП UPS-01', value: 'заряд 100 % · автономность 28 мин' },
  { label: 'Источник питания, вход 2', value: 'резерв активен' },
  { label: 'Температура в серверной', value: '23,1 °C' },
];


export function VoronezhPage() {
  return (
    <div style={{ padding: '24px', minHeight: '100vh' }}>
    
      <h1 style={{ margin: '0 0 24px 0', fontSize: '28px', fontWeight: 'bold', color: '#000000' }}>
        ВПП Воронеж (Чертовицкое)
      </h1>

      <VoronezhHeader channelStats={channelStats} />
      
      {/* KPI */}
      <Flex gap="middle" wrap="nowrap" style={{ marginBottom: '24px' }}>
        
        <div style={{ flex: 1 }}>
          <KpiCard 
          title="Видеокамеры" 
          mainValue={24} 
          subValue="из 26 онлайн" 
          percent={92} 
          errorText="2 камеры недоступны" />
        </div>

        <div style={{ flex: 1 }}>
          <KpiCard 
          title="Серверы и СХД" 
          mainValue={3} 
          subValue="из 3 в норме" 
          percent={100} 
          goodText="Все службы работают" />
        </div>

        <div style={{ flex: 1 }}>
          <KpiCard 
          title="Архив видеонаблюдения" 
          mainValue={27} 
          subValue="суток глубина · 68 % ёмкости" 
          percent={68} goodText="Норматив: 30 суток" />
        </div>

        <div style={{ flex: 1 }}>
          <KpiCard 
          title="Каналы связи" 
          mainValue={1} 
          subValue="основной + резервный" 
          percent={100} 
          goodText="Резерв в горячем режиме" />

        </div>

      </Flex>

      {/* Таблица камер и список серверов */}
      <Flex gap="middle" wrap="nowrap">
        <div style={{ flex: 2, minWidth: 0 }}>
          <CamerasTable data={camerasData} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <ServersList servers={serversData} otherEquipment={otherEquipment} />
        </div>
      </Flex>

            {/* 3. Нижний ряд */}
      <Flex gap="middle" wrap="nowrap" style={{ marginTop: '24px' }}>
        
        <div style={{ flex: 1 }}>
          <Card title="Доступность камер за 7 дней" style={{ borderRadius: '12px', height: '100%' }}>
             <div style={{ height: '180px' }}></div>
          </Card>
        </div>

        <div style={{ flex: 1 }}>
          <Card title="Загрузка канала ViPNet" style={{ borderRadius: '12px', height: '100%' }}>
             <div style={{ height: '180px' }}></div>
          </Card>
        </div>

        {/* архив */}
        <div style={{ flex: 1 }}>
          <ArchiveStats 
            title="Архив видеонаблюдения"
  
            depth={27}
            usedPercent={68}
            usedSpace="272 ТБ"
            totalSpace="400 ТБ"
            norm="30 суток"
            forecast="через 19 суток"
            bitrate="4,2 Мбит/с"
            offlineCameras="1 из 26"
          />
        </div>

      </Flex>


    </div>
  );
}