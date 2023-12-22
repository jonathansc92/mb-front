<template>
    <StepHeaderComponent title="Seja bem vindo(a)" />
    <Form @submit="onSubmit">
        <FieldsStepOneView />
        <ButtonComponent style="display: block; width: 100%;" isPrimary label="Continuar" />
    </Form>
</template>
  
<script setup>
import { Form } from 'vee-validate';
import { stepStore } from "@/stores/Step";
import { stepDataStore } from "@/stores/StepData";
import ButtonComponent from "@/components/Form/ButtonComponent.vue";
import StepHeaderComponent from "@/components/StepHeaderComponent.vue";
import FieldsStepOneView from './FieldsStepOneView.vue';

function onSubmit(values) {
    stepDataStore().setEmail(values.email);
    stepStore().nextStep();
}
</script>