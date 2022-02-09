# TodoMVC with EdgeDB and Next.js

## The branches

- `main` — the completed version of the app
- `incomplete` — the incomplete version of the app

## Get started

- git clone

- TypeScript
- React
- Next.js
- [EdgeDB](https://edgedb.com/) (1-beta.2)
- The `edgedb` NPM module ([docs](https://www.edgedb.com/docs/clients/01_js/index/))
- [react-query](https://github.com/tannerlinsley/react-query) for fetching
- [Axios](https://github.com/axios/axios) for HTTP

### Clone the repo

```sh
$ git clone git@github.com:edgedb/simpletodo.git
$ cd simpletodo
$ yarn
```

### Initialize the project

Install the `edgedb` CLI if you haven't already

```bash
# macOS/Linux
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.edgedb.com | sh

# Windows
PS> iwr https://ps1.edgedb.com -useb | iex
```

Then initialize the project. Run the following command from the project root.

```bash
$ edgedb project init
```

This does a few things:

1. It installs EdgeDB if it isn't already installed on your computer.
2. It prompts you to create or select a local EdgeDB instance to be used for this project.
3. It automatically applies all migrations inside `dbschema/migrations`.

The database is now fully configured and ready for use!

### Start the server

Start the server.

```bash
$ yarn dev
```

Then go to [localhost:3000](http://localhost:3000), and creating some todos, and start looking through the code to learn how to build applications with EdgeDB!
