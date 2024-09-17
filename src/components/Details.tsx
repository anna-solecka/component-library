import { ReactNode } from "react";
import classnames from "classnames";

interface DetailsProps {
  summary: string;
  text: ReactNode;
}

const Details = ({ summary, text }: DetailsProps) => {
  return (
    <details className={classnames("ds_details")}>
      <summary className="ds_details__summary">{summary}</summary>
      <div className="ds_details__text">{text}</div>
    </details>
  );
};

export default Details;
