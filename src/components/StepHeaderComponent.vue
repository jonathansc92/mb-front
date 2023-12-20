<template>
    <div>
        <small>
            Etapa {{ stepHeaderStore().getStep }} de 4
        </small>
        <h3 class="title">
             {{ stepHeaderStore().getTitle }}
        </h3>
    </div>
</template>

<script setup>
import { stepHeaderStore } from "@/stores/StepHeader";
</script>

<style lang="scss">
    .title {
        font-weight: bold;
        margin-bottom: 5px;
    }
</style>