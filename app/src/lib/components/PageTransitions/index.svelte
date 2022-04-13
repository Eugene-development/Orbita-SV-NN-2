<script>
    import { fade } from 'svelte/transition';
</script>

<div in:fade={{ duration: 1000}} out:fade>
    <slot/>
</div>
