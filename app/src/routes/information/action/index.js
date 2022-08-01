const actions = [
    {
        action: 'Утеплитель Техноблок 1200х600х100',
        price: '1535 рублей',
        description: 'Акция действует одну неделю',
        link: '/products/uteplitel-texnoblok-standart-1200600100mm-0288-m3'
    },
    // {
    //     action: 'Утеплитель роклайт 50 мм',
    //     price: '704 рубля',
    //     description: 'Акция действует 23 и 24 июля',
    //     link: '/products/mineralno-bazaltovye-utepliteli'
    // },
    {
        action: 'Утеплитель роклайт 100 мм',
        price: '1180 рублей',
        description: 'Акция действует 23 и 24 июля',
        link: '/products/mineralno-bazaltovye-utepliteli'
    },
    {
        action: 'Пенопласт 25 плотности 100мм',
        price: '215 рублей',
        description: 'Предложение ограничено',
        link: '/products/penoplast'
    },
    {
        action: 'Плита ОСБ 9мм',
        price: '540 рублей',
        description: 'Предложение ограничено',
        link: '/products/penoplast'
    },
    {
        action: 'Доска',
        price: '16350 рублей за куб',
        description: 'Только наличный платёж',
        link: '/products/doska-obreznaya-obrabotannaya'
    },
]

export const get = () => {
    return {
        body: {
            actions,
        }
    }
}
