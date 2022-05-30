const playerCounter = (set, get) => ({
	count: [],
	setCount: (payload) => set((state) => ({ count: payload })),
});

export default playerCounter;
