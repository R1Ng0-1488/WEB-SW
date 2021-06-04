export default {
  data() {
    return {
      pageCount: 0,
      page: +this.$route.query.page || 1,
      allItems: null,
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
  methods: {
    async setupPagination(obj) {
      this.allItems = await this.getItems(obj);
      this.pageCount = this.getPageCount(obj);
    },
    getPageCount(obj) {
      let realPageCount = obj.count / obj.results.length;
      return realPageCount > Math.floor(realPageCount)
        ? Math.floor(realPageCount) + 1
        : Math.floor(realPageCount);
    },
    async getItems(obj) {
      let items = await obj.results.map((e) => {
        e.id =
          obj.results.indexOf(e) + (this.page - 1) * obj.results.length + 1;
        return e;
      });
      return items
    },
    async pageChangeHandler(page) {
      this.page = page;
      this.allItems = await this.getItems(await this.getObj());
      if (this.chart) {
        this.chart()
      }
      this.$router.push(`${this.$route.path}?page=${page}`);
    },
    getUrls(urls) {
      let arr = []
      urls.forEach(e => fetch(e).then(res => res.json()).then(data => arr.push(data)))
      return arr
    }
  },
};
