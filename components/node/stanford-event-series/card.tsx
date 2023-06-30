import Link from "@/components/patterns/elements/drupal-link";
import Card from "@/components/patterns/card";
import Conditional from "@/components/utils/conditional";
import {EventSeries} from "@/lib/drupal/drupal";

const StanfordEventSeriesCard = ({node, h3Heading, ...props}: { node: EventSeries, h3Heading?: boolean }) => {
  return (
    <article {...props}>
      <Card
        header={
          <Link
            className="su-underline hocus:su-no-underline active:su-no-underline su-text-black hocus:su-text-brick-dark active:su-text-digital-red"
            href={node.path?.alias ?? "#"}>
            {node.title}
          </Link>
        }
        footer={
          <Conditional showWhen={node.su_event_series_subheadline}>
              <span className="su-text-black">
                {node.su_event_series_subheadline}
              </span>
          </Conditional>
        }
      />
    </article>
  )
}
export default StanfordEventSeriesCard;