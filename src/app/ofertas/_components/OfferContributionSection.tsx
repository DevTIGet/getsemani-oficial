import { PiDevicesLight } from "react-icons/pi";
import { FaLandmark, FaChurch } from "react-icons/fa6";
import { IoQrCodeOutline } from "react-icons/io5";
import { FaPix } from "react-icons/fa6";
import type {
  OfferContributionSection as OfferContributionSectionProps,
  ContributionMethodIcon,
} from "@/app/types/page-data";

const iconMap: Record<ContributionMethodIcon, React.ReactNode> = {
  app: <PiDevicesLight className="w-10 h-10 text-white" />,
  pix: <FaPix className="w-9 h-9 text-white" />,
  bank: <FaLandmark className="w-10 h-10 text-white" />,
  church: <FaChurch className="w-10 h-10 text-white" />,
  qrcode: <IoQrCodeOutline className="w-16 h-16 text-white" />,
};

export default function OfferContributionSection({
  title,
  methods,
  qrCode,
}: OfferContributionSectionProps) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-gray-900 dark:text-white font-bold text-xl md:text-3xl mb-6 md:mb-12">
        {title}
      </h2>

      <div className="md:w-8/12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-10 mx-auto">
        {methods.map((method) => (
          <div
            key={method.title}
            className=" bg-primary rounded-2xl p-6 flex items-center gap-5"
          >
            <div>
              <h3 className="text-white font-bold text-base mb-1">
                {method.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {method.description}
              </p>
            </div>
            <div className="shrink-0 ml-auto">{iconMap[method.icon]}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center">
        <div className="bg-primary rounded-2xl p-6 flex flex-col items-center gap-4 w-full sm:w-72">
          <h3 className="text-white font-bold text-base">{qrCode.title}</h3>
          {qrCode.imageSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={qrCode.imageSrc}
              alt="QR Code Pix"
              className="w-24 h-24 object-contain"
            />
          ) : (
            <div className="w-24 h-24 flex items-center justify-center">
              {iconMap.qrcode}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
