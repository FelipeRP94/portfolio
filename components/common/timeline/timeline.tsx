import { TimelineData } from "../../../model/timelineData";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface Props {
  data: TimelineData[];
}

export const Timeline = ({ data }: Props) => (
  <VerticalTimeline animate={false}>
    {data.map((item, idx) => (
      <VerticalTimelineElement
        key={idx}
        className="vertical-timeline-element--work"
        contentArrowStyle={{
          borderRight: "7px solid #0c4a6e",
        }}
        date={item.date}
        iconStyle={{
          background: "#0c4a6e",
          color: "#ffffff",
        }}
        icon={item.icon}
      >
        <h3 className="vertical-timeline-element-title text-xl font-bold">
          {item.title}
        </h3>
        <h4 className="vertical-timeline-element-subtitle text-lg text-slate-500">
          {item.subtitle}
        </h4>
        {item.description && <p>{item.description}</p>}
      </VerticalTimelineElement>
    ))}
  </VerticalTimeline>
);
