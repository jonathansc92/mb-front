<template>
    <StepHeaderComponent :title="stepDataStore().getIsPj ? 'Pessoa Jurídica' : 'Pessoa Física'" />
    <Form :validation-schema="schema" @submit="onSubmit">
        <label class="label" for="name">
            {{ stepDataStore().getIsPj ? "Razão Social" : "Nome" }}
        </label>
        <Field class="input" name="name" type="text" />
        <ErrorMessage class="errorMessage" name="name" />

        <label class="label" for="document">
            {{ stepDataStore().getIsPj ? "CNPJ" : "CPF" }}
        </label>
        <Field class="input" name="document" type="text" />
        <ErrorMessage class="errorMessage" name="document" />

        <label class="label" for="date">
            {{ stepDataStore().getIsPj ? "Data de abertura" : "Data de nascimento" }}
        </label>
        <Field class="input" name="date" type="text" />
        <ErrorMessage class="errorMessage" name="date" />

        <label class="label" for="phone">
            Telefone
        </label>
        <Field class="input" name="phone" type="text" />
        <ErrorMessage class="errorMessage" name="phone" />

        <div style="text-align: center;">
            <ButtonComponent style="display: inline-block; width: 40%; margin-right: 10px" type="button" label="Voltar"
                @click="stepStore().prevStep()" />
            <ButtonComponent style="display: inline-block; width: 56%;" isPrimary label="Continuar" />
        </div>
    </Form>
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
    name: yup.string().required(validation.REQUIRED),
    document: yup.string().required(validation.REQUIRED),
    date: yup.string().required(validation.REQUIRED),
    phone: yup.string().required(validation.REQUIRED),
});

function onSubmit(values) {
    console.log(stepStore().getCurrent)
    stepDataStore().setName(values.name);

    stepStore().nextStep();
    console.log(stepStore().getCurrent)

}
</script>