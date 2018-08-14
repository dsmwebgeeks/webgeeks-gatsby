# Des Moines Web Geeks

Built with [Gatsby](https://gatsbyjs.org).

Pulls data from our WordPress website, http://dsmwebgeeks.com.

## Development

```sh
yarn
yarn develop
```

## Deployment

Install the [now CLI](https://zeit.co/now), and run:

```sh
now
```

You can then paste the link from your clipboard (or from the terminal) into the browser to verify that the deploy is complete. When satisfied, alias the latest deployment to the address `https://dsmwebgeeks.now.sh`:

```sh
now alias
```

**Note**: You will need to be a member of the DSM Web Geeks team on Zeit, and have the team account active in your terminal. If it complains about the alias being in use, try switching accounts with `now switch`.
