// setupStore.js
import Nimbus from "./nimbus";

async function loadModule(modulePath) {
  try {
    const module = await import(modulePath);
    return module.default;
  } catch (error) {
    console.error(`Failed to load module: ${modulePath}`, error);
    return null;
  }
}

async function setupStore() {
  const actions = await loadModule("./actions.js");
  const mutations = await loadModule("./mutations.js");
  const state = {
    users: [],
    products: [],
    // Define other initial state properties here
  };

  return new Nimbus({ state, mutations, actions });
}

export default setupStore;
