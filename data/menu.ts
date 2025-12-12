import { MenuItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // --- Veg Main Course ---
  {
    id: "vm1",
    name: "Paneer Butter Masala",
    description: "Rich and creamy paneer curry cooked in butter and tomato gravy.",
    price: 257,
    category: "Veg Gravies",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=vm1"
  },
  {
    id: "vm2",
    name: "Paneer Tikka Masala",
    description: "Grilled paneer cubes simmered in a spicy aromatic gravy.",
    price: 330,
    category: "Veg Gravies",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=vm2"
  },
  {
    id: "vm3",
    name: "Palak Paneer",
    description: "Cottage cheese cubes in a smooth spinach gravy.",
    price: 285,
    category: "Veg Gravies",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=vm3"
  },
  {
    id: "vm4",
    name: "Mixed Gravy",
    description: "Assorted vegetables cooked in a flavorful curry sauce.",
    price: 285,
    category: "Veg Gravies",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=vm4"
  },
  {
    id: "vm5",
    name: "Paneer Gravy",
    description: "Classic paneer dish in a savory gravy.",
    price: 257,
    category: "Veg Gravies",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=vm5"
  },
  {
    id: "vm6",
    name: "Mixed Veg Masala",
    description: "Spiced vegetable medley.",
    price: 250,
    category: "Veg Gravies",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=vm6"
  },
  {
    id: "vm7",
    name: "Mushroom Gravy",
    description: "Fresh mushrooms cooked in a rich sauce.",
    price: 257,
    category: "Veg Gravies",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=vm7"
  },
  {
    id: "vm8",
    name: "Bhindi Masala",
    description: "Okra cooked with onions and spices.",
    price: 245.50,
    category: "Veg Gravies",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=vm8"
  },
  {
    id: "vm9",
    name: "Mushroom Masala",
    description: "Mushrooms tossed in a spicy masala base.",
    price: 257,
    category: "Veg Gravies",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=vm9"
  },
  {
    id: "vm10",
    name: "Green Peas Masala",
    description: "Green peas cooked in a spiced tomato onion gravy.",
    price: 245.50,
    category: "Veg Gravies",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=vm10"
  },
  {
    id: "vm11",
    name: "Mattar Paneer",
    description: "Peas and paneer cheese in a tomato based sauce.",
    price: 257,
    category: "Veg Gravies",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=vm11"
  },
  {
    id: "vm12",
    name: "Aloo Gobi Masala",
    description: "Potato and cauliflower curry.",
    price: 245.50,
    category: "Veg Gravies",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=vm12"
  },
  {
    id: "vm13",
    name: "Aloo Mattar Masala",
    description: "Potato and peas curry.",
    price: 245.50,
    category: "Veg Gravies",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=vm13"
  },
  {
    id: "vm14",
    name: "Baby corn Masala",
    description: "Baby corn cooked in a spicy masala.",
    price: 245.50,
    category: "Veg Gravies",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=vm14"
  },
  {
    id: "vm15",
    name: "Aloo Jeera Masala",
    description: "Potatoes sautéed with cumin seeds.",
    price: 235.50,
    category: "Veg Gravies",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=vm15"
  },
  {
    id: "vm16",
    name: "Aloo Palak",
    description: "Potatoes cooked in spinach gravy.",
    price: 235.50,
    category: "Veg Gravies",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=vm16"
  },
  {
    id: "vm17",
    name: "Chana Masala",
    description: "Spiced chickpea curry.",
    price: 76.50,
    category: "Veg Gravies",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=vm17"
  },
  {
    id: "vm18",
    name: "Gobi Gravy",
    description: "Cauliflower cooked in gravy.",
    price: 214,
    category: "Veg Gravies",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=vm18"
  },
  {
    id: "vm19",
    name: "Gobi Masala",
    description: "Cauliflower cooked in thick masala.",
    price: 245.50,
    category: "Veg Gravies",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=vm19"
  },
  {
    id: "vm20",
    name: "Veg Korma",
    description: "Vegetables in a creamy coconut based curry.",
    price: 76.50,
    category: "Veg Gravies",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=vm20"
  },
  {
    id: "vm21",
    name: "Dal Fry",
    description: "Tempered lentils.",
    price: 150,
    category: "Veg Gravies",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=vm21"
  },

  // --- Indian Breads ---
  {
    id: "ib1",
    name: "Chapati With Sidedish (3 Pcs)",
    description: "Served with vegetable curry/kurma.",
    price: 103.10,
    category: "Indian Breads",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ib1"
  },
  {
    id: "ib2",
    name: "Plain Chapati (3 Pcs)",
    description: "Whole wheat flatbread.",
    price: 91.80,
    category: "Indian Breads",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ib2"
  },
  {
    id: "ib3",
    name: "Gobi Paratha (2 Pcs)",
    description: "Stuffed cauliflower flatbread.",
    price: 175.50,
    category: "Indian Breads",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ib3"
  },
  {
    id: "ib4",
    name: "Chilli Cheese Paratha (2 Pcs)",
    description: "Spicy cheese stuffed paratha.",
    price: 208.56,
    category: "Indian Breads",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ib4"
  },
  {
    id: "ib5",
    name: "Paneer Paratha (2 Pcs)",
    description: "Cottage cheese stuffed paratha.",
    price: 208.56,
    category: "Indian Breads",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ib5"
  },
  {
    id: "ib6",
    name: "Cheese Paratha (2 Pcs)",
    description: "Cheese stuffed flatbread.",
    price: 208.50,
    category: "Indian Breads",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ib6"
  },
  {
    id: "ib7",
    name: "Aloo Paratha (2 Pcs)",
    description: "Spiced potato stuffed flatbread.",
    price: 175.90,
    category: "Indian Breads",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ib7"
  },
  {
    id: "ib8",
    name: "Aloo Mint Paratha (2 Pcs)",
    description: "Potato and mint stuffed paratha.",
    price: 192.20,
    category: "Indian Breads",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ib8"
  },
  {
    id: "ib9",
    name: "Methi Paratha (2 Pcs)",
    description: "Fenugreek leaf paratha.",
    price: 192.50,
    category: "Indian Breads",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ib9"
  },
  {
    id: "ib10",
    name: "Aloo Methi Roti (2 Pcs)",
    description: "Potato and fenugreek flatbread.",
    price: 192.20,
    category: "Indian Breads",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ib10"
  },
  {
    id: "ib11",
    name: "Mushroom Paratha (2 Pcs)",
    description: "Mushroom stuffed paratha.",
    price: 179,
    category: "Indian Breads",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ib11"
  },
  {
    id: "ib12",
    name: "Mixed Veg Paratha (2 Pcs)",
    description: "Mixed vegetable stuffed paratha.",
    price: 179,
    category: "Indian Breads",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ib12"
  },
  {
    id: "ib13",
    name: "Butter Naan (1 Pcs) Without Sides",
    description: "Soft leavened bread with butter.",
    price: 60,
    category: "Indian Breads",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ib13"
  },
  {
    id: "ib14",
    name: "Ghee Chapathi (3 Pcs)",
    description: "Whole wheat bread topped with ghee.",
    price: 116.40,
    category: "Indian Breads",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ib14"
  },
  {
    id: "ib15",
    name: "Plain Paratha (2 Pcs)",
    description: "Layered flatbread.",
    price: 95.50,
    category: "Indian Breads",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ib15"
  },
  {
    id: "ib16",
    name: "Butter Roti (1 Pcs) Without Sides",
    description: "Tandoori roti with butter.",
    price: 60,
    category: "Indian Breads",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ib16"
  },
  {
    id: "ib17",
    name: "Plain Roti (1 Pc) Without Sidedish",
    description: "Tandoori roti.",
    price: 50,
    category: "Indian Breads",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ib17"
  },
  {
    id: "ib18",
    name: "Butter Kulcha (1 Pcs) Without Sides",
    description: "Leavened bread with butter.",
    price: 60,
    category: "Indian Breads",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ib18"
  },
  {
    id: "ib19",
    name: "Plain Naan (1 Pcs) Without Sides",
    description: "Soft leavened bread.",
    price: 50,
    category: "Indian Breads",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ib19"
  },
  {
    id: "ib20",
    name: "Plain Kulcha (1 Pcs) Without Sides",
    description: "Leavened bread.",
    price: 50,
    category: "Indian Breads",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ib20"
  },
  {
    id: "ib21",
    name: "Masala Kulcha (1 Pcs) Without Sides",
    description: "Spiced leavened bread.",
    price: 60,
    category: "Indian Breads",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ib21"
  },

  // --- Chinese & Starters ---
  {
    id: "ch1",
    name: "Gobi Fried Rice",
    description: "Fried rice with crispy cauliflower.",
    price: 214,
    category: "Chinese",
    isVeg: true,
    isBestseller: true,
    image: "https://storage.googleapis.com/shy-pub/330116/73e3d5c58e927ae15a8c9f9aa981a116-1732909284210.jpeg"
  },
  {
    id: "ch2",
    name: "Gobi Schezwan Rice",
    description: "Spicy fried rice with cauliflower.",
    price: 222.50,
    category: "Chinese",
    isVeg: true,
    isSpicy: true,
    image: "https://picsum.photos/400/300?random=ch2"
  },
  {
    id: "ch3",
    name: "Paneer Fried Rice",
    description: "Fried rice with cottage cheese.",
    price: 222.50,
    category: "Chinese",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ch3"
  },
  {
    id: "ch4",
    name: "Mixed Veg Rice",
    description: "Fried rice with assorted vegetables.",
    price: 245.50,
    category: "Chinese",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ch4"
  },
  {
    id: "ch5",
    name: "Paneer Schezwan Rice",
    description: "Spicy paneer fried rice.",
    price: 232.50,
    category: "Chinese",
    isVeg: true,
    isSpicy: true,
    image: "https://picsum.photos/400/300?random=ch5"
  },
  {
    id: "ch6",
    name: "Mixed Schezwan Rice",
    description: "Spicy mixed vegetable fried rice.",
    price: 255.50,
    category: "Chinese",
    isVeg: true,
    isSpicy: true,
    image: "https://picsum.photos/400/300?random=ch6"
  },
  {
    id: "ch7",
    name: "Mushroom Schezwan Rice",
    description: "Spicy mushroom fried rice.",
    price: 232.50,
    category: "Chinese",
    isVeg: true,
    isSpicy: true,
    image: "https://picsum.photos/400/300?random=ch7"
  },
  {
    id: "ch8",
    name: "Baby corn Fried Rice",
    description: "Fried rice with baby corn.",
    price: 222.50,
    category: "Chinese",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ch8"
  },
  {
    id: "ch9",
    name: "Baby corn Schezwan Rice",
    description: "Spicy baby corn fried rice.",
    price: 232.50,
    category: "Chinese",
    isVeg: true,
    isSpicy: true,
    image: "https://picsum.photos/400/300?random=ch9"
  },
  {
    id: "ch10",
    name: "Mushroom Fried Rice",
    description: "Fried rice with mushrooms.",
    price: 222.50,
    category: "Chinese",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ch10"
  },
  {
    id: "ch11",
    name: "Veg Fried Rice",
    description: "Classic vegetable fried rice.",
    price: 208.50,
    category: "Chinese",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ch11"
  },
  {
    id: "ch12",
    name: "Veg Schezwan Rice",
    description: "Spicy vegetable fried rice.",
    price: 214,
    category: "Chinese",
    isVeg: true,
    isSpicy: true,
    image: "https://picsum.photos/400/300?random=ch12"
  },
  {
    id: "ch13",
    name: "Mixed Schezwan Noodles",
    description: "Spicy mixed noodles.",
    price: 255.50,
    category: "Chinese",
    isVeg: true,
    isSpicy: true,
    image: "https://picsum.photos/400/300?random=ch13"
  },
  {
    id: "ch14",
    name: "Mixed Veg Noodles",
    description: "Noodles with mixed vegetables.",
    price: 232.50,
    category: "Chinese",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ch14"
  },
  {
    id: "ch15",
    name: "Gobi Schezwan Noodles",
    description: "Spicy noodles with cauliflower.",
    price: 222.50,
    category: "Chinese",
    isVeg: true,
    isSpicy: true,
    image: "https://picsum.photos/400/300?random=ch15"
  },
  {
    id: "ch16",
    name: "Mushroom Schezwan Noodles",
    description: "Spicy noodles with mushrooms.",
    price: 232.50,
    category: "Chinese",
    isVeg: true,
    isSpicy: true,
    image: "https://picsum.photos/400/300?random=ch16"
  },
  {
    id: "ch17",
    name: "Veg Schezwan Noodles",
    description: "Spicy vegetable noodles.",
    price: 214,
    category: "Chinese",
    isVeg: true,
    isSpicy: true,
    image: "https://picsum.photos/400/300?random=ch17"
  },
  {
    id: "ch18",
    name: "Mushroom Noodles",
    description: "Stir-fried noodles with mushrooms.",
    price: 222.50,
    category: "Chinese",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ch18"
  },
  {
    id: "ch19",
    name: "American Chopsuey",
    description: "Crispy noodles with sweet and sour sauce.",
    price: 242.50,
    category: "Chinese",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ch19"
  },
  {
    id: "ch20",
    name: "Baby corn Schezwan Noodles",
    description: "Spicy noodles with baby corn.",
    price: 232.50,
    category: "Chinese",
    isVeg: true,
    isSpicy: true,
    image: "https://picsum.photos/400/300?random=ch20"
  },
  {
    id: "ch21",
    name: "Paneer Schezwan Noodles",
    description: "Spicy noodles with paneer.",
    price: 232.50,
    category: "Chinese",
    isVeg: true,
    isSpicy: true,
    image: "https://picsum.photos/400/300?random=ch21"
  },
  {
    id: "ch22",
    name: "Paneer Noodles",
    description: "Stir-fried noodles with paneer.",
    price: 222.50,
    category: "Chinese",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ch22"
  },
  {
    id: "ch23",
    name: "Baby corn Noodles",
    description: "Noodles with baby corn.",
    price: 222.50,
    category: "Chinese",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ch23"
  },
  {
    id: "ch24",
    name: "Veg Noodles",
    description: "Classic vegetable noodles.",
    price: 208,
    category: "Chinese",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ch24"
  },
  {
    id: "ch25",
    name: "Gobi Noodles",
    description: "Noodles with cauliflower.",
    price: 214,
    category: "Chinese",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ch25"
  },
  {
    id: "ch26",
    name: "Gobi Manchurian Dry",
    description: "Crispy cauliflower in manchurian sauce.",
    price: 222,
    category: "Chinese",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ch26"
  },
  {
    id: "ch27",
    name: "Pepper Paneer",
    description: "Paneer tossed in pepper sauce.",
    price: 265.50,
    category: "Chinese",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ch27"
  },
  {
    id: "ch28",
    name: "Mixed Manchurian",
    description: "Mixed vegetable manchurian balls.",
    price: 265.30,
    category: "Chinese",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ch28"
  },
  {
    id: "ch29",
    name: "Pepper Mushroom",
    description: "Mushrooms tossed in pepper sauce.",
    price: 265,
    category: "Chinese",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ch29"
  },
  {
    id: "ch30",
    name: "Chilli Paneer",
    description: "Paneer cubes in spicy chilli sauce.",
    price: 245.50,
    category: "Chinese",
    isVeg: true,
    isSpicy: true,
    image: "https://picsum.photos/400/300?random=ch30"
  },
  {
    id: "ch31",
    name: "Chilli Baby corn",
    description: "Crispy baby corn in chilli sauce.",
    price: 227,
    category: "Chinese",
    isVeg: true,
    isSpicy: true,
    image: "https://picsum.photos/400/300?random=ch31"
  },
  {
    id: "ch32",
    name: "Chilli Gobi",
    description: "Crispy cauliflower in chilli sauce.",
    price: 224,
    category: "Chinese",
    isVeg: true,
    isSpicy: true,
    image: "https://picsum.photos/400/300?random=ch32"
  },
  {
    id: "ch33",
    name: "Chilli Mushroom",
    description: "Mushrooms in chilli sauce.",
    price: 245.50,
    category: "Chinese",
    isVeg: true,
    isSpicy: true,
    image: "https://picsum.photos/400/300?random=ch33"
  },
  {
    id: "ch34",
    name: "Mushroom Manchurian Dry",
    description: "Crispy mushrooms in manchurian sauce.",
    price: 232.50,
    category: "Chinese",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ch34"
  },
  {
    id: "ch35",
    name: "Paneer Manchurian Dry",
    description: "Paneer cubes in manchurian sauce.",
    price: 232.50,
    category: "Chinese",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ch35"
  },
  {
    id: "ch36",
    name: "Paneer 65",
    description: "Deep fried spicy paneer.",
    price: 222,
    category: "Chinese",
    isVeg: true,
    isSpicy: true,
    image: "https://picsum.photos/400/300?random=ch36"
  },
  {
    id: "ch37",
    name: "Mushroom 65",
    description: "Deep fried spicy mushrooms.",
    price: 222.50,
    category: "Chinese",
    isVeg: true,
    isSpicy: true,
    image: "https://picsum.photos/400/300?random=ch37"
  },
  {
    id: "ch38",
    name: "Baby Corn Manchurian Dry",
    description: "Crispy baby corn in manchurian sauce.",
    price: 223,
    category: "Chinese",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ch38"
  },
  {
    id: "ch39",
    name: "Baby corn 65",
    description: "Deep fried spicy baby corn.",
    price: 208,
    category: "Chinese",
    isVeg: true,
    isSpicy: true,
    image: "https://picsum.photos/400/300?random=ch39"
  },
  {
    id: "ch40",
    name: "Gobi 65",
    description: "Deep fried spicy cauliflower.",
    price: 140,
    category: "Chinese",
    isVeg: true,
    isSpicy: true,
    image: "https://picsum.photos/400/300?random=ch40"
  },

  // --- Rice & Biryani ---
  {
    id: "rb1",
    name: "Cashew Nut Pulao",
    description: "Mild rice with roasted cashews.",
    price: 255,
    category: "Rice & Biryani",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=rb1"
  },
  {
    id: "rb2",
    name: "Veg Pulao",
    description: "Vegetable pilaf.",
    price: 224,
    category: "Rice & Biryani",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=rb2"
  },
  {
    id: "rb3",
    name: "Thokku Rice",
    description: "Rice mixed with spicy pickle thokku.",
    price: 222.50,
    category: "Rice & Biryani",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=rb3"
  },
  {
    id: "rb4",
    name: "Jeera Rice",
    description: "Cumin flavored rice.",
    price: 211,
    category: "Rice & Biryani",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=rb4"
  },
  {
    id: "rb5",
    name: "Paneer Pulao",
    description: "Rice with paneer cubes.",
    price: 235,
    category: "Rice & Biryani",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=rb5"
  },
  {
    id: "rb6",
    name: "Mixed Briyani",
    description: "Mixed vegetable biryani.",
    price: 272,
    category: "Rice & Biryani",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=rb6"
  },
  {
    id: "rb7",
    name: "Paneer Biryani",
    description: "Spiced paneer biryani.",
    price: 232.50,
    category: "Rice & Biryani",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=rb7"
  },
  {
    id: "rb8",
    name: "Mushroom Biryani",
    description: "Spiced mushroom biryani.",
    price: 232.50,
    category: "Rice & Biryani",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=rb8"
  },
  {
    id: "rb9",
    name: "Veg Biryani",
    description: "Classic vegetable biryani.",
    price: 222.50,
    category: "Rice & Biryani",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=rb9"
  },
  {
    id: "rb10",
    name: "Brinji",
    description: "Traditional South Indian spiced rice.",
    price: 91.80,
    category: "Rice & Biryani",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=rb10"
  },

  // --- South Indian ---
  {
    id: "si1",
    name: "Paneer Kothu Parotta",
    description: "Minced parotta stir-fry with paneer.",
    price: 245,
    category: "South Indian",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=si1"
  },
  {
    id: "si2",
    name: "Chilli Parotta",
    description: "Fried parotta pieces in chilli sauce.",
    price: 210.20,
    category: "South Indian",
    isVeg: true,
    isSpicy: true,
    image: "https://picsum.photos/400/300?random=si2"
  },
  {
    id: "si3",
    name: "Mushroom Kothu Parotta",
    description: "Minced parotta stir-fry with mushroom.",
    price: 245,
    category: "South Indian",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=si3"
  },
  {
    id: "si4",
    name: "Mixed Kothu Parotta",
    description: "Minced parotta stir-fry with mixed veg.",
    price: 245,
    category: "South Indian",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=si4"
  },
  {
    id: "si5",
    name: "Veg Kothu Parotta",
    description: "Minced parotta stir-fry with vegetables.",
    price: 210.20,
    category: "South Indian",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=si5"
  },
  {
    id: "si6",
    name: "Parotta & Kurma (2 Pcs)",
    description: "Layered flatbread served with kurma.",
    price: 70,
    category: "South Indian",
    isVeg: true,
    isBestseller: true,
    image: "https://c.ndtvimg.com/2021-05/tj7sdqj8_parotta_625x300_14_May_21.jpg?im=FeatureCrop,algorithm=dnn,width=384,height=384"
  },
  {
    id: "si7",
    name: "Parotta Kurma (2 Pcs)",
    description: "Alternative portion of parotta & kurma.",
    price: 90,
    category: "South Indian",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=si7"
  },
  {
    id: "si8",
    name: "Masala Dosa",
    description: "Crispy dosa with potato masala.",
    price: 156.70,
    category: "South Indian",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=si8"
  },
  {
    id: "si9",
    name: "Paneer Dosa",
    description: "Dosa stuffed with paneer masala.",
    price: 179,
    category: "South Indian",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=si9"
  },
  {
    id: "si10",
    name: "Mushroom Dosa",
    description: "Dosa stuffed with mushroom masala.",
    price: 179,
    category: "South Indian",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=si10"
  },
  {
    id: "si11",
    name: "Cheese Podi Dosa",
    description: "Spiced powder dosa with cheese.",
    price: 146.20,
    category: "South Indian",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=si11"
  },
  {
    id: "si12",
    name: "Special Dosa",
    description: "Chef's special dosa.",
    price: 117.40,
    category: "South Indian",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=si12"
  },
  {
    id: "si13",
    name: "Fried Onion Dosa",
    description: "Dosa topped with fried onions.",
    price: 133.70,
    category: "South Indian",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=si13"
  },
  {
    id: "si14",
    name: "Ghee Dosa",
    description: "Dosa roasted with ghee.",
    price: 150,
    category: "South Indian",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=si14"
  },
  {
    id: "si15",
    name: "Chilli Idli (served With Onion Raitha)",
    description: "Spicy fried idli cubes.",
    price: 188,
    category: "South Indian",
    isVeg: true,
    isSpicy: true,
    image: "https://picsum.photos/400/300?random=si15"
  },
  {
    id: "si16",
    name: "Idli (2 Pcs)",
    description: "Steamed rice cakes.",
    price: 73.20,
    category: "South Indian",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=si16"
  },
  {
    id: "si17",
    name: "Fried Idli (served With Sambar)",
    description: "Deep fried idli served with sambar.",
    price: 165,
    category: "South Indian",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=si17"
  },
  {
    id: "si18",
    name: "Thattu Idli",
    description: "Flat steamed idli.",
    price: 109,
    category: "South Indian",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=si18"
  },
  {
    id: "si19",
    name: "Chole Poori",
    description: "Puffed bread with chickpea curry.",
    price: 117.40,
    category: "South Indian",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=si19"
  },
  {
    id: "si20",
    name: "Poori With Chenna (3 Pcs)",
    description: "Poori served with chickpea curry.",
    price: 103.80,
    category: "South Indian",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=si20"
  },

  // --- Chaats & Snacks ---
  {
    id: "cs1",
    name: "Pani Puri (10 Pcs)",
    description: "Crispy puris with spicy mint water.",
    price: 84.10,
    category: "Chaats & Snacks",
    isVeg: true,
    isBestseller: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVxMDZ89fmuKlbqzOdXvFvhLA89V4J_klI3Q&s"
  },
  {
    id: "cs2",
    name: "Pav Bhaji",
    description: "Spiced vegetable mash with buttered buns.",
    price: 147,
    category: "Chaats & Snacks",
    isVeg: true,
    isBestseller: true,
    image: "https://picsum.photos/400/300?random=cs2"
  },
  {
    id: "cs3",
    name: "Plain Samosa (2 Pcs)",
    description: "Potato stuffed pastry.",
    price: 78.20,
    category: "Chaats & Snacks",
    isVeg: true,
    isBestseller: true,
    image: "https://picsum.photos/400/300?random=cs3"
  },
  {
    id: "cs4",
    name: "Cheese Pav Bhaji",
    description: "Pav bhaji topped with cheese.",
    price: 163,
    category: "Chaats & Snacks",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=cs4"
  },
  {
    id: "cs5",
    name: "Vada Pav (1 Pcs)",
    description: "Mumbai burger.",
    price: 70.10,
    category: "Chaats & Snacks",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=cs5"
  },
  {
    id: "cs6",
    name: "Aloo Tikka Chat",
    description: "Potato cutlet chaat.",
    price: 123.10,
    category: "Chaats & Snacks",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=cs6"
  },
  {
    id: "cs7",
    name: "Plain Kachori (2 Pcs)",
    description: "Lentil stuffed pastry.",
    price: 78.20,
    category: "Chaats & Snacks",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=cs7"
  },
  {
    id: "cs8",
    name: "Cheese Alu Tikka (1 Pcs)",
    description: "Potato cutlet with cheese.",
    price: 123,
    category: "Chaats & Snacks",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=cs8"
  },
  {
    id: "cs9",
    name: "Alu Tikka (1 Pcs)",
    description: "Potato cutlet.",
    price: 83,
    category: "Chaats & Snacks",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=cs9"
  },
  {
    id: "cs10",
    name: "Dahi Kachodi",
    description: "Kachori topped with yogurt.",
    price: 96.50,
    category: "Chaats & Snacks",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=cs10"
  },
  {
    id: "cs11",
    name: "Bhel Puri",
    description: "Puffed rice tossed with chutney.",
    price: 85.10,
    category: "Chaats & Snacks",
    isVeg: true,
    isBestseller: true,
    image: "https://picsum.photos/400/300?random=cs11"
  },
  {
    id: "cs12",
    name: "Dahi Puri",
    description: "Puris filled with yogurt.",
    price: 112.20,
    category: "Chaats & Snacks",
    isVeg: true,
    isBestseller: true,
    image: "https://picsum.photos/400/300?random=cs12"
  },
  {
    id: "cs13",
    name: "Samosa Chaat",
    description: "Samosa topped with chutney and sev.",
    price: 104.10,
    category: "Chaats & Snacks",
    isVeg: true,
    isBestseller: true,
    image: "https://picsum.photos/400/300?random=cs13"
  },
  {
    id: "cs14",
    name: "Dahi Papdi",
    description: "Papdi chaat with yogurt.",
    price: 112.20,
    category: "Chaats & Snacks",
    isVeg: true,
    isBestseller: true,
    image: "https://picsum.photos/400/300?random=cs14"
  },
  {
    id: "cs15",
    name: "Masala Puri",
    description: "Crushed puri with masala gravy.",
    price: 104.10,
    category: "Chaats & Snacks",
    isVeg: true,
    isBestseller: true,
    image: "https://picsum.photos/400/300?random=cs15"
  },
  {
    id: "cs16",
    name: "Kachori Chaat",
    description: "Kachori with chutney and sev.",
    price: 104.10,
    category: "Chaats & Snacks",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=cs16"
  },
  {
    id: "cs17",
    name: "Sev Papdi",
    description: "Papdi with plenty of sev.",
    price: 104.10,
    category: "Chaats & Snacks",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=cs17"
  },
  {
    id: "cs18",
    name: "Sev Puri",
    description: "Puri loaded with sev.",
    price: 104.10,
    category: "Chaats & Snacks",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=cs18"
  },
  {
    id: "cs19",
    name: "Dahi Samosa",
    description: "Samosa topped with yogurt.",
    price: 76.50,
    category: "Chaats & Snacks",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=cs19"
  },
  {
    id: "cs20",
    name: "Plain Sundal",
    description: "Boiled spiced legumes.",
    price: 78.20,
    category: "Chaats & Snacks",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=cs20"
  },
  {
    id: "cs21",
    name: "Aloo Poori",
    description: "Poori served with potato masala.",
    price: 104.10,
    category: "Chaats & Snacks",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=cs21"
  },
  {
    id: "cs22",
    name: "Aloo Bonda (2 Pcs)",
    description: "Deep fried potato fritters.",
    price: 56.20,
    category: "Chaats & Snacks",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=cs22"
  },

  // --- Sandwiches ---
  {
    id: "sw1",
    name: "Cheese Chilli Toast",
    description: "Toast with cheese and chillies.",
    price: 104,
    category: "Sandwiches",
    isVeg: true,
    isSpicy: true,
    image: "https://picsum.photos/400/300?random=sw1"
  },
  {
    id: "sw2",
    name: "Veg Sandwich",
    description: "Vegetable sandwich.",
    price: 87,
    category: "Sandwiches",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=sw2"
  },
  {
    id: "sw3",
    name: "Paneer Toast",
    description: "Toast with paneer filling.",
    price: 97,
    category: "Sandwiches",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=sw3"
  },
  {
    id: "sw4",
    name: "Club Sandwich",
    description: "Triple layer sandwich.",
    price: 163,
    category: "Sandwiches",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=sw4"
  },
  {
    id: "sw5",
    name: "Veg Paneer Toast",
    description: "Toast with veg and paneer.",
    price: 107,
    category: "Sandwiches",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=sw5"
  },
  {
    id: "sw6",
    name: "Veg Toast",
    description: "Toasted vegetable sandwich.",
    price: 87,
    category: "Sandwiches",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=sw6"
  },
  {
    id: "sw7",
    name: "Veg Cheese Toast",
    description: "Toast with vegetables and cheese.",
    price: 120,
    category: "Sandwiches",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=sw7"
  },
  {
    id: "sw8",
    name: "Cheese Toast",
    description: "Classic cheese toast.",
    price: 104,
    category: "Sandwiches",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=sw8"
  },
  {
    id: "sw9",
    name: "Masala Toast",
    description: "Toast with spicy masala.",
    price: 86,
    category: "Sandwiches",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=sw9"
  },
  {
    id: "sw10",
    name: "Veg Mushroom Toast",
    description: "Toast with mushroom filling.",
    price: 120,
    category: "Sandwiches",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=sw10"
  },

  // --- Combos ---
  {
    id: "co1",
    name: "Garlic Naan (1 Pc) Combo",
    description: "Garlic Naan with sidedish.",
    price: 152,
    category: "Combos",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=co1"
  },
  {
    id: "co2",
    name: "Butter Naan (1 Pc) Combo",
    description: "Butter Naan with sidedish.",
    price: 142,
    category: "Combos",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=co2"
  },
  {
    id: "co3",
    name: "Masala Kulcha (1 Pc) Combo",
    description: "Masala Kulcha with sidedish.",
    price: 142,
    category: "Combos",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=co3"
  },
  {
    id: "co4",
    name: "Butter Kulcha (1 Pc) Combo",
    description: "Butter Kulcha with sidedish.",
    price: 142,
    category: "Combos",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=co4"
  },
  {
    id: "co5",
    name: "Butter Roti (1 Pc) Combo",
    description: "Butter Roti with sidedish.",
    price: 142,
    category: "Combos",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=co5"
  },
  {
    id: "co6",
    name: "Plain Roti (1 Pc) Combo",
    description: "Plain Roti with sidedish.",
    price: 132,
    category: "Combos",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=co6"
  },
  {
    id: "co7",
    name: "Plain Naan (1 Pc) Combo",
    description: "Plain Naan with sidedish.",
    price: 132,
    category: "Combos",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=co7"
  },
  {
    id: "co8",
    name: "Plain Kulcha (1 Pc) Combo",
    description: "Plain Kulcha with sidedish.",
    price: 132,
    category: "Combos",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=co8"
  },
  {
    id: "co9",
    name: "Phulka Combo",
    description: "Phulka meal.",
    price: 150,
    category: "Combos",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=co9"
  },
  {
    id: "co10",
    name: "Rice Combo",
    description: "Rice variety meal.",
    price: 175.10,
    category: "Combos",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=co10"
  },
  {
    id: "co11",
    name: "Noodles Combo",
    description: "Noodles meal.",
    price: 175.10,
    category: "Combos",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=co11"
  },

  // --- Tandoori & Tikkas ---
  {
    id: "tk1",
    name: "Paneer Tikka (5 Pcs)",
    description: "Grilled spiced paneer.",
    price: 180,
    category: "Tandoori & Tikkas",
    isVeg: true,
    isBestseller: true,
    image: "https://picsum.photos/400/300?random=tk1"
  },
  {
    id: "tk2",
    name: "Mixed Tikka (5 Pcs)",
    description: "Assorted grilled vegetables and paneer.",
    price: 200,
    category: "Tandoori & Tikkas",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=tk2"
  },
  {
    id: "tk3",
    name: "Mushroom Tikka (5 Pcs)",
    description: "Grilled spiced mushrooms.",
    price: 190,
    category: "Tandoori & Tikkas",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=tk3"
  },
  {
    id: "tk4",
    name: "Hariyali Panneer Tikka (5 Pcs)",
    description: "Paneer marinated in green herbs.",
    price: 190,
    category: "Tandoori & Tikkas",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=tk4"
  },
  {
    id: "tk5",
    name: "Pineapple Tikka (5 Pcs)",
    description: "Grilled pineapple.",
    price: 140,
    category: "Tandoori & Tikkas",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=tk5"
  },

  // --- Juices & Beverages ---
  {
    id: "jb1",
    name: "Fruit Salad",
    description: "Fresh mixed fruits.",
    price: 60,
    category: "Juices & Beverages",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=jb1"
  },
  {
    id: "jb2",
    name: "Pomegranate Juice",
    description: "Fresh pomegranate juice.",
    price: 100,
    category: "Juices & Beverages",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=jb2"
  },
  {
    id: "jb3",
    name: "Dragon Fruit",
    description: "Dragon fruit juice.",
    price: 90,
    category: "Juices & Beverages",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=jb3"
  },
  {
    id: "jb4",
    name: "A B C (Apple Beetroot Carrot)",
    description: "Healthy mixed juice.",
    price: 90,
    category: "Juices & Beverages",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=jb4"
  },
  {
    id: "jb5",
    name: "Watermelon Juice",
    description: "Fresh watermelon juice.",
    price: 60,
    category: "Juices & Beverages",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=jb5"
  },
  {
    id: "jb6",
    name: "Apple Juice",
    description: "Fresh apple juice.",
    price: 80,
    category: "Juices & Beverages",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=jb6"
  },
  {
    id: "jb7",
    name: "Pineapple Juice",
    description: "Fresh pineapple juice.",
    price: 70,
    category: "Juices & Beverages",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=jb7"
  },
  {
    id: "jb8",
    name: "Orange Juice",
    description: "Fresh orange juice.",
    price: 60,
    category: "Juices & Beverages",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=jb8"
  },
  {
    id: "jb9",
    name: "Lemon Juice",
    description: "Fresh lime juice.",
    price: 40,
    category: "Juices & Beverages",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=jb9"
  },
  {
    id: "jb10",
    name: "Athi Juice",
    description: "Fig juice.",
    price: 60,
    category: "Juices & Beverages",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=jb10"
  },
  {
    id: "jb11",
    name: "Lemon Mint Mojito",
    description: "Refreshing mint lime cooler.",
    price: 70,
    category: "Juices & Beverages",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=jb11"
  },
  {
    id: "jb12",
    name: "Lemon Genger Mojito",
    description: "Ginger lime cooler.",
    price: 70,
    category: "Juices & Beverages",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=jb12"
  },
  {
    id: "jb13",
    name: "Blue Curacao Mojito",
    description: "Blue ocean cooler.",
    price: 70,
    category: "Juices & Beverages",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=jb13"
  },
  {
    id: "jb14",
    name: "Strawberry Mojito",
    description: "Strawberry flavored cooler.",
    price: 60,
    category: "Juices & Beverages",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=jb14"
  },
  {
    id: "jb15",
    name: "Mango Mojito",
    description: "Mango flavored cooler.",
    price: 60,
    category: "Juices & Beverages",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=jb15"
  },
  {
    id: "jb16",
    name: "Pina Colda Mojito",
    description: "Pineapple coconut cooler.",
    price: 60,
    category: "Juices & Beverages",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=jb16"
  },
  {
    id: "jb17",
    name: "Sweet Malai Lassi",
    description: "Thick sweet yogurt drink.",
    price: 90,
    category: "Juices & Beverages",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=jb17"
  },
  {
    id: "jb18",
    name: "Elaneer Payasam",
    description: "Tender coconut dessert drink.",
    price: 90,
    category: "Juices & Beverages",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=jb18"
  },
  {
    id: "jb19",
    name: "Badam Milk",
    description: "Almond milk.",
    price: 80,
    category: "Juices & Beverages",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=jb19"
  },
  {
    id: "jb20",
    name: "Rose Milk",
    description: "Rose flavored milk.",
    price: 65,
    category: "Juices & Beverages",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=jb20"
  },
  {
    id: "jb21",
    name: "Water Bottle",
    description: "Mineral water.",
    price: 20,
    category: "Juices & Beverages",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=jb21"
  },

  // --- Sweets ---
  {
    id: "sw1",
    name: "Gulab Jamun (2 Pcs)",
    description: "Fried dough balls in syrup.",
    price: 80,
    category: "Sweets",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=sw1"
  },
  {
    id: "sw2",
    name: "BASUNDHI",
    description: "Sweet thickened milk.",
    price: 90,
    category: "Sweets",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=sw2"
  },
  {
    id: "sw3",
    name: "RASMALAI",
    description: "Cottage cheese in sweet milk.",
    price: 80,
    category: "Sweets",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=sw3"
  },
  {
    id: "sw4",
    name: "Kaala Jamun (2 Pcs)",
    description: "Dark fried dough balls.",
    price: 90,
    category: "Sweets",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=sw4"
  },
  {
    id: "sw5",
    name: "Shahi Tukuda",
    description: "Fried bread dessert.",
    price: 83,
    category: "Sweets",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=sw5"
  },

  // --- Meals ---
  {
    id: "ml1",
    name: "South Indian Spl meals",
    description: "Special full meal.",
    price: 178,
    category: "Meals",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ml1"
  },
  {
    id: "ml2",
    name: "South Indian Meal",
    description: "Regular meal.",
    price: 110,
    category: "Meals",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ml2"
  },
  {
    id: "ml3",
    name: "North Indian Thali",
    description: "Roti, dal, sabji meal.",
    price: 250,
    category: "Meals",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ml3"
  },

  // --- Extras ---
  {
    id: "ex1",
    name: "Dal",
    description: "Lentil curry.",
    price: 50,
    category: "Extras",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ex1"
  },
  {
    id: "ex2",
    name: "Alu Sabji",
    description: "Potato curry.",
    price: 50,
    category: "Extras",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ex2"
  },
  {
    id: "ex3",
    name: "Raitha",
    description: "Yogurt dip.",
    price: 35,
    category: "Extras",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ex3"
  },
  {
    id: "ex4",
    name: "Mint Chutney",
    description: "Green herb dip.",
    price: 35,
    category: "Extras",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ex4"
  },
  {
    id: "ex5",
    name: "Sada Paan",
    description: "Betel leaf digestive.",
    price: 35,
    category: "Extras",
    isVeg: true,
    image: "https://picsum.photos/400/300?random=ex5"
  },
];

export const CATEGORIES = [
  "All", 
  "Veg Gravies",
  "Indian Breads",
  "Chinese",
  "Rice & Biryani",
  "South Indian",
  "Chaats & Snacks",
  "Sandwiches",
  "Combos",
  "Tandoori & Tikkas",
  "Juices & Beverages",
  "Sweets",
  "Meals",
  "Extras"
];