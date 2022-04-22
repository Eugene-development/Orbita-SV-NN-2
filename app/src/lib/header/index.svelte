<script>
    const l = console.log;

    import {clickOutside} from "$lib/use/functions/click_outside/index.js";

    import MobileMenu from "./mobile/index.svelte";
    import { useHead } from "$lib/use/content/header";
    import { useVisible } from "$lib/use/functions/visible";
    import {informationMenu, lengthCart, mobileMenu, formSearch, allProd} from "../../stores.js";
    import { onMount } from "svelte";
    import { browser } from "$app/env";

    const { head, information } = useHead;
    const { left: leftInfo, right: rightInfo } = information[0];

    const { invert, invertToFalse } = useVisible;

    const changeVisibleInformationMenu = () => {
        informationMenu.update(invert);
    };
    const closeVisibleInformationMenu = () => {
        informationMenu.update(invertToFalse);
    };
    let visibleInformationMenu;
    informationMenu.subscribe(value => visibleInformationMenu = value);

    let countLengthCart;
    onMount(async () => {
        if (browser && localStorage.getItem("inCart") !== null) {
            countLengthCart = JSON.parse(browser && localStorage.getItem("inCart")).length;
        }
    });
    lengthCart.subscribe(value => countLengthCart = value)

    const changeVisibleMobileMenu = () => mobileMenu.update(invert);
    let visibleMobileMenu;
    mobileMenu.subscribe(value => visibleMobileMenu = value);


    import Search from "$lib/components/forms/search/index.svelte";
    import axios from "axios";

    const changeVisibleFormSearch = () => formSearch.update( invert )
    let visibleFormSearch;
    formSearch.subscribe( value => visibleFormSearch = value );



    import pkg from 'lodash';
    const { filter } = pkg;
    const allProducts = []
    const getAllProducts = async () => {

        const headers = {
            Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
        };
        const domain = import.meta.env.VITE_API_CRUD;
        const pathAWS = import.meta.env.VITE_IMAGE_PRODUCTS

        const urlProducts = `${domain}/get-all-product/`;
        const allProducts = await axios(urlProducts, { headers });
        // let result = allProducts.match(/Java(Script)/g);
        // let result = filter(allProducts.data.data, ['name', /'УТЕПЛИТЕЛЬ'/])

        // const filterItems = (arr, query) => {
        //     return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
        // }
        // const query = 'УТЕПЛИТЕЛЬ'
        // const result = filterItems(allProducts.data.data, query)

        // const text = 'УТЕП'
        // const search = allProducts.data.data.filter(({name}) => name.includes(text));
        // console.log(search)

        // const search = ( query ) => allProducts.data.data.filter(({ name }) => name.toLowerCase().includes( query ));
        // const query = 'УТЕП'.toLowerCase();
        // const result = search( query );
        // console.log(result);



        // const result = filterItems(allProducts.data.data.name, 'УТЕПЛИТЕЛЬ')
        // console.log(result)



        allProd.update(() => allProducts.data.data )

        // let test;
        // allProd.subscribe( value => test = value );
        //
        // console.log(test)
    };


</script>


<header>
    <!-- This example requires Tailwind CSS v2.0+ -->
<!--    <div class="relative bg-gradient-to-tr from-indigo-500 via-indigo-600 to-indigo-500">-->
<!--        <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">-->
<!--            <div class="pr-16 sm:text-left">-->
<!--                <div class="font-medium text-white text-sm">-->
<!--                    <span class="md:hidden"><strong>8 (800) 555-8-111</strong> (звонок бесплатный)<br> 8 (930) 688-88-62<br> 8 (902) 303-36-54</span>-->
<!--                    <span class="hidden md:inline"><strong>8 (800) 555-8-111</strong> (звонок бесплатный) - 8 (930) 688-88-62 - 8 (902) 303-36-54</span>-->
<!--                    <span class="block sm:ml-5 sm:inline-block">почта: <strong>info@orbita-stroy.com</strong></span>-->
<!--&lt;!&ndash;                    <span class="block sm:ml-5 sm:inline-block">режим: Пн-Пт 8:00-17:30; Сб 9:00-16:00</span>&ndash;&gt;-->

<!--                        <button class="ml-8 inline-flex items-center justify-center px-4 py-1 border border-transparent rounded-md text-base font-medium text-white bg-slate-50 hover:bg-indigo-800 shadow-lg shadow-indigo-700/50" href="/shop/cart" >-->
<!--                            <svg class="mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"-->
<!--                                 xmlns="http://www.w3.org/2000/svg">-->
<!--                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" stroke-linecap="round" stroke-linejoin="round"-->
<!--                                      stroke-width="2" />-->
<!--                            </svg>-->
<!--                            Корзина-->
<!--                        </button>-->

<!--                </div>-->



<!--            </div>-->
<!--        </div>-->
<!--    </div>-->

    <!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
    <nav class="bg-indigo-900">
        <div class="max-w-7xl mx-auto px-2 sm:px-10 hidden lg:block">
            <div class="relative flex items-center justify-between h-12">


                <div class="flex items-center px-1 lg:px-0">
                    <div class=" ">
                        <div class="flex space-x-2">
                            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                            </svg>
                            <p class="text-gray-300 pr-3 rounded-md text-base font-medium">8 (800) 555-8-111</p>

                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                            </svg>
                            <p class="text-gray-300 pr-3 rounded-md text-base font-medium">8 (930) 688-88-62</p>

                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                            </svg>
                            <p class="text-gray-300 pr-3 rounded-md text-base font-medium">8 (902) 303-36-54</p>
                        </div>
                    </div>
                </div>
<!--                <div class="flex-1 flex justify-center px-2 lg:ml-6 ">-->
<!--                    <div class="max-w-lg w-full lg:max-w-xs">-->
<!--                        <label for="search" class="sr-only">Поиск</label>-->
<!--                        <button id="search" class="ml-8 inline-flex items-center px-12 py-1 border border-transparent rounded-md text-base font-medium text-slate-800 bg-slate-100 hover:bg-slate-800 shadow-lg shadow-slate-700/50">-->
<!--                            <svg aria-hidden="true" class="h-5 w-5 text-gray-400 mr-4" fill="currentColor"-->
<!--                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">-->
<!--                                <path clip-rule="evenodd"-->
<!--                                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"-->
<!--                                      fill-rule="evenodd"/>-->
<!--                            </svg>-->
<!--                            Поиск-->
<!--                        </button>-->
<!--                    </div>-->
<!--                </div>-->




                <div class="hidden lg:block lg:ml-4">
                    <div class="flex items-center">
                        <div class="flex items-center md:ml-12 mr-8">
                            <button on:click={ changeVisibleFormSearch } on:click={ getAllProducts } class=" inline-flex items-center justify-center pl-2 pr-12  py-0.5 border border-transparent rounded-md text-base font-medium text-gray-500 bg-slate-100 hover:bg-slate-200  " >
                                    <svg aria-hidden="true" class="h-5 w-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" fill-rule="evenodd"/>
                                    </svg>
                                Поиск товара
                            </button>
                        </div>

                        <button type="button" class="flex-shrink-0 bg-red-400 p-1 rounded-full text-gray-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span class="sr-only">View notifications</span>
                            <!-- Heroicon name: outline/bell -->
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>

                        <!-- Profile dropdown -->
                        <div class="ml-4 relative flex-shrink-0">
<!--                            <div>-->
<!--                                <button type="button" class="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">-->
<!--                                    <span class="sr-only">Open user menu</span>-->
<!--                                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">-->
<!--                                </button>-->
<!--                            </div>-->

                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                            </svg>

                            <!--
                              Dropdown menu, show/hide based on menu state.

                              Entering: "transition ease-out duration-100"
                                From: "transform opacity-0 scale-95"
                                To: "transform opacity-100 scale-100"
                              Leaving: "transition ease-in duration-75"
                                From: "transform opacity-100 scale-100"
                                To: "transform opacity-0 scale-95"
                            -->
<!--                            <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">-->
<!--                                &lt;!&ndash; Active: "bg-gray-100", Not Active: "" &ndash;&gt;-->
<!--                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>-->
<!--                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>-->
<!--                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>-->
<!--                            </div>-->
                        </div>
                    </div>
                </div>
            </div>

        </div>


        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="lg:hidden" id="mobile-menu">
            <div class="pt-4 pb-3 border-t border-gray-700">
                <div class="flex items-center px-5">
                    <!--                    <div class="flex-shrink-0">-->
                    <!--                        <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">-->
                    <!--                    </div>-->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                    </svg>

                    <div class="flex items-center mx-auto">
                        <button on:click={ changeVisibleFormSearch } on:click={ getAllProducts } class=" inline-flex items-center justify-center pl-2 pr-12  py-0.5 border border-transparent rounded-md text-base font-medium text-gray-500 bg-slate-100 hover:bg-slate-200  " >


                            <svg aria-hidden="true" class="h-5 w-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" fill-rule="evenodd"/>
                            </svg>
                            Поиск товара
                        </button>
                    </div>


                    <!--                    <div class="ml-3">-->
                    <!--                        <div class="text-base font-medium text-white">Tom Cook</div>-->
                    <!--                        <div class="text-sm font-medium text-gray-400">tom@example.com</div>-->
                    <!--                    </div>-->
                    <button type="button" class="flex-shrink-0 bg-red-400 p-1 rounded-full text-slate-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span class="sr-only">View notifications</span>
                        <!-- Heroicon name: outline/bell -->
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </button>
                </div>
                <!--                <div class="mt-3 px-2 space-y-1">-->
                <!--                    <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your Profile</a>-->
                <!--                    <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Settings</a>-->
                <!--                    <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</a>-->
                <!--                </div>-->
            </div>

            <div class="px-1 sm:px-4 md:px-8 pt-2 pb-3 space-y-1 ">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <div class="mx-auto flex justify-between items-center">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                    <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                        </svg>
                        <a href="tel:+78005558111" type="" class="text-gray-300 pl-1 rounded-md text-xs sm:text-base md:text-lg font-medium">8 800-555-8-111</a>
                    </div>

                    <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="hidden sm:block h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                        </svg>
                        <a href="tel:+79306888862" class="text-gray-300 pl-1 rounded-md text-xs sm:text-base md:text-lg font-medium">8 930-688-88-62</a>
                    </div>

                    <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="hidden sm:block h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                        </svg>
                        <a href="tel:+79023033654" class="text-gray-300 pl-1 rounded-md text-xs sm:text-base md:text-lg font-medium">8 902-303-36-54</a>
                    </div>
                </div>

            </div>
        </div>
    </nav>


    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="relative bg-white">
        <div class="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true"></div>
        <div class="relative z-20">
            <div class="max-w-7xl mx-auto flex justify-between items-center px-4 py-4 sm:px-6 sm:py-3 lg:px-8 md:space-x-8">
                <div>
                    <a href="/" class="flex">
                        <span class="sr-only">Logo</span>
                        <img class="h-8 w-auto sm:h-8" src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/logo/logo.png" alt="Logo">
                    </a>
                </div>

                <div class="flex items-center md:ml-12 lg:hidden">
                    <a class="ml-8 inline-flex items-center justify-center px-4 py-1 border border-transparent rounded-md text-base font-medium text-white bg-indigo-900 hover:bg-indigo-800 shadow-lg shadow-indigo-700/50" href="/shop/cart"
                       sveltekit:noscroll>
                        <svg class="mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="2" />
                        </svg>
                        Корзина
                        (<div class="mx-1 animate-pulse text-red-400">{countLengthCart}</div>)
                    </a>
                </div>

                <div class="-mr-2 -my-2 lg:hidden">
                    <button on:click={changeVisibleMobileMenu} type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-slate-500 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                        <span class="sr-only">Open menu</span>
                        <span class="mx-2">Меню</span>
                        <!-- Heroicon name: outline/menu -->
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <div class="hidden lg:flex-1 lg:flex sm:items-center sm:justify-between">
                    <nav class="flex space-x-10 font-semibold">
                        <a href="/" class="text-base text-slate-900 hover:text-red-800 ">Главная</a>
                        <a href="/company" class="text-base text-slate-900 hover:text-red-800">Компания</a>
                        <div use:clickOutside on:outclick={closeVisibleInformationMenu}>
                            <!-- Item active: "text-slate-900", Item inactive: "text-slate-500" -->
                            <button on:click={changeVisibleInformationMenu} type="button" class="text-slate-900 hover:text-red-800 group bg-white rounded-md inline-flex items-center text-base focus:outline-none focus:text-red-700" aria-expanded="false">
                                <span class="font-semibold">Информация</span>
                                <!--
                                  Heroicon name: solid/chevron-down

                                  Item active: "text-indigo-900", Item inactive: "text-slate-400"
                                -->
                                <svg class="text-red-700 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>

                            <!--
                              'More' flyout menu, show/hide based on flyout menu state.

                              Entering: "transition ease-out duration-200"
                                From: "opacity-0 -translate-y-1"
                                To: "opacity-100 translate-y-0"
                              Leaving: "transition ease-in duration-150"
                                From: "opacity-100 translate-y-0"
                                To: "opacity-0 -translate-y-1"
                            -->
                            {#if visibleInformationMenu}
                                <div class="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg">
                                    <div class="absolute inset-0 flex">
                                        <div class="bg-white w-1/2"></div>
                                        <div class="bg-slate-50 w-1/2"></div>
                                    </div>
                                    <div class="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                                        <nav class="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                                            <div>
<!--                                                <h3 class="text-sm font-medium tracking-wide text-slate-500 uppercase">Company</h3>-->
                                                <ul  class="mt-5 space-y-6" >
                                                    {#each leftInfo as {href, displayName}}
                                                    <li class="flow-root">
                                                        <a href="{href}" on:click={closeVisibleInformationMenu}  class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-slate-900 hover:bg-slate-50">
                                                            <!-- Heroicon name: outline/information-circle -->
                                                            <svg class="flex-shrink-0 h-6 w-6 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                            <span class="ml-4">{displayName}</span>
                                                        </a>
                                                    </li>
                                                    {/each}
                                                </ul>
                                            </div>
                                            <div>
<!--                                                <h3 class="text-sm font-medium tracking-wide text-slate-500 uppercase">Resources</h3>-->
                                                <ul  class="mt-5 space-y-6">
                                                    {#each rightInfo as {href, displayName}}
                                                        <li class="flow-root">
                                                            <a href="{href}" on:click={changeVisibleInformationMenu} on:outclick={changeVisibleInformationMenu} class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-slate-900 hover:bg-slate-50">
                                                                <!-- Heroicon name: outline/information-circle -->
                                                                <svg class="flex-shrink-0 h-6 w-6 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                                <span class="ml-4">{displayName}</span>
                                                            </a>
                                                        </li>
                                                    {/each}
                                                </ul>
                                            </div>
                                        </nav>
                                        <div class="bg-slate-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                                            <div>
                                                <h3 class="text-sm font-medium tracking-wide text-slate-500 uppercase">Последнее из блога</h3>
<!--                                                <ul role="list" class="mt-6 space-y-6">-->
<!--                                                    <li class="flow-root">-->
<!--                                                        <a href="#" class="-m-3 p-3 flex rounded-lg hover:bg-slate-100">-->
<!--                                                            <div class="hidden sm:block flex-shrink-0">-->
<!--                                                                <img class="w-32 h-20 object-cover rounded-md" src="https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80" alt="">-->
<!--                                                            </div>-->
<!--                                                            <div class="w-0 flex-1 sm:ml-8">-->
<!--                                                                <h4 class="text-base font-medium text-slate-900 truncate">Boost your conversion rate</h4>-->
<!--                                                                <p class="mt-1 text-sm text-slate-500">Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.</p>-->
<!--                                                            </div>-->
<!--                                                        </a>-->
<!--                                                    </li>-->

<!--                                                    <li class="flow-root">-->
<!--                                                        <a href="#" class="-m-3 p-3 flex rounded-lg hover:bg-slate-100">-->
<!--                                                            <div class="hidden sm:block flex-shrink-0">-->
<!--                                                                <img class="w-32 h-20 object-cover rounded-md" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80" alt="">-->
<!--                                                            </div>-->
<!--                                                            <div class="w-0 flex-1 sm:ml-8">-->
<!--                                                                <h4 class="text-base font-medium text-slate-900 truncate">How to use search engine optimization to drive traffic to your site</h4>-->
<!--                                                                <p class="mt-1 text-sm text-slate-500">Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.</p>-->
<!--                                                            </div>-->
<!--                                                        </a>-->
<!--                                                    </li>-->
<!--                                                </ul>-->
                                            </div>
                                            <div class="mt-6 text-sm font-medium">
                                                <a href="/blog" on:click={changeVisibleInformationMenu} class="text-red-700 hover:text-red-800"> Перейти в блог <span aria-hidden="true">&rarr;</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            {/if}
                        </div>
                        <a href="/blog" class="text-base text-slate-900 hover:text-red-800"> Блог </a>
                        <a href="/information/contact" class="text-base text-slate-900 hover:text-red-800"> Контакты </a>
                        <a href="https://vk.com/orbita_stroy" target="_blank" class="text-base text-slate-900 hover:text-red-800"> VK </a>
                    </nav>
                    <div class="flex items-center md:ml-12">
                        <a class="ml-8 inline-flex items-center justify-center px-4 py-1 border border-transparent rounded-md text-base font-medium text-white bg-indigo-900 hover:bg-indigo-800 shadow-lg shadow-indigo-700/50" href="/shop/cart"
                           sveltekit:noscroll>
                            <svg class="mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" />
                            </svg>
                            Корзина
                           (<div class="mx-1 animate-pulse text-red-400">{countLengthCart}</div>)
                        </a>
                    </div>

                </div>

            </div>

        </div>

        <MobileMenu/>

    </div>


    <div class="bg-slate-50 pt-6 sm:pt-8 ">
<!--    <div class="bg-gradient-to-r from-indigo-200 via-slate-50 to-indigo-200 pt-6 sm:pt-8 ">-->
<!--    <div class="bg-hero-pattern pt-6 sm:pt-8 ">-->

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-3xl font-extrabold text-slate-900 sm:text-5xl lg:text-6xl">
                    Доставка стройматериалов
                </h2>
                <p class="mt-3 text-xl text-indigo-900 sm:mt-4">
                    При заказе через каталог стройматериалов на сайте для вас скидка 5%
                </p>
            </div>
            <p class="mt-4 text-2xl sm:text-3xl text-center font-extrabold text-slate-900">Каталог стройматериалов:</p>

        </div>


        <div class="mt-8 pb-4 bg-white sm:pb-8">
            <div class="relative">
                <div class="absolute inset-0 h-1/2 bg-slate-50 border-b border-slate-200"></div>
<!--                <div class="absolute inset-0 h-1/2 bg-gradient-to-r from-indigo-200 via-slate-100 to-indigo-200 border-b border-slate-200"></div>-->
                <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="w-full mx-auto">
                        <div class="rounded-lg bg-white shadow-md shadow-indigo-700/50 lg:grid lg:grid-cols-7 ">
                            {#each head as {id, slug, name}}
                                <a sveltekit:prefetch sveltekit:noscroll href='/rubric/{slug}'
                                   class="flex flex-col bg-gradient-to-tr hover:bg-gradient-to-bl from-indigo-600 via-indigo-900 to-indigo-700 border border-indigo-200 p-4 text-center sm:border-r sm:border-l">
                                    <span class="order-2 text-sm leading-6 font-medium text-slate-50 tracking-wider">
                                        { name }
                                    </span>
                                </a>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <Search/>

</header>



