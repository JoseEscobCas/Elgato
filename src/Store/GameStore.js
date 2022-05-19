import create from 'zustand';

import playerCounte from './playerCountSlice';

const useStore = create((set, get) => ({
	//actions & store here
	...playerCounte(set, get),
}));

export default useStore;
