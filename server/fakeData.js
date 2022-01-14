const restaurants = [
  {
    type: "Home",
    name: "Sip a Soup",
    description: "Sip a soup to warm your soul!",
    foodCategory: "Main",
    menu: {
      appetizers: { name: "Soup Crackers", price: "0.99" },
      mains: { name: "Potato Bacon", price: "10.99" },
      desserts: { name: "Chocolate Chip Cookie", price: "0.50" },
    },
    address: {
      address: "123 Soup Lane",
      city: "Calgary",
      province: "Alberta",
      prepArea: "",
    },
  },
  {
    type: "Home",
    name: "British Bangers",
    description: "I'm here for the tea and crumpets.",
    foodCategory: "Main",
    menu: {
      menuCategory: {
        appetizers: { name: "Crumpets", price: "1.99" },
        mains: [
          { name: "Shepherd's Pie", price: "14.99" },
          { name: "Fish n Chips", price: "17.99" },
        ],
        desserts: { name: "Figgy Pudding", price: "5.99" },
      },
    },
    address: {
      address: "123 Queen Elizabeth Road",
      city: "Calgary",
      province: "Alberta",
      prepArea: "",
    },
  },
  {
    type: "Home",
    name: "Miss Muffet's Muffins",
    description: "Ain't nuffin like a muffin!",
    foodCategory: "Main",
    menu: {
      menuCategory: {
        appetizers: { name: "Mini Muffin", price: "0.99" },
        mains: { name: "Carrot Muffin", price: "12.99" },
        desserts: { name: "Cinnamon Roll Muffin", price: "4.99" },
      },
    },
    address: {
      address: "88 Drury Lane",
      city: "Calgary",
      province: "Alberta",
      prepArea: "",
    },
  },
  {
    type: "Home",
    name: "Glazed and Confused",
    description: "Dude, I donut know where my car is?",
    foodCategory: "Dessert",
    menu: {
      menuCategory: {
        appetizers: { name: "Cake Pops", price: "1.99" },
        mains: { name: "Maple Bacon Donut", price: "2.99" },
        desserts: { name: "Donut Tower", price: "40.00" },
      },
    },
    address: {
      address: "4321 Lost Lane",
      city: "Calgary",
      province: "Alberta",
      prepArea: "",
    },
  },
  {
    type: "Home",
    name: "I Got Cake",
    description: "You need cake? I got cake.",
    foodCategory: "Dessert",
    menu: {
      menuCategory: {
        appetizers: { name: "Small Cake", price: "10.99" },
        mains: { name: "Wedding Cake", price: "1000.99" },
        desserts: { name: "Fudge", price: "0.99" },
      },
    },
    address: {
      address: "777 Calorie Court",
      city: "Calgary",
      province: "Alberta",
      prepArea: "",
    },
  },
  {
    type: "Commissary",
    name: "Laddoo Temple",
    description: "Let's celebrate!",
    foodCategory: "Dessert",
    menu: {
      menuCategory: {
        appetizers: { name: "Chaat", price: "5.99" },
        mains: { name: "Laddoo Tower", price: "10.99" },
        desserts: { name: "Cinnamon Laddoo", price: "1.99" },
      },
    },
    address: {
      address: "1 Commissary Street",
      city: "Calgary",
      province: "Alberta",
      prepArea: "01",
    },
  },
  {
    type: "Commissary",
    name: "Good Noodle",
    description: "Noodles that are good.",
    foodCategory: "Main",
    menu: {
      menuCategory: {
        appetizers: { name: "Dumplings", price: "2.99" },
        mains: { name: "Tonkatsu Ramen", price: "10.99" },
        desserts: { name: "Mochi", price: "0.99" },
      },
    },
    address: {
      address: "1 Commissary Street",
      city: "Calgary",
      province: "Alberta",
      prepArea: "02",
    },
  },
  {
    type: "Commissary",
    name: "Ketolicious",
    description: "Does this have carbs?",
    foodCategory: "Main",
    menu: {
      menuCategory: {
        appetizers: { name: "Cheese", price: "1.99" },
        mains: { name: "Charcuterie Platter", price: "20.99" },
        desserts: { name: "Keto Ball", price: "7.99" },
      },
    },
    address: {
      address: "1 Commissary Street",
      city: "Calgary",
      province: "Alberta",
      prepArea: "03",
    },
  },
  {
    type: "Commissary",
    name: "Gilded Wiener",
    description: "Wieners dressed in their Sunday best",
    foodCategory: "Main",
    menu: {
      menuCategory: {
        appetizers: { name: "Vienna Sausage", price: "3.99" },
        mains: { name: "24k Gold Sausage", price: "75.99" },
        desserts: { name: "Caramel Sausage", price: "0.99" },
      },
    },
    address: {
      address: "1 Commissary Street",
      city: "Calgary",
      province: "Alberta",
      prepArea: "04",
    },
  },
  {
    type: "Commissary",
    name: "Crumbs",
    description: "C is for Cookie.",
    foodCategory: "Dessert",
    menu: {
      menuCategory: {
        appetizers: { name: "Mini Cookie", price: "1.99" },
        mains: { name: "Giant Cookie", price: "10.99" },
        desserts: { name: "Cookies n Ice Cream", price: "8.99" },
      },
    },
    address: {
      address: "1 Commissary Street",
      city: "Calgary",
      province: "Alberta",
      prepArea: "05",
    },
  },
];
