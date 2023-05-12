import { useState } from "react";
import "./styles/App.css";
import { rgbToHex, generatePalette } from "./auxiliary/helperMethods";
import { ColorCircle } from "./components/ColorCircle";
import styles from "./styles/Main.module.css";

function App() {
    const [colorPalette, setColorPalette] = useState(generatePalette());

    const generateNewPallete = (e) => {
        if (e.keyCode === 32) {
            setColorPalette(generatePalette());
        }
    };

    const blockColor = (idx) => {
       setColorPalette(prevPalette => [...prevPalette, )
        console.log(colorPalette)
    };

    return (
        <>
            <div
                className={styles.wrapper}
                onKeyDown={generateNewPallete}
                tabIndex={-1}
            >
                {colorPalette.map((cor, idx) => (
                    <div>
                        <ColorCircle
                            colorState={cor.color}
                            blockColor={() => blockColor(idx)}
                        />
                        
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;
