import Link from "@/components/patterns/elements/drupal-link";
import {ChevronRightIcon} from "@heroicons/react/20/solid";
import {PropsWithChildren} from "react";
import {twMerge} from "tailwind-merge";

export const DrupalLinkButton = ({href, children, className = '', buttonProps = null, ...props}) => {
  return (
    <Link
      href={href}
      {...props}
      className={twMerge("su-rounded-full su-cta-button su-font-semibold su-leading-display su-block su-w-fit su-no-underline hocus:su-underline su-group su-transition-colors su-px-26 su-pt-10 su-pb-11 su-text-16 md:su-text-20 su-bg-digital-red hover:su-bg-cardinal-red-dark focus:su-bg-black-true active:su-bg-black-true su-text-white hocus:su-text-white su-rs-mt-neg1", className)}
    >
      {children}
    </Link>
  )
}

export const DrupalLinkSecondaryButton = ({href, children, className = '', buttonProps = null, ...props}) => {
  return (
    <Link
      href={href}
      {...props}
      className={twMerge("su-rounded-full su-cta-button su-font-semibold su-leading-display su-block su-w-fit su-no-underline hocus:su-underline su-border-3 su-border-digital-red su-border-solid hover:su-border-cardinal-red focus:su-border-black-true active:su-border-black-true su-group su-transition-colors su-px-26 su-pt-10 su-pb-11 su-text-16 md:su-text-20 su-bg-white hover:su-bg-cardinal-red active:su-bg-black-true focus:su-bg-black-true su-text-black hocus:su-text-white su-rs-mt-neg1", className)}
    >
      {children}
    </Link>
  )
}

export const DrupalLinkBigButton = ({href, children, className = '', buttonProps = null, ...props}) => {
  return (
    <Link
      href={href}
      {...props}
      className={twMerge("su-rounded-full su-cta-button su-font-large su-leading-display su-block su-w-fit su-no-underline hocus:su-underline su-group su-transition-colors su-px-36 su-py-16 su-text-16 md:su-text-20 su-bg-digital-red hover:su-bg-cardinal-red-dark focus:su-bg-black-true active:su-bg-black-true su-text-white hocus:su-text-white su-rs-mt-neg1", className)}
    >
      {children}
    </Link>
  )
}

export const DrupalActionLink = ({href, children, buttonProps = null, ...props}) => {
  return (
    <Link
      href={href}
      {...props}
      className={twMerge("su-relative su-pr-30 hocus:su-text-brick su-no-underline su-rs-mt-neg1 su-pt-10", props.className)}
    >
      {children}
      <ChevronRightIcon className="su-inline su-absolute su-top-0 su-right-0 su-h-full su-pt-10"/>
    </Link>
  )
}

interface DrupalLinkProps extends PropsWithChildren<any> {
  url?: string
  title?: string
  style?: string
}


export const DrupalLink = ({url, title, style, children, ...props}: DrupalLinkProps) => {
  if (!url) {
    return null;
  }
  const LinkComponent = style === 'secondary_button' ? DrupalLinkSecondaryButton : (style === 'cta_button' ? DrupalActionLink : DrupalLinkButton);
  return (
    <LinkComponent href={url} {...props}>
      {title}
      {children}
    </LinkComponent>
  )
}