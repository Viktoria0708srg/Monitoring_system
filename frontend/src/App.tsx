import { Row, Col, Flex } from 'antd'; 
import { AvailabilityChart, type ChartData } from './components/chart'; 
import { ActiveIncidents, type IncidentData } from './components/active';
import { BranchTable, type BranchData } from './components/branches'; 
import { DataCenterStats } from './components/kzod';
import { KpiCard } from './components/KpiCard';

// Данные для таблицы
const branchesData: BranchData[] = [
  { key: '1', name: 'Белгородский', pp: '17 / 18', cams: '412 / 431', servers: '38', rtt: '28 мс', index: 72, status: 'warn' },
  { key: '2', name: 'Владивостокский', pp: '31 / 40', cams: '688 / 702', servers: '61', rtt: '41 мс', index: 88, status: 'ok' },
  { key: '3', name: 'Крымский', pp: '9 / 11', cams: '214 / 240', servers: '22', rtt: '63 мс', index: 54, status: 'error' },
  { key: '4', name: 'Мурманский', pp: '14 / 17', cams: '301 / 305', servers: '29', rtt: '33 мс', index: 91, status: 'ok' },
];

//график
const chartData: ChartData[] = [
  { time: '00:00', type: 'Камеры', value: 99.8 }, { time: '07:00', type: 'Камеры', value: 97.5 },
  { time: '12:00', type: 'Камеры', value: 98.5 }, { time: '20:00', type: 'Камеры', value: 99.3 },
  { time: '00:00', type: 'Серверы', value: 99.9 }, { time: '07:00', type: 'Серверы', value: 99.8 }, 
  { time: '12:00', type: 'Серверы', value: 99.9 }, { time: '20:00', type: 'Серверы', value: 99.9 },
  { time: '00:00', type: 'ViPNet', value: 98.6 }, { time: '07:00', type: 'ViPNet', value: 91.4 },
  { time: '12:00', type: 'ViPNet', value: 97.0 }, { time: '20:00', type: 'ViPNet', value: 98.0 },
];

// инциденты
const incidentsData: IncidentData[] = [
  { id: 1, title: 'МАПП Нехотеевка', desc: 'Потеря связи с видеосервером № 2', time: '12 мин', type: 'error', details: '8 камер недоступны' },
  { id: 2, title: 'ЖДПП Валуйки', desc: 'Канал ViPNet не поднялся после перезагрузки', time: '41 мин', type: 'warning', details: 'нет данных 41 мин' },
  { id: 3, title: 'ВПП Воронеж (Чертовицкое)', desc: 'Заполнение архива 92 %', time: '1 ч', type: 'warning', details: 'глубина архива 11 сут' },
];

function App() {
  return (
    <div style={{ padding: '24px', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      
      {/* карточки */}
      <Flex gap="middle" wrap="nowrap" style={{ marginBottom: '24px' }}>
        <div style={{ flex: 1 }}>
          <KpiCard title="Пункты пропуска на связи"
            mainValue={341} 
            subValue="из 363" 
            percent={94} 
            errorText="22 без связи" /></div>

        <div style={{ flex: 1 }}>
          <KpiCard title="Видеокамеры" 
          mainValue={4812} 
          subValue="из 4999" 
          percent={96} 
          errorText="187 офлайн" /></div>

        <div style={{ flex: 1 }}>
          <KpiCard title="Серверы на ПП" 
          mainValue={726} 
          subValue="в норме из 742" 
          percent={98} 
          errorText="12 предупреждений" /></div>

        <div style={{ flex: 1 }}>
          <KpiCard title="КЦОД — доступность" 
          mainValue="99,97%" 
          subValue="за 30 дней" 
          percent={99} 
          goodText="норма" /></div>

        <div style={{ flex: 1 }}>
          <KpiCard title="Каналы ViPNet" 
          mainValue={358} 
          subValue="туннелей активно" 
          percent={98} 
          errorText="5 нестабильных" /></div>
      </Flex>

    {/* График и инциденты */}
      <Row gutter={[24, 24]} style={{ marginBottom: '24px' }}>
        <Col xs={24} xl={16}>
          {/* ПЕРЕДАЕМ ДАННЫЕ */}
          <AvailabilityChart data={chartData} />
        </Col>
        <Col xs={24} xl={8}>
          {/* ПЕРЕДАЕМ ДАННЫЕ */}
          <ActiveIncidents incidents={incidentsData} totalCount={9} />
        </Col>
      </Row>

      {/* Ряд 3: Таблица и КЦОД */}
      <Row gutter={[24, 24]}>
        <Col xs={24} xl={16}>
          <BranchTable data={branchesData} />
        </Col>
        <Col xs={24} xl={8}>
          <DataCenterStats 
            clusterLoad={62}
            clusterNodes="12 из 18 узлов"
            storageLoad={78}
            storageSize="312 ТБ из 400 ТБ"
            temperature="27,4"
            tempStatus="warn"
          />
        </Col>
      </Row>

    </div>
  );
}

export default App;