import { defineStore } from 'pinia';

export const stepHeaderStore = defineStore('stepHeaderStore', {
    id: 'stepHeaderStore',
    state: () => ({
        title: null,
        step: 1,
    }),
    getters: {
        getTitle() {
            return this.title;
        },
        getStep() {
            return this.step;
        },
    },
    actions: {
        setTitle(value) {
            this.title = value;
        },
        setStep(value) {
            this.step = value;
        },
    },
});
