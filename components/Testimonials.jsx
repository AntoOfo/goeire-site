import Quote from "../icons/quote.png";

export default function Testimonials() {
  return (
    <section className="px-hori py-vert bg-section-secondary font-manrope text-primary">
      <div>
        <h2 className="font-semibold text-[clamp(1.5rem,3.16vw,3rem)] text-center">
          Ireland, As Told By Others
        </h2>
        <div className="flex justify-between mt-[clamp(1.75rem,3.68vw,3.5rem)]">
          <span
            data-aos="fade-right"
            className="flex flex-col gap-[clamp(0.63rem,1.32vw,1.25rem)] items-center w-[clamp(13.59rem,28.57vw,27.19rem)]"
          >
            <img
              src={Quote}
              className="w-[clamp(1.5rem,3.16vw,3rem)] h-[clamp(1.5rem,3.16vw,3rem)]"
            />
            <h3 className="font-medium text-[clamp(0.75rem,1.58vw,1.5rem)] text-center w-[clamp(10rem,21.03vw,20rem)]">
              I'll tell you what, it doesn't get more beautiful than the west of
              Ireland.
            </h3>
            <p className="font-normal text-[clamp(0.63rem,1.32vw,1.25rem)]">
              — Matthew Goode
            </p>
          </span>

          <span
            data-aos="fade"
            className="flex flex-col gap-[clamp(0.63rem,1.32vw,1.25rem)] items-center w-[clamp(13.59rem,28.57vw,27.19rem)]"
          >
            <img
              src={Quote}
              className="w-[clamp(1.5rem,3.16vw,3rem)] h-[clamp(1.5rem,3.16vw,3rem)]"
            />
            <h3 className="font-medium text-[clamp(0.75rem,1.58vw,1.5rem)] text-center">
              Ireland has always been the home of the dreamer, the poet and the
              storyteller.
            </h3>
            <p className="font-normal text-[clamp(0.63rem,1.32vw,1.25rem)]">
              — Jordan Richard
            </p>
          </span>

          <span
            data-aos="fade-left"
            className="flex flex-col gap-[clamp(0.63rem,1.32vw,1.25rem)] items-center w-[clamp(13.59rem,28.57vw,27.19rem)]"
          >
            <img
              src={Quote}
              className="w-[clamp(1.5rem,3.16vw,3rem)] h-[clamp(1.5rem,3.16vw,3rem)]"
            />
            <h3 className="font-medium text-[clamp(0.75rem,1.58vw,1.5rem)] text-center w-[clamp(10rem,21.03vw,20rem)]">
              I feel more and more the time wasted that is not spent in Ireland.
            </h3>
            <p className="font-normal text-[clamp(0.63rem,1.32vw,1.25rem)]">
              — Lady Gregory
            </p>
          </span>
        </div>
      </div>
    </section>
  );
}
