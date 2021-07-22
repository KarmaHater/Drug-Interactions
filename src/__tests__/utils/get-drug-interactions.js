import { getDrugMostServerInteractions } from "../../utils/get-drug-interactions";

describe("getDrugMostServerInteractions", () => {
  test("should return the most server interaction in correct format", () => {
    expect(
      getDrugMostServerInteractions([
        ["sildenafil", "tamsulosin", "valaciclovir"],
      ])
    ).toEqual([
      [
        "moderate",
        "Sildenafil may potentiate the hypotensive effect of alpha blockers, resulting in symptomatic hypotension in some patients.",
      ],
    ]);

    expect(
      getDrugMostServerInteractions([["sildenafil", "ibuprofen"]])
    ).toEqual([[null, "No interaction"]]);

    expect(
      getDrugMostServerInteractions([
        ["valaciclovir", "doxepin", "ticlopidine", "ibuprofen"],
      ])
    ).toEqual([
      [
        "major",
        "Valaciclovir may decrease the excretion rate of Doxepin which could result in a higher serum level.",
      ],
    ]);
  });
});
