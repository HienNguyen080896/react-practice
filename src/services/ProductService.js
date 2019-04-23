const products = [
  {
    id: 1,
    image:
      "https://salt.tikicdn.com/cache/w1200/ts/product/34/0f/8b/9454467ac316ea683f93ff25405eee34.jpg",
    name: "Bạn đáng giá bao nhiêu?",
    description: "something about...",
    price: 0,
    price_discount: 40000,
    is_compare: false
  },
  {
    id: 2,
    image:
      "https://salt.tikicdn.com/ts/bookpreview/21/99/1069754/files/OEBPS/Images/img269.gif",
    name: "Ngủ thật lâu",
    description: "something about...",
    price: 50000,
    price_discount: 40000,
    is_compare: false
  },
  {
    id: 3,
    image:
    "https://salt.tikicdn.com/ts/bookpreview/7e/82/1621207/files/OEBPS/Images/IMG_20180529_0001.gif",
    name: "Bốn chàng trai..",
    description: "Something wrong...",
    price: 50000,
    price_discount: 30000,
    is_compare: false
  },
  {
    id: 4,
    image:
    "https://salt.tikicdn.com/ts/bookpreview/21/99/1069754/files/OEBPS/Images/img269.gif",      
    name: "Product 2",
    description: "something about...",
    price: 50000,
    price_discount: 40000,
    is_compare: false
  },
  {
    id: 5,
    image:
      "https://salt.tikicdn.com/ts/bookpreview/2a/36/1476937/files/OEBPS/Images/img740.gif",
    name: "Product 3",
    description: "Something wrong...",
    price: 50000,
    price_discount: 30000,
    is_compare: false
  },
  {
    id: 6,
    image:
      "https://salt.tikicdn.com/ts/bookpreview/9e/28/1210271/files/OEBPS/Images/img947.gif",
    name: "Product 2",
    description: "something about...",
    price: 50000,
    price_discount: 40000,
    is_compare: false
  },
  {
    id: 7,
    image:
      "https://salt.tikicdn.com/ts/bookpreview/2a/36/1476937/files/OEBPS/Images/img740.gif",
    name: "Product 3",
    description: "Something wrong...",
    price: 50000,
    price_discount: 30000,
    is_compare: false
  }
];

export const getProducts = () => products;

export const findProductById = id => products.find(p => p.id === +id);