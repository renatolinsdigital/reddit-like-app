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

 - Every shared component MUST be a presentation/stateless component, meaning that wont hold logic by themselves but rather get data from either a direct father or from hooks. This way we will have components that are easy to maintain, test, share, etc. For the sake of convenience and enhanced developer experience, one line logic (one-liners) are allowed to be coded within components, however, the ideal is to convert one-liners into utilities
 - In this app, we can consider the idea of 'composition over inheritance' while using these components - in this case, shared components can be used to build both domain and shared components
 - Domain components can have logic for handling both UI(e.g onClick) and lifecycle events, but they should not be used to transform data or hold specific business related logic as these things are for util functions or custom hooks. For example, if we need to transform a date and display a text based on the parsed date, we would have a date util and a custom hook (for displaying domain related texts based on that date)
 - This app was created with CRA, so it can be ejected anytime for advanced tooling control
 - Pages (and page folders) will not be treated as containers for multiple pieces of code, as this only happens with domain and shared folders. Pages will be treated as normal components, with the difference that they will be rendered when we reach certain routes. That said, components and pages will use the same naming conventions, coding patterns, testing approach, etc
 - Every folder that is grouping code will have an 'index' file re-exporting them all under a single 'namespace'. Alongside with the idea of having domain and shared namespaces, we have 'baseUrl' set to project root on __tsconfig.json__ which means we can avoid confusing paths while we can use absolute imports within the project
 - Scaling this app's structure is a matter of identifying what the feature will require (e.g component, theme, icon, page, model, etc), and if these pieces will be domain related or shared.
 - Every UI element is a component, which means everything can be easily found, shared, tested, updated, etc. Doing things that way requires more time to craft each component, but later, it becomes faster to create applications. With a good set of battle-tested shared components, interfaces will be more assembled than developed
 - The shared/icons folder is to be holding hand-crafted icons provided by the UI/UX team. Icons in there will be converted to React components (icons are React components) so we can have more control over them (set variations, update at run-time, animate, run unit test over possibilities, etc.). In a scenario where we need a huge amount of icons (e.g: more than 15 icons for an application), then the suggested approach would be considering a known icons library by default, leaving the idea of 'icons as components' for just a few specific cases
 - If a domain component needs sub-components that are not on the 'shared' folder, it can have a 'sub-components' folder and store it there. It is also important to remember that sub-components have the potential to becoming a shared component
 - The way I work, nothing will be simple to create, but the intention is that it will be simple to understand, update and scale

# Tooling + dependencies

- Create React App: bundling and running in development mode
- babel-plugin-styled-components: for parsing styled components with nicer class names, helping to debug the application. 
- react-app-rewired + customize-cra: For having babel plugins without ejecting the application

# State and data management

- This application is mocked, so every data displayed is just representative, inclusive the API data itself
- As long as we are not dealing with a parameterized API, all data will be queried at once and then filtered within the app
- A fake user is being put into the store, but it is just to illustrate how logged user information could be used across the application. This app doesn't cover authentication features
- For the sake of avoiding extra complexity regarding data transformations, all models that are common to both API and the app will be exactly the same. In this case, if the API is returning a field with snake case (eg: __created_at__), the Typescript model will follow that, even though camel case is the standard for Javascript and Typescript
- Lifting state + prop drilling between sibling components or components with sub-components is perfectly fine. We need some room not to make development too verbose, as well as criteria not to write code that is hard to maintain

# Features, approaches and techniques

- API will hold original data in a way it will not be changed by this application, store will just hold copies of back-end data
- Filters will be copies of the fetched value so that components can safely transform and exchange data
- The Search by text text will be a filter against post title, author, category and url
- There are buttons for ordering by both the most upvoted and the most commented posts. As this application is just a tech demo, these types of ordering will be considered enough

### Implemented

 - Component-first approach: With the help of Styled components, every UI element is mapped to a component
 - State management: Example of storing user data with Redux toolkit
 - Data fetching with Axios + Async chunks handled by Redux Toolkit
 - Linting with ESLint for code styling check + prettier as code formatter. Linting configurations here are minimum, basic and therefore illustrative
 - Configurations related to GIT: The tool Husky is configured in such a way that linting + formatting will be triggered when making commits. For this to run, you might want to run ```npx husky add .husky/pre-commit "yarn lint:fix && yarn format"```

Ps. For linting and formatting to work while saving files, the VS Code settings.json should have:

```
    "editor.codeActionsOnSave": {"source.fixAll.eslint": true},
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
```

### Responsiveness

This application uses a custom hook called __useResponsiveBooleans__ for delivering responsive behavior. It is responsible of working with both application's pre-defined break points and __mobile-detect__ library for exposing size information based on Javascript instead of media queries or css mixins. With that in mind, we will be basically updating sizes and orientations based on values exposed by a custom hook. Some advantages of this approach are:

 * All break-points + size ranges will be abstracted. Once we have sizes mapped to booleans, developers will only have make components react to these booleans without even caring about exact sizes
 * There will be no need to touch CSS, specially in a component-first approach where components will handle values informed
 * It will work fine for applications that are heavily relying on mobile behavior and/or would be ported to an actual mobile app created with Javascript
 * Booleans will deliver a consistent sizing notion, both designers and developers call talk about this same booleans (that can be renamed as needed) and the components will adapt within a well known set of possibilities

Regarding the usage, we simply grab hook values like so:

```const {
    isSmall, // is in mobile mode (as per device detection) or small screens in desktops
    isSmaller, // window width < 560px or small screen in desktops. This size also represents when the entire app could be rotated
    isSuperSmall, // screen width or height (either one) <= 375px
    isInMobileMode, // mobile or tablet device detected
    isDesktopBigScreen, // not in mobile mode and screen size is >= 1280px
    isDesktopSmallScreen, // not in mobile mode and screen size is < 1280px
   } = useResponsiveBooleans();
```

Then we just pass values to our components already making our calculations:

```
<MyComponent maxWidth={isSuperSmall ? 255 : 290} />
```

### What was not done (TODOS)

- Parsing __created_at__ field in a way we can see how many minutes/hours/days/months/years ago the post was created. This information is hard coded at this moment
- Testing: Configure Jest + Typescript + React testing library to run smoothly with no warning and stuff. Testing would require unit test for all functions and integration tests(logic + template rendering checks) for all of the components created. Doing this should not be too complex with Jest + React testing library, but it would __cost__ a considerable amount of time and effort
- Creating filters with dates as it requires an interface for inputting date ranges and then running data transformations, which again would __cost__ a considerable amount of time and effort

### Out of scope (but could also be done)
 
 - Routing
 - Animations
 - Breadcrumbs
 - Translation
 - Slider/main menu
 - Dark/Light mode toggling
 - Authentication/Authorization
 - Infinite Scroll and/or Pagination
 - UI feedback using toastr messages
 - Full Redux/Toolkit store implementation
 - Creating full professional and modern blog UI interface
 - Error handling managed by a robust error handling approach
 - Interacting with an actual blog API and allow posts to be created
 - etc