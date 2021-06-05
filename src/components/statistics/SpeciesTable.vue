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
          <th>Изменено</th>
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
import paginationMixin from "@/mixins/pagination.mixin";
import tableMixin from "@/mixins/table.mixin";
export default {
  name: "SpeciesTable",
  data() {
    return {
      table: 'species',
      name: 'name',
      dataset: [
        {label: 'Средний рост', data: 'average_height', width: 1},
        {label: 'Средняя продолжительность жизни', data: 'average_lifespan', width: 2},
      ]
    };
  },
  mixins: [paginationMixin, tableMixin],
};
</script>