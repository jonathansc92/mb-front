<template>
    <label class="label" for="password">
        Senha
    </label>
    <Field class="input" v-model="password" name="password" type="password" />
    <ErrorMessage class="errorMessage" name="password" />
</template>

<script setup>
import { watch } from 'vue';
import { Field, useField, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { stepDataStore } from "@/stores/StepData";
import validation from "@/utils/validation";

const { value: password } = useField('password', yup.string().required(validation.REQUIRED).min(6, validation.MIN));

watch(() => stepDataStore().getPassword, () => {
    password.value = stepDataStore().getPassword;
});

watch(() => password.value, (newValue) => {
    stepDataStore().setPassword(newValue);
    password.value = newValue;
});
</script>