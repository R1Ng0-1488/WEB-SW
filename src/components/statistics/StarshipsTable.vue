<template>
  <div class="row">
    <h1>Звездолёты</h1>
  	<canvas ref="canvas"></canvas>
    <table class="col">
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
          <th>Рейтинг гипердвигателя</th>
          <th>MGLT</th>
          <th>Класс звездолета</th>

          <th>Создано</th>
          <th>Изменено</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="starship in allItems" :key="starship">
          <td>{{ starship.name }}</td>
          <td>{{ starship.model }}</td>
          <td>{{ starship.manufacturer }}</td>
          <td>{{ starship.cost_in_credits }}</td>
          <td>{{ starship.length }}</td>
          <td>{{ starship.max_atmosphering_speed }}</td>
          <td>{{ starship.crew }}</td>
          <td>{{ starship.passengers }}</td>
          <td>{{ starship.cargo_capacity }}</td>
          <td>{{ starship.consumables }}</td>
          <td>{{ starship.hyperdrive_rating }}</td>
          <td>{{ starship.MGLT }}</td>
          <td>{{ starship.starship_class }}</td>
    
          <td>{{ starship.created | dateFilter("date") }}</td>
          <td>{{ starship.edited | dateFilter("date") }}</td>
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
  name: "StarshipsTable",
  data() {
    return {
      table: 'starships',
      name: 'name',
      dataset: [
        {label: 'Цена в кредитах', data: 'cost_in_credits', width: 1},
        {label: 'Длина', data: 'length', width: 2},
        {label: 'Максимальная атмосферная скорость', data: 'max_atmosphering_speed', width: 1},
        {label: 'Экипаж', data: 'crew', width: 2},
        {label: 'Пассажиры', data: 'passengers', width: 2},
        {label: 'Грузоподъемность', data: 'cargo_capacity', width: 1},
        {label: 'Рейтинг гипердвигателя', data: 'hyperdrive_rating', width: 2},
        {label: 'MGLT', data: 'MGLT', width: 2},
      ]
    };
  },
  mixins: [paginationMixin, tableMixin],
};
</script>
