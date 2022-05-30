import create from 'zustand';
import { persist } from 'zustand/middleware';

const useStorePersist = create(
	persist(
		(set, get) => ({
			gameStore: [],
			addStore: () => set({ gameStore: get().gameStore + 1 }),
		}),
		{
			name: 'game-storage', // name of item in the storage (must be unique)
		}
	)
);

export default useStorePersist;
