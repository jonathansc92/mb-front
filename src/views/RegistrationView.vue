<template>
  <div class="step-content">
    <div v-show="stepStore().getCurrent === 0">
      <StepOneView />
    </div>
    <div v-show="stepStore().getCurrent === 1">
      <StepTwoView />
    </div>
    <div v-show="stepStore().getCurrent === 2">
      <StepThreeView />
    </div>
    <div v-show="stepStore().getCurrent === 3">
      <StepFourView />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { stepStore } from "@/stores/Step";
import StepOneView from './StepOneView.vue';
import StepTwoView from './StepTwoView.vue';
import StepThreeView from './StepThreeView.vue';
import StepFourView from './StepFourView.vue';

onMounted(() => {
  stepStore().setSteps(5);
});
</script>