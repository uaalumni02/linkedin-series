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
  static async findUser(model, username) {
    try {
      const user = await model.findOne({ username })
      return user
    } catch (error) {
      throw error;
    }
  }
  static async saveUser(model, user) {
    try {
      const newUser = await model({ ...user });
      return newUser.save();
    } catch (error) {
      throw error;
    }
  }
  static async getAllUsers(model) {
    try {
      const allUsers = await model.find({});
      return allUsers
    } catch (error) {
      throw error;
    }
  }
}

export default Db;
