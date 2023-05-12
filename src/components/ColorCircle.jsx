import styles from "../styles/ColorCircle.module.css";
import { FiCopy } from "react-icons/fi";
import { BiLockAlt } from "react-icons/bi";
import { BiLockOpenAlt } from "react-icons/bi";

export function ColorCircle({ colorState, blockColor, blockState }) {
    return (
        <div className={styles.wrapper}>
            <div
                className={styles.colorCircle}
                style={{ backgroundColor: colorState }}
                onClick={() => {
                    navigator.clipboard.writeText(colorState);
                }}
            ></div>
            <div className={styles.colorName}>
                <span className={styles.hexCode}>{colorState}</span>
                <div className={styles.iconsSpan}>
                    <span
                        className={`${styles.icon}`}
                        onClick={() => {
                            navigator.clipboard.writeText(colorState);
                        }}
                    >
                        <FiCopy />
                    </span>

                    <span
                        className={`${styles.lockSpan} ${styles.icon}`}
                        onClick={(e) => blockColor(e)}
                    >
                        {!blockState ? <BiLockOpenAlt className={styles.icon} />
                        : <BiLockAlt className={styles.icon} />}
                    </span>
                </div>
            </div>
        </div>
    );
}
