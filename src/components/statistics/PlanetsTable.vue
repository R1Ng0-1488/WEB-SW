<template>
  <div>
    <h1>Планеты</h1>
  	<canvas ref="canvas"></canvas>
    <table>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Период вращение</th>
          <th>Орбитальный период</th>
          <th>Диаметр</th>
          <th>Климат</th>
          <th>Гравитация</th>
          <th>Местность</th>
          <th>Поверхность воды</th>
          <th>Население</th>
     
          <th>Создано</th>
          <th>Обновлено</th>
          
        </tr>
      </thead>

      <tbody>
        <tr v-for="planet in allItems" :key="planet">
          <td>{{ planet.name }}</td>
          <td>{{ planet.rotation_period }}</td>
          <td>{{ planet.orbital_period }}</td>
          <td>{{ planet.diameter }}</td>
          <td>{{ planet.climate }}</td>
          <td>{{ planet.gravity }}</td>
          <td>{{ planet.terrain }}</td>
          <td>{{ planet.surface_water }}</td>
          <td>{{ planet.population }}</td>
  
          <td>{{ planet.created | dateFilter("date") }}</td>
          <td>{{ planet.edited | dateFilter("date") }}</td>
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
  name: "PlanetsTable",
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
        this.$store.getters.url + `planets/?page=${this.page}`
      );
      return await response.json();
    },
    chart() {
    return this.renderChart({
        labels: this.allItems.map(e => e.name), 
        datasets: [{
            label: 'Диаметр',
            data: this.allItems.map(e => +e.diameter),
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
        },
        {
            label: 'Орбитальный период',
            data: this.allItems.map(e => +e.orbital_period),
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
            borderWidth: 2,
        },
        {
            label: 'Период вращения',
            data: this.allItems.map(e => +e.rotation_period),
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
        },
        {
            label: 'Поверхность воды',
            data: this.allItems.map(e => +e.surface_water),
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
        },
        {
            label: 'Население',
            data: this.allItems.map(e => +e.population),
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
        },]
    })
    }
  },
};
</script>
