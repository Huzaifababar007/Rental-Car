// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/yaris-offer.png";
import img05 from "../all-images/cars-img/audi-q5-offer.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/hs-offer.png";
import img09 from "../all-images/cars-img/fortuner-offer.png";
import img10 from "../all-images/cars-img/bmw-offerr.png";
import img11 from "../all-images/cars-img/audi-offer.png";
import img12 from "../all-images/cars-img/changan-offer.png";
import img13 from "../all-images/cars-img/land-cruiser-offer.png";
import img14 from "../all-images/cars-img/kia-sportage-offer.png";
import img15 from "../all-images/cars-img/mg-gt-front-offer.png";
import img16 from "../all-images/cars-img/marvel-offer.png";
import img17 from "../all-images/cars-img/mg-extender-offer.png";
import img18 from "../all-images/cars-img/mg-offer.png";
import img19 from "../all-images/cars-img/mgg-offer.png";
import img20 from "../all-images/cars-img/orange-offer.png";

const carData = [
  {
    id: 1,
    brand: "Nissan",
    rating: 70,
    carName: "Nissan Altima",
    imgUrl: img01,
    model: "Model-2021",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Experience the perfect blend of style, comfort, and performance with the Nissan Altima. This midsize sedan offers a sleek, modern design that turns heads while providing a spacious and comfortable interior for both drivers and passengers. With its fuel-efficient engine and smooth handling, the Altima is ideal for city driving and long road trips. Advanced safety features like automatic emergency braking and lane departure warning ensure peace of mind on the road. Enjoy the latest technology with its intuitive infotainment system, including Apple CarPlay and Android Auto integration. Whether for business or leisure, the Nissan Altima offers a reliable and enjoyable driving experience. Rent the Nissan Altima today and elevate your journey.",
  },

  {
    id: 2,
    brand: "BMW",
    rating: 112,
    carName: "BMW",
    imgUrl: img03,
    model: "Model 3",
    price: 85,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Discover the excitement and versatility of the MG with our car rental service. Known for its stylish design and dynamic performance, the BMW offers a unique blend of modern technology and classic charm. Its spacious interior ensures comfort for all passengers, making it perfect for both short trips and long journeys. Equipped with cutting-edge safety features and a responsive infotainment system, the MG provides a seamless driving experience. Enjoy fuel efficiency without compromising on power, whether navigating city streets or cruising on the highway. Rent the MG today and experience a drive that combines innovation with timeless appeal.",
  },

  {
    id: 3,
    brand: "Toyota",
    rating: 127,
    carName: "Toyota Aventador",
    imgUrl: img02,
    model: "Model-2022",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Experience reliability and comfort with the Toyota, a car renowned for its exceptional quality and performance. Ideal for both city commutes and long-distance travel, Toyota vehicles are equipped with advanced safety features and a smooth, efficient engine. The spacious interior offers ample room for passengers and luggage, making it a great choice for families or groups. Enjoy modern conveniences like a user-friendly infotainment system and connectivity options to enhance your drive. Known for its durability and low maintenance costs, a Toyota rental ensures a worry-free and enjoyable journey. Rent a Toyota today and discover why it's a top choice for drivers worldwide.",
  },

  {
    id: 4,
    brand: "Toyota",
    rating: 132,
    carName: "Toyota Fortuner",
    imgUrl: img09,
    model: "Model-2022",
    price: 75,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Embark on your next adventure with the Toyota Fortuner, a rugged and versatile SUV designed to handle any terrain. With its bold and commanding presence, the Fortuner offers a spacious interior that comfortably accommodates up to seven passengers, making it perfect for family trips or group excursions. Powered by a robust engine, it delivers impressive performance and towing capabilities, while its advanced suspension system ensures a smooth ride even on rough roads. The Fortuner is equipped with state-of-the-art safety features, including multiple airbags and stability control, to keep you and your passengers secure. Experience the perfect combination of luxury, power, and reliability by renting the Toyota Fortuner for your journey.",
  },

  {
    id: 5,
    brand: "Toyota",
    rating: 137,
    carName: "Toyota Yaris",
    imgUrl: img04,
    model: "Model-2021",
    price: 70,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Discover the joy of driving with the Toyota Yaris, a compact car that offers an ideal blend of efficiency and style. Perfect for city driving, the Yaris boasts a sleek design and agile handling, making it easy to navigate through urban traffic. Its fuel-efficient engine ensures that you can travel further with fewer stops at the pump, while the surprisingly spacious interior provides comfort for all passengers. Equipped with modern technology features such as a touch-screen infotainment system, Bluetooth connectivity, and advanced safety features, the Yaris delivers a convenient and secure driving experience. Rent the Toyota Yaris today for a smart and economical choice for your travel needs.",
  },

  {
    id: 6,
    brand: "Audi",
    rating: 94,
    carName: "Audi Q5",
    imgUrl: img05,
    model: "Model-2022",
    price: 45,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Experience luxury and performance with the Audi, a premium vehicle that embodies sophistication and innovation. Known for its elegant design and powerful engine, Audi offers a driving experience that is both exhilarating and refined. The plush interior features high-quality materials and advanced technology, providing comfort and convenience for all passengers. Whether you're navigating city streets or cruising on the highway, Audi's precise handling and smooth ride ensure a pleasurable journey. Equipped with cutting-edge safety features and a state-of-the-art infotainment system, Audi keeps you connected and protected. Rent an Audi today and elevate your driving experience with unparalleled style and performance.",
  },

  {
    id: 7,
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes Benz XC90",
    imgUrl: img06,
    model: "Model-2022",
    price: 85,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Indulge in the ultimate luxury and performance with a Mercedes-Benz, a symbol of elegance and engineering excellence. Known for its sophisticated design and powerful performance, Mercedes-Benz offers an unparalleled driving experience. The meticulously crafted interior boasts premium materials, cutting-edge technology, and superior comfort for every passenger. Whether you're driving in the city or on the open road, Mercedes-Benz provides smooth handling and a quiet, refined ride. With advanced safety features and innovative infotainment systems, you'll enjoy both peace of mind and seamless connectivity. Rent a Mercedes-Benz today and experience the perfect blend of luxury, style, and performance on every journey.",
  },

  {
    id: 8,
    brand: "Toyota",
    rating: 135,
    carName: "Toyota Camery",
    imgUrl: img07,
    model: "Model-2023",
    price: 70,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Experience the perfect combination of comfort, style, and reliability with the Toyota Camry, a top choice for discerning drivers. Known for its sleek design and spacious interior, the Camry provides a comfortable ride for both the driver and passengers. Its efficient engine delivers excellent fuel economy without compromising performance, making it ideal for both city driving and long road trips. The Camry is equipped with a host of advanced safety features, including adaptive cruise control and lane-keeping assist, ensuring peace of mind on every journey. Inside, enjoy modern conveniences like a user-friendly infotainment system with Apple CarPlay and Android Auto integration. Rent the Toyota Camry today for a smooth, enjoyable driving experience.",
  },

  {
    id: 9,
    brand: "MG",
    rating: 78,
    carName: "MG GT",
    imgUrl: img08,
    model: "Model 3",
    price: 59,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Experience the thrill of driving with the MG GT, a sporty sedan that combines dynamic performance with sleek design. The MG GT features a modern and aggressive exterior, highlighted by sharp lines and a distinctive front grille. Its turbocharged engine delivers impressive power and responsiveness, making it a joy to drive in both city and highway conditions. Inside, the MG GT offers a comfortable and stylish cabin equipped with the latest technology, including a high-resolution infotainment system and advanced safety features like adaptive cruise control and lane-keeping assist. With its blend of performance, comfort, and cutting-edge features, the MG GT is the perfect choice for those seeking an exciting and reliable ride. Rent the MG GT today and elevate your driving experience.",
  },

  {
    id: 10,
    brand: "BMW",
    rating: 99,
    carName: "BMW",
    imgUrl: img10,
    model: "Model 3",
    price: 78,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Elevate your driving experience with BMW, the epitome of luxury and performance. Known for its sporty elegance and precision engineering, BMW offers a thrilling ride with its powerful engines and agile handling. The interior is meticulously crafted, featuring premium materials and cutting-edge technology that ensure comfort and connectivity on every journey. Whether navigating city streets or cruising on the open road, BMW's advanced safety features and driver assistance systems provide peace of mind and confidence. Experience the perfect blend of style, innovation, and performance by renting a BMW, and enjoy a driving experience like no other.",
  },

  {
    id: 11,
    brand: "Audi",
    rating: 89,
    carName: "Audi e-tron GT",
    imgUrl: img11,
    model: "Model 3",
    price: 65,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Experience the future of driving with the Audi e-tron, a sophisticated electric SUV that combines luxury with cutting-edge technology. With its sleek, aerodynamic design and spacious, high-quality interior, the e-tron offers a premium driving experience while embracing sustainability. The electric powertrain delivers impressive acceleration and a smooth, quiet ride, while its long-range battery ensures you can go further on a single charge. Inside, enjoy advanced features like a high-resolution digital cockpit, intuitive infotainment system, and a suite of driver-assistance technologies for enhanced safety and convenience. Rent the Audi e-tron today and enjoy the perfect blend of performance, innovation, and eco-friendly driving.",
  },

  {
    id: 12,
    brand: "Changan",
    rating: 52,
    carName: "Changan Velson",
    imgUrl: img12,
    model: "Model 3",
    price: 69,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Discover the exceptional value and performance of Changan, a brand known for its reliable and innovative vehicles. The Changan lineup offers a range of options that blend modern design with advanced technology, ensuring a comfortable and enjoyable driving experience. With a focus on safety, efficiency, and practicality, Changan vehicles are equipped with the latest features to enhance both performance and convenience. Whether you're looking for a compact car for city driving or a spacious SUV for family adventures, Changan provides a dependable and stylish choice. Rent a Changan today and experience a driving experience that combines quality, innovation, and affordability.",
  },

  {
    id: 13,
    brand: "Toyota",
    rating: 152,
    carName: "Toyota Land Cruiser",
    imgUrl: img13,
    model: "Model-2023",
    price: 89,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Conquer any terrain with the Toyota Land Cruiser, a legendary SUV renowned for its rugged durability and exceptional off-road capabilities. With its commanding presence and robust construction, the Land Cruiser is built to handle challenging conditions while providing a comfortable and refined ride. Its spacious interior offers luxurious seating and advanced technology, including a premium infotainment system and comprehensive driver-assistance features. Equipped with powerful engine options and advanced four-wheel-drive systems, the Land Cruiser delivers outstanding performance both on and off the road. Rent the Toyota Land Cruiser today and embark on your adventures with confidence and style.",
  },

  {
    id: 14,
    brand: "Kia",
    rating: 122,
    carName: "Kia Sportage",
    imgUrl: img14,
    model: "Model-2023",
    price: 79,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Discover the dynamic blend of style, comfort, and versatility with the Kia Sportage, a compact SUV that stands out in its class. Featuring a modern design with bold lines and an athletic stance, the Sportage offers a spacious and well-appointed interior, perfect for both city commutes and weekend getaways. Its efficient engine delivers a smooth, responsive drive, while advanced safety features and a user-friendly infotainment system ensure a secure and connected journey. With its ample cargo space and comfortable seating, the Kia Sportage is designed to accommodate your lifestyle needs. Rent the Kia Sportage today and experience a perfect balance of performance and practicality.",
  },
  
  {
    id: 15,
    brand: "MG",
    rating: 82,
    carName: "MG ZT",
    imgUrl: img15,
    model: "Model 3",
    price: 35,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Experience the perfect blend of practicality and style with the MG ZS, a compact SUV designed for urban adventures and beyond. The MG ZS features a sleek design and a comfortable interior with plenty of space for passengers and cargo. Its efficient engine provides a smooth ride, while the latest technology, including a touchscreen infotainment system and advanced safety features, ensures a modern driving experience. Rent the MG ZS today and enjoy a dynamic and versatile vehicle that meets all your driving needs.",
  },

  {
    id: 16,
    brand: "Tesla",
    rating: 92,
    carName: "Tesla Model X",
    imgUrl: img16,
    model: "Model 3",
    price: 59,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Embrace the future of driving with the Tesla Model X, an electric SUV that combines luxury with groundbreaking technology. Known for its distinctive falcon-wing doors and spacious, high-tech interior, the Model X offers ample room for passengers and cargo. Its dual-motor all-wheel drive ensures exceptional performance and handling, while the long-range battery provides impressive distance on a single charge. Equipped with Tesla’s advanced autopilot features and a sleek design, the Model X is perfect for those who seek both innovation and practicality. Rent the Tesla Model X today and elevate your driving experience.",
  },

  {
    id: 17,
    brand: "MG",
    rating: 102,
    carName: "MG MG5",
    imgUrl: img17,
    model: "Model 3",
    price: 90,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Discover the MG MG5, a practical and stylish electric vehicle that delivers a smooth and eco-friendly driving experience. With its sleek design and spacious interior, the MG5 offers both comfort and efficiency. The electric powertrain provides impressive range and quiet operation, while the modern infotainment system and driver-assistance features enhance your journey. Ideal for city driving and longer trips alike, the MG MG5 combines practicality with cutting-edge technology. Rent the MG MG5 today and embrace the future of driving.",
  },

  {
    id: 18,
    brand: "MG",
    rating: 111,
    carName: "MG Hector",
    imgUrl: img18,
    model: "Model 3",
    price: 95,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Discover the MG Hector, a spacious and stylish SUV designed to elevate your driving experience. With its bold exterior and expansive interior, the Hector offers ample room for both passengers and luggage. The advanced infotainment system, including a large touchscreen and smartphone connectivity, keeps you entertained and connected on the go. Equipped with a range of safety features like adaptive cruise control and lane-keeping assist, the Hector ensures a secure ride. Whether for a family trip or daily commutes, rent the MG Hector and enjoy comfort and sophistication on every journey.",
  },

  {
    id: 19,
    brand: "MG",
    rating: 66,
    carName: "MG RX5",
    imgUrl: img19,
    model: "Model 2",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Explore the MG RX5, a versatile and well-equipped SUV that combines performance with luxury. The RX5 features a contemporary design with a spacious and comfortable interior, making it ideal for both everyday driving and longer journeys. Its advanced engine delivers a smooth ride, while the high-tech infotainment system and comprehensive safety features ensure a modern and secure driving experience. With ample cargo space and stylish details, the MG RX5 is perfect for those seeking a blend of practicality and sophistication. Rent the MG RX5 today and enjoy a premium driving experience.",
  },

  {
    id: 20,
    brand: "MG",
    rating: 53,
    carName: "MG GT",
    imgUrl: img20,
    model: "Model 3",
    price: 55,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Step into the sporty world of the MG GT, a sedan that combines performance with striking design. The MG GT boasts a turbocharged engine that delivers exhilarating acceleration and agile handling. Its aerodynamic lines and aggressive stance make a bold statement on the road. Inside, you'll find a refined cabin with premium materials and advanced technology, including a state-of-the-art infotainment system. Perfect for those who crave a spirited driving experience, the MG GT is a fantastic choice for anyone looking to blend style with performance.",
  },
];

export default carData;
