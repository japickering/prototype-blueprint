# Blueprint SDK for Next.js with Typescript and Jest testing support

Do not modify the main branch.
Instead create a new develop branch to make changes. Then follow these steps:

- Download and install the latest LTS version of Node for your OS.
  https://nodejs.org/en

- Open a new terminal or Power Shell on windows.
  Then verify that Node and NPM was installed globally.
  Note: npx is optional for this case, but comes in handy when scaffolding a brand new React app from scratch.

```bash
node -v
npm -v
npx -v
```

- Install all the npm dependencies specified in package.json into your project folder.

```bash
npm install
```

- Run git status. You should see node_modules installed and a package-lock.json file within the project main folder.

```bash
git status
```

- At this point you can run the local dev server. It uses Webpack to create a bundle to serve your application.

```bash
npm run dev
```

- To create an optimised production ready build. It is good practice to do the following:
  Run the linter, then the build command.

```bash
npm run lint
npm run build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
