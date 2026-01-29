import EmblaCarousel from "./components/EmblaCarousel";
import { CAROUSEL_SLIDES, CAROUSEL_OPTIONS } from "./constants/carousel";

export default function Home() {
  return (
    <div className="w-full">
      <EmblaCarousel slides={CAROUSEL_SLIDES} options={CAROUSEL_OPTIONS} />
    </div>
  );
}
