import create from 'zustand';

import playerCounter from './playerCountSlice';

const useStore = create((set, get) => ({
	//actions & store here
	...playerCounter(set, get),
}));

export default useStore;
