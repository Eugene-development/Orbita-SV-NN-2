<script context="module">
    export const load = async ({fetch, params, url}) => {
        const idRubric = url.searchParams.get('id');
        const slugRubric = params.slug;

        let res;
        if (idRubric) {
            res = await fetch(`/api/catalog/categoriesID/${idRubric}`)
        } else {
            res = await fetch(`/api/catalog/categoriesSLUG/${slugRubric}`)
        }

        const resJSON = await res.json();
        const data = resJSON.categories.data[0]
        const nameRubric = data.name
        const category = data.category
        const text = data.text
        const title = 'Стройматериалы' + ' || ' + nameRubric + ' в Нижнем Новгороде'
        const description = nameRubric + ' в Нижнем Новгороде и области. '
        return {
            props: {
                title,
                description,
                nameRubric,
                category,
                text
            }
        }
    }
</script>

<script>
    export let title
    export let description
    export let nameRubric
    export let category
    export let text
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{description}">
</svelte:head>


<div >
    <div class="p-10 mx-auto sm:px-6 lg:px-8 bg-gradient-to-b from-white via-indigo-50 to-white shadow-lg shadow-indigo-200/50 mb-4">
        <div class="flex flex-col text-center w-full">
            <h1 class=" text-5xl font-medium title-font text-slate-900">{ nameRubric } в Нижнем Новгороде</h1>
        </div>
    </div>

    <div class="mx-4 flex  ">
        <div class="flex w-1/3 max-w-sm flex-col flex-grow border-r border-slate-200 pt-8 pb-4 overflow-y-auto hidden xl:block">
            <div class="mb-6 flex items-center flex-shrink-0 px-4">
                <!--          <svg class="text-slate-500 mr-3 h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"-->
                <!--               xmlns="http://www.w3.org/2000/svg">-->
                <!--            <path-->
                <!--              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"-->
                <!--              stroke-linecap="round" stroke-linejoin="round"-->
                <!--              stroke-width="2"/>-->
                <!--          </svg>-->
                <div class="text-slate-800 text-2xl">
                    <strong>{ nameRubric }:</strong>
                </div>
            </div>

            <hr>
            <div class="mt-5 flex-grow flex flex-col">
                <nav aria-label="Sidebar" class="flex-1 px-2 space-y-1">
                    <!-- Current: "bg-slate-100 text-slate-900", Default: "text-slate-600 hover:bg-slate-50 hover:text-slate-900" -->

                    {#each category as {id, slug, name, product}}
                    <a sveltekit:prefetch sveltekit:noscroll href='/products/{slug}/?id={id}'
                              class="text-slate-800 hover:bg-slate-100 hover:text-slate-900 hover:shadow-md hover:shadow-indigo-100/50 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                        <!-- Heroicon name: outline/folder -->
                        <!--                <svg aria-hidden="true" class="text-slate-400 group-hover:text-slate-500 mr-3 h-6 w-6"-->
                        <!--                     fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">-->
                        <!--                  <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"-->
                        <!--                        stroke-linecap="round"-->
                        <!--                        stroke-linejoin="round"-->
                        <!--                        stroke-width="2"/>-->
                        <!--                </svg>-->

                        { name }

                        <span class="bg-slate-100 group-hover:bg-slate-200 ml-auto inline-block py-0.5 px-2 text-xs font-medium rounded-full">
                          { product.length }
                        </span>
                    </a>
                    {/each}
                </nav>
            </div>
        </div>

        <!-- This example requires Tailwind CSS v2.0+ -->
        <div class="relative pt-4 pb-4 px-4 sm:px-6 lg:pt-4 lg:pb-8 lg:px-8">



            <!-- This example requires Tailwind CSS v2.0+ -->
            <div class="py-1 bg-slate-50 relative shadow-lg shadow-indigo-100/50 rounded-lg border-2 border-indigo-50 ring-offset-1 ring-1 ring-indigo-50">
                <!--          <div class="py-1 relative bg-gradient-to-b from-slate-50 via-slate-800 to-slate-50 shadow-lg rounded-lg">-->
                <div class="max-w-full mx-auto py-3 px-3 sm:px-6 lg:px-8">
                    {#if text}
                    <div class="text-center px-8">
                        <p class="font-medium text-slate-800 text-xl">
                            <span>{text.descriptionText}</span>
                        </p>
                    </div>
                    {:else }
                        <div class="text-center px-8">
                            <p class="font-medium text-slate-800 text-xl">
                                <span>При заказе через сайт для вас скидка 5%</span>
                            </p>
                        </div>
                    {/if}
                </div>
            </div>


            <div  class="relative max-w-7xl mx-auto">
                <!--          <div class="text-center">-->
                <!--            <h2 class="text-3xl tracking-tight font-extrabold text-slate-900 sm:text-4xl">-->
                <!--              {{ rubric.name }}-->
                <!--            </h2>-->
                <!--            <p class="mt-3 max-w-2xl mx-auto text-xl text-slate-500 sm:mt-4">-->
                <!--              Наша компания предлагает стройматериалы по самым низким ценам-->
                <!--            </p>-->
                <!--          </div>-->
                <!--          <hr class="mt-8">-->
                <div class="mt-8 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">

                    {#each category as {id, name, slug, text}}
                    <div class=" flex flex-col rounded-lg shadow-lg shadow-indigo-100/50 overflow-hidden border-2 border-indigo-50 ring-offset-1 ring-1 ring-indigo-50">
                        <!--            <div class="flex-shrink-0">-->
                        <!--              <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=IrF17Golbw&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="">-->
                        <!--            </div>-->
                        <div class="flex-1 bg-slate-50 p-6 flex flex-col justify-between">
                            <div class="flex-1">
                                <a sveltekit:prefetch sveltekit:noscroll href='/products/{slug}/?id={id}'>
                                    <p class="text-2xl font-semibold text-slate-800">
                                        { name }
                                    </p>
                                    {#if (text)}
                                    <p class="mt-3 text-base text-slate-800">
                                        { text.descriptionText }
                                    </p>
                                    {:else }
                                    <p class="mt-3 text-base text-slate-50">Уточняйте наличие</p>
                                    {/if}
                                    <p class="mt-2 text-base font-medium text-red-600 place-items-end">Выбрать &rarr;</p>
                                </a>
                            </div>
                            <!--              <div class="mt-6 flex items-center">-->
                            <!--                <div class="flex-shrink-0">-->
                            <!--                  <a href="#">-->
                            <!--                    <span class="sr-only">Roel Aufderehar</span>-->
                            <!--                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=IrF17Golbw&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">-->
                            <!--                  </a>-->
                            <!--                </div>-->
                            <!--                <div class="ml-3">-->
                            <!--                  <p class="text-sm font-medium text-slate-900">-->
                            <!--                    <a href="#" class="hover:underline">-->
                            <!--                      Roel Aufderehar-->
                            <!--                    </a>-->
                            <!--                  </p>-->
                            <!--                  <div class="flex space-x-1 text-sm text-slate-500">-->
                            <!--                    <time datetime="2020-03-16">-->
                            <!--                      Mar 16, 2020-->
                            <!--                    </time>-->
                            <!--                    <span aria-hidden="true">-->
                            <!--                  &middot;-->
                            <!--                </span>-->
                            <!--                    <span>-->
                            <!--                  6 min read-->
                            <!--                </span>-->
                            <!--                  </div>-->
                            <!--                </div>-->
                            <!--              </div>-->
                        </div>
                    </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>

<div class="relative my-8 py-8 bg-white overflow-hidden">
    <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
            <svg class="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
                <defs>
                    <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="4" height="4" class="text-slate-200" fill="currentColor" />
                    </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
            </svg>
            <svg class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
                <defs>
                    <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="4" height="4" class="text-slate-200" fill="currentColor" />
                    </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
            <!--        <svg class="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">-->
            <!--          <defs>-->
            <!--            <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">-->
            <!--              <rect x="0" y="0" width="4" height="4" class="text-slate-200" fill="currentColor" />-->
            <!--            </pattern>-->
            <!--          </defs>-->
            <!--          <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />-->
            <!--        </svg>-->
        </div>
    </div>

    <div v-if="rubric.text" class="relative px-4 sm:px-6 lg:px-8">
        <div class="max-w-prose mx-auto">
            <h1>
                <span class="mt-2 block text-2xl text-center leading-8 font-extrabold tracking-tight text-slate-800 sm:text-3xl" v-html="rubric.text.titleText"></span>
            </h1>
            <p class="mt-8 text-xl text-slate-500 leading-8"  v-html="rubric.text.text"></p>
        </div>
        <div class="mt-6 prose prose-indigo prose-lg text-slate-500 mx-auto">
            <!--        <h3>Ждём вас!!!</h3>-->
            <figure>
                <!--          <img class="w-full rounded-lg" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3" alt="" width="1310" height="873">-->
            </figure>
            <!--        <p>Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>. Amet, massa quam varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum convallis quam.</p>-->
            <!--        <p>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.</p>-->
        </div>
    </div>
</div>
