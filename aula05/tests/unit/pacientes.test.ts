import { generateProtocolForPacient } from "protocols-generator";


jest.mock("uuid", () => {
  return {
    v4: () => {return 'protocol generate'}
  }  
});

describe("pacient protocol tests", () => {
  const result = generateProtocolForPacient("Nilton", "Rodrigues", true)
  // expect(result).toEqual({
  //   priority: true,
  //   date: new Date(),
  //   pacient: "Nilton Rodrigues",
  //   protocol: expect.any(String),
  // });
  expect(result.protocol).toBe("protocol generate")
  console.log(result)
});