<template>
    <StepHeaderComponent title="Revise suas informações" />

        <FieldsStepOneView />

        <div style="text-align: center;">
            <ButtonComponent style="display: inline-block; width: 40%; margin-right: 10px" type="button" label="Voltar"
                @click="stepStore().prevStep()" />
            <ButtonComponent style="display: inline-block; width: 56%;" isPrimary label="Continuar" />
        </div>
    <!-- </Form> -->
</template>
  
<script setup>
import { useField } from 'vee-validate';
import * as yup from 'yup';
import { stepStore } from "@/stores/Step";
import { stepDataStore } from "@/stores/StepData";
import ButtonComponent from "@/components/Form/ButtonComponent.vue";
import StepHeaderComponent from "@/components/StepHeaderComponent.vue";
import validation from "@/utils/validation";
import FieldsStepOneView from './FieldsStepOneView.vue';

const { value, errorMessage } = useField('email', yup.string().email(validation.INVALID_EMAIL).required(validation.REQUIRED));

value.value = stepDataStore().getEmail;

function onSubmit(values) {

    // stepDataStore().setPassword(values.password);
    stepStore().nextStep();
}
</script>