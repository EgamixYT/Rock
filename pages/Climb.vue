<template>
   <Card2 />
   
    <Card />

</template>

<script>

import Card2 from '@/components Card2.vue'

export default {
    layout: 'default',
    components: {
        Card: () => import("@/components/Card"),

        Card2: () => import("@/components/Card2"),
       Card2
    },
}
</script>