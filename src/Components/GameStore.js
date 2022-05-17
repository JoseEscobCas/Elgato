import create from 'zustand';

const useStore = create((set) => ({
	//actions & store here
	moves: [],
	movesPostion: () => set((state) => ({ state: [...state.moves] })),
}));

export default useStore;
