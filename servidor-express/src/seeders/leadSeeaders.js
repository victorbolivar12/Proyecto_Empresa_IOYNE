import UserModule from "../models/user.module.js";
import usersData from "./users.data.js";
import customerModule from "../models/customer.module.js";
import customersData from "./custumerData.js"
import productModule from "../models/product.module.js";
import productsData from "./productData.js";
import quoteModel from "../models/quote.module.js";
import quotesData from "./quotesData.js";
import quoteProductModel from "../models/quote_product.module.js";
import quotesProductsData from "./quotesProductsData.js";

const seedData = async (dataArray, model) => {
    try {
        // Check if there are any records in the table
        const existingRecords = await model.findAll();
        if (existingRecords.length > 0) {
            return;
        }

        // Insert the data in the database
        const insertedData = await model.bulkCreate(dataArray);
        console.log("Records inserted successfully");
    } catch (error) {
        console.error("Error inserting records:", error);
    }
};

const runSeeders = async () => {
    try {
        const modelsData = [
            { name: "users", model: UserModule, data: usersData },
            { name: "custumers", model: customerModule, data: customersData },
            { name: "products", model: productModule, data: productsData },
            { name: "quotes", model: quoteModel, data: quotesData },
            { name: "quotes_products", model: quoteProductModel, data: quotesProductsData },
            // Call other seeders to insert additional records
            // Example:
            // name: "name_model", model: ModuleModel, data: modelData;
            // ...
        ];

        for (const modelData of modelsData) {
            await seedData(modelData.data, modelData.model);
            console.log(`Data successfully inserted into table ${modelData.name}`);
        }

    } catch (err) {
        console.error("Error running seeders:", err);
    }
};

export default runSeeders;
