import { FC, useState } from "react";
import "./accordion2.scss";

interface AccordionPropsItems {
  title: string;
  content: string;
  checked: boolean;
}

interface AccordionProps {
  items: AccordionPropsItems[];
}

const Accordion2: FC<AccordionProps> = ({ items }) => {
  const [clicked, setClicked] = useState<boolean[]>(items.map(() => false));
  const onClickItem = (index: number) => {
    const newClicked = [...clicked];
    newClicked[index] = !newClicked[index];
    setClicked(newClicked);
  };

  const onShowAll = () => {
    const allVisible = clicked.every((item) => item);
    const newClicked = items.map(() => !allVisible);
    setClicked(newClicked);
  };
  return (
    <>
      <button onClick={onShowAll} className="accordion__item__button">
        Show all sections
      </button>
      {items.map((item, index) => (
        <div key={index} className="accordion__item">
          <h3 className="accordion__item__title">{item.title}</h3>
          <button
            onClick={() => onClickItem(index)}
            className="accordion__item__button"
          >
            {clicked[index] ? "Hide" : "Show"}
          </button>
          {clicked[index] && (
            <div>
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Accordion2;
