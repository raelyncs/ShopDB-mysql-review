var connection = require('./index.js')

// step 3: Create a seeding function in database/seed.js to populate table with at least 5 records

var groceryItems = [
  {
    name: 'apples',
    price: 1,
    quantity: 10
  },
  {
    name: 'cereal',
    price: 5,
    quantity: 1
  },
  {
    name: 'tequila',
    price: 40,
    quantity: 2
  },
  {
    name: 'cheese',
    price: 6,
    quantity: 5
  },
  {
    name: 'gatorade',
    price: 3,
    quantity: 12
  },

]


var seeder = function(groceryItems) {
  //for each grocery item
    // destructure
    // right query string
    // perform insertion to database
  groceryItems.forEach(item => {
    var { name, price, quantity } = item;
    var queryStr = `INSERT INTO groceries (name, price, quantity) VALUES ("${name}", ${price}, ${quantity})`;
    connection.query(queryStr, (err, results) => {
      if (err) {
        console.log(error);
      } else {
        console.log('seeder insertion complete!', results)
      }
    })
  })
}

// call our seeder function
seeder(groceryItems);