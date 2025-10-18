import Quote from "../icons/quote.png";

export default function Testimonials() {
  return (
    <section className="px-hori py-vert bg-section-main font-manrope text-primary">
      <div>
        <h2 className="font-semibold text-5xl text-center">
          Ireland, As Told By Others
        </h2>
        <div className="flex">
          <span className="flex flex-col gap-5 items-center w-[435px]">
            <img src={Quote} className="w-14 h-14" />
            <h3 className="font-medium text-[28px] text-center">
              I'll tell you what, it doesn't get more beautiful than the west of
              Ireland.
            </h3>
            <p className="font-normal text-[20px]">— Matthew Goode</p>
          </span>

          <span className="flex flex-col gap-5 items-center w-[435px]">
            <img src={Quote} className="w-14 h-14" />
            <h3 className="font-medium text-[28px] text-center">
              Ireland has always been the home of the dreamer, the poet and the
              storyteller.
            </h3>
            <p className="font-normal text-[20px]">— Jordan Richard</p>
          </span>

          <span className="flex flex-col gap-5 items-center w-[435px]">
            <img src={Quote} className="w-14 h-14" />
            <h3 className="font-medium text-[28px] text-center">
              I feel more and more the time wasted that is not spent in Ireland.
            </h3>
            <p className="font-normal text-[20px]">— Lady Gregory</p>
          </span>
        </div>
      </div>
    </section>
  );
}
