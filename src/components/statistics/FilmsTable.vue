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
import paginationMixin from "@/mixins/pagination.mixin";
import tableMixin from "@/mixins/table.mixin";
export default {
  name: "FilmsTable",
  data() {
    return {
      table: 'films',
      name: 'title',
      dataset: [
        {label: 'Эпизод', data: 'episode_id', width: 1},
      ]
    };
  },
  mixins: [paginationMixin, tableMixin],
};
</script>
