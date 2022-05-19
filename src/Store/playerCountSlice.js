const playerCounte = (set, get) => ({
	count: 0,
	playerWin: () => set((state) => ({ count: state.count + 1 })),
});

export default playerCounte;
