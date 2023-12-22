import { defineStore } from 'pinia';

export const stepDataStore = defineStore('stepDataStore', {
    id: 'stepDataStore',
    state: () => ({
        email: null,
        isPj: false,
        name: null,
        document: null,
        date: null,
        phone: null,
        password: null,
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
        getDocument() {
            return this.document;
        },
        getDate() {
            return this.date;
        },
        getPhone() {
            return this.phone;
        },
        getPassword() {
            return this.password
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
        setDocument(value) {
            this.document = value;
        },
        setDate(value) {
            this.date = value;
        },
        setPhone(value) {
            this.phone = value;
        },
        setPassword(value) {
            this.password = value;
        },
        resetStepsData() {
            this.setEmail(null);
            this.setIsPj(null);
            this.setName(null);
            this.setDocument(null);
            this.setDate(null);
            this.setPhone(null);
            this.setPassword(null);
        }
    },
});
