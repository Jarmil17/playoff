import React, { useState } from 'react';



const CommunityPage = () => {
    // Dummy list of users with profile icons
    const [users] = useState([
        { id: 1, name: 'jarmil', profilePic: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg' },
        { id: 2, name: 'Henil', profilePic: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg '},
        { id: 3, name: 'Himanshu', profilePic: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg' },
        { id: 4, name: 'Mohit', profilePic: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg' },
    ]);
    
    const [messages, setMessages] = useState([
        { from: 'User 1', text: 'Hello!', profilePic: 'https://via.placeholder.com/40' },
        { from: 'You', text: 'Hi, how are you?', profilePic: 'https://via.placeholder.com/40' },
        { from: 'User 1', text: 'I am good, thanks!', profilePic: 'https://via.placeholder.com/40' },
    ]);

    const [currentMessage, setCurrentMessage] = useState('');

    // Handle sending a message
    const sendMessage = (e) => {
        e.preventDefault();
        if (currentMessage.trim() !== '') {
            setMessages([...messages, { from: 'You', text: currentMessage, profilePic: 'https://via.placeholder.com/40' }]);
            setCurrentMessage(''); // Clear the input after sending
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.userListSection}>
                <h4 style={styles.header}>Users</h4>
                <ul style={styles.userList}>
                    {users.map(user => (
                        <li key={user.id} style={styles.userItem}>
                            <img src={user.profilePic} alt="Profile" style={styles.profilePic} />
                            {user.name}
                        </li>
                    ))}
                </ul>
            </div>

            <div style={styles.chatSection}>
                <div style={styles.chatHeader}>
                    <h4>Community Chat</h4>
                </div>
                <div style={styles.chatWindow}>
                {messages.map((msg, index) => (
    <div
        key={index}
        style={
            msg.from === 'You'
                ? styles.messageSent
                : styles.messageReceived
        }
    >
        <img src={msg.profilePic} alt="Profile" style={styles.profilePic} />
        <strong>{msg.from}: </strong>
        {msg.text}
    </div>
))}
</div>

{/* Message input box */}
<form onSubmit={sendMessage} style={styles.form}>
<input
type="text"
placeholder="Type a message..."
value={currentMessage}
onChange={(e) => setCurrentMessage(e.target.value)}
style={styles.input}
/>
<button type="submit" style={styles.button}>
Send
</button>
</form>
</div>
</div>
);
};

// Inline styles with profile icon support
const styles = {
container: {
display: 'flex',
flexDirection: 'row',
height: '100vh',
padding: '20px',
backgroundColor: '#f8f9fa',
fontFamily: 'Arial, sans-serif',
},
userListSection: {
width: '25%',
borderRight: '1px solid #ddd',
padding: '20px',
backgroundColor: '#ffffff',
},
userList: {
listStyleType: 'none',
padding: 0,
},
userItem: {
padding: '10px',
borderBottom: '1px solid #ddd',
cursor: 'pointer',
display: 'flex',
alignItems: 'center',  // Align icon and text
},
profilePic: {
width: '40px',
height: '40px',
borderRadius: '50%',
marginRight: '10px',
},
chatSection: {
width: '75%',
padding: '20px',
display: 'flex',
flexDirection: 'column',
justifyContent: 'space-between',
backgroundColor: '#ffffff',
},
chatHeader: {
borderBottom: '1px solid #ddd',
paddingBottom: '10px',
},
chatWindow: {
flexGrow: 1,
overflowY: 'auto',
backgroundColor: '#f1f1f1',
padding: '10px',
borderRadius: '8px',
marginBottom: '20px',
},
messageSent: {
display: 'flex',
justifyContent: 'flex-end',
alignItems: 'center',
backgroundColor: '#cfe9ff',
padding: '10px',
borderRadius: '8px',
marginBottom: '10px',
},
messageReceived: {
display: 'flex',
justifyContent: 'flex-start',
alignItems: 'center',
backgroundColor: '#e1e1e1',
padding: '10px',
borderRadius: '8px',
marginBottom: '10px',
},
form: {
display: 'flex',
justifyContent: 'space-between',
alignItems: 'center',
marginTop: '10px',
},
input: {
flex: 1,
padding: '10px',
border: '1px solid #ddd',
borderRadius: '4px',
},
button: {
marginLeft: '10px',
padding: '10px 20px',
backgroundColor: 'royalblue',
color: '#ffffff',
border: 'none',
borderRadius: '4px',
cursor: 'pointer',
},
};

export default CommunityPage;