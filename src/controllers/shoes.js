import Db from "../db/db";
import Shoe from "../models/shoes";

import * as Response from "../helpers/response/response";


class ShoeData {
  static async addShoeData(req, res) {
    const shoeData = { ...req.body };
    try {
      const shoeInfo = await Db.addShoe(Shoe, shoeData);
      return Response.responseOkCreated(res, shoeInfo);
    } catch (error) {
      return Response.responseServerError(res);
    }
  }
  static async getAllShoes(req, res) {
    try {
      const getShoes = await Db.getShoes(Shoe);
      return Response.responseOk(res, getShoes);
    } catch (error) {
      return Response.responseNotFound(res);
    }
  }
  static async getShoeByUser(req, res) {
    const { user } = req.params;
    try {
      const shoeByUser = await Db.getShoesByUser(Shoe, user);
      return Response.responseOk(res, shoeByUser);
    } catch (error) {
      return Response.responseNotFound(res);
    }
  }
}

export default ShoeData;
