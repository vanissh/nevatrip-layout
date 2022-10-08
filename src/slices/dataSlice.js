import { createSlice } from '@reduxjs/toolkit'
import second from '../assets/second.jpg'

const initialState = {
    data: [
        {
            id: 1,
            title: 'АКЦИЯ - Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019',
            duration: '2 часа',
            description: [
                {
                    text: 'Билет на целый день'
                },
                {
                    text: 'Неограниченное число катаний'
                },
                {
                    text: '6 остановок у главных достопримечательностей'
                },
                {
                    text: 'Ближайший рейс',
                    times: [
                        '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
                        
                    ],
                    data: 'сегодня'
                }
            ],
            price: '900',
            discount: '1200 р на причале',
            src: second,
            label: {
                name: 'Новинка'
            }
        },
        {
            id: 2,
            title: 'АКЦИЯ - Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019',
            duration: '2 часа',
            description: [
                {
                    text: 'Билет на целый день'
                },
                {
                    text: 'Неограниченное число катаний'
                },
                {
                    text: '6 остановок у главных достопримечательностей'
                },
                {
                    text: 'Ближайший рейс',
                    times: [
                        '12:00', '12:00', '12:00', '12:00', '12:00', '12:00', '12:00', '12:00'
                    ],
                    data: 'сегодня'
                }
            ],
            price: '900',
            discount: '1200 р на причале',
            src: second,
            label: {
                name: 'Круглый год'
            }
        },
        {
            id: 3,
            title: 'АКЦИЯ - Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019',
            duration: '2 часа',
            description: [
                {
                    text: 'Билет на целый день'
                },
                {
                    text: 'Неограниченное число катаний'
                },
                {
                    text: '6 остановок у главных достопримечательностей'
                },
                {
                    text: 'Ближайший рейс',
                    times: [
                        '12:00', '12:00', '12:00', '12:00'
                    ],
                    data: 'сегодня'
                }
            ],
            price: '900',
            src: second
        },
    ],
    userTime: ''
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setUserTime: (state, action) => {
            state.userTime = action.payload
        }
    },
})

const {actions, reducer} = dataSlice

export {reducer}

export const {
    setUserTime
} = actions