import React, { FC, ReactNode } from "react";

interface SummaryItemProps {
  title: string;
  value: ReactNode;
}

export const SummaryItem: FC<SummaryItemProps> = ({ title, value }) => {
  return (
    <li className="ds_summary-list__item">
      <span className="ds_summary-list__key">{title}</span>
      <span className="ds_summary-list__value">
        <q className="ds_summary-list__answer">{value}</q>
      </span>
    </li>
  );
};
