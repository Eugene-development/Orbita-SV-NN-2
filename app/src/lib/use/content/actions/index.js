const mainAction = [
    {
        id: 466,
        stars: 4,
        startDate: '15 марта',
        finishDate: '',
        action: 'Смесь для пола "юнис" горизонт универсальный (20 кг)',
        descriptionAction: 'Стяжка цементная "Юнис Горизонт Универсальный" - быстротвердеющий наливной пол для внутренних работ в теплых помещениях. Применяется с бетонными, цементными стяжками на несущих основаниях, имеющих неровности от 2 до 100 мм. Может использоваться в ванных комнатах и кухнях.',
        oldPrice: 1,
        newPrice : 350,
        unit: 'шт',
        characteristics: [
            {
                id: 1,
                descriptionCharacteristic: 'Мешки по 20 кг'
            },
            {
                id: 1,
                descriptionCharacteristic: 'Сыпучий материал'
            },
        ],
        img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%8E%D1%83.jpg'
    }
]
const actions = [
    // {
    //     action: 'Плита ОСБ Кроношпан 9мм 1250*2500мм',
    //     price: '750 рублей',
    //     description: 'Только до 10 ноября! Специальное предложение при наличном расчете! Cкидки и акции не суммируются.'
    // },
]

const seasonalGoods = [
    {
     id: 1,
     name: 'ГКЛ "Кнауф" 9,5 мм (1200*2500)',
     price: '295',
     unit: 'шт',
     img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%BE%D0%BF%D1%82.webp',
     link: 'product/gkl-knauf-95-mm-12002500?id=257'
    },
    {
     id: 2,
     name: 'Плита ОСБ-3 2500*1250*9мм kronospan',
     price: '1100',
     unit: 'шт',
     img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/ilejI7dCV3zr72h4VudvlNrQLKBgHsrYwKd1HoAL.jpeg',
     link: 'product/plita-osb-3-250012509mm-kronospan-gost-vlagostoikaya?id=228'
    },
    {
     id: 3,
     name: 'Штукатурная смесь "ЕК" TG 40 waite',
     price: '483',
     unit: 'шт',
     img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-TG40-WHITE.png',
     link: 'product/stukaturnaya-smes-ek-tg-40-waite-30-kg?id=432'
    },
    {
     id: 4,
     name: 'Пескобетон м-300 (25 кг)',
     price: '115',
     unit: 'шт',
     img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%BF%D0%B5%D1%81.jpg',
     link: 'product/peskobeton-m-300-25-kg?id=473'
    },
]

export const useActions = {
    mainAction,
    actions,
    seasonalGoods
}
