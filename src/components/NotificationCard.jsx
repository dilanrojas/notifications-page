export default function NotificationCard({
  userAvatar,
  userName,
  userLink,
  contentMain,
  contentReferenceText,
  contentReferenceLink,
  contentMessage,
  contentPictureSource,
  contentPictureLink,
  date,
  isRead
}) {
  return (
    <article className={`notification-card ${contentMessage ? 'message' : ''}`}>

      <a href={userLink}>
        <img
          src={`/${userAvatar}`}
          alt={`${userName} Avatar`}
          width="40"
          height="40"
        />
      </a>

      <div className="notification-content">
        <p className="notification-content-main">
          <a href={userLink} className="notification-username">{userName}</a>
          <span>{contentMain}</span>
          {contentReferenceText && (<a href={contentReferenceLink}>{contentReferenceText}</a>)}
          {!isRead && (<span className="unread-mark"></span>)}
        </p>

        <p className="notification-content-date">{date}</p>

        {contentMessage && (
          <div className="notification-message">
            <p>{contentMessage}</p>
          </div>
        )}
      </div>

      {contentPictureSource && (
        <a href={contentPictureLink} className="notification-picture">
          <img
            src={contentPictureSource}
            alt={`Notification ilustration for ${contentMain}`}
            width="40"
            height="40"
          />
        </a>
      )}

    </article>
  )
}