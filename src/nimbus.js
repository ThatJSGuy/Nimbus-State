// nimbus.js
class Nimbus {
  constructor({ state, mutations, actions }) {
    this.state = state;
    this.mutations = mutations;
    this.actions = actions;
  }

  commit(mutationName, payload) {
    if (this.mutations[mutationName]) {
      this.mutations[mutationName](this.state, payload);
    } else {
      console.error(`Mutation "${mutationName}" not found.`);
    }
  }

  dispatch(actionName, payload) {
    if (this.actions[actionName]) {
      this.actions[actionName](this, payload);
    } else {
      console.error(`Action "${actionName}" not found.`);
    }
  }
}

export default Nimbus;
