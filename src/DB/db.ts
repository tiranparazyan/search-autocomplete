export interface SearchProps {
  text: string;
  location: "db" | "localStorage";
}

export const initialSearch: SearchProps[] = [
  {
    text: "C class",
    location: "db",
  },
  {
    text: "Audi A4",
    location: "db",
  },
  {
    text: "Toyota Corolla",
    location: "db",
  },
  {
    text: "Pepperoni pizza",
    location: "db",
  },
  {
    text: "Cheeseburger",
    location: "db",
  },
  {
    text: "Fried chicken",
    location: "db",
  },
  {
    text: "Spicy fried chicken",
    location: "db",
  },
  {
    text: "Montreal",
    location: "db",
  },
  {
    text: "Sao Paulo",
    location: "db",
  },
  {
    text: "Rio de Janeiro",
    location: "db",
  },
];

export interface DataProps {
  description: string;
  title: string;
  category: string;
  link: string;
}

export const data: DataProps[] = [
  // cars data
  {
    description: "Mercedes Benz C class, the compact sedan",
    title: "C Class",
    category: "cars",
    link: "https://en.wikipedia.org/wiki/Mercedes-Benz_C-Class",
  },
  {
    description: "Mercedes Benz E class, the mid-size sedan",
    title: "E Class",
    category: "cars",
    link: "https://en.wikipedia.org/wiki/Mercedes-Benz_E-Class",
  },
  {
    description: "Mercedes Benz S class, the luxury sedan",
    title: "S Class",
    category: "cars",
    link: "https://en.wikipedia.org/wiki/Mercedes-Benz_S-Class",
  },
  {
    description: "Audi A4, the compact sedan",
    title: "Audi A4",
    category: "cars",
    link: "https://en.wikipedia.org/wiki/Audi_A4",
  },
  {
    description: "Audi A6, the mid-size sedan",
    title: "Audi A6",
    category: "cars",
    link: "https://en.wikipedia.org/wiki/Audi_A6",
  },
  {
    description: "Audi A8, the luxury sedan",
    title: "Audi A8",
    category: "cars",
    link: "https://en.wikipedia.org/wiki/Audi_A8",
  },
  {
    description: "BMW 3 series, the sports sedan",
    title: "BMW 3 series",
    category: "cars",
    link: "https://en.wikipedia.org/wiki/BMW_3_Series",
  },
  {
    description: "BMW 5 series, the executive sedan",
    title: "BMW 5 series",
    category: "cars",
    link: "https://en.wikipedia.org/wiki/BMW_5_Series",
  },
  {
    description: "BMW 7 series, the luxury sedan",
    title: "BMW 7 series",
    category: "cars",
    link: "https://en.wikipedia.org/wiki/BMW_7_Series",
  },
  {
    description: "Tesla Model 3, the affordable electric car",
    title: "Tesla Model 3",
    category: "cars",
    link: "https://en.wikipedia.org/wiki/Tesla_Model_3",
  },
  {
    description: "Tesla Model S, the luxury electric car",
    title: "Tesla Model S",
    category: "cars",
    link: "https://en.wikipedia.org/wiki/Tesla_Model_S",
  },
  {
    description: "Tesla Model X, the SUV electric car",
    title: "Tesla Model X",
    category: "cars",
    link: "https://en.wikipedia.org/wiki/Tesla_Model_X",
  },
  {
    description: "Toyota Camry, the mid-size sedan",
    title: "Toyota Camry",
    category: "cars",
    link: "https://en.wikipedia.org/wiki/Toyota_Camry",
  },
  {
    description: "Toyota Corolla, the compact sedan",
    title: "Toyota Corolla",
    category: "cars",
    link: "https://en.wikipedia.org/wiki/Toyota_Corolla",
  },
  {
    description: "Toyota RAV4, the SUV",
    title: "Toyota RAV4",
    category: "cars",
    link: "https://en.wikipedia.org/wiki/Toyota_RAV4",
  },

  // food data
  // Food objects
  {
    description: "Pepperoni pizza, a classic Italian dish",
    title: "Pepperoni pizza",
    category: "food",
    link: "https://en.wikipedia.org/wiki/Pepperoni_pizza",
  },
  {
    description: "Hawaiian pizza, topped with ham and pineapple",
    title: "Hawaiian pizza",
    category: "food",
    link: "https://en.wikipedia.org/wiki/Hawaiian_pizza",
  },
  {
    description:
      "Vegetarian pizza, a meat-free option with assorted vegetables",
    title: "Vegetarian pizza",
    category: "food",
    link: "https://en.wikipedia.org/wiki/Vegetarian_pizza",
  },
  {
    description: "Hamburger, a classic American sandwich",
    title: "Hamburger",
    category: "food",
    link: "https://en.wikipedia.org/wiki/Hamburger",
  },
  {
    description: "Cheeseburger, a hamburger topped with cheese",
    title: "Cheeseburger",
    category: "food",
    link: "https://en.wikipedia.org/wiki/Cheeseburger",
  },
  {
    description: "Double cheeseburger, a burger with two layers of cheese",
    title: "Double cheeseburger",
    category: "food",
    link: "https://en.wikipedia.org/wiki/Cheeseburger#Double_cheeseburger",
  },
  {
    description: "Salmon sushi, a popular sushi variety with fresh salmon",
    title: "Salmon sushi",
    category: "food",
    link: "https://en.wikipedia.org/wiki/Sushi#Salmon",
  },
  {
    description: "Tuna sushi, a sushi roll made with flavorful tuna",
    title: "Tuna sushi",
    category: "food",
    link: "https://en.wikipedia.org/wiki/Sushi#Tuna",
  },
  {
    description: "Eel sushi, sushi featuring delicious grilled eel",
    title: "Eel sushi",
    category: "food",
    link: "https://en.wikipedia.org/wiki/Sushi#Eel",
  },
  {
    description:
      "Original recipe fried chicken, a classic fried chicken recipe",
    title: "Original recipe fried chicken",
    category: "food",
    link: "https://en.wikipedia.org/wiki/Fried_chicken#Original_recipe",
  },
  {
    description: "Spicy fried chicken, fried chicken with a kick of spice",
    title: "Spicy fried chicken",
    category: "food",
    link: "https://en.wikipedia.org/wiki/Fried_chicken#Spicy",
  },
  {
    description:
      "Honey mustard fried chicken, fried chicken with a tangy honey mustard flavor",
    title: "Honey mustard fried chicken",
    category: "food",
    link: "https://en.wikipedia.org/wiki/Fried_chicken#Honey_mustard",
  },

  // City objects
  {
    description: "New York City, the most populous city in the United States",
    title: "New York City",
    category: "city",
    link: "https://en.wikipedia.org/wiki/New_York_City",
  },
  {
    description: "Los Angeles, the second-largest city in the United States",
    title: "Los Angeles",
    category: "city",
    link: "https://en.wikipedia.org/wiki/Los_Angeles",
  },
  {
    description: "Chicago, the third-most populous city in the United States",
    title: "Chicago",
    category: "city",
    link: "https://en.wikipedia.org/wiki/Chicago",
  },
  {
    description: "Toronto, the most populous city in Canada",
    title: "Toronto",
    category: "city",
    link: "https://en.wikipedia.org/wiki/Toronto",
  },
  {
    description: "Montreal, the second-most populous city in Canada",
    title: "Montreal",
    category: "city",
    link: "https://en.wikipedia.org/wiki/Montreal",
  },
  {
    description: "Vancouver, a major city in western Canada",
    title: "Vancouver",
    category: "city",
    link: "https://en.wikipedia.org/wiki/Vancouver",
  },
  {
    description: "Mexico City, the capital and largest city of Mexico",
    title: "Mexico City",
    category: "city",
    link: "https://en.wikipedia.org/wiki/Mexico_City",
  },
  {
    description: "Guadalajara, the second-largest city in Mexico",
    title: "Guadalajara",
    category: "city",
    link: "https://en.wikipedia.org/wiki/Guadalajara",
  },
  {
    description: "Monterrey, a city in northeastern Mexico",
    title: "Monterrey",
    category: "city",
    link: "https://en.wikipedia.org/wiki/Monterrey",
  },
  {
    description: "Sao Paulo, one of the prettiest cities in Brazil",
    title: "Sao Paulo",
    category: "city",
    link: "https://en.wikipedia.org/wiki/S%C3%A3o_Paulo",
  },
  {
    description: "Rio de Janeiro, a vibrant coastal city in Brazil",
    title: "Rio de Janeiro",
    category: "city",
    link: "https://en.wikipedia.org/wiki/Rio_de_Janeiro",
  },
  {
    description: "Salvador, a historic city in Bahia, Brazil",
    title: "Salvador",
    category: "city",
    link: "https://en.wikipedia.org/wiki/Salvador,_Bahia",
  },
];
