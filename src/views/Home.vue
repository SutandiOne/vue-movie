<template>
  <v-card flat color="transparent">
    <Search />
    <Items />
  </v-card>
</template>

<script>
// import Search from '@/components/Search.vue';
// import Items from '@/components/Items.vue';

export default {
  components: {
    Search: () => import('@/components/Search.vue'),
    Items: () => import('@/components/Items.vue')
  },
};
</script>
