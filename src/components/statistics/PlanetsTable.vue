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
import paginationMixin from "@/mixins/pagination.mixin";
import tableMixin from "@/mixins/table.mixin";
export default {
  name: "PlanetsTable",
  data() {
    return {
      table: 'planets',
      name: 'name',
      dataset: [
        {label: 'Диаметр', data: 'diameter', width: 1},
        {label: 'Орбитальный период', data: 'orbital_period', width: 2},
        {label: 'Период вращения', data: 'rotation_period', width: 1},
        {label: 'Поверхность воды', data: 'surface_water', width: 2},
        {label: 'Население', data: 'population', width: 2},
      ]
    };
  },
  mixins: [paginationMixin, tableMixin],
};
</script>
