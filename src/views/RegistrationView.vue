<template>
  <div>
    <StepHeaderComponent />
    <StepOneView />
    <StepTwoView />
  </div>
</template>

<script setup>
import StepOneView from "@/views/StepOneView.vue";
import StepTwoView from "@/views/StepTwoView.vue";
import StepHeaderComponent from "@/components/StepHeaderComponent.vue";
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
