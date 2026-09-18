import { type ZeneTipus } from "../adat";
interface ZeneProps {
  ZENEM: ZeneTipus;
}

export default function Zene({ ZENEM }: ZeneProps) {
  return (
    <>
      <div className="zene">
        <h2>{ZENEM.cim}</h2>
        <p>{ZENEM.album}</p>
        <p>{ZENEM.szerzo}</p>
        <p>{ZENEM.kiadas_ev}</p>
        <p>{ZENEM.mufaj}</p>
        <button>Link</button>
      </div>
    </>
  );
}
