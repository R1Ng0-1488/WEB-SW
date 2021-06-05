export default {
  data() {
    return {
      pageCount: 0,
      page: +this.$route.query.page || 1,
      allItems: null,
    };
  },
  methods: {
    async setupPagination(obj) {
      this.allItems = await this.getItems(obj);
      this.pageCount = this.getPageCount(obj);
    },
    getPageCount(obj) {
      let realPageCount = obj.count / 10;
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
  },
};
