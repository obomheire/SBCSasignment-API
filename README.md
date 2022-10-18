#### 1.  Clone the repo: https://github.com/obomheire/SBCSasignment-API.git

#### 2. Install dependencies: run ( npm install or yarn )

#### 3. Build/Compile the app: run ( npm run build / yarn build or npm run tsc / yarn tsc )

#### 4. Start the server: run ( npm run start or yarn start )

#### 5. NB: To compile and start the app at the same time in a watch mode, run ( npm run dev or yarn dev )

#### 6. To run the test: run ( npm run test / yarn test or npm run jest / yarn jest )

#### 7. To run the test in watch mode: run ( npm run jest --watch or yarn jest --watch )

###  API Endpoints

#### 1. API Landing Route:

##### To access the API landing page, make a GET request to localhost:3000/

##### Request url:

##### localhost:3000/

##### Response body:

##### { "status": "Running", "message": "Hello from microservices API"}

#### 2. API Login Route:

##### To login, make a POST request to localhost:3000/api/v1/users/login

##### Request url:

##### localhost:3000/api/v1/users/login

##### Request body:

##### { "email":"test@gmail.com", "password": "Secret@123"}

##### Response body:

##### { "success": true, "Message": "User successfully login", "token": "token"}

#### 3. API Registration Route:

##### To register new user: make a post request to localhost:3000/api/v1/users/register

##### Request url:

##### localhost:3000/api/v1/users/register

##### Request body:

##### { "name": "Test User2", "email": "test2@gmail.com", "password": "Secret@123" }

##### Response body:

##### { "Message": "User successfully created!"}

#### 4. API Random Quotes:

##### To get random quote, login from the login route. Copy the token in the response body and paste it in the Authorization > Bearer Token > Token tab of the GET Quotes route and make a GET request to localhost:3000/api/v1/random/quote

##### Request url:

##### localhost:3000/api/v1/random/quote

##### Response body:

##### { "quote": { "text": "Genius is one percent inspiration and ninety-nine percent perspiration.", "author": "Thomas Edison" }}