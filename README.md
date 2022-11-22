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

# App structure/organization overview

### Top-level folders

 - domain: This is a suggestive/temporary name that represents the only(and the main) module that the application has. If/when the application scales, new folders like this would be created for each domain, so we could have __users__ (for example) and its components, pages, icons, hooks, etc., and another folder called __payment__ and its components, pages, icons, hooks, etc. It is important to highlight that an application domain can have multiple pages and that those pages will be sub-routes, for example, __users/registration__, __users/permissions__, etc
 - shared: A folder representing code that is used/reused without being tied to any application's rules. This folder is not called 'common' because it does not just hold common code but also has the potential to become a private/internal library - other projects within the same company could be using a versioned flavor of this folder. Regarding the project's structure/organization, this folder is also a container for other folders, so it will hold shared components, models, icons, hooks, etc.
 - global-styles: Will reset/default core styling properties across the entire app 
 - theme: Holds data for a 'themeable' styling approach, that can be the base for dark/light mode, switching themes based on preferences, etc. A theme is to be shared between all application domains and is considered a company's product. That way, multiple applications within the company can have the same theme (look and feel) AND/OR one single app can have multiple themes selectable under a single format agreement (object/properties/tokens) between business, designers and developers
 - service-hooks: Considering that modern React applications can have custom hooks acting as application services, this folder will store files that are both. If there is one single store (or source of truth) for the entire application, the service-hooks folder will serve the entire application. If the application has multiple stores, each application domain/module will have its own set of service hooks

### Overall comments

 - Every UI component MUST be a 'presentation component', meaning that wont hold logic by themselves but rather get data from either a direct father or from hooks. This way we can avoid unexpected side effects, as well as enhance testability of the UI code. An important highlight to do here is that a company will never have a bug related to logic if it is not holding any logic
 - This app was created with CRA, so it can be ejected anytime for advanced env/build control
 - Pages (and page folders) will not be treated as containers for multiple pieces of code, as this only happens with domain and shared folders. Pages will be treated as normal components, with the difference that they will be rendered when we reach certain routes. That said, components and pages will use the same naming conventions, coding patterns, testing approach, etc
 - Every folder that is grouping code will have an 'index' file re-exporting them all under a single 'namespace'. Alongside with the idea of having domain and shared namespaces, we have 'baseUrl' set to project root on __tsconfig.json__ which means we can avoid confusing paths while we can use absolute imports within the project
 - Scaling this app's structure is a matter of identifying what the feature will require (e.g component, theme, icon, page, model, etc), and if these pieces will be domain related or shared.
 - Every UI element is a component, which means everything can be easily found, shared, tested, updated, etc. Doing things that way requires more time to craft each component, but later, it becomes faster to create applications. With a good set of battle-tested shared components, interfaces will be more assembled than developed
 - The shared/icons folder is to be holding hand-crafted icons provided by the UI/UX team. Icons in there will be converted to React components (icons are React components) so we can have more control over them (set variations, update at run-time, animate, run unit test over possibilities, etc.). In a scenario where we need a huge amount of icons (e.g: more than 15 icons for an application), then the suggested approach would be considering a known icons library by default, leaving the idea of 'icons as components' for just a few specific cases
 - This application doesn't have a folder called 'assets' as this folder can interfere in application scalability. In this case, images, icons and assets in general will be inside its own folder belonging to its own application module/domain
 - If a domain component needs sub-components that are not on the 'shared' folder, it can have a 'sub-components' folder and store it there. It is also important to remember that sub-components have the potential to becoming a shared component

# Tooling

This application uses CRA for bundling and running in development mode. It also uses a babel plugin (__babel-plugin-styled-components__) for parsing styled components with nicer class names, helping to debug the application. For having babel plugins without ejecting the application, the tools __react-app-rewired__ and __customize-cra__ have been installed as dev dependencies.

### What this app features

 - Component-first approach
 - Linting - TBD
 - Testing - TBD
 - Routing - TBD
 - Animations - TBD
 - State management w/ Redux Toolkit + service hooks - TBD
 - Responsiveness - TBD

### Out of scope (could be added in a real app)
 
 - Translation
 - Global alerts
 - Registering/Login
 - Pagination/Navigation/Search
 - UI feedback for messages/errors 
 - Dark/Light mode toggling
 - Mapping of possible errors + global error handling
 - etc

