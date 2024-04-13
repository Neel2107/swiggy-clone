const titles = ["The Spice House", "Taste of India", "Curry Palace", "Biryani Factory", "Tandoori Nights", "Masala Magic", "Indian Delight", "Royal Indian", "Spice Garden", "Curry House"];
const minTime = 10;
const maxTime = 60;

const images = [
  require("../assets/images/food-card/1.png"),
  require("../assets/images/food-card/2.png"),
  require("../assets/images/food-card/3.png"),
  require("../assets/images/food-card/4.png"),
  require("../assets/images/food-card/5.png"),
  require("../assets/images/food-card/6.png"),
  require("../assets/images/food-card/7.png"),
  require("../assets/images/food-card/8.png"),
  require("../assets/images/food-card/9.png"),
  require("../assets/images/food-card/10.png"),
];

export const FoodCardsData = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  img: images[i],
  title: titles[Math.floor(Math.random() * titles.length)],
  rating: (Math.random() * 2 + 3).toFixed(1), // Random rating between 3.0 and 5.0
  time: `${Math.floor(Math.random() * (maxTime - minTime + 1) + minTime)} min`, // Random time between minTime and maxTime
}));