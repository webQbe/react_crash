# React 18 Crash Course

- Creating a front-end for a job listing website    
- Components, Props, State, Hooks, Data Fetching, etc.
- Creating multi-page app with React Router
- Creating mock REST API for back-end with JSON Server library

## What is React?

- React is a Javascript library/framework for building user interfaces. It was created and maintained by Facebook.
- Websites / UIs are looked at in terms of components.
- React is currently the most popular out of the major front-end frameworks.
- React allows us to build very dynamic and interactive websites and user interfaces.
- Very fast, especially with the new compiler.
- There is a huge ecosystem from Next.js to React Native.
- Best framework to learn to get a job.

## Components

- Reusable piece of code that can be used to build elements on the page.
- Allows us to break down complex UIs, which makes them easier to maintain and scale.
- Components can get `props` passed in and can hold their own own `state`

## State

- State represents the data that a component manages internally.
- This could be form input data, fetched data, UI-related data like if a modal is open/close.
- There is also global state, which relates to the app as a whole and not a single component.

## Hooks 
Allows us to use state and other React features within functional components.

- `useState`
- `useEffect`
- `useRef`
- `useReducer`

`useContext`, `useMemo`, & `useCallback` will be phased out in React 19


## JSX (JavaScript Syntax Extension)

An HTML-like syntax within JavaScript (components)

`const Hero = ({
    title = 'Become a React Dev',
    subtitle = 'Find the React job that fits your skills and needs'
}) => {
    return (
        <section className='bg-indigo-700 py-20 mb-4'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                        {title}
                    </h1>
                    <p className="my-4 text-xl text-white">
                        {subtitle}
                    </p>
                </div>
            </div>
        </section>    
        );
};

export default Hero;`


## SPA, SSR & SSG

- **Single Page App (SPA):** Load a single HTML file and JavaScript loads the entire UI including routes.
- **Server-Side Rendered(SSR):** Server sends fully rendered page to client. You can fetch data and load it as well.
- **Static Site Generation:** React generates static HTML files at build time. These are very fast.
  
## Vite

- Vite is a super fast front-end toolkit that can be used for all kinds of JS projects including React.
- It is built on top of `ESBuild`, which is a very fast JS bundler.
- Fast development server with hot-reload.
- Installed with `npm create vire@latest`

## Building Job Listing Website

- This is a single page application
- Data will be fetched from mocked JSON server back-end
- Website theme created with Tailwind CSS
- Home page includes hero, navbar, boxes with job listings
- Separate page for each job listing with job details, company info and buttons to edit/update and delete listing.
- Add Job page to add a new job listing

## Getting Started

1. Download and Install **Node.js**

2. Install **React Developer Tools** browser extension

3. Install Vite on terminal:
    - Run `npm create vite@latest <project_directory_name>`
    - Select `React` & Enter
    - Select `JavaScript` & Enter

4. Update `vite.config.js` file:
    - Add `server: { port: 3000, }` to `defineConfig()`

5. Install dependencies:
    - Open terminal and run `npm install`

6. Run sever with `npm run dev`

7. Add snippets easily to generate components
    - Install & Enable `ES7+ React/Redux/React-Native` VSCode extension

8. Install Tailwind, PostCSS, & Autoprefixer
    1. `npm install -D tailwindcss postcss autoprefixer`
    2. Init Tailwind: `npx tailwindcss init -p`
    3. Modify `tailwind.config.js` file:
         


