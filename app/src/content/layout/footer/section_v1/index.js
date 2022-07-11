const yearStart = '2001';
const text = 'Компания МосМебель. Кухонные гарнитуры и шкафы купе на заказ.';
const phoneService = '+7 (495) 147-55-50';

const menu = [
	{
		value: 'Главная',
		path: '/'
	},
	{
		value: 'Шкафы',
		path: 'shkafy'
	},
	{
		value: 'Кухни',
		path: 'kuhni'
	},
	{
		value: 'Блог',
		path: 'blog'
	},
	{
		value: 'Контакты',
		path: 'contacts'
	}
];

const content_Footer_v1 = {
	yearStart,
	text,
	phoneService,
	menu
};

export const useFooter = {
	content_Footer_v1
};
