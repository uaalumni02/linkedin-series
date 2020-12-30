class Db {
  static async addShoe(model, data) {
    try {
      const newShoe = await model({ ...data });
      return newShoe.save();
    } catch (error) {
      throw error;
    }
  }
  static async getShoes(model) {
    try {
      const allShoes = await model.find({});
      return allShoes
    } catch (error) {
      throw error;
    }
  }
}

export default Db;
