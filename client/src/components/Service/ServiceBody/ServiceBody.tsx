import { ComponentPropsWithoutRef, ReactNode } from "react";
import "./ServiceBody.css"

type ServiceBodyProps = {
    titles: string[];
    children? : ReactNode;
    currentTitle: string;
} & ComponentPropsWithoutRef<"div">

function ServiceBody({titles}) {
  return (
    <div>ServiceBody</div>
  )
}

export default ServiceBody