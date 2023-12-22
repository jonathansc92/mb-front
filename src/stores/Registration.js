import { defineStore } from 'pinia';
import { stepDataStore } from './StepData';
import { stepStore } from "@/stores/Step";

export const registrationStore = defineStore('registrationStore', {
    id: 'registrationStore',
    state: () => ({}),
    getters: {},
    actions: {
        async registration(data) {
            try {

                console.log(data)
                // const response = await fetch(import.meta.env.VITE_API_URL, {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                //     body: JSON.stringify({ data: data })
                // });

                // if (!response.ok) {
                //     throw new Error('Network response was not ok.');
                // }

                // const responseData = await response.json();
                // console.log('Server response:', responseData);

                stepDataStore().resetStepsData();
                stepStore().setCurrent(0);
            } catch (error) {
                console.error('Error submitting data:', error);
            }
        },
    },
});
