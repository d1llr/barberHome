import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '@/redux/store';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const token = 'ctxn2pt2jwz2ushknuds'
    const { phone, code } = req.query;
    axios.post(`https://api.yclients.com/api/v1/user/auth`, {
        phone: phone,
        code: code
    }, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/vnd.yclients.v2+json'
        },
    })
        .then((response) => {
            // Обработка ответа от API и отправка на frontend
            res.status(200).send(response.data);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send(error);
        });
}