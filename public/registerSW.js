if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/sw.js', { scope: '/' })
	})
}

if ('Notification' in window && Notification.permission != 'granted') {
	console.log('Ask user permission')
	Notification.requestPermission((status) => {
		console.log('Status:' + status)
		displayNotification('Notification Enabled')
	})
}

const displayNotification = (notificationTitle) => {
	console.log('display notification')
	if (Notification.permission == 'granted') {
		navigator.serviceWorker.getRegistration().then((reg) => {
			console.log(reg)
			const options = {
				body: 'Thanks for allowing push notification !',
				icon: '/icon/icon-512x512.png',
				vibrate: [100, 50, 100],
				data: {
					dateOfArrival: Date.now(),
					primaryKey: 0,
				},
			}

			reg.showNotification(notificationTitle, options)
		})
	}
}
