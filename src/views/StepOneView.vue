<template>
    <div>
        <form>
            <InputComponent />
            <button-component />
        </form>
    </div>
</template>
  
<script setup>
import { onMounted } from "vue";
import ButtonComponent from "@/components/Form/ButtonComponent.vue";
import InputComponent from "@/components/Form/InputComponent.vue";
import { stepHeaderStore } from "@/stores/StepHeader";

onMounted(() => {
    stepHeaderStore().setTitle("Seja bem vindo(a)");
    stepHeaderStore().setStep(1);
})
</script>