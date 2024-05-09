# Nimbus State Management for Vue

## Overview

Nimbus is a lightweight, efficient state management library designed specifically for Vue.js applications, paired with a powerful CLI tool to streamline state management operations. It provides a simple yet flexible API for managing application state without the overhead of more complex solutions like Vuex, making it ideal for small to mid-sized projects that require straightforward state management with minimal setup.

## Key Features

- **Lightweight and Minimalistic**: Focused on essential state management features.
- **Easy to Learn and Use**: Simple API and CLI commands make it accessible for developers of all skill levels.
- **Dynamic Module Loading**: Supports flexible and scalable state structures through dynamic loading of actions and mutations.
- **CLI Tool**: Offers command-line functionalities to generate actions, mutations, and templates, enhancing developer productivity and workflow.
- **Customizable**: Allows for easy customization and extension through a templating system for actions and mutations.

## Installation

To install Nimbus and its CLI tool, use npm or yarn:

```bash
npm install nimbus-state
```

## Quick Start Guide

### Setting Up Nimbus

1. **Create the Store**: Use the `setupStore.js` to handle the dynamic importing of your actions and mutations.

   ```javascript
   // src/nimbus/setupStore.js
   import Nimbus from "nimbus-state";

   async function loadModule(modulePath) {
     const module = await import(modulePath);
     return module.default;
   }

   async function setupStore() {
     const actions = await loadModule("./actions.js");
     const mutations = await loadModule("./mutations.js");
     const state = {
       users: [],
       products: [],
     };

     return new Nimbus({ state, mutations, actions });
   }

   export default setupStore;
   ```

2. **Integrate Nimbus into Your Vue App**: Modify the `main.js` to integrate Nimbus into your Vue application.

   ```javascript
   // src/main.js
   import { createApp } from "vue";
   import App from "./App.vue";
   import setupStore from "./nimbus/setupStore";

   async function initApp() {
     const store = await setupStore();
     const app = createApp(App);
     app.provide("store", store); // Assuming Nimbus works similarly to Vuex
     app.mount("#app");
   }

   initApp().catch(console.error);
   ```

### Using the CLI Tool

The Nimbus CLI enhances your development experience by automating the creation of state management components. Here's how you can use it:

#### Generate Actions and Mutations

- **Generate a Mutation**: Create a mutation template with a specified name.

  ```bash
  nimbus generate mutation setUserData
  ```

- **Generate an Action**: Create an action template that fetches user data.

  ```bash
  nimbus generate action fetchUserData
  ```

#### Manage Templates

- **Create Custom Templates**: Customize or create new templates for your project's specific needs.

  ```bash
  nimbus template create myCustomTemplate --type action
  ```

- **Apply Templates**: Apply a saved template to generate a new module.

  ```bash
  nimbus apply myCustomTemplate src/store/actions
  ```

## Roadmap

- **Enhanced Templating System**: Expand the templating capabilities to support complex scenarios.
- **Community-Driven Templates**: Establish a repository for shared user templates.
- **Performance Optimizations**: Optimize for scalability in larger applications.

## Contributing

Contributions are welcome! Whether improving documentation, adding features, or reporting bugs, your input is valued. See `CONTRIBUTING.md` for more details.

## License

Nimbus is open source and available under the MIT license.

