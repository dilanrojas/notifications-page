import { useState, useEffect } from 'react'

import notificationsData from './lib/notificationsData.json'
import NotificationCard from './components/NotificationCard'

function App() {
  const [notifications, setNotificactions] = useState([])

  useEffect(() => {
    setNotificactions(notificationsData)
  }, [])

  const unreadCount = notifications.filter(notification => !notification.isRead).length

  function markAllAsRead() {
    const updatedNotifications = notifications.map(notification => ({
      ...notification,
      isRead: true
    }))
    setNotificactions(updatedNotifications)
  }

  return (
    <section className="notification-center">
      <header className="notification-center-header">
        <div className="notification-title">
          <h1>Notifications</h1>
          <span className="notification-count">{unreadCount}</span>
        </div>

        <button className="mark-as-read" onClick={markAllAsRead}>Mark all as read</button>
      </header>

      <div className="notification-list">
        {notifications.map(({ user, content, date, isRead }, index) => (
          <NotificationCard
            key={index}
            userAvatar={user.avatar}
            userName={user.name}
            userLink={user.link}
            contentMain={content.main}
            contentReferenceText={content.reference?.text}
            contentReferenceLink={content.reference?.link}
            contentMessage={content.message && content.message}
            contentPictureSource={content.picture?.source}
            contentPictureLink={content.picture?.link}
            date={date}
            isRead={isRead}
          />
        ))}
      </div>
    </section>
  )
}

export default App
