<template>
  <div class="container something">
    <Loader v-if="loading" />
    <div v-else>
     <div class="row">
     	<div v-for="name in component_names" :key="name" class="col s2">
    		<a  @click="setActive(name.value)" class="btn waves-effect amber lighten-2 col s12">{{ name.name }}</a>
     	</div>
     </div>

    <component :is="active"></component>
    </div>
  </div>
</template>

<style scoped>
.something {
  min-height: 100vh;
}
</style>

<script>
import PeopleTable from "@/components/statistics/PeopleTable";
import PlanetsTable from "@/components/statistics/PlanetsTable";
import StarshipsTable from "@/components/statistics/StarshipsTable";
import FilmsTable from "@/components/statistics/FilmsTable";
import SpeciesTable from "@/components/statistics/SpeciesTable";
import VehiclesTable from "@/components/statistics/VehiclesTable";

export default {
  name: "Statistics",
  data() {
    return {
      active: 'PeopleTable',
      component_names: [ 
	      {
	      	name: 'People',
	      	value:'PeopleTable'
	      }, 
	  	  {
	      	name: 'Starships',
	      	value:'StarshipsTable'
	      }, 
	      {
	      	name: 'Planets',
	      	value:'PlanetsTable'
	      }, 
	      {
	      	name: 'Films',
	      	value:'FilmsTable'
	      }, 
	      {
	      	name: 'Species',
	      	value:'SpeciesTable'
	      }, 
	      {
	      	name: 'Vehicles',
	      	value:'VehiclesTable'
	      }
      ],
      loading: true,
    };
  },
  components: { PeopleTable, 
  				PlanetsTable, 
  				StarshipsTable, 
  				FilmsTable,
  				SpeciesTable,
  				VehiclesTable },
  async mounted() {
    this.loading = false;
  },
  methods: {
  	setActive(value) {
  		this.active = value
  		if (this.$route.query.page) {
  			console.log('aaa')
 			this.$router.replace({name: 'Statistics'})
  		}
 
  	}
  }
};
</script>
