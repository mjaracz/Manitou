export interface ActionPayload<Payload = {}> {
	type: string;
	payload?: Payload;
}
