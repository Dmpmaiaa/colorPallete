import { useState } from "react";
import { useEffect } from "react";
import "./styles/App.css";
import { rgbToHex, generatePalette } from "./auxiliary/helperMethods";
import { ColorCircle } from "./components/ColorCircle";
import styles from "./styles/Main.module.css";


function App() {
    const [colorPalette, setColorPalette] = useState(generatePalette());

    const generateNewPallete = (e) => {
        
            setColorPalette((prevPalette) =>
                prevPalette.map((el) => {
                    if (el.blocked === false) {
                        return { ...el, color: rgbToHex() };
                    } else {
                        return el;
                    }
                })
            );
        
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.code === "Space") {
                generateNewPallete(event);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const blockColor = (idx) => {
        setColorPalette((prevPalette) =>
            prevPalette.map((el, i) => {
                if (i === idx) {
                    return { ...el, blocked: !el.blocked };
                } else {
                    return el;
                }
            })
        );
    };

    return (
        <>
            <div className={styles.container}>

                <h1>Bytes 4 Coolors</h1>

                <div className={styles.wrapper}>
                    {colorPalette.map((cor, idx) => (
                        <div>
                            <ColorCircle
                                colorState={cor.color}
                                blockColor={() => blockColor(idx)}
                                blockState={cor.blocked}
                            />
                        </div>
                    ))}
                </div>
                <button className={styles.btn} onClick={generateNewPallete}>Gerar paleta</button>
            </div>
        </>
    );
}

export default App;
