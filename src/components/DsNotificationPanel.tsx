import { ReactNode } from "react";

interface DsNotificationPanelProps {
  title: string;
  children: ReactNode;
}

const DsNotificationPanel: React.FC<DsNotificationPanelProps> = ({
  title,
  children,
}) => {
  return (
    <div className="ds_notification-panel">
      <h1 className="ds_notification-panel__title">{title}</h1>
      <div className="ds_notification-panel__content">{children}</div>
    </div>
  );
};

export default DsNotificationPanel;
