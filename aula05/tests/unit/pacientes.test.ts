import { generateProtocolForPacient } from "protocols-generator";
import { jest } from "@jest/globals";


jest.mock("uuid", () => {
  return {
    v4: () => {return 'protocol generate'}
  }  
});

describe("pacient protocol tests", () => {

  it("should generate a protocol", () => {
    const result = generateProtocolForPacient("Nilton", "Rodrigues", true)
    expect(result).toEqual({
      priority: true,
      date: new Date(),
      pacient: "Nilton Rodrigues",
      protocol: expect.any(String),
    });
    console.log(result)
  })
 
});