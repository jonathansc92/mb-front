<template>
    <StepHeaderComponent title="Senha de acesso" />
    <Form @submit="onSubmit">
        <FieldsStepThreeView />
        <div style="text-align: center;">
            <ButtonComponent style="display: inline-block; width: 40%; margin-right: 10px" type="button" label="Voltar"
                @click="stepStore().prevStep()" />
            <ButtonComponent style="display: inline-block; width: 56%;" isPrimary label="Continuar" />
        </div>
    </Form>
</template>
  
<script setup>
import { Form } from 'vee-validate';
import { stepStore } from "@/stores/Step";
import { stepDataStore } from "@/stores/StepData";
import ButtonComponent from "@/components/Form/ButtonComponent.vue";
import StepHeaderComponent from "@/components/StepHeaderComponent.vue";
import FieldsStepThreeView from './FieldsStepThreeView.vue';

function onSubmit(values) {
    stepDataStore().setPassword(values.password);
    stepStore().nextStep();
}
</script>