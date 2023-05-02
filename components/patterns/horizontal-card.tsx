"use client";

import {ReactNodeLike} from "prop-types";
import formatHtml from "@/lib/format-html";
import Conditional from "@/components/utils/conditional";
import {DrupalLink} from "@/components/patterns/link";
import CardSprinkles from "@/components/patterns/card-sprinkles";
import {useRef} from "react";
import FullScreenBackground from "@/components/patterns/full-screen-background";

interface CardProps {
  video?: ReactNodeLike
  image?: ReactNodeLike
  superHeader?: any
  header?: any
  footer?: ReactNodeLike
  body?: string
  link?: {
    url: string
    title: string
  }
  linkStyle?: string
  className?: string
  backgroundSprinkles?: string
  fullWidth?: boolean
}

const HorizontalCard = ({video, image, superHeader, header, footer, body, link, linkStyle, fullWidth = true, backgroundSprinkles = 'top_right', ...props}: CardProps) => {
  const ref = useRef(null);

  return (
    <div className="su-relative" {...props} ref={ref}>

      {fullWidth &&
        <div
          className={"su-w-screen su-ml-[calc(-50vw+50%)] su-absolute su-z-[-10]  su-h-full su-top-0 su-left-0"}>
          <div className="su-relative su-w-full su-h-full su-bg-black-true" {...props}>
            <CardSprinkles position={backgroundSprinkles}/>
          </div>
        </div>
      }

      {!fullWidth &&
        <FullScreenBackground compareRef={ref} className="su-relative su-w-full su-h-full su-bg-black-true">
          <CardSprinkles position={backgroundSprinkles}/>
        </FullScreenBackground>
      }

      <div
        className="su-@container su-max-w-1500 su-w-full su-mx-auto su-relative su-basefont-23 su-leading-display su-text-white su-mt-[9rem] su-p-40 lg:su-px-80">

        <div className="su-flex su-flex-col @6xl:su-flex-row su-gap-2xl">
          <Conditional showWhen={image || video}>
            <div
              className="su-w-full @6xl:su-w-1/2 su-flex-shrink-0 su-overflow-hidden su-aspect-[16/9] su-relative su-mt-[-85px] @6xl:su-mt-0">
              {image}
              {video}
            </div>
          </Conditional>

          <div className="">
            <Conditional showWhen={superHeader}>
              <span className="su-type-0 su-mb-0 su-leading-display su-font-bold su-underline">{superHeader}</span>
            </Conditional>

            <Conditional showWhen={header}>
              <h3 className="su-text-m5">{header}</h3>
            </Conditional>

            <Conditional showWhen={body}>
              <div>{formatHtml(body)}</div>
            </Conditional>

            <Conditional showWhen={footer}>
              <div
                className="su-leading-display su-text-18 su-rs-pt-0 su-text-digital-red su-font-normal">{footer}</div>
            </Conditional>

            {link?.url &&
              <DrupalLink url={link.url} style={linkStyle}>
                {link.title}
              </DrupalLink>
            }

          </div>
        </div>
      </div>
    </div>
  )
}
export default HorizontalCard;
