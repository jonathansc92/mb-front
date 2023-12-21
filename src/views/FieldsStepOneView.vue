<template>
    <label class="label" for="email">
        Endereço de e-mail {{  value }}
    </label>
    <input class="input" v-model="value" />
    <span class="errorMessage">{{ errorMessage }}</span>
    <template v-if="stepStore().getCurrent === 0">
        <input @change="changePerson(false)" type="radio" v-model="isPj" name="pj" id="person" :value="false" /> Pessoa
        física
        <input @change="changePerson(true)" type="radio" v-model="isPj" name="pj" id="entity" :value="true" /> Pessoa
        Jurídica
    </template>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useField } from 'vee-validate';
import * as yup from 'yup';
import { stepDataStore } from "@/stores/StepData";
import validation from "@/utils/validation";
import { stepStore } from "@/stores/Step";

const { value, errorMessage } = useField('email', yup.string().email(validation.INVALID_EMAIL).required(validation.REQUIRED));
let isPj = ref(false);
value.value = stepDataStore().getEmail;

function changePerson(isPj) {
    stepDataStore().setIsPj(isPj);
}

onMounted(() => {
    isPj.value = stepDataStore().getIsPj;
    // value.value = stepDataStore().getEmail;
});

watch(() => value.value, (newValue) => {
    value.value = newValue;
    stepDataStore().setEmail(newValue);

    console.log(stepDataStore().getEmail)
});

</script>