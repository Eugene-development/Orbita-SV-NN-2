<script>
    // import {useActions} from "$lib/use/content/actions";
    import {pageTitle} from "../../../stores.js";
    // const {actions} = useActions
    pageTitle.update(() => 'Наши акции');


    export let actions
</script>

<svelte:head>
    <title>Акции</title>
    <meta name="description" content="Акции от компании 'Орбита строй'">
</svelte:head>


<div>
    <!--        <div class="mt-20 max-w-7xl mx-auto sm:px-6 lg:px-8">-->
    <!--            <div class="text-center">-->
    <!--                <p class="text-base leading-6 text-teal-800 font-semibold tracking-wide uppercase"></p>-->
    <!--                <h2 class=" mt-2 text-6xl leading-12 font-extrabold tracking-tight text-gray-800 sm:text-5xl sm:leading-10">-->
    <!--                    Наши акции-->
    <!--                </h2>-->
    <!--                <p class="mt-4 max-w-7xl text-xl leading-7 text-gray-500 lg:mx-auto">-->
    <!--                    Подробности по телефону-->
    <!--                </p>-->
    <!--                <div class="">-->
    <!--                    &lt;!&ndash;          <svg aria-hidden="true" class="h-12 w-12" fill="none" stroke="currentColor"&ndash;&gt;-->
    <!--                    &lt;!&ndash;               viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">&ndash;&gt;-->
    <!--                    &lt;!&ndash;            <path&ndash;&gt;-->
    <!--                    &lt;!&ndash;              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"&ndash;&gt;-->
    <!--                    &lt;!&ndash;              stroke-linecap="round" stroke-linejoin="round"&ndash;&gt;-->
    <!--                    &lt;!&ndash;              stroke-width="2"/>&ndash;&gt;-->
    <!--                    &lt;!&ndash;          </svg>&ndash;&gt;-->
    <!--                    <p class="m-4 text-4xl font-bold text-red-900 animate-pulse">-->
    <!--                        8 (800) 555-8-111 (звонок бесплатный)-->
    <!--                    </p>-->
    <!--                </div>-->

    <!--            </div>-->
    <!--        </div>-->





    {#each actions as {action, price, description, link}}
        <div class="py-8 sm:py-12">
            <div class="relative sm:py-16">
                <div aria-hidden="true" class="hidden sm:block">
                    <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl"></div>
                    <svg class="absolute top-8 left-1/2 -ml-3" width="404" height="392" fill="none" viewBox="0 0 404 392">
                        <defs>
                            <pattern id="8228f071-bcee-4ec8-905a-2a059a2cc4fb" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="392" fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
                    </svg>
                </div>
                <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                    <div class="relative rounded-2xl px-6 py-10 bg-indigo-700 overflow-hidden shadow-xl sm:px-12 sm:py-20">
                        <div aria-hidden="true" class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
                            <svg class="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1463 360">
                                <path class="text-indigo-600 text-opacity-40" fill="currentColor" d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z" />
                                <path class="text-indigo-800 text-opacity-40" fill="currentColor" d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z" />
                            </svg>
                        </div>
                        <div class="relative">
                            <a href="{link}" class="sm:text-center">
                                <h2 class="text-2xl font-extrabold text-white tracking-tight md:text-5xl">
                                    {action}
                                    <br>
                                    <span class="text-3xl">{price}</span>
                                </h2>
                                <p class="mt-6 mx-auto max-w-2xl text-lg text-indigo-50">
                                    {description}
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {:else}
        <div class="py-8 sm:py-12">
            <div class="relative sm:py-16">
                <div aria-hidden="true" class="hidden sm:block">
                    <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl"></div>
                    <svg class="absolute top-8 left-1/2 -ml-3" width="404" height="392" fill="none" viewBox="0 0 404 392">
                        <defs>
                            <pattern id="8228f071-bcee-4ec8-905a-2a059a2cc4fb" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="392" fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
                    </svg>
                </div>
                <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                    <div class="relative rounded-2xl px-6 py-10 bg-indigo-700 overflow-hidden shadow-xl sm:px-12 sm:py-20">
                        <div aria-hidden="true" class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
                            <svg class="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1463 360">
                                <path class="text-indigo-600 text-opacity-40" fill="currentColor" d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z" />
                                <path class="text-indigo-800 text-opacity-40" fill="currentColor" d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z" />
                            </svg>
                        </div>
                        <div class="relative">
                            <div class="sm:text-center">
                                <h2 class="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                                    Акций на данный момент нет
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/each}



</div>
