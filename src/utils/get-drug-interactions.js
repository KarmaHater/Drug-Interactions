import interactionsData from "../interactions.json";

const getDrugInteractions = (
  mainDrug,
  secondaryDrugs,
  data = interactionsData
) =>
  data.filter(
    ({ drugs }) =>
      mainDrug === drugs[0] && secondaryDrugs.find((i) => i === drugs[1])
  );

export const getDrugsInteractions = (drugs) =>
  drugs.reduce((acc, drug) => {
    const secondaryDrugs = drugs.filter((d) => d !== drug);
    const drugInteractions = getDrugInteractions(drug, secondaryDrugs);

    if (drugInteractions.length) {
      return [...acc, ...drugInteractions];
    }

    return acc;
  }, []);

export const getDrugsInteractionHash = (interactions) =>
  interactions.reduce((acc, interaction) => {
    if (!acc[interaction.severity]) {
      acc[interaction.severity] = [
        interaction.severity,
        interaction.description,
      ];
    }
    return acc;
  }, {});

export const getDrugMostServerInteractions = (drugsCollections) => {
  const finalResult = [];

  const drugsInteractions = drugsCollections.map((drug) =>
    getDrugsInteractions(drug)
  );

  drugsInteractions.forEach((interactions) => {
    const drugsInteractionHash = getDrugsInteractionHash(interactions);

    finalResult.push(
      drugsInteractionHash.major ||
        drugsInteractionHash.moderate ||
        drugsInteractionHash.minor || [null, "No interaction"]
    );
  });
  return finalResult;
};
