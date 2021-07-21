const getDrugInteractions = () => {
  const durgs = {};
  /*
  1. (X) accepts a space-separated list of drugs per line (multiple lines of input are allowed) and determines if there is a risk of interaction between any drugs in the list.

  2. If there are multiple interactions for input, return the most severe interaction. 
  
  3. If there are multiple interactions of the same severity, the program should return the interaction that appears first.

  4. (X) Each line of input should generate a line of output in the same order, and with the following format: {SEVERITY}: {interaction message}

  5. Note: it is important that the program does not output anything other than the result matching the pattern above (such as debugging information). 
  
  5.(X) Note: all examples are based on the interactions.json file included with this description. Interaction checks for each line should happen on user submit of the UI tool.

  Input:
     sildenafil tamsulosin valaciclovir sildenafil ibuprofen
     valaciclovir doxepin ticlopidine ibuprofen
  Output:
     MODERATE: Sildenafil may potentiate the hypotensive effect of alpha blockers, resulting in symptomatic hypotension in some patients.
    No interaction
    MAJOR: Valaciclovir may decrease the excretion rate of Doxepin which could result in a higher serum level.
  Constraints
    (X js) Number of medications per line between 1 and 20 
    (X html) Number of lines per execution between 1 and 10,000
  */
};

export default getDrugInteractions;
