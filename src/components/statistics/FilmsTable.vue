<template>
  <div>
    <h1>Фильмы</h1>
  	<canvas ref="canvas"></canvas>
    <table>
      <thead>
        <tr>
          <th>Название</th>
          <th>Эпизод</th>
          <th>Открытие фильма</th>
          <th>Режисер</th>
          <th>Продюсер</th>
          <th>Дата релиза</th>
          <th>Создано</th>
          <th>Изменено</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="film in allItems" :key="film">
          <td>{{ film.title }}</td>
          <td>{{ film.episode_id }}</td>
          <td>{{ film.opening_crawl }}</td>
          <td>{{ film.director }}</td>
          <td>{{ film.producer }}</td>
          <td>{{ film.release_date }}</td>
      
          <td>{{ film.created | dateFilter("date") }}</td>
          <td>{{ film.edited | dateFilter("date") }}</td>
        </tr>
      </tbody>
    </table>
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
</template>

<script>
import { Bar } from "vue-chartjs";
import paginationMixin from "@/mixins/pagination.mixin";
export default {
  name: "FilmssTable",
  data() {
    return {

    };
  },
  extends: Bar,
  mixins: [paginationMixin],
  async mounted() {
    await this.setupPagination(await this.getObj());
    this.chart()
  },
  methods: {
    async getObj() {
      const response = await fetch(
        this.$store.getters.url + `films/?page=${this.page}`
      );
      return await response.json();
    },
    chart() {
    return this.renderChart({
        labels: this.allItems.map(e => e.title), 
        datasets: [{
            label: 'Эпизод',
            data: this.allItems.map(e => +e.episode_id),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(88, 242, 17, 0.2)",
              "rgba(242, 85, 17, 0.2)",
              "rgba(242, 27, 206, 0.2)",
              "rgba(27, 242, 178, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(88, 242, 17, 1)",
              "rgba(242, 85, 17, 1)",
              "rgba(242, 27, 206, 1)",
              "rgba(27, 242, 178, 1)",
            ],
            borderWidth: 1
        }]
    })
    }
  },
};
</script>
