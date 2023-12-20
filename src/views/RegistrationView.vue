<template>
  <div class="step-content">
    <div v-show="stepStore().getCurrent === 0">
      <StepOneView />
    </div>
    <div v-show="stepStore().getCurrent === 1">
      <StepTwoView />
    </div>
    <div v-show="stepStore().getCurrent === 3">
      <StepThreeView />
    </div>
    <!-- <div v-show="stepStore().getCurrent === 3">
      <StepThreeView />
    </div> -->
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { stepStore } from "@/stores/Step";
import StepOneView from './StepOneView.vue';
import StepThreeView from './StepThreeView.vue';
import StepTwoView from './StepTwoView.vue';
// import StepTwoView from './StepTwoView.vue';

onMounted(() => {
  stepStore().setSteps(5);
});
</script>

<style>
.stepper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.step-active {
  font-weight: bold;
}

.stepper-controls button {
  margin-right: 10px;
}
</style>