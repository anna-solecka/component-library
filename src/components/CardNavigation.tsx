import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface CardNavigationProps {
  title: string;
  summary: ReactNode;
  href: string;
}

export const CardNavigationItem: FC<CardNavigationProps> = ({
  title,
  summary,
  href,
}) => {
  return (
    <li className="ds_card  ds_card--has-hover">
      <article className="ds_category-item  ds_category-item--card">
        <h2 className="ds_category-item__title">
          <Link to={href} className="ds_category-item__link">
            {title}
          </Link>
        </h2>

        <p className="ds_category-item__summary">{summary}</p>
      </article>
    </li>
  );
};

interface CardNavigationGroupProps {
  children: ReactNode;
}

export const CardNavigationGroup: FC<CardNavigationGroupProps> = ({
  children,
}) => {
  return (
    <nav aria-label="Category navigation">
      <ul className="ds_category-list  ds_category-list--grid  ds_category-list--narrow">
        {children}
      </ul>
    </nav>
  );
};
