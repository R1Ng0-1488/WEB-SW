<template>
  <div class="container">
    <Loader v-if="loading" />
    <div v-else>
      <h2>Планеты вселенной Star Wars</h2>
      <p v-for="planet in planets" :key="planet.name" @click="goTo(planet.id)">
        {{ planet.name }}
      </p>
      <Paginate
        v-model="page"
        :page-count="pageCount"
        :click-handler="pageChangeHandler"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
        :active-class="'waves-effect indigo lighten-4'"
        :page-class="'waves-effect'"
      />
    </div>
  </div>
</template>
<style scoped>
p {
  cursor: pointer;
}
.container {
  height: 100vh;
}
</style>
<script>
export default {
  name: "Planets",
  data() {
    return {
      page: +this.$route.query.page || 1,
      pageCount: 0,
      planets: null,
      loading: true,
    };
  },
  async mounted() {
    await this.getPlanets();
  },
  methods: {
    async getPlanets() {
      const url = this.$store.getters.url + `planets?page=${this.page}`;
      const response = await fetch(url);
      let obj = await response.json();
      this.planets = obj.results.map((e) => {
        e.id =
          obj.results.indexOf(e) + (this.page - 1) * obj.results.length + 1;
        return e;
      });
      this.loading = false;
      this.pageCount = this.getPageCount(obj);
    },
    async pageChangeHandler(page) {
      await this.getPlanets();
      this.$router.push(`${this.$route.path}?page=${page}`);
      this.page = page;
    },
    goTo(id) {
      this.$router.push({ name: "PlanetDetail", params: { id } });
    },
    getPageCount(obj) {
      let realPageCount = obj.count / obj.results.length;
      return realPageCount > Math.floor(realPageCount)
        ? Math.floor(realPageCount) + 1
        : Math.floor(realPageCount);
    },
  },
};
</script>
