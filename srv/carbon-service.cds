using {CarbonTasks} from './external/CarbonTasks.csn';

service CarbonService {
	@readonly
	entity Tasks as projection on CarbonTasks.tasks {
		key TASK_NAME as TaskName,
		TASK_TEXT as TaskText,
		TASK_DESCRIPTION as TaskDescription,
		TASK_TYPE as TaskType,
		SCHEMA_NAME as SchemaName,
		TASK_MESSAGES as TaskMessages,
		CREATE_TIME as CreatedDate
	};
}
