import Paragraph from "@/components/paragraph";
import {DrupalParagraph} from "next-drupal";

interface LayoutProps {
  items: DrupalParagraph[],
  fullWidth?: boolean
  config?: {
    column_widths: string
  }
}

const TwoColumn = ({config, items}: LayoutProps) => {

  const leftItems = items.filter(item => item.behavior_settings.layout_paragraphs.region === 'left');
  const rightItems = items.filter(item => item.behavior_settings.layout_paragraphs.region === 'right');

  let gridClass = 'lg:su-grid-cols-2';
  if (config?.column_widths === '33-67') {
    gridClass = 'lg:su-grid-cols-1-2';
  } else if (config?.column_widths === '67-33') {
    gridClass = 'lg:su-grid-cols-2-1';
  }

  return (
    <div data-rows="two-column" className={`su-centered su-grid su-gap-[90px] ${gridClass}`}>
      <div className="su-relative su-min-w-0 su-flex su-flex-col su-gap-2xl">
        {leftItems.map(item => <Paragraph key={item.id} paragraph={item} fullWidth={false}/>)}
      </div>
      <div className="su-relative su-min-w-0 su-flex su-flex-col su-gap-2xl">
        {rightItems.map(item => <Paragraph key={item.id} paragraph={item} fullWidth={false}/>)}
      </div>
    </div>
  )
}
export default TwoColumn;