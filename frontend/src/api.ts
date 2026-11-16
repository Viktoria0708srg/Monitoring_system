import axios from 'axios';

export const fetchCameras = async () => {
  const response = await axios.get('/api/cameras');
  
  // Переводим ответ бэкенда в формат, который ждет таблица
  return response.data.map((cam: any) => ({
    key: String(cam.id),
    id: `KAM-0${cam.id}`,
    name: cam.name,
    status: cam.isOnline ? 'Онлайн' : 'Офлайн',
    res: '1920×1080 · 25 к/с', 
    bitrate: `${cam.bitrate_mbps} Мбит/с`,
    record: cam.isOnline ? 'ведётся' : 'нет',
    archive: '27 сут', 
    time: '12:41:07', 
  }));
};

export const fetchStats = async () => {
  const response = await axios.get('/api/stats');
  return response.data;
};