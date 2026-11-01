import { useState } from "react";
import { Lightbulb } from "lucide-react";
import styles from "./LampToggle.module.css";

interface Props {
  className?: string;
  isLight: boolean;
  onToggle: () => void;
  variant?: "lamp" | "bulb";
}

export default function LampToggle({
  className = "",
  isLight,
  onToggle,
  variant = "lamp",
}: Props) {
  const [isPulling, setIsPulling] = useState<boolean>(false);

  const handleToggle = () => {
    if (variant === "lamp") {
      setIsPulling(true);
      setTimeout(() => setIsPulling(false), 240);
    }
    onToggle();
  };

  return (
    <div
      className={`${styles.lampContainer} ${
        variant === "bulb" ? styles.bulbContainer : ""
      } ${className}`}
    >
      <button
        type="button"
        className={`${styles.lampButton} ${
          variant === "bulb" ? styles.bulbButton : ""
        } ${isLight ? styles.lampOn : styles.lampOff}`}
        onClick={handleToggle}
        aria-label={`Switch to ${isLight ? "dark" : "light"} theme`}
        title={
          variant === "lamp"
            ? `Click lamp to toggle ${isLight ? "dark mode" : "light mode"}`
            : undefined
        }
      >
        {variant === "bulb" ? (
          <Lightbulb
            size={28}
            strokeWidth={1.7}
            className={`${styles.bulbIcon} ${
              isLight ? styles.bulbOn : styles.bulbOff
            }`}
          />
        ) : (
          <svg
            viewBox="0 0 130 160"
            className={styles.lampSvg}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Subtle Ambient Light Beam (always in DOM, controlled via opacity to avoid layout shift) */}
            <polygon
              points="50,65 15,155 115,155 80,65"
              className={`${styles.lightBeam} ${isLight ? styles.beamActive : ""}`}
            />

            {/* Heavy weighted Desk Lamp Base */}
            <path
              d="M 40 148 C 40 144, 90 144, 90 148 L 94 153 C 94 155, 36 155, 36 153 Z"
              className={styles.lampBase}
            />
            <line
              x1="65"
              y1="144"
              x2="65"
              y2="148"
              className={styles.metalStem}
            />

            {/* Lower Articulated Arm */}
            <line x1="65" y1="144" x2="65" y2="102" className={styles.arm} />
            {/* Lower Joint */}
            <circle cx="65" cy="102" r="4" className={styles.joint} />

            {/* Upper Articulated Arm angled toward shade */}
            <line x1="65" y1="102" x2="52" y2="72" className={styles.arm} />
            {/* Upper Joint */}
            <circle cx="52" cy="72" r="3.5" className={styles.joint} />

            {/* Shade Bracket */}
            <path d="M 52 72 L 65 60" className={styles.arm} />

            {/* Lamp Shade Cap / Finial */}
            <path
              d="M 55 42 L 75 42 L 72 37 L 58 37 Z"
              className={styles.shadeCap}
            />

            {/* Lamp Shade Body */}
            <path
              d="M 42 58 L 88 58 L 75 42 L 55 42 Z"
              className={styles.shadeCone}
            />
            <path
              d="M 38 66 C 38 60, 92 60, 92 66 L 96 70 C 96 72, 34 72, 34 70 Z"
              className={styles.shadeLip}
            />

            {/* Light Bulb */}
            <path
              d="M 56 68 C 56 77, 74 77, 74 68"
              className={styles.bulbGlass}
            />
            {/* Glowing Filament inside bulb */}
            <path
              d="M 62 70 L 64 73 L 66 73 L 68 70"
              className={styles.filament}
            />

            {/* Pull Cord Group (animates smoothly with CSS transform, never altering SVG layout bounds) */}
            <g
              className={`${styles.pullCordGroup} ${isPulling ? styles.cordPulled : ""}`}
            >
              <line
                x1="82"
                y1="67"
                x2="82"
                y2="95"
                className={styles.cordLine}
              />
              {/* Cord Bead / Acorn Handle */}
              <circle cx="82" cy="98" r="3" className={styles.cordBead} />
            </g>
          </svg>
        )}
      </button>

      {variant === "lamp" && (
        <span className={styles.caption}>
          {isLight ? "lights on · click lamp" : "lights off · click lamp"}
        </span>
      )}
    </div>
  );
}
