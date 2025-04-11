import {ReactNode} from "react";
import {StateSchema} from "../config/StateSchema.ts";
import {createReduxStore} from "../config/store.ts";
import {Provider} from "react-redux";

interface StoreProviderProps {
	children?: ReactNode;
	initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = (props: StoreProviderProps) => {
	const { children, initialState } = props;

	const store = createReduxStore(
		initialState as StateSchema,
	);

	return <Provider store={store}>{children}</Provider>;
}