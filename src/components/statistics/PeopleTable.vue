<template>
  <div>
    <h1>Люди</h1>
    <canvas ref="canvas"></canvas>
    <table>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Рост</th>
          <th>Вес</th>
          <th>Цвет волос</th>
          <th>Цвет кожи</th>
          <th>Цвет глаз</th>
          <th>Год рождения</th>
          <th>Пол</th>
          <th>Домашний мир</th>
          <th>Создано</th>
          <th>Изменено</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="person in allItems" :key="person">
          <td>{{ person.name }}</td>
          <td>{{ person.height }}</td>
          <td>{{ person.mass }}</td>
          <td>{{ person.hair_color }}</td>
          <td>{{ person.skin_color }}</td>
          <td>{{ person.eye_color }}</td>
          <td>{{ person.birth_year }}</td>
          <td>{{ person.gender }}</td>
          <td>{{ person.homeworld }}</td>
          <td>{{ person.created | dateFilter("date") }}</td>
          <td>{{ person.edited | dateFilter("date") }}</td>
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
  name: "PeopleTable",
  data() {
    return {
      table: "people",
      name: "name",
      dataset: [
        { label: "Вес", data: "mass", width: 1 },
        { label: "Рост", data: "height", width: 2 },
      ],
    };
  },
  mixins: [paginationMixin, tableMixin],
};
</script>
