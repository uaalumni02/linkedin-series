import Db from "../db/db";
import Color from "../models/color";

import * as Response from "../helpers/response/response";

import validator from "../validator/color";

class ColorData {
  static async addColorData(req, res) {
    const colorData = { ...req.body };
    try {
      const result = await validator.validate(colorData);
      if (!result.error) {
        const colorInfo = await Db.addColor(Color, colorData);
        return Response.responseOkCreated(res, colorInfo);
      }
      return Response.responseBadRquest(res);
    } catch (error) {
      return Response.responseServerError(res);
    }
  }
  static async getAllColors(req, res) {
    try {
      const getColor = await Db.getColors(Color);
      return Response.responseOk(res, getColor);
    } catch (error) {
      return Response.responseNotFound(res);
    }
  }
}

export default ColorData;
