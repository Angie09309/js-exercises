class Product {
    constructor(name, price, category) {
        this.name = name; // Propiedad
        this.price = price;
        this.category = category;
    }
    // Método para mostrar información
    showInfo() {
        return `${this.name} cuesta $${this.price} esta en la categoria de: ${this.category}`;
    }

}

const product1 = new Product("Manzana", 1000, "Fruta")
console.log(product1.showInfo());


//Herencia Clase hija que extiende de Product
class ProductPerishable extends Product {
    constructor(name, price, category, dateExpiration) {
        super(name, price, category) // Llama al constructor de Producto
        this.dateExpiration = dateExpiration; // Propiedad nueva
    }
    // Método para verificar si el producto está vencido
    isOverdue() {
        const today = new Date();
        const Expiration = new Date(this.dateExpiration);
        return Expiration < today;
    }

}

// Crear un producto perecedero
const product2 = new ProductPerishable("Leche", 20, "Lácteos", "2025-01-10");
console.log(product2.showInfo()); // Información del producto
console.log(product2.isOverdue() ? "Producto vencido" : `Producto ${product2.name} no esta vencido`); // Verifica caducidad


class Store {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product); // Agregar producto al arreglo
    }

    showProducts() {
        if (this.products.length === 0) {
            console.log("La tienda no tiene productos.");
        } else {
            this.products.forEach((product, index) => {
                console.log(`${index + 1}. ${product.showInfo()}`); // Muestra información
            });
        }
    }

    static calculateAveragePrice(products) {
        if (products.length === 0) return 0; // Si no hay productos, el promedio es 0
        const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
        return totalPrice / products.length;
    }
    

}

const myStore = new Store();
myStore.addProduct(product1);
myStore.addProduct(product2);
myStore.showProducts();

const avgPrice = Store.calculateAveragePrice(myStore.products);
console.log(`El precio promedio es: $${avgPrice.toFixed(2)}`);