<script context="module">
  import { pageTitle } from "../stores.js";
  import { Swiper_v2 } from "symax/ui/broker";
  import { content } from "./index.js";
  const { content_Swiper_v2 } = content;

  export const load = async ({ fetch, params, url }) => {
    let res = await fetch(`/api/catalog/productID/446`);

    const resJSON = await res.json();
    const pathAWS = resJSON.pathAWS;
    const data = resJSON.product.data[0];
    const {
      id,
      name: nameProduct,
      description: descriptionProduct,
      image,
      unit,
      size,
      category: { id: idCategory, name: nameCategory, slug: slugCategory },
    } = data;

    const propsData = {
      pathAWS,
      id,
      nameProduct,
      descriptionProduct,
      image,
      unit,
      size,
      idCategory,
      nameCategory,
      slugCategory,
    };

    pageTitle.update(() => "База стройматериалов");

    return {
      props: { ...propsData },
    };
  };
</script>

<script>
  import pkg from "lodash";
  import axios from "axios";
  import { onMount } from "svelte";
  import { browser } from "$app/env";
  import { buttonVisibleCatalog, InCart, lengthCart } from "../stores";
  import { useMain } from "$lib/use/content/main";
  import { useActions } from "$lib/use/content/actions";
  import { useReturn } from "$lib/use/functions/return";
  import { useVisible } from "$lib/use/functions/visible/index.js";

  const { concat } = pkg;
  const { Benefits } = useMain;
  const { mainAction, seasonalGoods } = useActions;
  const { currentValue } = useReturn;
  const { invert, invertToFalse, invertToTrue } = useVisible;

  const sendToCart = async (id) => {
    if (localStorage.getItem("inCart") === null) {
      localStorage.setItem("inCart", JSON.stringify([id]));
    } else {
      const itemsCart = JSON.parse(localStorage.getItem("inCart"));
      const newItemsCart = concat(itemsCart, id);
      localStorage.setItem("inCart", JSON.stringify(newItemsCart));
    }
    const productsInCart = JSON.parse(localStorage.getItem("inCart"));
    const visibleLengthCart = productsInCart.length;
    lengthCart.update(() => currentValue(visibleLengthCart));
    InCart.update(() => productsInCart);

    const url = `/store-cart`;
    const payloadCart = {
      product_id: id,
      sessionUser: localStorage.getItem("dataS"),
    };
    const domain = import.meta.env.VITE_API_CART;
    const apiCart = {
      baseURL: `${domain}`,
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
      },
    };
    await axios.post(url, payloadCart, apiCart);
  };
  const changeButtonVisibleCatalog = () =>
    buttonVisibleCatalog.update(invertToTrue);

  let idProductsInCart;
  onMount(async () => {
    if (browser && localStorage.getItem("inCart") !== null) {
      idProductsInCart = JSON.parse(browser && localStorage.getItem("inCart"));
    }
  });
  InCart.subscribe((value) => (idProductsInCart = value));

  export let id;
  export let nameProduct;
  export let descriptionProduct;
  export let pathAWS;
  export let image;
  export let unit;
  export let size;

  const page = "Главная";
  const title =
    'База стройматериалов "Орбита-Строй" || Наш интернет магазин стройматериалов предлагает купить строительные материалы с доставкой по Нижнем Новгороду';
  const description =
    'Интернет-магазин строительных и отделочных материалов "Орбита-строй" | Строительная база с широким ассортиментом товаров и низкими ценами на стройматериалы. Обращайте внимание на наши акции.';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

<div class="bg-white">
  <div class="my-12 ml-8 text-center text-base">
    <div>
      <h2 class="text-base font-semibold uppercase tracking-wide text-cyan-600">
        Товар месяца
      </h2>
      <h3
        class="mt-2 text-4xl font-extrabold leading-8 tracking-tight text-gray-800 sm:text-5xl"
      >
        Ноябрь-Декабрь
      </h3>
    </div>
  </div>
  <div class="mx-8 my-12 bg-gray-50">
    <main class="lg:relative">
      <div
        class="mx-auto w-full max-w-7xl py-16 text-center lg:py-32 lg:text-left"
      >
        <div class="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900 ">
            <span
              class="block sm:text-4xl md:text-5xl lg:text-4xl xl:inline xl:text-5xl"
              >Штукатурная смесь</span
            >
            <br />
            <br />
            <span
              class="block text-cyan-900 md:text-5xl lg:text-4xl xl:inline xl:text-5xl"
              >"KNAUF ROTBAND"</span
            >
          </h1>
          <p
            class="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl"
          >
            Цвет - белый
          </p>
          <p
            class="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl"
          >
            Вес - 30 кг
          </p>
          <p
            class="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl"
          >
            Цена - 460 рублей <br />
          </p>
          <p
            class="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl"
          >
            Количество - уточняйте <br />
          </p>
          <p
            class="mx-auto mt-3 max-w-md text-lg font-semibold text-gray-500 sm:text-2xl md:mt-5 md:max-w-3xl"
          >
            8 (902) 303-36-54 (Эля)
          </p>
          <p
            class="mx-auto mt-3 max-w-md text-lg font-semibold text-gray-500 sm:text-2xl md:mt-5 md:max-w-3xl"
          >
            8 (930) 688-88-62 (Юля)
          </p>
        </div>
      </div>
      <div
        class="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2"
      >
        <img
          class="absolute inset-0 h-full w-full object-cover"
          src="https://www.astmnsk.ru/image/cache/data/band2-600x315.jpg"
          alt="работа у нас"
        />
      </div>
    </main>
  </div>

  <main>
    <div class="my-16 ml-8 text-center text-base">
      <div>
        <h2
          class="text-base font-semibold uppercase tracking-wide text-indigo-600"
        >
          Наши распродажи
        </h2>
        <h3
          class="mt-2 text-4xl font-extrabold leading-8 tracking-tight text-indigo-900 sm:text-5xl"
        >
          Топовые акции
        </h3>
      </div>
    </div>

    <Swiper_v2 {content_Swiper_v2} />

    <div>
      <!-- Hero card3 -->
      <!--			<div class="relative">-->
      <!--				<div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>-->
      <!--				<div class="max-w-full mx-auto sm:px-6 lg:px-8">-->
      <!--					<div class="relative shadow-xl sm:rounded-lg sm:overflow-hidden">-->
      <!--						<div class="absolute inset-0">-->
      <!--							<img class="h-full w-full object-cover" src="https://storage.yandexcloud.net/brand-logo/orbita/brand/mainfoto.jpeg" alt="Стройматериалы в Нижнем Новгороде">-->
      <!--							<div class="absolute inset-0 bg-slate-600 mix-blend-multiply"></div>-->
      <!--						</div>-->
      <!--						<div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">-->
      <!--							<h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">-->
      <!--								<span class="block text-white">Стройматериалы</span>-->
      <!--								<span class="block text-indigo-200">в Нижнем Новгороде</span>-->
      <!--							</h1>-->
      <!--							<p class="mt-6 p-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl bg-gray-800 bg-opacity-30">Если вы в поиске базы стройматериалов с низкими ценами и широким ассортиментом, то вы попали по адресу. Наша строительная база работает в Нижнем Новгороде через наш строительный интернет магазин и располагает широким выбором продукции.</p>-->
      <!--							<div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">-->
      <!--								<div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">-->
      <!--									<button on:click={ changeButtonVisibleCatalog } class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"> Каталог </button>-->
      <!--									<a href="/blog" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-800 bg-opacity-80 hover:bg-opacity-70 sm:px-8"> Наш блог </a>-->
      <!--								</div>-->
      <!--							</div>-->
      <!--						</div>-->
      <!--					</div>-->
      <!--				</div>-->
      <!--			</div>-->

      <!-- Logo cloud -->
      <!--			<div class="bg-gray-100">-->
      <!--				<div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">-->
      <!--					<p class="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">Trusted by over 5 very average small businesses</p>-->
      <!--					<div class="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">-->
      <!--						<div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">-->
      <!--							<img class="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple">-->
      <!--						</div>-->
      <!--						<div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">-->
      <!--							<img class="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage">-->
      <!--						</div>-->
      <!--						<div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">-->
      <!--							<img class="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit">-->
      <!--						</div>-->
      <!--						<div class="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">-->
      <!--							<img class="h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor">-->
      <!--						</div>-->
      <!--						<div class="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">-->
      <!--							<img class="h-12" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation">-->
      <!--						</div>-->
      <!--					</div>-->
      <!--				</div>-->
      <!--			</div>-->
    </div>

    <!-- More main page content here... -->
  </main>
</div>

<!--<div class="mt-24 max-w-7xl mx-auto px-6 lg:px-8">-->
<!--	<div class="lg:text-center">-->
<!--		<p class="text-base leading-6 text-red-800 font-semibold tracking-wide uppercase">спецпредложение</p>-->
<!--		<h2 class=" mt-2 text-4xl leading-12 font-extrabold tracking-tight text-gray-800 sm:text-5xl sm:leading-10">-->
<!--			Акции в этом месяце-->
<!--		</h2>-->
<!--		<p class="mt-4 max-w-5xl text-xl leading-7 text-gray-500 lg:mx-auto">-->
<!--			Акционное ограниченное предложение. Актуальное наличие уточняйте у наших менеджеров по рабочим телефонам нашего интернет магазина стройматериалов в Нижнем Новгороде.-->
<!--		</p>-->
<!--	</div>-->
<!--</div>-->

<!--<div class="bg-white">-->
<!--	<div class="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">-->
<!--		&lt;!&ndash; Product &ndash;&gt;-->
<!--		<div class="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">-->
<!--			&lt;!&ndash; Product image &ndash;&gt;-->
<!--			<div class="lg:row-end-1 lg:col-span-4">-->
<!--				<div class="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">-->
<!--					<img src="https://uralmegaprom.ru/image/cache/catalog/Strojka/Stroitelniesmesi/SHpatlevki/VETONIT/SHpaklevka-polimernaya-Weber.Vetonit-LR+-20kg-1200x800.png" alt="акция" class="object-center object-cover">-->
<!--&lt;!&ndash;					<img src="{pathAWS}{image[0].filename}" alt="action product" class="object-center object-cover">&ndash;&gt;-->
<!--				</div>-->
<!--			</div>-->

<!--			&lt;!&ndash; Product details &ndash;&gt;-->
<!--			<div class="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">-->
<!--				<div class="flex flex-col-reverse">-->
<!--					<div class="mt-4">-->
<!--						<h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{nameProduct}</h1>-->

<!--						<h2 id="information-heading" class="sr-only">Информация по акции</h2>-->
<!--						<p class="text-sm text-gray-500 mt-2">Акция действует с {mainAction[0].startDate} 2022 года</p>-->
<!--					</div>-->

<!--					<div>-->
<!--						<h3 class="sr-only">Reviews</h3>-->
<!--						<div class="flex items-center">-->
<!--							&lt;!&ndash;-->
<!--                              Heroicon name: solid/star-->

<!--                              Active: "text-yellow-400", Default: "text-gray-300"-->
<!--                            &ndash;&gt;-->
<!--							<svg class="text-red-500 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">-->
<!--								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />-->
<!--							</svg>-->

<!--							&lt;!&ndash; Heroicon name: solid/star &ndash;&gt;-->
<!--							<svg class="text-red-500 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">-->
<!--								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />-->
<!--							</svg>-->

<!--							&lt;!&ndash; Heroicon name: solid/star &ndash;&gt;-->
<!--							<svg class="text-red-500 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">-->
<!--								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />-->
<!--							</svg>-->

<!--							&lt;!&ndash; Heroicon name: solid/star &ndash;&gt;-->
<!--							<svg class="text-red-500 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">-->
<!--								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />-->
<!--							</svg>-->

<!--							&lt;!&ndash; Heroicon name: solid/star &ndash;&gt;-->
<!--							<svg class="text-gray-300 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">-->
<!--								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />-->
<!--							</svg>-->
<!--						</div>-->
<!--						<p class="sr-only">3 out of 5 stars</p>-->
<!--						<p class="text-base text-gray-500 mt-2">Наличие на складе</p>-->
<!--					</div>-->
<!--				</div>-->

<!--				<p class="text-gray-500 mt-6">{@html descriptionProduct}</p>-->

<!--				<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">-->
<!--					<div class="w-full bg-indigo-800 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">-->
<!--						Цена: {size[0].price.price} р/{unit}-->
<!--					</div>-->

<!--					{#if !(idProductsInCart).some(arrVal => id === arrVal)}-->
<!--						<button-->
<!--							on:click|once={sendToCart(id)}-->
<!--							type="button"-->
<!--							class="w-full bg-indigo-100 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 transition ease-in-out delay-100 hover:scale-110 duration-500">-->
<!--							В корзину-->
<!--						</button>-->
<!--					{:else }-->
<!--						<button-->
<!--							type="button"-->
<!--							class="w-full bg-red-700 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">-->
<!--							В корзине-->
<!--						</button>-->
<!--					{/if}-->
<!--				</div>-->

<!--				<div class="border-t border-gray-200 mt-10 pt-10">-->
<!--					<h3 class="text-sm font-medium text-gray-900">Характеристики:</h3>-->
<!--					<div class="mt-4 prose prose-sm text-gray-500">-->
<!--						<ul>-->
<!--							<li>Мешки по 20 кг</li>-->
<!--							<li>Сыпучий материал</li>-->
<!--						</ul>-->
<!--					</div>-->
<!--				</div>-->
<!--			</div>-->

<!--		</div>-->

<!--	</div>-->

<!--</div>-->
<!--<hr class="max-w-7xl mx-auto">-->

<div class="ml-8 mt-16 text-center text-base">
  <div>
    <h2 class="text-base font-semibold uppercase tracking-wide text-indigo-600">
      обратите внимание
    </h2>
    <h3
      class="mt-2 text-4xl font-extrabold leading-8 tracking-tight text-indigo-900 sm:text-5xl"
    >
      Сезонные товары
    </h3>
  </div>
</div>
<div class="mt-12 max-w-7xl mx-auto px-6 lg:px-8 ">
  <div class="lg:text-center">
    <p class="mt-4 max-w-7xl text-xl leading-7 text-gray-500 lg:mx-auto">
      Обратите внимание на наши топовые позиции с самыми привлекательными
      ценами, если вы хотите строительные материалы купить со скидкой. Наш
      строительный интеренет магазин предлагает комфортную ценовую политику для
      своих клиентов, поэтому это одна из лучших баз стройматериалов в Нижнем
      Новгороде.
    </p>
  </div>
</div>

<div class="bg-white">
  <div class="mx-auto max-w-full py-4 px-4 sm:py-6 sm:px-6 lg:px-8">
    <div
      class="mt-6 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12"
    >
      <div class="group relative ">
        <div
          class="min-h-80 aspect-w-1 aspect-h-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gradient-to-br from-indigo-800 to-indigo-700 shadow-lg shadow-indigo-900 group-hover:opacity-75 lg:h-80"
        >
          <img
            src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%84%D0%BB%D0%B8%D0%B7%D0%B5%D0%BD.webp"
            alt="клей для плитки"
            class="h-full w-full object-contain object-center lg:h-full lg:w-full"
          />
        </div>
        <div class="mt-5 flex justify-between">
          <div>
            <h3 class="text-base text-indigo-800">
              <a href="/shop/products/kley-dlya-plitki">
                <span aria-hidden="true" class="absolute inset-0" />
                Клей для плитки
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">
              Клей для плитки "кнауф" флизенклебер (25 кг)
            </p>
          </div>
          <p class="text-xl font-medium text-gray-900">465₽</p>
        </div>
      </div>

      <div class="group relative ">
        <div
          class="min-h-80 aspect-w-1 aspect-h-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gradient-to-br from-indigo-800 to-indigo-700 shadow-lg shadow-indigo-900 group-hover:opacity-75 lg:h-80"
        >
          <img
            src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-TG40.png"
            alt=""
            class="h-full w-full object-contain object-center lg:h-full lg:w-full"
          />
        </div>
        <div class="mt-5 flex justify-between">
          <div>
            <h3 class="text-base text-indigo-800">
              <a
                href="/shop/product/stukaturnaya-smes-ek-tt-30-fasadnaya-25-kg"
              >
                <span aria-hidden="true" class="absolute inset-0" />
                Штукатурка
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">
              Штукатурная смесь "ек" tg 40 (30 кг)
            </p>
          </div>
          <p class="text-xl font-medium text-gray-900">451₽</p>
        </div>
      </div>

      <div class="group relative ">
        <div
          class="min-h-80 aspect-w-1 aspect-h-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gradient-to-br from-indigo-800 to-indigo-700 shadow-lg shadow-indigo-900 group-hover:opacity-75 lg:h-80"
        >
          <img
            src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/38526.jpg"
            alt=""
            class="h-full w-full object-contain object-center lg:h-full lg:w-full"
          />
        </div>
        <div class="mt-5 flex justify-between">
          <div>
            <h3 class="text-base text-indigo-800">
              <a href="/shop/products/germetik">
                <span aria-hidden="true" class="absolute inset-0" />
                Герметик
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">
              Герметик санитарный белый "церезит" cs15
            </p>
          </div>
          <p class="text-xl font-medium text-gray-900">245₽</p>
        </div>
      </div>

      <div class="group relative ">
        <div
          class="min-h-80 aspect-w-1 aspect-h-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gradient-to-br from-indigo-800 to-indigo-700 shadow-lg shadow-indigo-900 group-hover:opacity-75 lg:h-80"
        >
          <img
            src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%B2%D0%B5%D1%82.jpg"
            alt=""
            class="h-full w-full object-contain object-center lg:h-full lg:w-full"
          />
        </div>
        <div class="mt-5 flex justify-between">
          <div>
            <h3 class="text-base text-indigo-800">
              <a href="/shop/products/shpaklevka">
                <span aria-hidden="true" class="absolute inset-0" />
                Шпаклевка
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">
              Шпаклевка финишная "ветонит lr+" (20 кг)
            </p>
          </div>
          <p class="text-xl font-medium text-gray-900">920₽</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="bg-gradient-to-b from-white to-gray-50">
  <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-16 lg:px-8 ">
    <div class="mt-12">
      <div
        class="bg-gradient-to-br from-indigo-500 via-sky-800 to-indigo-500 pt-12 sm:pt-16 rounded-lg"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-4xl font-extrabold text-slate-50">
              Стройматериалы в Нижнем Новгороде
            </h1>
            <p class="mt-3 text-xl text-slate-50 sm:mt-4">
              Предлагаем стройматериалы в Нижнем Новгороде и области с доставкой
              до объекта
            </p>
          </div>
        </div>
        <div class="mt-10 pb-12 sm:pb-16">
          <div class="relative">
            <!--						<div class="absolute inset-0 h-1/2 bg-gradient-to-r from-sky-500 via-sky-800 to-sky-500 pt-12 ro rounded-b-lg"></div>-->
            <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="max-w-4xl mx-auto">
                <dl
                  class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3"
                >
                  <div
                    class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r"
                  >
                    <dt
                      class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"
                    >
                      доставка
                    </dt>
                    <dd class="order-1 text-5xl font-extrabold text-sky-600">
                      100%
                    </dd>
                  </div>
                  <div
                    class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r"
                  >
                    <dt
                      class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"
                    >
                      на связи
                    </dt>
                    <dd class="order-1 text-5xl font-extrabold text-sky-600">
                      24/7
                    </dd>
                  </div>
                  <div
                    class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l"
                  >
                    <dt
                      class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"
                    >
                      товаров
                    </dt>
                    <dd class="order-1 text-5xl font-extrabold text-sky-600">
                      3000+
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <dl
      class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8"
    >
      {#each Benefits as { title, text, slug }}
        <div class="relative">
          <dt>
            <!-- Heroicon name: outline/check -->
            <svg
              aria-hidden="true"
              class="absolute h-6 w-6 text-sky-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 13l4 4L19 7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
            <a
              sveltekit:prefetch
              href="/rubric/{slug}"
              class="ml-9 text-lg leading-6 font-medium text-gray-900"
              >{title}</a
            >
          </dt>
          <dd class="mt-2 ml-9 text-base text-gray-500">{text}</dd>
        </div>
      {/each}
    </dl>
  </div>
</div>

<div class="bg-gray-800">
  <div
    class="mx-auto py-12 px-8 sm:px-6 lg:flex lg:items-center lg:py-16 lg:px-12"
  >
    <div class="text-center lg:w-0 lg:flex-auto">
      <h2
        id="newsletter-headline"
        class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
      >
        <span class="mb-6 block text-5xl text-indigo-200">"Орбита-Строй"</span>
        <span class="block text-white"
          >это база стройматериалов с выгодными ценами</span
        >
        <span class="block text-gray-100">в Нижнем Новгороде</span>
      </h2>
      <p class="mt-3 text-lg text-gray-300">
        Осуществляем оптовую и розничную продажу строительных и отделочных
        материалов со складов в Нижнем Новгороде и Дзержинске. Широкий
        ассортимент и доступные цены приятно вас удивят. При необходимости есть
        услуга доставки стройматериалов до вашего объекта.
      </p>
    </div>
  </div>
</div>

<div class="bg-white overflow-hidden">
  <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div class="hidden lg:block  absolute top-0 bottom-0 left-3/4 w-screen" />
    <div
      class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none"
    >
      <div>
        <h2
          class="text-base text-indigo-600 font-semibold tracking-wide uppercase"
        >
          Строительная база в Нижнем Новгороде
        </h2>
        <h3
          class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-indigo-900 sm:text-4xl"
        >
          Орбита-строй
        </h3>
      </div>
    </div>
    <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
      <div class="relative lg:row-start-1 lg:col-start-2">
        <svg
          class="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
          width="404"
          height="384"
          fill="none"
          viewBox="0 0 404 384"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="de316486-4a29-4312-bdfc-fbce2132a2c1"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="384"
            fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
          />
        </svg>
        <div class="relative text-base mx-auto max-w-prose lg:max-w-none">
          <figure>
            <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
              <img
                class="rounded-lg shadow-lg object-cover object-center"
                src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/pages/serv_4.jpg"
                alt="Стройматериалы в нижнем новгороде"
                width="1184"
                height="1376"
              />
            </div>
          </figure>
        </div>
      </div>
      <div class="mt-8 lg:mt-0">
        <div
          class="mt-1 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1"
        >
          <p>
            Приобрести стройматериалы в Нижнем Новгороде высокого качества по
            конкурентным ценам можно в течение нескольких минут. База
            строительных и отделочных материалов «Орбита-Строй» занимает площадь
            более, чем 1 км2 и предлагает продукцию от таких производителей,
            как:
          </p>
          <ul>
            <li>Tarkett;</li>
            <li>EK;</li>
            <li>Ceresit;</li>
            <li>Makroflex;</li>
          </ul>
          <p>
            Строительная база имеет удобный подъезд автотранспорта, развитую
            инфраструктуру и просторные выставочные павильоны. Строительные
            магазины в Нижнем Новгороде предоставляют услуги по погрузке при
            оптовой покупке на бесплатных условиях, также возможно вывезти
            стройматериалы с доставкой собственным автотранспортом компании.
          </p>
          <p>
            Строительный интернет-магазин подойдёт тем, кто ценит время и
            качество. Выбрать товар заблаговременно оплатить покупку
            стройматериалов в Нижнем Новгороде и заказать их доставку по
            указанному адресу – дело нескольких минут. Наша стройбаза идёт
            навстречу постоянным клиентам и предоставляет гибкие дисконтные
            скидки на строительные материалы ы Нижнем Новгороде.
          </p>
          <p>
            «Орбита-Строй» - строительный интернет магазин в Нижнем Новгороде
            для тех, кто уважает качество материалов и труд. «Орбита-Строй» -
            правильный выбор на пути к комфорту и надёжности.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
