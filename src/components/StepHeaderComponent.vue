<template>
    <div>
        <small class="stepDescription">
            Etapa <span class="stepCurrentNumber">{{ stepStore().getCurrent + 1 }}</span> de 4
        </small>
        <h3 class="title">
            {{ props.title }}
        </h3>
    </div>
</template>

<script setup>
import { stepStore } from "@/stores/Step";

const props = defineProps({
    title: {
        type: String,
        required: true,
    }
});
</script>

<style lang="scss">
.title {
    font-weight: bold;
    margin-bottom: 25px;
}

.stepDescription {
    font-weight: 600;
}

.stepCurrentNumber {
    color: orange;
}
</style>