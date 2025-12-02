// src/components/DeviceMockup.jsx

/* 

  type: "laptop" | "phone"

  className: extra classes for scaling etc

*/

export default function DeviceMockup({ type = "laptop", alt, className = "" }) {

  const isPhone = type === "phone";



  return (

    <div

      className={`relative inline-flex items-center justify-center drop-shadow-md ${

        isPhone ? "max-w-[100px]" : "max-w-[220px]"

      } w-full ${className}`}

    >

      <div

        className={[

          "w-full rounded-[18px] bg-gradient-to-b from-gray-100 to-gray-200",

          "border border-gray-200",

          "flex items-center justify-center",

          isPhone ? "aspect-[9/16] px-6 py-8" : "aspect-[16/10] px-4 py-5",

        ].join(" ")}

        aria-hidden={alt ? "true" : "false"}

      >

        {/* Placeholder "screen" until you wire real screenshots */}

        <div className="w-full h-full rounded-[10px] bg-gradient-to-br from-gray-200 to-gray-100" />

      </div>



      {/* simple notch or camera dot for phone */}

      {isPhone && (

        <div className="absolute top-2 h-1.5 w-6 rounded-full bg-gray-300" />

      )}

    </div>

  );

}
