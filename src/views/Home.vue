<template>
  <div>
    <Search />
    <Items />
  </div>
</template>

<script>
import Search from '@/components/Search.vue';
import Items from '@/components/Items.vue';

export default {
  components: {
    Items,
    Search,
  },
};
</script>
