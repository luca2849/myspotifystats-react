import "../styles/globals.css";
import type { AppProps } from "next/app";

import { store } from "../store";
import { Provider } from "react-redux";

import AppContainer from "../components/AppContainer/AppContainer";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<AppContainer>
				<Component {...pageProps} />
			</AppContainer>
		</Provider>
	);
}
