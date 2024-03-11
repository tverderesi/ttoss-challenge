# ttoss-challenge

This is my solution to the ttoss-challenge.

## Solution

_Upcoming_

## Building and running the package

**Ensure you have a mongo server installing and running. You can either use it installed in your local system, using MongoDB Atlas, or via Docker.**

1. Create of copy of .env.example and name it as .env.production both in the apps/client and apps/server folder.
2. Fill in the fields appropriately.
3. Navigate to `apps/server` (i.e. `cd apps/server`) in your terminal. Run `npm run build`. Wait for it to finish.
4. Navigate to `apps/client` (i.e. `cd ../client`) in your terminal. Run `npm run build`. Wait for it to finish.
5. Ensure that the `serve` package is installed globally. If it isn't, install it by using `npm i serve -g`.
6. navigate to the root of the project (i.e. `cd ../..`) and run `turbo start`. The server and package should be running.
