import { Bar } from "vue-chartjs";
export default {
  data() {
    return {
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
    };
  },
  extends: Bar,
  async mounted() {
    await this.setupPagination(await this.getObj());
    this.chart();
  },
  methods: {
    chart() {
      return this.renderChart({
        labels: this.allItems.map((e) => e[this.name]),
        datasets: this.dataset.map((elem) => {
          return {
            label: elem.label,
            data: this.allItems.map((e) =>
              elem.data === "episode_id"
                ? +e[elem.data]
                : this.getInt(e[elem.data])
            ),
            backgroundColor: this.backgroundColor,
            borderColor: this.borderColor,
            borderWidth: elem.width,
          };
        }),
      });
    },
    getInt(e) {
      return +e.replace(",", "").split("-")[0];
    },
    async getObj() {
      const response = await fetch(
        this.$store.getters.url + `${this.table}/?page=${this.page}`
      );
      return await response.json();
    },
  },
};
