class Query {
  constructor() {
    this.data =  [];
  }
  select(fn) {
    this.selectFn = fn;
    return this;
  }
  from(data) {
    this.data = data;
    return this;
  }
  where(fn) {
    this.whereFn = fn;
    return this;
  }
  groupBy(...fns) {
    this.groupByFns = fns;
    return this; 
  }
  execute() {
    let executeData = this.data.slice();
    if (typeof this.whereFn === 'function') {
      executeData = executeData.filter(this.whereFn);
    }
    if (this.groupByFns && this.groupByFns.length) {
      const groupByFn = this.groupByFns[0];
      const grouped = executeData.reduce((grouped, item) => {
        const key = groupByFn(item);
        grouped[key] = grouped[key] || [];
        grouped[key].push(item);
        return grouped;
      }, {});
      executeData = Object.entries(grouped);
    }
    if (typeof this.selectFn === 'function') {
      executeData = executeData.map(this.selectFn);
    }
    return executeData;
  }
}


module.exports = function query() {
  return new Query();
};