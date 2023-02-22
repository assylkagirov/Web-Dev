export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  link: string;
  image: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone 14 Pro',
    price: 652666,
    rating: 5,
    description: "технология NFC: Да; цвет: фиолетовый; тип экрана: OLED, Super Retina XDR display с возможностью; постоянной работы; диагональ: 6.1 дюйм; размер оперативной памяти: 6 ГБ; процессор: 6-ядерный Apple A16 Bionic; объем встроенной памяти: 256 ГБ; емкость аккумулятора: 3125 мАч  ",
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363319/?c=591010000#!/item',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha5/h3f/62948396695582/apple-iphone-14-pro-128gb-fioletovyj-106363319-1.jpg"
  },
  {
    id: 2,
    name: 'iPhone 14 Pro Max',
    price: 708180,
    rating: 5,
    description: 'технология NFC: Да; цвет: фиолетовый; тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы; диагональ: 6.7 дюйм; размер оперативной памяти: 6 ГБ; процессор: 6-ядерный Apple A16 Bionic; объем встроенной памяти: 256 ГБ; емкость аккумулятора: 3095 мАч',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=591010000#!/item',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h61/62948780736542/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg"
  },
  {
    id: 3,
    name: 'iPhone 14 Plus',
    price: 494270,
    rating: 4,
    description: 'технология NFC: Да; цвет: голубой; тип экрана: OLED, Super Retina XDR display; диагональ: 6.7 дюйм; размер оперативной памяти: 6 ГБ; процессор: 6-ядерный Apple A15 Bionic; объем встроенной памяти: 128 ГБ; емкость аккумулятора: 4325 мАч',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-plus-128gb-goluboi-106363220/?c=591010000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h46/h3e/63073062125598/apple-iphone-14-plus-128gb-goluboj-106363220-1.jpg"
  },
  {
    id: 4,
    name: 'iPhone 13 Pro',
    price: 689700,
    rating: 4,
    description: 'технология NFC: Да; цвет: зеленый; тип экрана: OLED, Super Retina XDR; диагональ: 6.1 дюйм; размер оперативной памяти: 6 ГБ; процессор: 6-ядерный Apple A15 Bionic; объем встроенной памяти: 256 ГБ; емкость аккумулятора: 3095 мАч',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-pro-256gb-zelenyi-104079046/?c=591010000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h60/h31/49319350206494/apple-iphone-13-pro-256gb-zelenyj-104079046-1.jpg"
  },
  {
    id: 5,
    name: 'iPhone 13 Pro Max',
    price: 663499,
    rating: 4.6,
    description: 'технология NFC: Да; цвет: зеленый;тип экрана: OLED, Super Retina XDR; диагональ: 6.7 дюйм; размер оперативной памяти: 6 ГБ; процессор: 6-ядерный Apple A15 Bionic; объем встроенной памяти: 128 ГБ; емкость аккумулятора: 4352 мАч',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-pro-max-128gb-zelenyi-104079084/?c=591010000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1f/hff/49319414333470/apple-iphone-13-pro-max-128gb-zelenyj-104079084-1.jpg"
  },
  {
    id: 6,
    name: 'iPhone 12',
    price: 322052,
    rating: 4.2,
    description: 'технология NFC: Да; цвет: черный; тип экрана: сенсорный, мультитач OLED, Super Retina XDR; диагональ: 6.1 дюйм; размер оперативной памяти: 4 ГБ; процессор: 6-ядерный Apple A14 Bionic; объем встроенной памяти: 64 ГБ; емкость аккумулятора: 2775 мАч',
    link: 'https://kaspi.kz/shop/p/apple-iphone-12-64gb-chernyi-100656839/?c=591010000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h35/h3d/33279115886622/apple-iphone-12-64gb-cernyj-100656839-1-Container.jpg"
  },
  {
    id: 7,
    name: 'iPhone 12 Pro',
    price: 598695,
    rating: 4,
    description: 'технология NFC: Да; цвет: серый; тип экрана: сенсорный, мультитач OLED Super Retina XDR; диагональ: 6.1 дюйм; размер оперативной памяти: 6 ГБ; процессор: 6-ядерный Apple A14 Bionic; объем встроенной памяти: 128 ГБ; емкость аккумулятора: 2775 мАч',
    link: 'https://kaspi.kz/shop/p/apple-iphone-12-pro-128gb-seryi-100657107/?c=591010000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h09/h57/33280339476510/apple-iphone-12-pro-128gb-seryj-100657107-1-Container.jpg"
  },
  {
    id: 8,
    name: 'iPhone 14',
    price: 430360,
    rating: 4,
    description: 'технология NFC: Да; цвет: черный; тип экрана: OLED, Super Retina XDR display; диагональ: 6.1 дюйм; размер оперативной памяти: 6 ГБ; процессор: 6-ядерный Apple A15 Bionic; объем встроенной памяти: 128 ГБ;емкость аккумулятора: 3279 мАч',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=591010000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1f/h05/63072540098590/apple-iphone-14-128gb-cernyj-106363023-1.jpg"
  },
  {
    id: 9,
    name: 'iPhone 13',
    price: 380777,
    rating: 4,
    description: 'технология NFC: Да; цвет: черный; тип экрана: OLED, Super Retina XDR; диагональ: 6.1 дюйм; размер оперативной памяти: 4 ГБ; процессор: 6-ядерный Apple A15 Bionic; объем встроенной памяти: 128 ГБ; емкость аккумулятора: 3095 мАч',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=591010000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h01/h10/46392662491166/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg"
  },
  {
    id: 10,
    name: 'iPhone 11',
    price: 292759,
    rating: 4,
    description: 'технология NFC: Да; цвет: черный; тип экрана: сенсорный мультитач цветной IPS, Liquid Retina HD; диагональ: 6.1 дюйм; размер оперативной памяти: 4 ГБ; процессор: 6-ядерный Apple A13 Bionic; объем встроенной памяти: 128 ГБ; емкость аккумулятора: 3110 мАч',
    link: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=591010000#!/item',
    image:"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0a/h2e/31489167622174/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg"
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/