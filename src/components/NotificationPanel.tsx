interface NotificationPanelProps {
  title: string;
  content: string;
}

const NotificationPanel = ({ title, content }: NotificationPanelProps) => {
  return (
    <div className="ds_notification-panel  ds_notification-panel--success">
      <h1 className="ds_notification-panel__title">{title}</h1>
      <div className="ds_notification-panel__content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default NotificationPanel;
