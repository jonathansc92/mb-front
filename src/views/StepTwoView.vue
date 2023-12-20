<template>
    <div>
        <StepHeaderComponent :title="stepDataStore().getIsPj ? 'Pessoa Jurídica' : 'Pessoa Física'" />
            <Form :validation-schema="schema" @submit="onSubmit">
            <label class="label" for="name">
                {{ stepDataStore().getIsPj ? "Razão Social" : "Nome" }}
            </label>
            <Field class="input" name="name" type="text" />
            <ErrorMessage name="name" />
<!-- 
            <label class="label" for="document">
                {{ stepDataStore().getIsPj ? "CNPJ" : "CPF" }}
            </label>
            <Field class="input" name="document" type="text" />
            <ErrorMessage name="document" />

            <label class="label" for="date">
                {{ stepDataStore().getIsPj ? "Data de abertura" : "Data de nascimento" }}
            </label>
            <Field class="input" name="date" type="text" />
            <ErrorMessage name="date" />

            <label class="label" for="phone">
                Telefone
            </label>

            <Field class="input" name="date" type="text" />
            <ErrorMessage name="date" /> -->

            <ButtonComponent type="button" label="Voltar" @click="stepStore().prevStep()" />
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
    name: yup.string().required(validation.REQUIRED),
});

function onSubmit(values) {
console.log(stepStore().getCurrent)
    stepDataStore().setName(values.name);

    stepStore().setCurrent(stepStore().getCurrent + 1);

    stepStore().nextStep();
    console.log(stepStore().getCurrent)

}
</script>