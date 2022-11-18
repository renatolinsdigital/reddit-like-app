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
 - Sass (for global styling) 
 - Styled components (with Javascript syntax)
 - Redux (w/ Redux Toolkit) - TBD

# App structure

### Folders

 - domain: Holds code tied to this application only
 - global-styles: Will reset/default core styling properties across the entire app 
 - theme: Holds data for a 'themeable' styling approach, that can be the base for dark/light mode, switching themes on the fly, etc  
 - shared: This folder represent anything that could be shared between other applications. This folder holds the potential to becoming a private/internal library of components

### Overall comments

 - This app was created with CRA, so it can be ejected anytime for advanced env/build control
 - A folder grouping UI elements or code will have an 'index' file re-exporting them all under a single 'namespace'. Alongside with the idea of having domain and shared namespaces, we have 'baseUrl' set to project root on __tsconfig.json__ which means we can avoid confusing paths while we can use absolute imports within the project
 - Scaling this app's structure is a matter of identifying what the feature will require (e.g component, theme, icon, page, model, etc), and if these pieces will be domain related or shared.
 - Every UI element is a component, which means everything can be easily found, shared, tested, updated, etc. Doing things that way requires more time to craft each component, but later, it becomes faster to create applications. With a good set of battle-tested shared components, interfaces will be more assembled than developed

# Tooling

This application uses CRA for bundling and running in development mode. It also uses a babel plugin (__babel-plugin-styled-components__) for parsing styled components with nicer class names, helping to debug the application. For having babel plugins without ejecting the application, the tools __react-app-rewired__ and __customize-cra__ have been installed as dev dependencies.

### What this app features

 - Component-first approach
 - Linting - TBD
 - Testing - TBD
 - Routing - TBD
 - Animations - TBD
 - State management w/ Redux - TBD
 - Responsiveness - TBD
 - Services/API requests - TBD

### Out of scope (could be added in a real app)
 
 - Translation
 - Global alerts
 - Registering/Login
 - Pagination/Navigation/Search
 - UI feedback for messages/errors 
 - Dark/Light mode toggling
 - Mapping of possible errors + global error handling
 - etc

