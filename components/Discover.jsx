import Placeholder from "../images/crafts.webp";
import Icon from "../icons/nature.png";
import Arrow from "../icons/arrow.png";

export default function Discover() {
  return (
    <section className="px-hori py-vert bg-section-secondary font-manrope text-primary">
      <div>
        <h2 className="font-semibold text-5xl">What Will You Discover?</h2>

        <div>
          <div>
            <img
              src={Placeholder}
              className="w-[435px] h-[235px] rounded-img mb-4"
            />
            <h3 className="font-medium text-[28px] mb-3.5">
              Glendalough Trail
            </h3>
            <p className="font-medium text-[20px] opacity-60 w-[435px]">
              A peaceful hike through Wicklow's valleys and mirrored lakes.
            </p>
            <div className="flex">
              <span className="flex gap-">
                <img src={Icon} className="w-[30px] h-[30px]" />
                <p className="font-normal text-[16px] opacity-60">
                  Nature • Wicklow
                </p>
              </span>
              <button className="bg-primary">
                <img src={Arrow} className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
