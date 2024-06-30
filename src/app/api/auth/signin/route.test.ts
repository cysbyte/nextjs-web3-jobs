/**
 * @jest-environment node
 */

import { POST } from "./route";

describe("when the email and password is missing", () => {
  it("should response with a status code of 400", async () => {
    const requestObj = {
      json: async () => ({

      }),
    } as any;

    const response = await POST(requestObj);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.message).toEqual("Email and password are required.");
  }),
    30000;
});

it.only("should return data with status 401", async () => {
    const requestObj = {
      json: async () => ({
        email: "admin11@devops.com",
        password: "cys1ccnu",
      }),
    } as any;
  
    const response = await POST(requestObj);
  const body = await response.json();
  
    expect(response.status).toBe(401);
    expect(body.message).toEqual("Account does not exists, please login or create an account");
  }, 30000);



