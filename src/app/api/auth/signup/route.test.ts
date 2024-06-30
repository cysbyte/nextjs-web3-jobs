/**
 * @jest-environment node
 */

import { POST } from "./route";

describe("when the email and password is missing", () => {
  it("should response with a status code of 400", async () => {
    const requestObj = {
      json: async () => ({
        firstname: "YunShu",
        lastname: "Chen",
      }),
    } as any;

    const response = await POST(requestObj);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.message).toContain("is required");
  }),
    30000;
});

it("should return data with status 200", async () => {
  const requestObj = {
    json: async () => ({
      firstname: "YunShu",
      lastname: "Chen",
      email: "admin1@devops.com",
      password: "cys1ccnu",
    }),
  } as any;

  const response = await POST(requestObj);
  const body = await response.json();

  expect(response.status).toBe(201);
  expect(body.message).toEqual("Your account has been created!");
}, 30000);

it("should return data with status 409", async () => {
  const requestObj = {
    json: async () => ({
      firstname: "YunShu",
      lastname: "Chen",
      email: "admin1@devops.com",
      password: "cys1ccnu",
    }),
  } as any;

  const response = await POST(requestObj);
  const body = await response.json();

  expect(response.status).toBe(409);
  expect(body.message).toEqual("This account is already exists");
}, 30000);
