**<h2>Shop cart Project</h2>**
**<h3>Description:</h3>**
Shopmart (this is a fictional company), is one of the largest retailers in Canada with over 200 stores nationwide. Presently, they don’t have an Internet presence. However, because of all the stringent social distancing measures implemented globally, they have decided to create an online store, showcasing their wide variety of products, ranging from appliances to video games.

**<h3>Application Architecture:</h3>**
Built in accordance with the MVC with service layer design pattern. 

**<h3>Endpoints</h3>**
- All communication to and from the API must occur using JSON format. 
- The API expects to receive any request payload data as JSON
- The API will always respond to a client request with JSON 
- When the API responds to client requests, the API must always return an appropriate status code in its header.  You must use the codes per the discussion in class.
- The name of the endpoints MUST adhere to the conventions discussed in class. 

**<h3>Assignment 1</h3>**
**1. Customer endpoints**
- register unique customer
- retrieves all customers
- retrieves a specific customer by id
- update a customer by id
- delete a customer by id

**2. Product endpoints**
- create a product
- retrieves all products
- retrieves all product categories in the database
- retrieves all products that belongs to a specific product category
- retrieves all products marked as bestsellers
- retrieves a specific product by id
- update a specific product by id
- delete a specific product by id