import { ComponentPropsWithoutRef } from "react"

type ImageProps = {
    url: string,
    alt: string
} & ComponentPropsWithoutRef<"img">

function Image({url,alt,...otherProps}:ImageProps) {
  return (
    <img src={url} alt={alt} {...otherProps}/>
  )
}

export default Image