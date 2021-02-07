<template>
    <photo />
</template>

<script>
export default {
    layout: 'default',
    components: {
        Photo: () => import("@/components/Photo"),
    },
}
</script>
