<template>
  <div>
    <h1>Разновидности</h1>
  	<canvas ref="canvas"></canvas>
    <table>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Классификация</th>
          <th>Обозначение</th>
          <th>Средняя рост</th>
          <th>Цвет кожи</th>
          <th>Цвет волос</th>
          <th>Цвет глаз</th>
          <th>Средняя продолжительность жизни</th>
          <th>Домашний мир</th>
          <th>Язык</th>

          <th>Создано</th>
          <th>Обновлено</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="species in allItems" :key="species">
          <td>{{ species.name }}</td>
          <td>{{ species.classification }}</td>
          <td>{{ species.designation }}</td>
          <td>{{ species.average_height }}</td>
          <td>{{ species.skin_colors }}</td>
          <td>{{ species.hair_colors }}</td>
          <td>{{ species.eye_colors }}</td>
          <td>{{ species.average_lifespan }}</td>
          <td>{{ species.homeworld }}</td>
          <td>{{ species.language }}</td>
   
          <td>{{ species.created | dateFilter("date") }}</td>
          <td>{{ species.edited | dateFilter("date") }}</td>
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
  name: "SpeciesTable",
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
        this.$store.getters.url + `species/?page=${this.page}`
      );
      return await response.json();
    },
    chart() {
    return this.renderChart({
        labels: this.allItems.map(e => e.name), 
        datasets: [{
            label: 'Средний рост',
            data: this.allItems.map(e => +e.average_height),
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
            label: 'Средняя продолжительность жизни',
            data: this.allItems.map(e => +e.average_lifespan),
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
        }]
    })
    }
  },
};
</script>
