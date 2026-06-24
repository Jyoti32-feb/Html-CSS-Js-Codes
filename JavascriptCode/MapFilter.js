const products = [
    {
        id: 1,
        pname: "Laptop",
        price: 55000,
        category: "Electronics",
        qty: 10
    },
    {
        id: 2,
        pname: "Mobile",
        price: 25000,
        category: "Electronics",
        qty: 15
    },
    {
        id: 3,
        pname: "Shoes",
        price: 3000,
        category: "Fashion",
        qty: 20
    },
    {
        id: 4,
        pname: "Book",
        price: 500,
        category: "Education",
        qty: 50
    },
    {
        id: 5,
        pname: "Watch",
        price: 4000,
        category: "Accessories",
        qty: 0
    }
];

console.log(products);

const Filterproducts=products.filter((product) => {return product.qty!==0&& product.id!==4})
console.log(Filterproducts);