import { create } from "zustand";

type State = {};

const globalStore = create<State>(() => ({}));

export default globalStore;
