import AccordionItem from "./AccordionItem";

const Accordion = () => {
  return (
    <>
      <div className="ds_accordion js-initialised" data-module="ds-accordion">
        <button
          type="button"
          className="ds_link  ds_accordion__open-all  js-open-all "
          data-accordion="accordion-open-all"
          data-button="button-open-all-sections"
        >
          Open all <span className="visually-hidden">sections</span>
        </button>
        <AccordionItem
          title="Healthcare for veterans"
          body={
            <>
              <p>
                Veterans are entitled to the same healthcare as any citizen. And
                there are <a href="#">health care options and support</a>{" "}
                available specifically for veterans.{" "}
              </p>
              <p>
                If you have a health condition that's related to your service,
                you're entitled to priority treatment based on clinical need.{" "}
              </p>
            </>
          }
          itemNumber={1}
        />
        <AccordionItem
          title="Healthcare for veterans"
          body={
            <>
              <p>
                Veterans are entitled to the same healthcare as any citizen. And
                there are <a href="#">health care options and support</a>{" "}
                available specifically for veterans.{" "}
              </p>
              <p>
                If you have a health condition that's related to your service,
                you're entitled to priority treatment based on clinical need.{" "}
              </p>
            </>
          }
          itemNumber={2}
        />
      </div>
    </>
  );
};

export default Accordion;
