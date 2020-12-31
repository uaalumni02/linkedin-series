import Db from "../db/db";
import User from "../models/user";

import Token from "../helpers/jwt/token";
import bcrypt from "../helpers/bcrypt/bcrypt";
import * as Response from "../helpers/response/response";

class UserData {
  static async addUser(req, res) {
    const { username, password } = req.body;
    try {
      const hash = await bcrypt.hashPassword(password, 10);
      const user = { ...req.body, password: hash };
      const { username, _id: userId } = await Db.saveUser(User, user);
      const token = Token.sign({ username, userId });
      const userData = { username, userId, token };
      return Response.responseOkUserCreated(res, userData);
    } catch (error) {
      return Response.responseServerError(res);
    }
  }
  static async userLogin(req, res) {
    const { username, password } = req.body;
    try {
      const user = await Db.findUser(User, username);
      if (user == null) {
        return Response.responseBadAuth(res, user);
      }
      const isSamePassword = await bcrypt.comparePassword(
        password,
        user.password
      );
      if (isSamePassword) {
        const token = Token.sign({
          username: user.username,
          userId: user._id,
        });
        const userData = { user, token };
        return Response.responseOk(res, userData);
        return Response.responseBadAuth(res);
      } else {
        return Response.responseValidationError(res);
      }
    } catch (error) {
      return Response.responseServerError(res);
    }
  }
  static async getAllUsers(req, res) {
    try {
      const allUsers = await Db.getAllUsers(User);
      return Response.responseOk(res, allUsers);
    } catch (error) {
      return Response.responseNotFound(res);
    }
  }
}

export default UserData;
