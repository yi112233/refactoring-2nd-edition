import { statement } from "@/statement";
import plays from "@/data/plays.json";
import invoices from "@/data/invoices.json";

describe("statement", () => {
  test("should output invoice", () => {
    const result = statement(invoices[0], plays);
    expect(result).toBe(
      "Statement for BigCo\n" +
        "  Hamlet: $650.00 (55 seats)\n" +
        "  As You Like It: $580.00 (35 seats)\n" +
        "  Othello: $500.00 (40 seats)\n" +
        "Amount owed is $1,730.00\n" +
        "You earned 47 credits\n"
    );
  });
});
