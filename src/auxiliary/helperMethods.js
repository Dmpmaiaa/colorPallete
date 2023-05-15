function getColors(){
 
  
    const red = componentToHex(getColors());
    const green = componentToHex(getColors());
    const blue = componentToHex(getColors());
  
    return `#${red}${green}${blue}`;
}


function generatePalette(){
  return new Array(5).fill("").map(el => ({color: rgbToHex(), blocked: false}))
}
  

export {generatePalette, rgbToHex}