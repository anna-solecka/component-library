import React from "react";
interface DsPageHeaderProps {
  label?: string;
  title: string;
  metadataKey?: string;
  metadataValue?: string;
}
const DsPageHeader: React.FC<DsPageHeaderProps> = ({
  label,
  title,
  metadataKey,
  metadataValue,
}) => {
  return (
    <header className="ds_page-header">
      {label && (
        <span className="ds_page-header__label  ds_content-label">{label}</span>
      )}
      <h1 className="ds_page-header__title">{title}</h1>

      {metadataKey && metadataValue && (
        <dl className="ds_page-header__metadata  ds_metadata">
          <div className="ds_metadata__item">
            <dt className="ds_metadata__key">{metadataKey}</dt>
            <dd className="ds_metadata__value">{metadataValue}</dd>
          </div>
        </dl>
      )}
    </header>
  );
};

export default DsPageHeader;
