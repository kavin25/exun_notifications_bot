const fetch = require('node-fetch');

module.exports = {
	name: 'list-notifications',
	description: 'Get notifications',
	async execute(message, args) {
		// message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
		let response = await fetch("https://notifs.exun.co/notifications/list/all", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
		})
		console.log(response)
		let result = await response.json()
		if (result.statusCode == "S10001") {
			const notificationList = result.rows.map((notification) => {
				return notification.title
			})
			console.log(notificationList)
			message.channel.send(notificationList);
		}
	}
}
