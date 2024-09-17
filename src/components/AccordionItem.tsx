import { ReactNode } from "react";

interface AccordionItemProps {
  title: string;
  body: ReactNode;
  itemNumber: number;
}
const AccordionItem = ({ title, body, itemNumber }: AccordionItemProps) => {
  return (
    <div className="ds_accordion-item">
      <input
        type="checkbox"
        className="visually-hidden  ds_accordion-item__control"
        id={"panel-" + `${itemNumber}`}
        aria-labelledby={"panel-" + `${itemNumber}` + "-heading"}
      />
      <div className="ds_accordion-item__header">
        <h3
          id={"panel-" + `${itemNumber}` + "-heading"}
          className="ds_accordion-item__title"
        >
          {title}
        </h3>
        <span className="ds_accordion-item__indicator"></span>
        <label
          className="ds_accordion-item__label"
          for={"panel-" + `${itemNumber}`}
        >
          <span className="visually-hidden">Show this section</span>
        </label>
      </div>
      <div className="ds_accordion-item__body">{body}</div>
    </div>
  );
};

export default AccordionItem;
