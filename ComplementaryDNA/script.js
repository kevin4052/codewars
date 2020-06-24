function DNAStrand(dna){
    let compDna = "";
    
    for (element of dna){
      switch (element){
      case "A":
        compDna += "T";
        break;
      case "T":
        compDna += "A";
        break;
      case "C":
        compDna += "G";
        break;
      case "G":
        compDna += "C";
        break;
      }
    }
    return compDna;
    
  }