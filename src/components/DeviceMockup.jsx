// src/components/DeviceMockup.jsx
import laptopFrame from "../assets/laptop-frame.png.png";
import phoneFrame from "../assets/phone-frame.png.png";

export default function DeviceMockup({
  type = "laptop",
  image,
  alt,
  className = "",
}) {
  const isPhone = type === "phone";
  const frameSrc = isPhone ? phoneFrame : laptopFrame;

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
    >
      {/* Frame image (decorative only) */}
      <img
        src={frameSrc}
        alt=""
        aria-hidden="true"
        role="presentation"
        className={isPhone ? "w-[120px] h-auto" : "w-[260px] h-auto"}
      />

      {/* Screenshot inside frame */}
      {image && (
        <div
          className="absolute overflow-hidden rounded-[6px] bg-black"
          style={
            isPhone
              ? {
                  // phone screen area – tweak as needed
                  top: "9%",
                  left: "13%",
                  right: "13%",
                  bottom: "11%",
                }
              : {
                  // laptop screen area – tweak as needed
                  top: "12%",
                  left: "14%",
                  right: "14%",
                  bottom: "18%",
                }
          }
        >
          <img
            src={image}
            alt={alt || ""}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
}
