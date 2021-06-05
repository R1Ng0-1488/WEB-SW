<template>
  <div class="container height">
    <div>
      <div class="row">
        <div v-for="name in component_names" :key="name" class="col s2">
          <a
            @click="setActive(name.value)"
            class="btn waves-effect amber lighten-2 col s12"
            >{{ name.name }}</a
          >
        </div>
      </div>

      <component :is="active"></component>
    </div>
  </div>
</template>

<script>
import PeopleTable from "@/components/statistics/PeopleTable";
import PlanetsTable from "@/components/statistics/PlanetsTable";
import StarshipsTable from "@/components/statistics/StarshipsTable";
import FilmsTable from "@/components/statistics/FilmsTable";
import SpeciesTable from "@/components/statistics/SpeciesTable";
import VehiclesTable from "@/components/statistics/VehiclesTable";

export default {
  name: "Statistics",
  metaInfo() {
    return {
      title: "Statistics",
    };
  },
  data() {
    return {
      active: "PeopleTable",
      component_names: [
        {
          name: "People",
          value: "PeopleTable",
        },
        {
          name: "Starships",
          value: "StarshipsTable",
        },
        {
          name: "Planets",
          value: "PlanetsTable",
        },
        {
          name: "Films",
          value: "FilmsTable",
        },
        {
          name: "Species",
          value: "SpeciesTable",
        },
        {
          name: "Vehicles",
          value: "VehiclesTable",
        },
      ],
      loading: true,
    };
  },
  components: {
    PeopleTable,
    PlanetsTable,
    StarshipsTable,
    FilmsTable,
    SpeciesTable,
    VehiclesTable,
  },
  async mounted() {
    this.loading = false;
  },
  methods: {
    setActive(value) {
      this.active = value;
      if (this.$route.query.page) {
        this.$router.replace({ name: "Statistics" });
      }
    },
  },
};
</script>
