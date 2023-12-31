export interface BoardCard<T = any> {
	id?: number;
	columnId?: number;
	title: string;
	description?: string;
	data?: T;
	classlist?: string[];
	style?: { [key: string]: any };
	disabled?: boolean;
}
