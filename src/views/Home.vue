<template>
  <v-container>
    <Search />
    <Items />
  </v-container>
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
