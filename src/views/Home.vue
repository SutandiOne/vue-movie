<template>
  <v-card flat color="transparent">
    <Search />
    <Items />
  </v-card>
</template>

<script>
import Search from '@/components/Search.vue';
import Items from '@/components/Items.vue';

export default {
  components: {
    Search,
    Items 
  },
};
</script>
