"use client"

import { CaseColor } from "@prisma/client"
import { useEffect, useRef, useState } from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { cn } from "@/lib/utils";

const PhonePreview = ({
  croppedImageUrl,
  color,
}: {
  croppedImageUrl: string;
  color: CaseColor;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [renderedDimension, setRenderedDimension] = useState({
    width: 0,
    height: 0,
  });

  const handleResize = () => {
    if(!ref.current) return
    const { width, height} = ref.current.getBoundingClientRect()
    setRenderedDimension({width, height})
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () =>window.removeEventListener('resize', handleResize)
  }, [])

  let caseBackgroundColors = "bg-zinc-900"
  if(color == 'blue') caseBackgroundColors = "bg-blue-950"
  if(color == 'rose') caseBackgroundColors = "bg-rose-950"
  if(color == 'orange') caseBackgroundColors = "bg-orange-950"
  return (
    <AspectRatio ref={ref} ratio={3000 / 2001} className="relative">
      <div
        className="absolute z-20 scale-[1.0352]"
        style={{
          left:
            renderedDimension.width / 2 -
            renderedDimension.width / (1216 / 121),
          top: renderedDimension.height / 6.22,
        }}>
        <img
          width={renderedDimension.width / (3000 / 671)}
          src={croppedImageUrl}
          alt="imagen cliente"
          className={cn(
            "phone-skew relative z-20 rounded-t-[15px] rounded-b-[10px] md:roundeed-t-[30px] md:rounded-b-[20px]",
            caseBackgroundColors
          )}
        />
      </div>

      <div className="relative size-full z-40">
        <img src="/clearphone.png" alt="phone" className="pointer-events-none size-full antialiased rounded-md" />  
      </div>
    </AspectRatio>
  );
};

export default PhonePreview
