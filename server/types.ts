import { Interface } from "node:readline/promises";
import { Request } from "express";

export interface IQueryParams {
	[key: string]: string | number;
}

export interface Token {
	token?: string | undefined;
}

export type ITokenRequest = Token & Request;

export interface TopItems {
	artists?: {
		items: TopItem[];
	};
}

interface TopRest {
	total: number;
	limit: number;
	offset: number;
	href: string;
	previous: null | string;
	next: string;
}

export interface TopTracks {
	songs?: TopRest & {
		items: TopItem[];
	};
}

export interface TopArtists {
	songs?: TopRest & {
		items: TopItem[];
	};
}

export interface TopItem {
	external_urls: {
		spotify: string;
	};
	followers: {
		href: null | string;
		total: number;
	};
	genres: string[];
	href: string;
	id: string;
	images: Image[];
	name: string;
	popularity: number;
	type: "artist" | "track";
	uri: string;
}

export interface Image {
	height: number;
	width: number;
	url: string;
}

export type token = string | undefined;

export type TimePeriod = "short_term" | "medium_term" | "long_term";
