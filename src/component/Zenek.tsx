import type { ZeneTipus } from "../adat";
import Zene from "./Zene";

interface ZeneListaProps {
  lista: ZeneTipus[];
}

export default function Zenek({lista}:ZeneListaProps) {
  return (
  <>
  {
    lista.map((e,i)=>{
        return <Zene ZENEM={e} key={i} />
    })
  }
  </>
);
}
