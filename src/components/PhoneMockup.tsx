import Image from "next/image";

interface PhoneMockupProps {
  imageSrc?: string;
  alt?: string;
}

export default function PhoneMockup({ imageSrc, alt = "App screenshot" }: PhoneMockupProps) {
  return (
    <div className="relative mx-auto" style={{ width: "280px", height: "580px" }}>
      {/* Phone frame */}
      <div className="absolute inset-0 bg-[#1a1a1a] rounded-[3rem] shadow-2xl">
        {/* Screen bezel */}
        <div className="absolute inset-[3px] bg-[#0a0a0a] rounded-[2.8rem] overflow-hidden">
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-10" />

          {/* Screen content */}
          <div className="absolute inset-0 overflow-hidden rounded-[2.8rem]">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={alt}
                fill
                className="object-cover object-top"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[var(--rose-light)] to-[var(--cream)] flex items-center justify-center">
                <div className="text-center text-[var(--soft-gray)] opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16 mx-auto mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm">Coming soon</p>
                </div>
              </div>
            )}
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-10" />
        </div>
      </div>
    </div>
  );
}
