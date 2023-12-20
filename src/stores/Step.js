import { defineStore } from 'pinia';

export const stepStore = defineStore('stepStore', {
    id: 'stepStore',
    state: () => ({
        current: 0,
        steps: 2,
    }),
    getters: {
        getCurrent() {
            return this.current;
        },
        getSteps() {
            return this.steps;
        }
    },
    actions: {
        setCurrent(value) {
            this.current = value;
        },
        setSteps(value) {
            this.steps = value;
        },
        nextStep() {
            if (this.current < this.steps - 1) {
                this.current++;
            }
        },
        prevStep() {
            if (this.current > 0) {
                this.setCurrent(this.current - 1);
            }
        },
    },
});
