const playerCounter = (set, get) => ({
	count: [],
	setCount: () => set((state, payload) => ({ count: payload })),
});

export default playerCounter;
