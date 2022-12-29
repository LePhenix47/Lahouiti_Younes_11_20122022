//Function that prints out a message in the console but with a simpler syntax
export function log(message) {
  return console.log(message);
}

//Function that formats text in 3 cases: lowercase, uppercase and titlecase
export function formatText(string, option) {
  let formattedOption = option.toLowerCase().trim();

  let stringArray = string.split(" ");

  switch (formattedOption) {
    case "lowercase": {
      for (let i = 0; i < stringArray.length; i++) {
        stringArray[i] = stringArray[i].toLowerCase();
      }
      return stringArray.toString();
    }

    case "uppercase": {
      for (let i = 0; i < stringArray.length; i++) {
        stringArray[i] = stringArray[i].toUpperCase();
      }
      return stringArray.toString();
    }
    case "titlecase": {
      for (let i = 0; i < stringArray.length; i++) {
        stringArray[i] =
          stringArray[i].substring(0, 1).toUpperCase() +
          stringArray[i].slice(1).toLowerCase();
      }
      stringArray = stringArray.concat();
      return stringArray.toString();
    }
    default: {
      throw new Error(
        "Formatting text error: option passed in argument is unknown"
      );
    }
  }
}

//Funtion that replaces letters with accents by their "non-accented" counter-part
//ex: "crème brûlée" → "creme brulee"
export function normalizeString(string) {
  if (typeof string !== "string") {
    log("Value passed in argument is not a string");
    return;
  }
  return string
    .normalize("NFD") // returns the unicode NORMALIZATION FORM of the string using a canonical DECOMPOSITION (NFD).
    .replace(/[\u0300-\u036f]/g, "");
}
