import React from "react"

export default function App() {
    const [messages, setMessages] = React.useState([])
    /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there are > 0 unread messages, display "You have <n> unread
     *   message(s)"
     *      - If there's exactly 1 unread message, it should read "message"
     *        (singular)
     */
    return (
        <div>
             <h3>{messages.length === 0 ? "You're all caught up." : messages.length === 1 ? `You have ${messages.length} unread message.` : `You have ${messages.length} unread messages.`}</h3>
        </div>
    )
}
