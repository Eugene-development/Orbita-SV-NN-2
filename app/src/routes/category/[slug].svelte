<script context="module">
  import { pageTitle } from "../../stores.js";

  export const load = async ({ fetch, params, url }) => {
    const idRubric = url.searchParams.get("id");
    const slugRubric = params.slug;

    let res;
    res = await fetch(`/api/catalog/categoriesSLUG/${slugRubric}`);
    // if (idRubric) {
    //     res = await fetch(`/api/catalog/categoriesID/${idRubric}`)
    // } else {
    //     res = await fetch(`/api/catalog/categoriesSLUG/${slugRubric}`)
    // }

    const resJSON = await res.json();
    const data = resJSON.categories.data[0];
    const nameRubric = data.name;
    const category = data.category;

    const text = data.text;
    const title =
      "Стройматериалы" + " || " + nameRubric + " в Нижнем Новгороде";
    const description =
      nameRubric +
      " в Нижнем Новгороде и области. " +
      "Приобретайте " +
      nameRubric +
      " по низким ценам.";

    pageTitle.update(() => nameRubric);

    return {
      props: {
        title,
        description,
        nameRubric,
        category,
        text,
      },
    };
  };
</script>

<script>
  export let title;
  export let description;
  export let nameRubric;
  export let category;
  export let text;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

<div>
  <div
    class="p-10  mx-auto sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 via-white to-gray-50 shadow-md shadow-gray-200/50 mb-4"
  >
    <div class="flex flex-col text-center w-full">
      <h2 class=" text-4xl font-medium title-font text-indigo-900">
        {nameRubric} в Нижнем Новгороде
      </h2>
    </div>
  </div>

  <div class="  ">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="relative pt-4 pb-4 px-2 sm:px-6 lg:pt-4 lg:pb-8 lg:px-8">
      <div class="">
        <!--                <div class="pt-12 sm:pt-16 lg:pt-20">-->
        <!--                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">-->
        <!--                        <div class="text-center">-->
        <!--                            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">{ nameRubric }</h2>-->
        <!--                            {#if text}-->
        <!--                            <p class="mt-4 text-xl text-gray-600">{text.descriptionText}</p>-->
        <!--                                {:else }-->
        <!--                                <p class="mt-4 text-xl text-gray-600">Скидка пять проц</p>-->

        <!--                            {/if}-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <div class="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
          <div class="relative">
            <!--                        <div class="absolute inset-0 h-1/2 bg-gray-100"></div>-->
            <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {#each category as { id, name, slug, product, text }}
                <div
                  class="max-w-lg mx-auto mb-8 rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex "
                >
                  <div class="flex-1 bg-gray-50 px-6 py-8 lg:p-12">
                    <h3
                      class="text-3xl font-extrabold text-gray-900 sm:text-4xl"
                    >
                      {name}
                    </h3>
                    {#if text}
                      <p class="mt-6 text-base text-gray-500">
                        {text.descriptionText}
                      </p>
                    {:else}
                      <p class="mt-6 text-base text-gray-500">Цена снижена</p>
                    {/if}
                    <div class="mt-8">
                      <div class="flex items-center">
                        <h4
                          class="flex-shrink-0 pr-4 bg-gray-50 text-sm tracking-wider font-semibold uppercase text-red-700"
                        >
                          Общая информация
                        </h4>
                        <div class="flex-1 border-t-2 border-gray-200" />
                      </div>
                      <ul
                        class="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5"
                      >
                        <li class="flex items-start lg:col-span-1">
                          <div class="flex-shrink-0">
                            <!-- Heroicon name: solid/check-circle -->
                            <svg
                              class="h-5 w-5 text-red-700"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                          <p class="ml-3 text-sm text-gray-700">
                            Оптовикам скидки
                          </p>
                        </li>

                        <li class="flex items-start lg:col-span-1">
                          <div class="flex-shrink-0">
                            <!-- Heroicon name: solid/check-circle -->
                            <svg
                              class="h-5 w-5 text-red-700"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                          <p class="ml-3 text-sm text-gray-700">
                            Наличие на складе
                          </p>
                        </li>

                        <li class="flex items-start lg:col-span-1">
                          <div class="flex-shrink-0">
                            <!-- Heroicon name: solid/check-circle -->
                            <svg
                              class="h-5 w-5 text-red-700"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                          <p class="ml-3 text-sm text-gray-700">Доставка</p>
                        </li>

                        <li class="flex items-start lg:col-span-1">
                          <div class="flex-shrink-0">
                            <!-- Heroicon name: solid/check-circle -->
                            <svg
                              class="h-5 w-5 text-red-700"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                          <p class="ml-3 text-sm text-gray-700">Безнал</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="py-8 px-6 text-center bg-gray-100 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12  sm:border-t-2 lg:border-l-2"
                  >
                    <p class="text-lg leading-6 font-medium text-gray-900">
                      В этой товарной категории
                    </p>
                    <div
                      class="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900"
                    >
                      {#if product.length < 10}
                        <span> 0{product.length} </span>
                      {:else}
                        <span> {product.length} </span>
                      {/if}
                      <span class="ml-3 text-xl font-medium text-gray-500">
                        поз.
                      </span>
                    </div>
                    <p class="mt-4 text-sm">
                      <a
                        sveltekit:prefetch
                        href="/products/{slug}"
                        class="font-medium text-gray-500 underline"
                      >
                        Выберите нужную позицию
                      </a>
                    </p>
                    <div class="mt-6">
                      <div class="rounded-md shadow">
                        <a
                          sveltekit:prefetch
                          href="/products/{slug}"
                          class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-tr hover:bg-gradient-to-bl from-indigo-500 via-indigo-900 to-indigo-700"
                        >
                          Выбрать
                        </a>
                      </div>
                    </div>
                    <div class="mt-4 text-sm">
                      <a href="/shop/cart" class="font-medium text-gray-900">
                        Перейти в корзину
                      </a>
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>

      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="py-1 relative ">
        <!--            <div class="py-1 relative shadow-lg shadow-slate-100/50 rounded-lg border-2 border-slate-100 ring-offset-1 ring-1 ring-slate-50">-->
        <!--          <div class="py-1 relative bg-gradient-to-b from-slate-50 via-slate-800 to-slate-50 shadow-lg rounded-lg">-->

        <div class="max-w-full mx-auto py-3 px-3 sm:px-6 lg:px-8">
          {#if text}
            <div class="text-center px-8">
              <p class="font-medium text-slate-800 text-lg">
                <span>{text.descriptionText}</span>
              </p>
            </div>
          {:else}
            <div class="text-center px-8">
              <p class="font-medium text-slate-800 text-xl">
                <span>При заказе через сайт для вас скидка 5%</span>
              </p>
            </div>
          {/if}
        </div>
      </div>

      <!--            <div class="relative max-w-7xl mx-auto">-->
      <!--                &lt;!&ndash;          <div class="text-center">&ndash;&gt;-->
      <!--                &lt;!&ndash;            <h2 class="text-3xl tracking-tight font-extrabold text-slate-900 sm:text-4xl">&ndash;&gt;-->
      <!--                &lt;!&ndash;              {{ rubric.name }}&ndash;&gt;-->
      <!--                &lt;!&ndash;            </h2>&ndash;&gt;-->
      <!--                &lt;!&ndash;            <p class="mt-3 max-w-2xl mx-auto text-xl text-slate-500 sm:mt-4">&ndash;&gt;-->
      <!--                &lt;!&ndash;              Наша компания предлагает стройматериалы по самым низким ценам&ndash;&gt;-->
      <!--                &lt;!&ndash;            </p>&ndash;&gt;-->
      <!--                &lt;!&ndash;          </div>&ndash;&gt;-->
      <!--                &lt;!&ndash;          <hr class="mt-8">&ndash;&gt;-->
      <!--                <div class="mt-8 max-w-lg mx-auto lg:max-w-none">-->
      <!--                    &lt;!&ndash;                <div class="mt-8 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">&ndash;&gt;-->

      <!--                    {#each category as {id, name, slug, product, text}}-->

      <!--                        &lt;!&ndash; This example requires Tailwind CSS v2.0+ &ndash;&gt;-->

      <!--                        <div class=" flex flex-col border-b-2">-->
      <!--                            &lt;!&ndash;                    <div class=" flex flex-col rounded-lg shadow-lg shadow-slate-100/50 overflow-hidden border-2 border-slate-50 ring-offset-1 ring-1 ring-slate-50">&ndash;&gt;-->
      <!--                            &lt;!&ndash;            <div class="flex-shrink-0">&ndash;&gt;-->
      <!--                            &lt;!&ndash;              <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=IrF17Golbw&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="">&ndash;&gt;-->
      <!--                            &lt;!&ndash;            </div>&ndash;&gt;-->
      <!--                            <div class="flex-1 p-6 flex flex-col justify-between">-->
      <!--                                <div class="flex-1">-->
      <!--                                    <a sveltekit:prefetch sveltekit:noscroll href='/products/{slug}'>-->
      <!--                                        <h2 class="text-2xl md:text-3xl font-semibold text-slate-800">-->
      <!--                                            { name }-->
      <!--                                        </h2>-->
      <!--                                        {#if (text)}-->
      <!--                                            <p class="mt-3 text-base text-slate-800">-->
      <!--                                                { text.descriptionText }-->
      <!--                                            </p>-->
      <!--                                        {:else }-->
      <!--                                            <p class="mt-3 text-base text-slate-800">Уточняйте наличие</p>-->
      <!--                                        {/if}-->
      <!--                                        <p class="mt-2 text-lg font-medium text-red-600 place-items-end">Выбрать товар-->
      <!--                                            &rarr;</p>-->
      <!--                                    </a>-->
      <!--                                </div>-->
      <!--                                &lt;!&ndash;              <div class="mt-6 flex items-center">&ndash;&gt;-->
      <!--                                &lt;!&ndash;                <div class="flex-shrink-0">&ndash;&gt;-->
      <!--                                &lt;!&ndash;                  <a href="#">&ndash;&gt;-->
      <!--                                &lt;!&ndash;                    <span class="sr-only">Roel Aufderehar</span>&ndash;&gt;-->
      <!--                                &lt;!&ndash;                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=IrF17Golbw&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">&ndash;&gt;-->
      <!--                                &lt;!&ndash;                  </a>&ndash;&gt;-->
      <!--                                &lt;!&ndash;                </div>&ndash;&gt;-->
      <!--                                &lt;!&ndash;                <div class="ml-3">&ndash;&gt;-->
      <!--                                &lt;!&ndash;                  <p class="text-sm font-medium text-slate-900">&ndash;&gt;-->
      <!--                                &lt;!&ndash;                    <a href="#" class="hover:underline">&ndash;&gt;-->
      <!--                                &lt;!&ndash;                      Roel Aufderehar&ndash;&gt;-->
      <!--                                &lt;!&ndash;                    </a>&ndash;&gt;-->
      <!--                                &lt;!&ndash;                  </p>&ndash;&gt;-->
      <!--                                &lt;!&ndash;                  <div class="flex space-x-1 text-sm text-slate-500">&ndash;&gt;-->
      <!--                                &lt;!&ndash;                    <time datetime="2020-03-16">&ndash;&gt;-->
      <!--                                &lt;!&ndash;                      Mar 16, 2020&ndash;&gt;-->
      <!--                                &lt;!&ndash;                    </time>&ndash;&gt;-->
      <!--                                &lt;!&ndash;                    <span aria-hidden="true">&ndash;&gt;-->
      <!--                                &lt;!&ndash;                  &middot;&ndash;&gt;-->
      <!--                                &lt;!&ndash;                </span>&ndash;&gt;-->
      <!--                                &lt;!&ndash;                    <span>&ndash;&gt;-->
      <!--                                &lt;!&ndash;                  6 min read&ndash;&gt;-->
      <!--                                &lt;!&ndash;                </span>&ndash;&gt;-->
      <!--                                &lt;!&ndash;                  </div>&ndash;&gt;-->
      <!--                                &lt;!&ndash;                </div>&ndash;&gt;-->
      <!--                                &lt;!&ndash;              </div>&ndash;&gt;-->
      <!--                            </div>-->
      <!--                        </div>-->

      <!--                    {/each}-->
      <!--                </div>-->
      <!--            </div>-->
    </div>
  </div>
</div>

<div class="relative my-8 py-8 bg-white overflow-hidden">
  <!--    <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">-->
  <!--        <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">-->
  <!--            <svg class="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">-->
  <!--                <defs>-->
  <!--                    <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">-->
  <!--                        <rect x="0" y="0" width="4" height="4" class="text-slate-200" fill="currentColor" />-->
  <!--                    </pattern>-->
  <!--                </defs>-->
  <!--                <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />-->
  <!--            </svg>-->
  <!--            <svg class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">-->
  <!--                <defs>-->
  <!--                    <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">-->
  <!--                        <rect x="0" y="0" width="4" height="4" class="text-slate-200" fill="currentColor" />-->
  <!--                    </pattern>-->
  <!--                </defs>-->
  <!--                <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />-->
  <!--            </svg>-->
  <!--            &lt;!&ndash;        <svg class="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">&ndash;&gt;-->
  <!--            &lt;!&ndash;          <defs>&ndash;&gt;-->
  <!--            &lt;!&ndash;            <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">&ndash;&gt;-->
  <!--            &lt;!&ndash;              <rect x="0" y="0" width="4" height="4" class="text-slate-200" fill="currentColor" />&ndash;&gt;-->
  <!--            &lt;!&ndash;            </pattern>&ndash;&gt;-->
  <!--            &lt;!&ndash;          </defs>&ndash;&gt;-->
  <!--            &lt;!&ndash;          <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />&ndash;&gt;-->
  <!--            &lt;!&ndash;        </svg>&ndash;&gt;-->
  <!--        </div>-->
  <!--    </div>-->

  <!--    <div v-if="rubric.text" class="relative px-4 sm:px-6 lg:px-8">-->
  <!--        <div class="max-w-prose mx-auto">-->
  <!--            <h1>-->
  <!--                <span class="mt-2 block text-2xl text-center leading-8 font-extrabold tracking-tight text-slate-800 sm:text-3xl" v-html="rubric.text.titleText"></span>-->
  <!--            </h1>-->
  <!--            <p class="mt-8 text-xl text-slate-500 leading-8"  v-html="rubric.text.text"></p>-->
  <!--        </div>-->
  <!--        <div class="mt-6 prose prose-indigo prose-lg text-slate-500 mx-auto">-->
  <!--            &lt;!&ndash;        <h3>Ждём вас!!!</h3>&ndash;&gt;-->
  <!--            <figure>-->
  <!--                &lt;!&ndash;          <img class="w-full rounded-lg" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3" alt="" width="1310" height="873">&ndash;&gt;-->
  <!--            </figure>-->
  <!--            &lt;!&ndash;        <p>Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>. Amet, massa quam varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum convallis quam.</p>&ndash;&gt;-->
  <!--            &lt;!&ndash;        <p>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.</p>&ndash;&gt;-->
  <!--        </div>-->
  <!--    </div>-->
</div>
