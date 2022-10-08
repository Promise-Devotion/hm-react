import create from "zustand";

const useTitleStore = create((set) => ({
  color: "orange",
	toogleColor: ( value ) => { 
		console.log(value)
		return set( ( state ) => ( {
			color: value
		} ) )
	}
}));

export { useTitleStore };
