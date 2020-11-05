/**
 * Takes string and if string is "unknown" return "?" instead
 */
export const formatString = (str) => str === "unknown" ? "?" : str;

/**
 * Takes number string and adds space at thousands place
 */
export const formatNumbers = (numberString) => {
    if(numberString === "?" || numberString === "unknown" || !!!numberString ) return numberString;

    const commaSeparated =  parseFloat(numberString).toLocaleString('en');
    return commaSeparated.replaceAll(",", " ");
}


/** 
 * Takes planet diameter and returns raidus as string
*/
export const calculateAndFormatRadius = (planetDiameter) => Number(parseFloat(planetDiameter)/2).toFixed(2).toString();


/**
 * 
 * Takes surface area percent and rounds to decimal and returns rounded float as string
 */
export const formatSurfaceArea = (surfaceAreaPercent) => Number(parseFloat(surfaceAreaPercent)).toFixed(2).toString();