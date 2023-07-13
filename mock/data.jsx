const products = [
    {
        id: '0',
        name: 'Peugeot 208 1.6l Active Pack Tiptronic',
        description: 'Consesionario oficial Peugeot en Zona Oeste, entrega inmediata. Financiación con la mejor tasa del mercado.',
        price: 7700000,
        stock: 3,
        category: 'Vehiculos',
    },
    {
        id: '1',
        name: 'prueba',
        description: 'prueba prueba',
        price: 300,
        stock: 10,
        category: 'Vehiculos',
    },        {
        id: '2',
        name: 'prueba',
        description: 'prueba prueba',
        price: 300,
        stock: 10,
        category: 'Vehiculos',
    },        {
        id: '3',
        name: 'prueba',
        description: 'prueba prueba',
        price: 300,
        stock: 10,
        category: 'Vehiculos',
    },
    {
      id: '4',
      name: 'prueba',
      description: 'prueba prueba',
      price: 300,
      stock: 10,
      category: 'Vehiculos',
  },        {
      id: '5',
      name: 'prueba',
      description: 'prueba prueba',
      price: 300,
      stock: 10,
      category: 'Vehiculos',
  },        {
      id: '6',
      name: 'prueba',
      description: 'prueba prueba',
      price: 300,
      stock: 10,
      category: 'Vehiculos',
  },


    
]



export const getProducts = () => {
    let condition = true;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (condition) {
          resolve(products);
        } else {
          reject('ERROR');
        }
      }, 2000);
    });
  };