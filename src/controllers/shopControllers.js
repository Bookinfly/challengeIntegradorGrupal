

import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Función para cargar el JSON y devolverlo como objeto
const loadJsonData = async () => {
    try {
        const data = await fs.readFile(join(__dirname, '../../public/pages/shop/shopProducts.json'), 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error loading JSON data: ${error.message}`);
        throw error;
    }
};

// Función que retorna la lectura del JSON como objeto
const getJsonData = async () => {
    return await loadJsonData().catch(err => {
        console.error(err);
        return {}; // Puedes retornar un objeto vacío o manejar el error según tus necesidades
    });
};

// Asigna el resultado de la función a la variable jsonData
const jsonData = await getJsonData();

const shopControllers = {
    
    shop: async (req, res) => res.render('shop/shop', {
        view: {
            title: "Shop | Funkoshop"  
        }
    }),

    shirts: async (req, res) => res.render('shop/shirts', {
        view: {
            title: "Shirts | Funkoshop"
        }
    }),

    item: (req, res) => res.render('shop/item', {
        view: {
            title: "Item | Funkoshop"  
        }
    }),
    
    /* {
        // Acá poner la acción para la ruta GET '/item/:id'

        const itemId = req.params.id;
        // Acá realizar la lógica necesaria para encontrar y devolver un producto por su ID

        res.send(`Route for find and retrieve a product from the ID: ${itemId}`);
    } */

    addItemToCart: (req, res) => {
        // Acá poner la acción para la ruta POST '/item/:id/add'
        
        // Acá realizar la lógica necesaria para agregar un elemento al carrito de compras
        res.send('Route for add the current item to the shop cart');
    },

    cart: (req, res) => {
        res.render('shop/cart', {
            view: {
                title: "Cart | Funkoshop",
                jsonData: jsonData // Usa directamente la variable global
            },
        });
    },
    
    
    

    checkout: (req, res) => {
        // Acá poner la acción para la ruta POST '/cart'

        // Acá realizar la lógica necesaria para ir a la página de finalización de compra
        res.send('Route for go to checkout page');
    }
}

export default shopControllers;
