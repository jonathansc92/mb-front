import { defineStore } from 'pinia';

export const stepDataStore = defineStore('stepDataStore', {
    id: 'stepDataStore',
    state: () => ({
        email: null,
        isPj: false,
        name: null,
    }),
    getters: {
        getEmail() {
            return this.email;
        },
        getIsPj() {
            return this.isPj;
        },
        getName() {
            return this.name;
        },
    },
    actions: {
        setEmail(value) {
            this.email = value;
        },
        setIsPj(value) {
            this.isPj = value;
        },
        setName(value) {
            this.name = value;
        },
    },
});
