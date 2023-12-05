This is a Test Task project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, you need to create .env file in root directory if it is not available then otherwise
update the variable name or make variable and name is :
NEXT_PUBLIC_API_URL = URL that gives me in the Task

run the development server using any one of below command:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

So in that project i am creating folder for reusable component and the Folder name is:-

1.Container (combination of components and use on the main pages)
2.Components (for making a reusable component)
3. hooks (to make hooks by ourself)

## Component Folder have

1. Footer
2. Header
3. Loader
4. ProductItem
5. ProductList
6. SearchBar

## Container Folder have

1. ProductContainer

## Hooks Folder have

1. useDebounceHook

## utils Folder have

1. api (For Interceptor)

## redux Folder have

1. saga [For Generators]
2. reducers [for reducers where we have initial state]
3. types [types of actions]
4. actions [what action need for manipulate the state]
5. store is combination of reducers saga [where we can manage state globally]
