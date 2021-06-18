import bcrypt from 'bcryptjs'
const data = {
  users: [
    {
      name: "Tarek",
      email: "admin@gmail.com",
      password: bcrypt.hashSync("1234",8),
      isAdmin: true,
    },
    {
        name: "User",
        email: "user@gmail.com",
        password: bcrypt.hashSync("1234",8),
        isAdmin: false,
      }
  ],
  products: [
    {
      
      name: "Slim Shirt",
      category: "Shirts",
      image: "/images/d1.jpg",
      price: 60,
      brand: "nike",
      rating: 4.2,
      numReviews: 5,
      countInStock: 6,
      description:'a very good Shirt'
    },
    {
    
      name: "Fit Shirt",
      category: "Shirts",
      image: "/images/d2.jpg",
      price: 60,
      brand: "nike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 8,
      description:'a very good Shirt'

    },
    {
    
      name: "Best Shirt",
      category: "Pants",
      image: "/images/d3.jpg",
      price: 70,
      brand: "nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 10,
      description: "a very good Shirt",
    },
    {
    
      name: "Nike pant",
      category: "Pants",
      image: "/images/p2.jpg",
      price: 70,
      brand: "nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 10,
      description:'a very good Pant'

    },
    {
     
      name: "Fit Pant",
      category: "Pants",
      image: "/images/p1.jpg",
      price: 60,
      brand: "nike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 0,
      description:'a very good Pant'

    },
    {
     
      name: "Best Pant",
      category: "Pants",
      image: "/images/d3.jpg",
      price: 70,
      brand: "nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 10,
      description: "a very good Pant",
    },
  ],
};
export default data;
