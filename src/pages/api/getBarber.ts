import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { useAppSelector } from '@/redux/store';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = 'ctxn2pt2jwz2ushknuds'
  const { services } = req.query; 

  axios.get('https://api.yclients.com/api/v1/book_staff/256926', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/vnd.yclients.v2+json'
    },
    params:{
      service_ids:services
    }
  })
    .then((response) => {
      // Обработка ответа от API и отправка на frontend
      res.status(200).send(response.data.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('Server error');
    });
}