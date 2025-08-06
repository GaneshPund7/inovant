// const Admin = require("../src/model/admin");
const Product = require("../src/model/product");
const ProductImage = require("../src/model/productImg");
const User = require("../src/model/user");
// const admin = require("../src/routes/admin");

const models = {
  User,Product,ProductImage};

Object.values(models).forEach(model => {
  if (model.associate) {
    model.associate(models);
  }
});

const syncModels = async () => {
  for (const model of Object.values(models)) {
    await model.sync({ alter: true });
  }
};
syncModels();

module.exports = { models };
