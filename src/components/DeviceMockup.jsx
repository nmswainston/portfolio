// src/components/DeviceMockup.jsx

export default function DeviceMockup({ type = "laptop", image, alt }) {
  const isPhone = type === "phone";

  return (
    <div className={`device device--${type}`}>
      <div className="device-frame">
        {isPhone && <div className="device-notch" aria-hidden="true" />}

        {image ? (
          <img src={image} alt={alt || ""} className="device-screen" />
        ) : (
          // Placeholder gradient if no image is passed yet
          <div
            className="device-screen device-screen--placeholder"
            aria-hidden="true"
          />
        )}

        {isPhone && <div className="device-home-bar" aria-hidden="true" />}
      </div>

      {!isPhone && <div className="device-base" aria-hidden="true" />}
    </div>
  );
}


