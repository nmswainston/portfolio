// src/components/DeviceMockup.jsx
import laptopFrame from "../assets/laptop-frame.webp";
import phoneFrame from "../assets/phone-frame.png";

export default function DeviceMockup({
  type = "laptop",
  image,
  alt,
  className = "",
  fullWidth = false,
  // Set for above-the-fold mockups (first card in a list, case study hero)
  // so the LCP image isn't deferred by lazy loading.
  eager = false,
}) {
  const isPhone = type === "phone";
  const frameSrc = isPhone ? phoneFrame : laptopFrame;
  // Intrinsic frame dimensions so the browser reserves space before load (avoids layout shift)
  const frameDims = isPhone
    ? { width: 360, height: 360 }
    : { width: 1260, height: 756 };
  const frameWidthClass = isPhone
    ? "w-[120px] h-auto max-w-full"
    : fullWidth
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
        width={frameDims.width}
        height={frameDims.height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
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
            loading={eager ? "eager" : "lazy"}
            fetchPriority={eager ? "high" : undefined}
            decoding="async"
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
