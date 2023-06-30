


import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '@/redux/store';


export default function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }


    const token = 'ctxn2pt2jwz2ushknuds'
    const {
        phone,
        fullname,
        email,
        code,
        comment,
        notify_by_sms,
        appointments,
        departmentID
    } = req.body;
    axios.post(`https://api.yclients.com/api/v1/book_record/${departmentID}`, {
        phone: phone,
        fullname: fullname,
        email: email,
        code: code,
        comment: comment,
        notify_by_sms: notify_by_sms,
        appointments: appointments
    }, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/vnd.yclients.v2+json'
        },
    })
        .then((response) => {
            // Обработка ответа от API и отправка на frontend
            res.status(200).send(response.data.data);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send(error);
        });
}