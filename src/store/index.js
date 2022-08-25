import create from 'zustand'

const useBearStore = create((set) => ({
  count: 0,
  increasePopulation: () => set((state) => ({
    count: state.count + 1
  })),
  decreasePopulation: () => set((state) => ({
    count: state.count - 1
  })),
  removeAllBears: () => set({
    count: 0
  }),
}))


export {
  useBearStore
}