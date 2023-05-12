import styles from "../styles/ColorCircle.module.css";
import { FiCopy } from "react-icons/fi";
import { AiOutlineLock } from "react-icons/ai";

export function ColorCircle({ colorState, blockColor }) {
    return (
        <div
            className={styles.colorCircle}
            style={{ backgroundColor: colorState }}
        >
                <span className={styles.hexCode}>{colorState}</span>
            <div className={styles.iconsSpan}>
                <span
                    className={styles.copySpan}
                    onClick={() => {
                        navigator.clipboard.writeText(colorState);
                    }}
                >
                    <FiCopy />
                </span>
                <button onClick={(e) => blockColor(e)}>
                    <AiOutlineLock />
                </button>
            </div>
        </div>
    );
}
