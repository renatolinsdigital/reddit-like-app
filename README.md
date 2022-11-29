# Reddit-like app

An interview challenge application for Leroy Merlin

# Interview questions

# About this app

## Scripts

 - Installing dependencies: `yarn`
 - Running in development mode: `yarn dev`
 - Building: `yarn build`
 - Testing: `yarn test` - TBD

## Main Technologies

 - React
 - Typescript
 - Redux (w/ Redux Toolkit)
 - Sass (for global styling) 
 - Styled components (with Javascript syntax)

# App structure/organization overview

### Top-level folders

 - domain: This is a suggestive/temporary name that represents the only(and the main) module that the application has. If/when the application scales, new folders like this would be created for each domain, so we could have __users__ (for example) and its components, pages, icons, hooks, etc., and another folder called __payment__ and its components, pages, icons, hooks, etc. It is important to highlight that an application domain can have multiple pages and that those pages will be sub-routes, for example, __users/registration__, __users/permissions__, etc
 - shared: A folder representing code that is used/reused without being tied to any application's rules. This folder is not called 'common' because it does not just hold common code but also has the potential to become a private/internal library - other projects within the same company could be using a versioned flavor of this folder. Regarding the project's structure/organization, this folder is also a container for other folders, so it will hold shared components, models, icons, hooks, etc.
 - global-styles: Will reset/default core styling properties across the entire app 
 - theme: Holds data for a 'themeable' styling approach, that can be the base for dark/light mode, switching themes based on preferences, etc. A theme is to be shared between all application domains and is considered a company's product. That way, multiple applications within the company can have the same theme (look and feel) AND/OR one single app can have multiple themes selectable under a single format agreement (object/properties/tokens) between business, designers and developers
 - service-hooks: Considering that modern React applications can have custom hooks acting as application services, this folder will store files that are both. If there is one single store (or source of truth) for the entire application, the service-hooks folder will serve the entire application. If the application has multiple stores, each application domain/module will have its own set of service hooks

### Images in this project

 - This application doesn't have a folder called 'assets' as this folder can interfere in application scalability. In this case, images, icons and assets in general will be inside its own folder belonging to its own application module/domain
 - Unless there is the need of inserting pixel-based photos, this project will use the SVG format as it is standard for vector-based graphics. SVGs will enable images/icons that:
 
 * Can be animated
 * Are lightweight
 * Can be indexed by search engines
 * Don't loose resolution while scaling 
 * Are exportable by most graphic programs
 * Works pretty well alongside Javascript (and/or React components), so it's visuals and behavior/animations can be updated via code

### Overall comments

 - Every shared component MUST be a presentation/stateless component, meaning that wont hold logic by themselves but rather get data from either a direct father or from hooks. This way we will have components that are easy to maintain, test, share, etc. Another important thing to notice is that we can consider the idea of 'composition over inheritance' while using these components - in that case, shared components can be used to build domain components and other shared components as well
 - Domain components can have logic for handling both UI(e.g onClick) and lifecycle events, but they should not be used to transform data or hold specific business related logic as these things are for util functions or custom hooks. For example, if we need to transform a date and display a text based on the parsed date, we would have a date util (for transforming dates) and a custom hook (for updating texts based on that same date)
 - This app was created with CRA, so it can be ejected anytime for advanced env/build control
 - Pages (and page folders) will not be treated as containers for multiple pieces of code, as this only happens with domain and shared folders. Pages will be treated as normal components, with the difference that they will be rendered when we reach certain routes. That said, components and pages will use the same naming conventions, coding patterns, testing approach, etc
 - Every folder that is grouping code will have an 'index' file re-exporting them all under a single 'namespace'. Alongside with the idea of having domain and shared namespaces, we have 'baseUrl' set to project root on __tsconfig.json__ which means we can avoid confusing paths while we can use absolute imports within the project
 - Scaling this app's structure is a matter of identifying what the feature will require (e.g component, theme, icon, page, model, etc), and if these pieces will be domain related or shared.
 - Every UI element is a component, which means everything can be easily found, shared, tested, updated, etc. Doing things that way requires more time to craft each component, but later, it becomes faster to create applications. With a good set of battle-tested shared components, interfaces will be more assembled than developed
 - The shared/icons folder is to be holding hand-crafted icons provided by the UI/UX team. Icons in there will be converted to React components (icons are React components) so we can have more control over them (set variations, update at run-time, animate, run unit test over possibilities, etc.). In a scenario where we need a huge amount of icons (e.g: more than 15 icons for an application), then the suggested approach would be considering a known icons library by default, leaving the idea of 'icons as components' for just a few specific cases
 - If a domain component needs sub-components that are not on the 'shared' folder, it can have a 'sub-components' folder and store it there. It is also important to remember that sub-components have the potential to becoming a shared component

# Tooling + dependencies

- Create React App: bundling and running in development mode
- babel-plugin-styled-components: for parsing styled components with nicer class names, helping to debug the application. 
- react-app-rewired + customize-cra: For having babel plugins without ejecting the application

# State and data management

  This application is mocked, so every data displayed is just representative, inclusive the API data itself
- Considering this application is not going to transform/update original data (posts entries) we will not consider a state management solution such as Redux toolkit. As long as the data is flowing in just one direction API => Service => Component(s) we will be using hooks that behave like services (aka service hooks). As long as we are not dealing with a parameterized API, all data will be queried at once and then filtered within component's local state
- A fake user is being stored on a Redux toolkit store, but it is just to illustrate how logged user information could be used across the application. This app doesn't cover authentication features
- For the sake of avoiding extra complexity regarding data transformations, all models that are common to both API and the app will be exactly the same. In this case, if the API is returning a field with snake case (eg: __created_at__), the Typescript model will respect that, even though camel case is the standard for Javascript/Typescript

# Features, approaches and techniques

### Implemented

 - Component-first approach: With the help of Styled components, every UI element is mapped to a component
 - State management: Example of storing logged-in user data with Redux toolkit
 - Data fetching with Axios managed by a service Hook
 - Linting - TBD
 - Responsiveness - TBD

### Out of scope 
 
 - Routing
 - Animations
 - Translation
 - Global alerts
 - Authentication
 - Pagination/Navigation/Search
 - UI feedback for messages/errors 
 - Dark/Light mode toggling
 - Mapping of possible errors + global error handling
 - Testing: Just one component is being tested at this moment - TBD <<<<<<<<<<<<<<>>>>>>>>>>>>>>
 - etc