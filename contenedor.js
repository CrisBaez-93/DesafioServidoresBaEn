const fs = require("fs");

const readProducts = async () => {
  let file = fs.promises.readFile("./productos.txt", "utf-8");
  return file;
};

module.exports = class Contenedor {
  constructor() {
    this.archivo = [];
  }

  async getAll() {
    try {
      let fileExist = await readProducts();
      if (fileExist && fileExist.length > 0) {
        let fileData = JSON.parse(fileExist);
        return fileData;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getRandom() {
    try {
      let fileExist = await readProducts();
      if (fileExist && fileExist.length > 0) {
        let fileData = JSON.parse(fileExist);
        let random = Math.floor(Math.random() * fileData.length);
        return fileData[random];
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  }
};
