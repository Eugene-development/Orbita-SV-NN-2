<script>
    import { fade } from 'svelte/transition';
</script>

<div in:fade={{ duration: 800}} >
    <slot/>
</div>
