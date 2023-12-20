<template>
    <div>
        <StepHeaderComponent title="Senha de acesso" />
        <Form :validation-schema="schema" @submit="onSubmit">
            <Field class="input" name="name" type="password" />
            <ErrorMessage name="password" />
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
    password: yup.string().required(validation.REQUIRED),
});

function onSubmit(values) {

    // stepDataStore().setPassword(values.password);

    stepStore().setCurrent(stepStore().getCurrent + 1);

    stepStore().nextStep();
}
</script>