<template>
  <div class="container height">
    <Loader v-if="loading" />
    <div v-else>
      <h2>Планеты вселенной Star Wars</h2>
      <p v-for="planet in allItems" :key="planet.name" @click="goTo(planet.id)">
        {{ planet.name }}
      </p>
      <Paginate
        v-model="page"
        :page-count="pageCount"
        :click-handler="pageChangeHandler"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
        :active-class="'waves-effect amber lighten-2'"
        :page-class="'waves-effect'"
      />
    </div>
  </div>
</template>
<style scoped>
p {
  cursor: pointer;
}
</style>
<script>
import paginationMixin from "@/mixins/pagination.mixin";
export default {
  name: "Planets",
  mixins: [paginationMixin],
  data() {
    return {
      loading: true,
    };
  },
  async mounted() {
    await this.setupPagination(await this.getObj());
    this.loading = false;
  },
  methods: {
    async getObj() {
      const url = this.$store.getters.url + `planets/?page=${this.page}`;
      const response = await fetch(url);
      return await response.json();
    },
    goTo(id) {
      this.$router.push({ name: "PlanetDetail", params: { id } });
    },
  },
};
</script>
