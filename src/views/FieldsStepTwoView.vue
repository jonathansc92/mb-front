<template>
    <label class="label" for="name">
        {{ stepDataStore().getIsPj ? "Razão Social" : "Nome" }}
    </label>
    <Field class="input" v-model="name" name="name" type="text" placeholder="Digite o nome" />
    <ErrorMessage class="errorMessage" name="name" />
    <label class="label" for="document">
        {{ stepDataStore().getIsPj ? "CNPJ" : "CPF" }}
    </label>
    <Field v-maska :data-maska="stepDataStore().getIsPj ? '##.###.###/####-##' : '###.###.###-##'" class="input"
        v-model="document" name="document" type="text" placeholder="Digite o número do documento" />
    <ErrorMessage class="errorMessage" name="document" />
    <label class="label" for="date">
        {{ stepDataStore().getIsPj ? "Data de abertura" : "Data de nascimento" }}
    </label>
    <Field class="input" v-model="date" name="date" type="date" />
    <ErrorMessage class="errorMessage" name="date" />
    <label class="label" for="phone">
        Telefone
    </label>
    <Field v-maska data-maska="(##) #########" class="input" v-model="phone" name="phone" type="text"
        placeholder="Digite o número de telefone" />
    <ErrorMessage class="errorMessage" name="phone" />
</template>

<script setup>
import { watch } from 'vue';
import { Field, useField, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { stepDataStore } from "@/stores/StepData";
import validation from "@/utils/validation";
import { vMaska } from "maska"

const { value: name } = useField('name', yup.string().required(validation.REQUIRED));
const { value: document } = useField('document', yup.string().required(validation.REQUIRED));
const { value: date } = useField('date', yup.string().required(validation.REQUIRED));
const { value: phone } = useField('phone', yup.string().required(validation.REQUIRED));

watch(() => stepDataStore().getName, () => {
    name.value = stepDataStore().getName;
});

watch(() => stepDataStore().getDocument, () => {
    document.value = stepDataStore().getDocument;
});

watch(() => stepDataStore().getDate, () => {
    date.value = stepDataStore().getDate;
});

watch(() => stepDataStore().getPhone, () => {
    phone.value = stepDataStore().getPhone;
});

watch(() => name.value, (newValue) => {
    stepDataStore().setName(newValue);
    name.value = newValue;
});

watch(() => document.value, (newValue) => {
    stepDataStore().setDocument(newValue);
    document.value = newValue;
});

watch(() => date.value, (newValue) => {
    stepDataStore().setDate(newValue);
    date.value = newValue;
});

watch(() => phone.value, (newValue) => {
    stepDataStore().setPhone(newValue);
    phone.value = newValue;
});
</script>