module.exports = {
	syncing: {
		tasks: [
			'sync'
		],
		options: {
			logConcurrentOutput: true
		}
	},
	hintAndDocs: {
		tasks: [
			'jshint',
			'htmlhint'
		],
		options: {
			logConcurrentOutput: true,
			limit: 5
		}
	}
};