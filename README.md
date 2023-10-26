## Lessons
1. create Angular app
  1. create project's folder
  2. install @angular/cli
  3. create App as frontend
2. Add Header
  1. generate component
  2. add html
  3. add css

3. List Foods
  1. create food model
  2. create data.ts
    1. add sample foods
  3. add images to assests
  4. create food service
  5. create home component
    1. add ts
    2. add html
    3. add css

4. search
  1. add method to food service
  2. add search route
  3. show search result in Home Component
  4. Generate search Component
    1. Generate Search Component
    2. Add ts
    3. add html
    4. add css
    
5. Tags Bar
  1. Create Tag model
  2. Add sample tags to data.ts
  3. food service
    1. add get all tags method
    2. add get all foods by tag method
  4. add tags route
  5. show tags result in Home component
  6. generate tags component
    1. add to home component
    2. add ts
    3. add html
    4. add css

6. Food Page
  1. add method to food service
  2. generatefood page component
    1. add route
    2. add ts
    3. add html
    4. add css

7. Cart Page
  1. create CartItem Model
  2. create cart model
  3. generate cart service
  4. add to cart button in food page
  5. generate cart page component
    1. add route
    2. add ts
    3. add html
    4. add css

8. Not Found!
  1. Generate component
    1. add tss
    2. add html
    3. add css
  2. add to pages
    1. home page
    2. food page
    3. cart page

9. connect to backend
    1. create backend folder
    2. npm init
    3. npm install typescript
    4. create tsconfig.json
    5. create .ignore
    6. copy data.ts to backend/src
    7. npm install express cors
    8. create server.ts
        1. install @types
        2. app APIs
    9. npm install nodemon ts-node --save-dev
    10. add urs.ts to frontend
    11. add HttpClient module
    12. update food service

10. Login page
    1. generate component
        1. add to routes
        2. add ts
        3. add html
            1. import reactive forms module
        4. add css
    2. add login api
        1. use json
        2. add jsonwebtoken
        3. test using postman
    3. generate user service
        1. generate user model
        2. add user subject
        3. add login method
            1. add user urls
            2. generate IUserLogin interface
            3. add ngx-toaster
                1. import Module
                2. import BroswerAnimationsModule
                3. add syles in angular.json
            4. add header
        4. add local storage
        5. add logout method
            1. add to header

11. make components for login page
  1. input container
  2. input validation
  3. text input
  4. default button

12. Connect Login API To MongoDB Atlas
  1. Moving Apis into routers
  2. Create MongoDB Atlas
  3. Create .env file
  4. Install
    1. mongoose
    2. dotenv
    3. bcryptjs
    4. express-async-handler
  5. Connect to MongoDB Atlas
  6. Use MongoDB instead of data.ts in apis

13. Register User
  1. Add Register api
  2. Add Register service method
  3. Add Register link
  4. Add Register Component

14. Loading!

Add Image
Add Component
Add Service
Add Interceptor
Checkout Page

Create Order Model
Create Checkout Page Component
Add To Router
Add User to User Service
Add Cart to Cart Service
Create Order Items List Component
Adding Map To The Checkout Page
Add Leaflet npm package
Add @types/leaflet
Add Css to angular.json
Add AddressLatLng to Order Model
Create Map component
Add to checkout page
Add TS
Change app-map selector to map
Add Html
Add CSS
Add Auth Guard
Save Order
Add Order Model
Add Order Status Enum
Add Auth Middleware
Add Order Router
Add create API
Add Order Urls to urls.ts
Add Order Service
Add create Method
Add Auth Interceptor
Payment Page

Generate Component
Add 'getOrderForCurrentUser' api
Add Order Service method
Connect Component to Service
Make the map component readonly
Adding Paypal

Generate Component
Add to payment page
Get Paypal client Id
Add Paypal JS to index.html
Set up Paypal button
Add Pay api to order router
Get Paypal sandbox account
Order Track Page

Generate Component
Add to routes
Add API
Add to urls.ts
Add method to order.service
Add HTML
Add CSS
