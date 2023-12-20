<template>
    <div>
        <StepHeaderComponent title="Seja bem vindo(a)" />
        <Form :validation-schema="schema" @submit="onSubmit">
            <label class="label" for="email">
                Endereço de e-mail
            </label>
            <Field id="email" class="input" name="email" type="email" placeholder="Digite seu e-mail" />
            <ErrorMessage class="errorMessage" name="email" />

            <Field class="radio" :value="false" name="isPj" type="radio" />
            <label class="label" for="email">
                Pesssoa Física
            </label>
            <Field class="radio" :value="true" name="isPj" type="radio" />
            <label class="label" for="email">
                Pesssoa Jurídica
            </label>
            <ButtonComponent isPrimary label="Continuar" />
        </Form>
    </div>
</template>
  
<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { stepStore } from "@/stores/Step";
import { stepDataStore } from "@/stores/StepData";
import ButtonComponent from "@/components/Form/ButtonComponent.vue";
import StepHeaderComponent from "@/components/StepHeaderComponent.vue";
import validation from "@/utils/validation";

const schema = yup.object({
    email: yup.string().email(validation.INVALID_EMAIL).required(validation.REQUIRED),
    isPj: yup.boolean(),
});

function onSubmit(values) {
    stepDataStore().setEmail(values.email);
    stepStore().nextStep();
}
</script>