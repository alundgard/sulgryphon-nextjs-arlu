import Conditional from "@/components/utils/conditional";
import {ExclamationCircleIcon} from "@heroicons/react/20/solid";
import StanfordCard from "@/components/paragraph/stanford-card";
import StanfordBanner from "@/components/paragraph/stanford-banner";
import StanfordImageGallery from "@/components/paragraph/stanford-image-gallery";
import StanfordMediaCaption from "@/components/paragraph/stanford-media-caption";
import StanfordWysiwyg from "@/components/paragraph/stanford-wysiwyg";
import StanfordLists from "@/components/paragraph/stanford-lists";
import StanfordEntity from "@/components/paragraph/stanford-entity";
import StanfordSpacer from "@/components/paragraph/stanford-spacer";
import SulCollection from "@/components/paragraph/sul-collection";
import SulFeaturedCollection from "@/components/paragraph/sul-featured-collection";
import SulContactCard from "@/components/paragraph/sul-contact-card";
import SulButton from "@/components/paragraph/sul-button";
import {PropsWithoutRef} from "react";

interface ParagraphProps extends PropsWithoutRef<any>{
  paragraph: any;
  siblingCount?: number;
}

const Paragraph = ({paragraph, siblingCount, ...props}: ParagraphProps) => {
  return (
    <>
      <Conditional showWhen={paragraph.status != undefined && !paragraph.status}>
        <div className="su-bg-illuminating-light su-py-30 su-mb-20">
          <div className="su-cc su-text-m2 su-flex su-gap-lg">
            <ExclamationCircleIcon width={40}/>
            Unpublished Content
          </div>
        </div>
      </Conditional>

      {paragraph.type === 'paragraph--stanford_card' &&
          <StanfordCard paragraph={paragraph} siblingCount={siblingCount} {...props}/>}
      {paragraph.type === 'paragraph--stanford_banner' &&
          <StanfordBanner paragraph={paragraph} siblingCount={siblingCount} {...props}/>}
      {paragraph.type === 'paragraph--stanford_gallery' &&
          <StanfordImageGallery paragraph={paragraph} siblingCount={siblingCount} {...props}/>}
      {paragraph.type === 'paragraph--stanford_media_caption' &&
          <StanfordMediaCaption paragraph={paragraph} siblingCount={siblingCount} {...props}/>}
      {paragraph.type === 'paragraph--stanford_wysiwyg' &&
          <StanfordWysiwyg paragraph={paragraph} siblingCount={siblingCount} {...props}/>}
      {paragraph.type === 'paragraph--stanford_lists' &&
          <StanfordLists paragraph={paragraph} siblingCount={siblingCount} {...props}/>}
      {paragraph.type === 'paragraph--stanford_entity' &&
          <StanfordEntity paragraph={paragraph} siblingCount={siblingCount} {...props}/>}
      {paragraph.type === 'paragraph--stanford_spacer' &&
          <StanfordSpacer/>}
      {paragraph.type === 'paragraph--collection' &&
          <SulCollection
            cards={paragraph.sul_collection_card}
            heading={paragraph.sul_collection_heading}
            siblingCount={siblingCount}
            {...props}
          />
      }
      {paragraph.type === 'paragraph--sul_feat_collection' &&
        <SulFeaturedCollection
          headline={paragraph.sul_collection__headline}
          link={paragraph.sul_collection__link}
          cards={paragraph.sul_collection__cards}
          styles={paragraph.behavior_settings?.sul_feat_collections_styles}
          siblingCount={siblingCount}
          {...props}
        />
      }
      {paragraph.type === 'paragraph--sul_contact_card' &&
        <SulContactCard paragraph={paragraph} siblingCount={siblingCount}  {...props}/>}
      {paragraph.type === 'paragraph--sul_button' &&
        <SulButton
          headline={paragraph.sul_button_headline}
          link={paragraph.sul_button_link}
          siblingCount={siblingCount}
          styles={paragraph.behavior_settings?.sul_button_styles}
          {...props}
        />
      }
    </>
  );
}

export default Paragraph;