declare global {
	namespace NodeJS {
		interface ProcessEnv {
			APIKEY: string;
		}
	}
}

export {};
