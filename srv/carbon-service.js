const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {
	const { Tasks } = this.entities;
	const service = await cds.connect.to('CarbonTasks');
	const { tasks } = service.entities;
	this.on('READ', Tasks, async request => {
		let result = [];
		let data = await service.tx(request).run(SELECT.from(tasks));
		data.forEach(task => {
			result.push({
				TaskName: task.TASK_NAME,
				TaskText: task.TAST_TEXT,
				TaskDescription: task.TASK_DESCRIPTION,
				TaskType: task.TASK_TYPE,
				SchemaName: task.SCHEMA_NAME,
				TaskMessages: task.TASK_MESSAGES,
				CreatedDate: task.CREATE_TIME
			});
		});
		return result;
	});
});