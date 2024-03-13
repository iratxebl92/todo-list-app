import './styles/styles.css'

export const FinishedProgressIcon = () => {
  return (
    <svg
      className="progress-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 90 90"
      style={{ enableBackground: "new 0 0 100 100" }}
      xml:space="preserve"
    >
      <g>
        <ellipse
          transform="matrix(0.3827 -0.9239 0.9239 0.3827 -39.9733 40.1757)"
          cx="10.1"
          cy="50"
          rx="7.1"
          ry="7.1"
        />
        <circle cx="29.5" cy="50" r="7.1" />
        <circle cx="49" cy="50" r="7.1" />
        <circle cx="68.5" cy="50" r="7.1" />
        <ellipse
          transform="matrix(0.9871 -0.1602 0.1602 0.9871 -6.8738 14.7293)"
          cx="87.9"
          cy="50"
          rx="7.1"
          ry="7.1"
        />
      </g>
    </svg>
  );
};
