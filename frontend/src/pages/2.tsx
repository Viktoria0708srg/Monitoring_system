import { Flex,Card } from 'antd';
import { VoronezhHeader } from '../components/voronezh/header';
import { CamerasTable } from '../components/voronezh/cameraTable';
import { ServersList } from '../components/voronezh/servers';
import { KpiCard } from '../components/monitoring/KpiCard';
import { ArchiveStats } from '../components/voronezh/archive';
import { CamerasAvailability } from '../components/voronezh/7days'
import { ViPNetChart } from '../components/voronezh/vipnet';
import { EventLog } from '../components/voronezh/eventLog';



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

const availabilityData = [
  { day: 'Чт', value: 95, status: 'norm' },
  { day: 'Пт', value: 99, status: 'norm' },
  { day: 'Сб', value: 95, status: 'norm' },
  { day: 'Вс', value: 98, status: 'norm' },
  { day: 'Пн', value: 80, status: 'warning' },
  { day: 'Вт', value: 90, status: 'warning' },
  { day: 'Ср', value: 81, status: 'warning' },
];

// ViPNet
const vipnetData = [
  { time: '00:00', value: 30 },
  { time: '03:00', value: 17},
  { time: '06:00', value: 18 },
  { time: '09:00', value: 38 },
  { time: '12:00', value: 42 }, 
  { time: '15:00', value: 38 },
  { time: '18:00', value: 32 },
  { time: '21:00', value: 35 },
  { time: '23:00', value: 18 },
];

// --- ДАННЫЕ ДЛЯ ЖУРНАЛА СОБЫТИЙ ---
const eventLogData = [
  { 
    key: '1', time: '02.09 12:29', object: { name: 'KAM-07 · Служебный проход', color: '#ff4d4f' }, type: 'Видеокамера', 
    event: 'Потеря видеопотока, RTSP-таймаут', duration: '12 мин', 
    status: { text: 'Открыто', color: 'error', textColor: '#cf1322', bgColor: '#fff1f0' } 
  },
  { 
    key: '2', time: '02.09 09:47', object: { name: 'KAM-04 · Перрон, сектор А', color: '#faad14' }, type: 'Видеокамера', 
    event: 'Запись не ведётся: ошибка записи на СХД', duration: '3 ч 05 мин', 
    status: { text: 'В работе', color: 'warning', textColor: '#d48806', bgColor: '#fffbe6' } 
  },
  { 
    key: '3', time: '02.09 08:12', object: { name: 'NAS-01', color: '#faad14' }, type: 'СХД', 
    event: 'Заполнение архива достигло 68 % — прогноз переполнения 19 суток', duration: '—', 
    status: { text: 'В работе', color: 'warning', textColor: '#d48806', bgColor: '#fffbe6' } 
  },
  { 
    key: '4', time: '02.09 04:12', object: { name: 'VS-01', color: '#00c298' }, type: 'Сервер', 
    event: 'Резервное копирование конфигураций выполнено', duration: '2 мин', 
    status: { text: 'Закрыто', color: 'success', textColor: '#00c298', bgColor: '#f6ffed' } 
  },
  { 
    key: '5', time: '01.09 23:04', object: { name: 'Канал ViPNet', color: '#faad14' }, type: 'Канал связи', 
    event: 'Кратковременная деградация: RTT 240 мс, потери 4,2 %', duration: '8 мин', 
    status: { text: 'Закрыто', color: 'success', textColor: '#00c298', bgColor: '#f6ffed' } 
  },
  { 
    key: '6', time: '01.09 18:33', object: { name: 'KAM-08 · Периметр, вышка 2', color: '#ff4d4f' }, type: 'Видеокамера', 
    event: 'Нет электропитания на опоре — камера недоступна', duration: '3 ч 12 мин', 
    status: { text: 'Открыто', color: 'error', textColor: '#cf1322', bgColor: '#fff1f0' } 
  },
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
          <CamerasAvailability data={availabilityData} />
        </div>


        <div style={{ flex: 1 }}>
          <ViPNetChart data={vipnetData} />
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

            {/* Журнал ИТ-событий */}
      <EventLog data={eventLogData} />


    </div>
  );
}