import { reactive } from "vue";

class Nimbus {
  constructor(options) {
    this.state = reactive(options.state || {});
    this.actions = options.actions || {};
    this.mutations = options.mutations || {};
  }

  dispatch(actionName, payload) {
    if (this.actions[actionName]) {
      this.actions[actionName](this, payload);
    } else {
      console.error(`Action "${actionName}" is not defined.`);
    }
  }

  commit(mutationName, payload) {
    if (this.mutations[mutationName]) {
      this.mutations[mutationName](this.state, payload);
    } else {
      console.error(`Mutation "${mutationName}" is not defined.`);
    }
  }
}

export default Nimbus;
