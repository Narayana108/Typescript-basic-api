# Bubble sort array api
This app runs an api which has one endpoint at `/`, if you post a body with an array it does the following:
bubble sorts, removes `null` and `undefined values` and flattens the array.
Written in typescript

# Npm run commands
### npm run build: Clean and rebuild the project
### npm run fix: Try to automatically fix any linting problems
### npm run test: Lint and unit test the project
### npm run watch: Watch and rebuild the project on save, then rerun relevant tests
### npm run cov: Rebuild, run tests, then create and open the coverage report
### npm run build-start: Clean, build, test, lint, if pass then run server.js
### npm run start: Start server

### Read `package.json` for the full list of commands and descriptions

# Run in Docker 
```
docker-compose up
```

# Test 
### Post request with curl
```bash
curl --header "Content-Type: application/json" --request POST --data '[1, 3, 8, 5, [[2], 7], null, 4,2]' http://localhost:3000/
```

Output:
```
[1,2,2,3,4,5,7,8]
```
