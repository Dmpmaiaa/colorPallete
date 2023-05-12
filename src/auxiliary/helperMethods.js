function getColors(){

    const number = Math.floor(Math.random() * 256)
    return number 
    
}

function rgbToHex() {
    const componentToHex = (c) => {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };
  
    const red = componentToHex(getColors());
    const green = componentToHex(getColors());
    const blue = componentToHex(getColors());
  
    return `#${red}${green}${blue}`;
}


function generatePalette(){
  return new Array(5).fill("").map(el => ({color: rgbToHex(), blocked: false}))
}
  

export {generatePalette, rgbToHex}