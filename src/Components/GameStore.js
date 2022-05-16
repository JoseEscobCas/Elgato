import create from 'zustand';

const useStore = create((set) => ({
	//actions and states
	historyPlayer: 1,
	historyStep: () =>
		set((state) => ({
			historyPlayer: state.historyPlayer + 1,
		})),
}));

export default useStore;
