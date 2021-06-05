<template>
  <div class="container height">
    <Loader v-if="loading" />
    <div v-else>
      <h2>{{ planet.name }}</h2>
      <table>
        <tbody>
          <tr>
            <td>Период вращения</td>
            <td>{{ planet.rotation_period }}</td>
          </tr>
          <tr>
            <td>Орбитальный период</td>
            <td>{{ planet.orbital_period }}</td>
          </tr>
          <tr>
            <td>Диаметр</td>
            <td>{{ planet.diameter }}</td>
          </tr>
          <tr>
            <td>Климат</td>
            <td>{{ planet.climate }}</td>
          </tr>
          <tr>
            <td>Гравитация</td>
            <td>{{ planet.terrain }}</td>
          </tr>
          <tr>
            <td>Поверзность воды</td>
            <td>{{ planet.surface_water }}</td>
          </tr>
          <tr>
            <td>Население</td>
            <td>{{ planet.population }}</td>
          </tr>
          <tr>
            <td>Жители</td>
            <td>
              <p v-for="man in planet.residents" :key="man">{{ man.name }}</p>
            </td>
          </tr>
          <tr>
            <td>Фильмы</td>
            <td>
              <p v-for="film in planet.films" :key="film">{{ film.title }}</p>
            </td>
          </tr>
          <tr>
            <td>Добавлено</td>
            <td>{{ planet.created | dateFilter("datetime") }}</td>
          </tr>
          <tr>
            <td>Обновлено</td>
            <td>{{ planet.edited | dateFilter("datetime") }}</td>
          </tr>
          <tr>
            <td>Ссылка</td>
            <td>{{ planet.url }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "PlanetDetail",
  metaInfo() {
    return {
      title: this.getTitle(),
    };
  },
  props: ["id"],
  data() {
    return {
      planet: null,
      loading: true,
      arr: [],
    };
  },
  async mounted() {
    await this.getPlanet();
  },
  methods: {
    async getPlanet() {
      let url = this.$store.getters.url + `planets/${this.id}/`;
      let response = await fetch(url);
      this.planet = await response.json();
      this.planet.films = this.getUrls(this.planet.films);
      this.planet.residents = this.getUrls(this.planet.residents);

      this.loading = false;
    },
    getUrls(urls) {
      let arr = [];
      urls.forEach((e) =>
        fetch(e)
          .then((res) => res.json())
          .then((data) => arr.push(data))
      );
      return arr;
    },
    getTitle() {
      if (this.planet) {
        return `Planet - ${this.planet.name}`;
      }
    },
  },
};
</script>
