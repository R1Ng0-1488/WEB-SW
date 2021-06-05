<template>
  <div>
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
</template>

<script>
import paginationMixin from "@/mixins/pagination.mixin";
import tableMixin from "@/mixins/table.mixin";
export default {
  name: "VehiclesTable",
  data() {
    return {
      table: 'vehicles',
      name: 'name',
      dataset: [
        {label: 'Цена в кредитах', data: 'cost_in_credits', width: 1},
        {label: 'Длина', data: 'length', width: 2},
        {label: 'Максимальная атмосферная скорость', data: 'max_atmosphering_speed', width: 1},
        {label: 'Экипаж', data: 'crew', width: 2},
        {label: 'Пассажиры', data: 'passengers', width: 2},
        {label: 'Грузоподъемность', data: 'cargo_capacity', width: 1},
      ],

    };
  },
  mixins: [paginationMixin, tableMixin],
};
</script>
