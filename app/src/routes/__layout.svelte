<script>
	// import { Banner_v1 } from 'symax/ui/broker';


	import {useBanner_v1} from '../content/banner/v1'
	// const {content_Banner_v1} = useBanner_v1
	import Header from '$lib/header/index.svelte';
	import Footer from '$lib/footer/index.svelte'
	import '../app.css';
	import { browser} from "$app/env";

	import { v4 as uuid } from '@lukeed/uuid';
	if (browser && localStorage.getItem('dataS') === null){
		browser && localStorage.setItem('dataS', uuid())
	}
</script>

<!--<Banner_v1 {...content_Banner_v1}/>-->
<Header />
	<main >
		<slot  />
	</main>
<Footer />

