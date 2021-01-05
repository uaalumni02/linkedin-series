import "dotenv/config";
import chai from "chai";
import chaiHttp from "chai-http";
import request from "supertest";
import Mock from "../__mocks__/index";
import app from "../../src/server";

const http = request.agent(app);
const { expect } = chai;

chai.use(chaiHttp);
chai.should();

const colorPath = "/api/color";
const userPath = "/api/user";
let validAdminToken;
let id;

describe("Color", () => {
  before(function (done) {
    this.timeout(20000);
    http
      .post(userPath)
      .send(Mock.user)
      .end((error, response) => {
        validAdminToken = response.body.userdata.token;
        done();
      });
  });
  describe("add color", () => {
    it("should not add color if no valid in header", (done) => {
      request(app).post(colorPath).send(Mock.color).expect(401, done);
    });
  });
  describe("add color", () => {
    it("should add color since there is a valid header", (done) => {
      request(app)
        .post(colorPath)
        .set("Authorization", "Bearer " + validAdminToken)
        .send(Mock.color)
        .expect(201, done);
      Mock.color.should.be.a("object");
      expect(Mock.color).to.have.property("color");
    });
  });
  describe("get all colors", () => {
    it("should not get colors since no valid token", (done) => {
      request(app).get(colorPath).expect(401, done);
    });
  });
  describe("get all colors", () => {
    it("should get all colors since valid token", (done) => {
      chai
        .request(app)
        .get(colorPath)
        .set("Authorization", "Bearer " + validAdminToken)
        .end((err, response) => {
          response.body.should.be.a("object");
          expect(response.body).to.have.nested.property("success").to.eql(true);
          expect(response.body).to.have.nested.property("data[0].color");
          done();
        });
    });
  });
}).timeout(90000);
