export interface GlobalState {
	auth: {
		user: UserObject;
		isAuthenticated: boolean;
		loading: boolean;
		token: string;
	};
}

export interface UserObject {
	images: Array<Images>;
	display_name: string;
	country: string;
	explicit_content: ExplicitContent;
	followers: Followers;
}

export interface Images {
	url: string;
}

export interface Followers {
	total: number;
}

export interface ExplicitContent {
	filter_enabled: boolean;
}
