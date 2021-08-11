const omit = require("lodash.omit");
const lodash = require("lodash");
const state = {
  outerObject: {
    innerObject1: {},
    innerObject2: {},
  },
};

const result1 = omit(state, ["outerObject.innerObject1"]);
const result2 = lodash.omit(state, ["outerObject.innerObject1"]);
console.log(result1); // { outerObject: { innerObject1: {}, innerObject2: {} } }
console.log(result2); // { outerObject: { innerObject2: {} } }
