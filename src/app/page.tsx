import EmblaCarousel from "./components/EmblaCarousel";

const slides = [
  "/imagens/slides/teste3.jpg",
  "/imagens/slides/teste.jpg",
  "/imagens/slides/teste2.jpg",
  "/imagens/slides/teste4.jpg",
  "/imagens/slides/event.jpg",
];

export default function Home() {
  return (
    <div className="w-full">
      <EmblaCarousel slides={slides} options={{ loop: true }} />
    </div>
  );
}
