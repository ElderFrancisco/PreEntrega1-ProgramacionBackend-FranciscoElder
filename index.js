class ProductManager {
  constructor() {
    this.products = [];
    this.nuevoId = 1;
  }

  addProduct(title, price, description, thumbnail, code, stock) {
    const productosExiste = this.products.find(
      (producto) => producto.code === code,
    );
    if (productosExiste) {
      console.log('El producto' + { title } + ' ya existe');
      return;
    }

    if (!title || !price || !description || !thumbnail || !code || !stock) {
      console.log('No se puede agregar un producto vacio');
    } else {
      const producto = {
        id: this.nuevoId++,
        title: title,
        description: description,
        price: price,
        thumbnail: thumbnail,
        code: code,
        stock: stock,
      };
      this.products.push(producto);
      {
        console.log('Producto agregado');
      }
    }
  }
  getProducts() {
    if (this.products.length === 0) {
      console.log('No hay productos');
    }
    return this.products;
  }

  getProduct(id) {
    const productoId = this.products.find((producto) => producto.id === id);
    if (!productoId) {
      console.log('Producto no encontrado');
    } else {
      console.log('el producto' + { id } + ' fue encontrado');
      return productoId;
    }
  }
}

const producto = new ProductManager();
producto.addProduct(
  'Escuadra',
  123.45,
  'Escuadra de 30 cm',
  'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',
  'ESC1',
  123,
);
producto.addProduct(
  'Calculadora',
  234.56,
  'Calculadora basica',
  'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',
  'CAL2',
  234,
);

//console.log(producto.getProducts());
console.log(producto.getProduct(2));
