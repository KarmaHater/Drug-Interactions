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

/*
  

  2. If there are multiple interactions for input, return the most severe interaction. 
  
  3. If there are multiple interactions of the same severity, the program should return the interaction that appears first.

  4. Each line of input should generate a line of output in the same order, and with the following format: {SEVERITY}: {interaction message}

  Input:
     sildenafil tamsulosin valaciclovir 
     sildenafil ibuprofen
     valaciclovir doxepin ticlopidine ibuprofen
  Output:
     MODERATE: Sildenafil may potentiate the hypotensive effect of alpha blockers, resulting in symptomatic hypotension in some patients.
    No interaction
    MAJOR: Valaciclovir may decrease the excretion rate of Doxepin which could result in a higher serum level.
  */
