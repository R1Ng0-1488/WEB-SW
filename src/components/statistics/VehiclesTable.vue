<template>
  <div >
    <Loader v-if="loading" />
  <div >
    <h1>Транспортные Средства</h1>
  	<canvas ref="canvas"></canvas>
    <table>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Модель</th>
          <th>Производитель</th>
          <th>Цена в кредитах</th>
          <th>Длина</th>
          <th>Максимальная атмосферная скорость</th>
          <th>Экипаж</th>
          <th>Пассажиры</th>
          <th>Грузоподъемность</th>
          <th>Расходные материалы</th>
          <th>Класс транспортного средства</th>
          <th>Создано</th>
          <th>Обновлено</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="vehicle in allItems" :key="vehicle">
          <td>{{ vehicle.name }}</td>
          <td>{{ vehicle.model }}</td>
          <td>{{ vehicle.manufacturer }}</td>
          <td>{{ vehicle.cost_in_credits }}</td>
          <td>{{ vehicle.length }}</td>
          <td>{{ vehicle.max_atmosphering_speed }}</td>
          <td>{{ vehicle.crew }}</td>
          <td>{{ vehicle.passengers }}</td>
          <td>{{ vehicle.cargo_capacity }}</td>
          <td>{{ vehicle.consumables }}</td>
          <td>{{ vehicle.vehicle_class }}</td>
          <td>{{ vehicle.created | dateFilter("date") }}</td>
          <td>{{ vehicle.edited | dateFilter("date") }}</td>
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
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import paginationMixin from "@/mixins/pagination.mixin";
export default {
  name: "VehiclesTable",
  data() {
    return {
      loading: true
    };
  },
  extends: Bar,
  mixins: [paginationMixin],
  async mounted() {
    await this.setupPagination(await this.getObj());
    this.loading = false
    this.chart()
  },
  methods: {
    async getObj() {
      const response = await fetch(
        this.$store.getters.url + `vehicles/?page=${this.page}`
      );
      return await response.json();
    },
    chart() {
    return this.renderChart({
        labels: this.allItems.map(e => e.name), 
        datasets: [{
            label: 'Цена в кредитах',
            data: this.allItems.map(e => +e.cost_in_credits),
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
            label: 'Длина',
            data: this.allItems.map(e => +e.length),
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
            label: 'Максимальная атмосферная скорость',
            data: this.allItems.map(e => +e.max_atmosphering_speed),
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
            label: 'Экипаж',
            data: this.allItems.map(e => +e.crew),
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
            label: 'Пассажиры',
            data: this.allItems.map(e => +e.passengers),
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
            label: 'Грузоподьемность',
            data: this.allItems.map(e => +e.cargo_capacity),
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
