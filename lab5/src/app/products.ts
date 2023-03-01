export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  link: string;
  category: string,
  image: string;
  likes:number;
  isLiked: boolean;
  show:boolean;
}

export const products = [
  {
    id: 1,
    name: 'Phone 14 Pro',
    price: 652666,
    rating: 5,
    category: "Phone",
    likes: 12,
    isLiked: true,
    show: true,
    description: "технология NFC: Да; цвет: фиолетовый; тип экрана: OLED, Super Retina XDR display с возможностью; постоянной работы; диагональ: 6.1 дюйм; размер оперативной памяти: 6 ГБ; процессор: 6-ядерный Apple A16 Bionic; объем встроенной памяти: 256 ГБ; емкость аккумулятора: 3125 мАч  ",
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363319/?c=591010000#!/item',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha5/h3f/62948396695582/apple-iphone-14-pro-128gb-fioletovyj-106363319-1.jpg"
  },
  {
    id: 2,
    name: 'iPhone 14 Pro Max',
    price: 708180,
    rating: 5,
    category: "Phone",
    likes: 12,
    isLiked: true,
    show: true,
    description: 'технология NFC: Да; цвет: фиолетовый; тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы; диагональ: 6.7 дюйм; размер оперативной памяти: 6 ГБ; процессор: 6-ядерный Apple A16 Bionic; объем встроенной памяти: 256 ГБ; емкость аккумулятора: 3095 мАч',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=591010000#!/item',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h61/62948780736542/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg"
  },
  {
    id: 3,
    name: 'iPhone 14 Plus',
    price: 494270,
    rating: 4,
    category: "Phone",
    likes: 12,
    isLiked: true,
    show: true,
    description: 'технология NFC: Да; цвет: голубой; тип экрана: OLED, Super Retina XDR display; диагональ: 6.7 дюйм; размер оперативной памяти: 6 ГБ; процессор: 6-ядерный Apple A15 Bionic; объем встроенной памяти: 128 ГБ; емкость аккумулятора: 4325 мАч',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-plus-128gb-goluboi-106363220/?c=591010000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h46/h3e/63073062125598/apple-iphone-14-plus-128gb-goluboj-106363220-1.jpg"
  },
  {
    id: 4,
    name: 'iPhone 13 Pro',
    price: 689700,
    rating: 4,
    category: "Phone",
    likes: 12,
    isLiked: true,
    show: true,
    description: 'технология NFC: Да; цвет: зеленый; тип экрана: OLED, Super Retina XDR; диагональ: 6.1 дюйм; размер оперативной памяти: 6 ГБ; процессор: 6-ядерный Apple A15 Bionic; объем встроенной памяти: 256 ГБ; емкость аккумулятора: 3095 мАч',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-pro-256gb-zelenyi-104079046/?c=591010000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h60/h31/49319350206494/apple-iphone-13-pro-256gb-zelenyj-104079046-1.jpg"
  },
  {
    id: 5,
    name: 'iPhone 13 Pro Max',
    price: 663499,
    rating: 4.6,
    category: "Phone",
    likes: 12,
    isLiked: true,
    show: true,
    description: 'технология NFC: Да; цвет: зеленый;тип экрана: OLED, Super Retina XDR; диагональ: 6.7 дюйм; размер оперативной памяти: 6 ГБ; процессор: 6-ядерный Apple A15 Bionic; объем встроенной памяти: 128 ГБ; емкость аккумулятора: 4352 мАч',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-pro-max-128gb-zelenyi-104079084/?c=591010000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1f/hff/49319414333470/apple-iphone-13-pro-max-128gb-zelenyj-104079084-1.jpg"
  },
  {
    id: 6,
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    price: 478888,
    rating: 4.6,
    category: "Laptop",
    likes: 10,
    isLiked: true,
    show: true,
    description: 'диагональ экрана: 13.3 дюйм процессор: Apple M1' +
    "видеокарта: Apple M1 7 core" +
    "размер оперативной памяти: 8 ГБ" +
    "тип жесткого диска: SSD"+
    "общий объем накопителей: 256 ГБ",
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd3/he8/33125684772894/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg"
  },
  {
    id: 7,
    name: 'Ноутбук Apple MacBook Pro 13 MNEH3 серый',
    price: 692815,
    rating: 4,
    category: "Laptop",
    likes: 12,
    isLiked: true,
    show: true,
    description: 'Диагональ экрана: 13.3 дюйм Процессор: Apple M2 Видеокарта: Apple M2 10-Core Размер оперативной памяти: 8 ГБ Тип жесткого диска: SSD Общий объем накопителей: 256 Г',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-13-mneh3-seryi-105514238/?c=750000000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2a/h0c/51918241103902/apple-macbook-pro-13-mneh3-seryi-105514238-1.jpg"
  },
  {
    id: 8,
    name: 'Ноутбук Apple MacBook Pro 14 MKGQ3 серый',
    price: 1205195,
    rating: 4,
    category: "Laptop",
    likes: 123,
    isLiked: true,
    show: true,
    description: 'Диагональ экрана: 14.2 дюйм Процессор: Apple M1 Pro Видеокарта: 16‑ядерный графический процессор Apple Размер оперативной памяти: 16 ГБ Тип жесткого диска: SSD Общий объем накопителей: 1000 Г',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgq3-seryi-102972792/?c=750000000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbe/h73/47367059374110/apple-macbook-pro-14-2021-mkgq3-102972792-1.jpg"
  },
  {
    id: 9,
    name: 'Ноутбук Acer Nitro 5 AN515-57 NH.QEKER.004 черный',
    price: 389980,
    rating: 4,
    category: "Laptop",
    likes: 12,
    isLiked: true,
    show: true,
    description: 'Диагональ экрана: 15.6 дюйм Процессор: Intel Core i5 11400H Видеокарта: NVIDIA GeForce GTX 1650 Размер оперативной памяти: 16 ГБ Тип жесткого диска: SSD Общий объем накопителей: 512 Г',
    link: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc3/hde/67236399153182/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg"
  },
  {
    id: 10,
    name: 'Ноутбук ASUS X515EA-BQ3144W I385SUW1 90NB0TY1-M02ZL0 темно-серый',
    price: 246990,
    rating: 4,
    category: "Laptop",
    likes: 412,
    isLiked: true,
    show: true,
    description: 'Диагональ экрана: 15.6 дюйм Процессор: Intel Core i3 1115G4 Видеокарта: Intel UHD Graphics Размер оперативной памяти: 8 ГБ Тип жесткого диска: SSD Общий объем накопителей: 512 Г',
    link: 'https://kaspi.kz/shop/p/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928/?c=750000000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h4d/65953424244766/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928-1.jpg"
  },

  {
    id: 11,
    name: 'Наушники Apple AirPods Pro 2nd generation белый',
    price: 120746,
    rating: 4.2,
    category: "Headphone",
    likes: 831,
    isLiked: true,
    show: true,
    description: 'Тип: наушники; Вид: внутриканальные; Подключение: беспроводное; Тип акустического оформления: закрытые; Тип крепления: без крепления; Система активного шумоподавления: Да; Микрофон: Дa',
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/?c=750000000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h10/he6/62281477193758/apple-airpods-pro-2nd-generation-belyj-106362968-1.jpg"
  },

  {
    id: 12,
    name: 'Наушники Apple AirPods with Charging Case белый',
    price: 64448,
    rating: 4,
    category: "Headphone",
    likes: 8346,
    isLiked: true,
    show: true,
    description: 'Тип: наушники; Вид: внутриканальные; Подключение: беспроводное; Тип акустического оформления: закрытые; Тип крепления: без крепления; Система активного шумоподавления: Нет; Микрофон: Дa',
    link: 'https://kaspi.kz/shop/p/apple-airpods-with-charging-case-belyi-4804056/?c=750000000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3c/h64/46637140475934/apple-airpods-2-with-charging-case-belyj-4804056-2-Container.jpg"
  },

  {
    id: 13,
    name: 'Наушники Apple AirPods 3 белый',
    price: 104980,
    rating: 4,
    category: "Headphone",
    likes: 412,
    isLiked: true,
    show: true,
    description: 'Тип: наушники; Вид: внутриканальные; Подключение: беспроводное; Тип акустического оформления: закрытые; Тип крепления: без крепления; Система активного шумоподавления: Нет; Микрофон: Дa',
    link: 'https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/?c=750000000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd3/h7b/46719105990686/apple-airpods-3-belyj-102667744-1.jpg"
  },

  {
    id: 14,
    name: 'Наушники TWS F9-5 черные',
    price: 3371,
    rating: 4,
    category: "Headphone",
    likes: 99,
    isLiked: true,
    show: true,
    description: 'Тип: гарнитура; Вид: внутриканальные; Подключение: беспроводное; Тип акустического оформления: полуоткрытые; Тип крепления: без крепления; Система активного шумоподавления: Нет; Микрофон: Дa',
    link: 'https://kaspi.kz/shop/p/tws-f9-5-chernye-101769530/?c=750000000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hea/hbe/47809640792094/tws-f9-5-cernyj-101769530-1-Container.jpg"
  },

  {
    id: 15,
    name: 'Наушники Realme Buds T100 черный',
    price: 12253,
    rating: 3,
    category: "Headphone",
    likes: 213,
    isLiked: true,
    show: true,
    description: 'Тип: гарнитура; Вид: внутриканальные; Подключение: беспроводное; Тип акустического оформления: закрытые; Тип крепления: без крепления; Система активного шумоподавления: Да; Микрофон: Дa',
    link: 'https://kaspi.kz/shop/p/realme-buds-t100-chernyi-107357596/?c=750000000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h86/hb3/65147416870942/realme-buds-t100-chernyi-107357596-1.jpg"
  },

  {
    id: 16,
    name: 'Наушники Xiaomi Redmi AirDots S черный',
    price: 4500,
    rating: 3.5,
    category: "Headphone",
    likes: 888,
    isLiked: true,
    show: true,
    description: 'Тип: гарнитура; Вид: внутриканальные; Подключение: беспроводное; Тип акустического оформления: закрытые; Тип крепления: без крепления; Система активного шумоподавления: Нет; Микрофон: Дa',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-airdots-s-chernyi-100286960/?c=750000000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h23/h8d/49203489275934/xiaomi-redmi-airdots-s-chernyi-100286960-1.jpg"
  },

  {
    id: 17,
    name: 'Наушники Apple AirPods Pro белый',
    price: 102846,
    rating: 4,
    category: "Headphone",
    likes: 999,
    isLiked: true,
    show: true,
    description: 'Тип: гарнитура; Вид: внутриканальные; Подключение: беспроводное; Тип акустического оформления: закрытые; Тип крепления: без крепления; Система активного шумоподавления: Да; Микрофон: Дa',
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-belyi-4804718/?c=750000000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5e/hcc/46659804692510/apple-airpods-pro-belyj-4804718-1-Container.jpg"
  },

  {
    id: 18,
    name: 'Наушники JBL Tune 510BT черный',
    price: 23935,
    rating: 4,
    category: "Headphone",
    likes: 400,
    isLiked: true,
    show: true,
    description: 'Тип: гарнитура; Вид: внутриканальные; Подключение: беспроводное; Тип акустического оформления: закрытые; Тип крепления: без крепления; Система активного шумоподавления: нет; Микрофон: Дa',
    link: 'https://kaspi.kz/shop/p/jbl-tune-510bt-chernyi-101420081/?c=750000000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haa/hd2/33957524733982/jbl-tune-510bt-cernyj-101420081-1-Container.jpg"
  },

  {
    id: 19,
    name: 'Наушники Xiaomi Redmi Buds 3 Lite черный',
    price: 12597,
    rating: 4,
    category: "Headphone",
    likes: 412,
    isLiked: true,
    show: true,
    description: 'Тип: гарнитура; Вид: внутриканальные; Подключение: беспроводное; Тип акустического оформления: закрытые; Тип крепления: без крепления; Система активного шумоподавления: нет; Микрофон: Дa',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-buds-3-lite-chernyi-103306269/?c=750000000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h06/h81/49203482165278/xiaomi-redmi-buds-3-lite-cernyj-103306269-1.jpg"
  },

  {
    id: 20,
    name: 'Наушники JBL Tune 510BT черный',
    price: 23935,
    rating: 4,
    category: "Headphone",
    likes: 555,
    isLiked: true,
    show: true,
    description: 'Тип: гарнитура; Вид: внутриканальные; Подключение: беспроводное; Тип акустического оформления: закрытые; Тип крепления: без крепления; Система активного шумоподавления: нет; Микрофон: Дa',
    link: 'https://kaspi.kz/shop/p/jbl-tune-510bt-chernyi-101420081/?c=750000000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haa/hd2/33957524733982/jbl-tune-510bt-cernyj-101420081-1-Container.jpg"
  },
  {
    id: 21,
    name: 'Смарт-часы Apple Watch Series 8 45 мм Aluminum черный',
    price: 228490,
    rating: 4.2,
    category: "Watch",
    likes: 567,
    isLiked: true,
    show: true,
    description: 'Поддержка платформ: iOS; Материал корпуса: алюминий; Цвет корпуса: черный; Технология экрана: OLED; Объем встроенной памяти: 32 Гб; Интерфейсы: Bluetooth, ,Wi-Fi, ,NFC; Время работы: в обычном режиме: 18 часов, в режиме энергосбережения: 36 часов',
    link: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0b/h04/63158967959582/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg"
  },
  {
    id: 22,
    name: 'Смарт-часы Apple Watch SE 2nd Gen 40 мм золотистый',
    price: 159890,
    rating: 4.7,
    category: "Watch",
    likes: 234,
    isLiked: true,
    show: true,
    description: 'Поддержка платформ: iOS; Материал корпуса: алюминий; Цвет корпуса: золотистый; Технология экрана: OLED; Объем встроенной памяти: 32 Гб; Интерфейсы: Bluetooth, ,Wi-Fi, ,NFC',
    link: 'https://kaspi.kz/shop/p/apple-watch-se-2nd-gen-40-mm-zolotistyi-106362759/?c=750000000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/he8/62711073374238/apple-watch-se-2nd-generation-40-mm-zolotistyj-106362759-1.jpg"
  },
  {
    id: 23,
    name: 'Смарт-часы Apple Watch SE 2nd Gen 44 мм черный',
    price: 169475,
    rating: 4.5,
    category: "Watch",
    likes: 812,
    isLiked: true,
    show: true,
    description: 'Поддержка платформ: iOS; Материал корпуса: алюминий; Цвет корпуса: черный; Технология экрана: OLED; Объем встроенной памяти: 32 Гб; Интерфейсы: Bluetooth, ,Wi-Fi, ,NFC',
    link: 'https://kaspi.kz/shop/p/apple-watch-se-2nd-gen-44-mm-chernyi-106362757/?c=750000000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf4/hfb/62711071113246/apple-watch-se-2nd-generation-40-mm-cernyj-106362757-1.jpg"
  },
  {
    id: 24,
    name: 'Смарт-часы Apple Watch Series 8 45 мм Aluminum золотистый',
    price: 228750,
    rating: 4.7,
    category: "Watch",
    likes: 523,
    isLiked: true,
    show: true,
    description: 'Поддержка платформ: iOS; Материал корпуса: алюминий; Цвет корпуса: starlight; Технология экрана: OLED; Объем встроенной памяти: 32 Гб; Интерфейсы: Bluetooth, ,Wi-Fi, ,NFC; Время работы: в обычном режиме: 18 часов, в режиме энергосбережения: 36 часов',
    link: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-zolotistyi-106585021/?c=750000000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h50/h39/63158668460062/apple-watch-series-8-45-mm-aluminum-zolotistyj-106585021-1.jpg"
  },
  {
    id: 25,
    name: 'Смарт-часы Apple Watch Series 8 41 мм Aluminum золотистый',
    price: 219970,
    rating: 4.4,
    category: "Watch",
    likes: 5432,
    isLiked: true,
    show: true,
    description: 'Поддержка платформ: iOS; Материал корпуса: алюминий; Цвет корпуса: starlight; Технология экрана: OLED; Объем встроенной памяти: 32 Гб; Интерфейсы: Bluetooth, ,Wi-Fi, ,NFC; Время работы: в обычном режиме: 18 часов, в режиме энергосбережения: 36 часов',
    link: 'https://kaspi.kz/shop/p/apple-watch-series-8-41-mm-aluminum-zolotistyi-106585035/?c=750000000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hda/hef/63158666428446/apple-watch-series-8-41-mm-aluminum-zolotistyj-106585035-1.jpg"
  },
  {
    id: 26,
    name: 'Смарт-часы Xiaomi Redmi Watch 2 Lite GL черный',
    price: 31790,
    rating: 3.5,
    category: "Watch",
    likes: 445,
    isLiked: true,
    show: true,
    description: 'Поддержка платформ: Android, ,iOS; Материал корпуса: пластик; Цвет корпуса: черный; Технология экрана: TFT; Интерфейсы: Bluetooth; Время работы: в активном режиме: 120 ч, в режиме ожидания: 240 ч',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-watch-2-lite-gl-chernyi-103246651/?c=750000000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/h1a/47874442526750/smart-casy-xiaomi-redmi-watch-2-lite-gl-black-103246651-1.jpg"
  },
  {
    id: 27,
    name: 'Смарт-часы COLMI P28 Plus черный',
    price: 24990,
    rating: 4.5,
    category: "Watch",
    likes: 743,
    isLiked: true,
    show: true,
    description: 'Поддержка платформ: Android, ,iOS; Цвет корпуса: черный; Интерфейсы: Bluetooth; Время работы: 3-7 дне',
    link: 'https://kaspi.kz/shop/p/colmi-p28-plus-chernyi-106096505/?c=750000000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/hd5/61766572474398/colmi-p28-plus-chernyi-106096505-1.jpg"
  },
  {
    id: 28,
    name: 'Смарт-часы Samsung Galaxy Watch 4 Classic SM-R890NZKACIS 46 мм черный-черный',
    price: 90870,
    rating: 4.6,
    category: "Watch",
    likes: 452,
    isLiked: true,
    show: true,
    description: 'Поддержка платформ: Android; Материал корпуса: алюминий; Цвет корпуса: черный; Интерфейсы: Bluetooth, ,NFC',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-4-classic-sm-r890nzkacis-46-mm-chernyi-chernyi-102170938/?c=750000000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h31/h9b/62047597559838/samsung-galaxy-watch-4-classic-sm-r890-cernyj-102170938-1-Container.jpg"
  },
  {
    id: 29,
    name: 'Смарт-часы Amazfit Bip U Pro черный',
    price: 25418,
    rating: 4.9,
    category: "Watch",
    likes: 324,
    isLiked: true,
    show: true,
    description: 'Поддержка платформ: Android, ,iOS; Материал корпуса: пластик; Цвет корпуса: черный; Технология экрана: AMOLED; Интерфейсы: Bluetooth, ,Wi-Fi, ,ANT+; Время работы: в активном режиме: 120 ч, в режиме ожидания: 216 ',
    link: 'https://kaspi.kz/shop/p/amazfit-bip-u-pro-chernyi-100914321/?c=750000000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8b/h68/33549396967454/amazfit-bip-u-pro-cernyj-100914321-1-Container.jpg"
  },
  {
    id: 30,
    name: 'Смарт-часы Apple Watch SE 2nd Gen 40 мм черный',
    price: 155975,
    rating: 5.0,
    category: "Watch",
    likes: 812,
    isLiked: true,
    show: true,
    description: 'Поддержка платформ: iOS; Материал корпуса: алюминий; Цвет корпуса: черный; Технология экрана: OLED; Объем встроенной памяти: 32 Гб; Интерфейсы: Bluetooth, ,Wi-Fi, ,NFC',
    link: 'https://kaspi.kz/shop/p/apple-watch-se-2nd-gen-40-mm-chernyi-106362731/?c=750000000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haa/hd5/62711069278238/apple-watch-se-2nd-generation-40-mm-cernyj-106362731-1.jpg"
  }


];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/