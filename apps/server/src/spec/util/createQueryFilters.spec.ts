import { createQueryFilters } from "@/util/createQueryFilters";

describe("createQueryFilters", () => {
  it("should create query filters correctly", () => {
    const filters = {
      name: "John",
      age: 25,
      isActive: true,
    };

    const fieldTypes = {
      name: "string",
      age: "number",
      isActive: "boolean",
    };

    const gteLte = {
      age: "gte",
    };

    const expectedQueryFilters = {
      name: "John",
      age: { $gte: 25 },
      isActive: true,
    };

    const queryFilters = createQueryFilters(filters, fieldTypes, gteLte);

    expect(queryFilters).toEqual(expectedQueryFilters);
  });
});
