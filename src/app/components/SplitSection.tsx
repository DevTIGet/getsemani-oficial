import Image from "next/image";
import Link from "next/link";

interface SplitSectionProps {
  eyebrow?: string;
  eyebrowColor?: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;

  imageSrc: string;
  imageAlt: string;

  imagePosition?: "left" | "right";

  backgroundColor?: string;
  textColor?: string;
  descriptionColor?: string;
}

export default function SplitSection({
  eyebrow,
  title,
  description,
  buttonText,
  buttonHref,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  backgroundColor,
  textColor,
  descriptionColor = "text-gray-600 dark:text-gray-400",
  eyebrowColor,
}: SplitSectionProps) {
  return (
    <section className={`w-full overflow-hidden ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 items-center min-h-[400px] gap-0 ${
            imagePosition === "left" ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Coluna de Texto */}
          <div
            className={`flex items-center px-6 md:px-8 py-12 md:py-16 ${
              imagePosition === "left" ? "md:order-2" : "md:order-1"
            }`}
          >
            <div className="w-full max-w-lg">
              {eyebrow && (
                <p
                  className={`text-sm md:text-xl mb-2 ${eyebrowColor} font-medium`}
                >
                  {eyebrow}
                </p>
              )}

              <h2
                className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 ${textColor}`}
              >
                {title}
              </h2>

              <p
                className={`text-base md:text-lg mb-6 md:mb-8 ${descriptionColor} leading-relaxed`}
              >
                {description}
              </p>

              {buttonText && buttonHref && (
                <Link
                  href={buttonHref}
                  className="inline-block bg-primary-blue text-white font-bold px-8 py-3 rounded-xl text-base md:text-lg hover:bg-primary-blue/90 transition-colors uppercase"
                >
                  {buttonText}
                </Link>
              )}
            </div>
          </div>

          {/* Coluna de Imagem */}
          <div
            className={`relative h-[300px] md:h-[450px] lg:h-[500px] ${
              imagePosition === "left" ? "md:order-1" : "md:order-2"
            }`}
          >
            <div
              className={`absolute inset-0 ${
                imagePosition === "left"
                  ? "md:right-0 md:left-[calc(-50vw+50%)]"
                  : "md:left-0 md:right-[calc(-50vw+50%)]"
              }`}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
