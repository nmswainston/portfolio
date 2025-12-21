// src/components/DeviceMockup.jsx
import laptopFrame from "../assets/laptop-frame.png";
import phoneFrame from "../assets/phone-frame.png";

export default function DeviceMockup({
  type = "laptop",
  image,
  alt,
  className = "",
}) {
  const isPhone = type === "phone";
  const frameSrc = isPhone ? phoneFrame : laptopFrame;
  const shouldScaleFull = className.includes("w-full");
  const frameWidthClass = isPhone 
    ? "w-[120px] h-auto max-w-full" 
    : shouldScaleFull 
      ? "w-full h-auto max-w-full" 
      : "w-[260px] h-auto max-w-full";

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      aria-hidden={!alt ? "true" : undefined}
    >
      {/* Frame image (decorative only) */}
      <img
        src={frameSrc}
        alt=""
        aria-hidden="true"
        role="presentation"
        className={frameWidthClass}
      />

      {/* Screenshot inside frame */}
      {/* Inline styles justified: Dynamic positioning based on device type (phone vs laptop) 
          requires percentage-based values that vary per frame image dimensions */}
      <div
        className="absolute overflow-hidden rounded-none bg-black"
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
                // laptop screen area – adjusted for better fit
                top: "10%",
                left: "13%",
                right: "13%",
                bottom: "16%",
              }
        }
      >
        {image ? (
          <img
            src={image}
            alt={alt || ""}
            className="w-full h-full object-cover rounded-none"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-(--line)/30 via-(--line)/20 to-(--line)/10 flex items-center justify-center">
            {/* Simple UI blocks placeholder */}
            <div className="flex flex-col gap-2 w-3/4">
              <div className="h-3 bg-(--line)/40 rounded-sm"></div>
              <div className="h-2 bg-(--line)/30 rounded-sm w-5/6"></div>
              <div className="flex gap-2 mt-2">
                <div className="h-8 flex-1 bg-(--line)/30 rounded"></div>
                <div className="h-8 flex-1 bg-(--line)/30 rounded"></div>
              </div>
              <div className="h-2 bg-(--line)/30 rounded-sm w-4/5 mt-1"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
