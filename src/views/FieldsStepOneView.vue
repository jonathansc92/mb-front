<template>
    <label class="label" for="name">
        Endereço de e-mail
    </label>
    <Field class="input" v-model="value" name="email" type="text" />
    <ErrorMessage class="errorMessage" name="email" />
    <template v-if="stepStore().getCurrent === 0">
        <input @change="changePerson(false)" type="radio" v-model="isPj" name="pj" :value="false" /> Pessoa
        física
        <input @change="changePerson(true)" type="radio" v-model="isPj" name="pj" :value="true" /> Pessoa
        Jurídica
    </template>
</template>

<script setup>
import { watch } from 'vue';
import { Field, useField, ErrorMessage } from 'vee-validate';
import { ref, onMounted } from 'vue';
import * as yup from 'yup';
import { stepDataStore } from "@/stores/StepData";
import { stepStore } from "@/stores/Step";
import validation from "@/utils/validation";

const { value } = useField('email', yup.string().email(validation.INVALID_EMAIL).required(validation.REQUIRED));
let isPj = ref(false);

function changePerson(isPj) {
    stepDataStore().setIsPj(isPj);
}

onMounted(() => {
    isPj.value = stepDataStore().getIsPj;
});

watch(() => stepDataStore().getEmail, () => {
    value.value = stepDataStore().getEmail
});

watch(() => value.value, (newValue) => {
    stepDataStore().setEmail(newValue)
    value.value = newValue
});
</script>