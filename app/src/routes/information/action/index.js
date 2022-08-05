const actions = [
    {
        action: 'Утеплитель Техноблок 1200х600х100',
        price: '1290 рублей',
        description: 'Акция действует одну неделю',
        link: '/product/uteplitel-texnoblok-standart-1200600100mm-0288-m3'
    },
    {
        action: 'Утеплитель Техноблок 1200х600х50',
        price: '1290 рублей',
        description: 'Акция действует одну неделю',
        link: '/product/uteplitel-texnoblok-standart-120060050-mm-0288-m3'
    },
    // {
    //     action: 'Утеплитель роклайт 50 мм',
    //     price: '704 рубля',
    //     description: 'Акция действует 23 и 24 июля',
    //     link: '/products/mineralno-bazaltovye-utepliteli'
    // },
    // {
    //     action: 'Утеплитель роклайт 100 мм',
    //     price: '1180 рублей',
    //     description: 'Акция действует 23 и 24 июля',
    //     link: '/products/mineralno-bazaltovye-utepliteli'
    // },
    // {
    //     action: 'Пенопласт 25 плотности 100мм',
    //     price: '215 рублей',
    //     description: 'Предложение ограничено',
    //     link: '/products/penoplast'
    // },
    {
        action: 'Плита ОСБ 9мм',
        price: '530 рублей',
        description: 'Предложение ограничено',
        link: '/product/plita-osb-3-250012509mm-kronospan-gost-vlagostoikaya'
    },
    {
        action: 'Софит-izol в (пароизоляция) 1,6м (35 м2)',
        price: '635 рублей',
        description: 'Предложение ограничено',
        link: '/product/sofit-izol-v-paroizolyaciya-16m-35-m2'
    },
    {
        action: 'Софит-izol d (гидро-пароизоляция) 1,5м (70 м2)',
        price: '1400 рублей',
        description: 'Предложение ограничено',
        link: '/product/sofit-izol-d-gidro-paroizolyaciya-15m-70-m2'
    },
    // {
    //     action: 'Доска',
    //     price: '16350 рублей за куб',
    //     description: 'Только наличный платёж',
    //     link: '/products/doska-obreznaya-obrabotannaya'
    // },
]

export const get = () => {
    return {
        body: {
            actions,
        }
    }
}
