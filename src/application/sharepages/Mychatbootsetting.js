const Settings = {
	general: {
		primaryColor: "#fc0101",
		secondaryColor: "#00ff37",
		showHeader: false,
		showFooter: false
	},
	
	header: {
		title: (
			<div style={{cursor: "pointer", margin: 0, fontSize: 20, fontWeight: "bold"}} onClick={
				() => window.open("https://github.com/tjtanjin/")
			}>
				Frainds
			</div>
		),
		showAvatar: true,
		avatar: botAvatar,
		buttons: [Button.NOTIFICATION_BUTTON, Button.AUDIO_BUTTON, Button.CLOSE_CHAT_BUTTON],
		closeChatIcon: CloseChatIcon,
	},
	audio: {
		disabled: false,
	}

}
export default Settings


export const styles = {
    headerStyle: {
      background: '#cf00cf',
      color: '#00ff88',
      padding: '10px',
    },
    chatWindowStyle: {
      backgroundColor: '#f36464',
    },
    // ...other styles
  };