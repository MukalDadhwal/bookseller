const request = require("supertest");
const app = require("../src/index");

describe("Test for Express app", () => {
  test("GET / should return product.html", async () => {
    const res = await request(app).get("/");

    expect(res.status).toBe(200);

    expect(res.headers["content-type"]).toContain("text/html");

    expect(res.text).toContain(
      '<script src="http://localhost:3000/script"></script>'
    );
    expect(res.text).toContain("<title>Products Page</title>");
  });

  test("GET /confirmation should return confirmation.html", async () => {
    const res = await request(app).get("/confirmation");

    expect(res.status).toBe(200);

    expect(res.headers["content-type"]).toContain("text/html");

    expect(res.text).toContain("<title>Confirmation Page</title>");
  });
});
