<template>
    <button class="button" :class="[isPrimary ? 'primary' : 'secondary']" :type="type">
        {{ label }}
    </button>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: "submit"
        },
        label: {
            type: String,
            default: ''
        },
        isPrimary: {
            type: Boolean,
            default: false
        }
    },
}
</script>

<style lang="scss">
.button {
    width: 100%;
    border-radius: 5px;
    border: 1px solid orange;
    padding: 7px;
    padding-left: 26px;
    padding-right: 26px;
    margin-top: 10px;
    margin-bottom: 10px;

    &.primary {
        background-color: orange;
        color: white;
    }

    &.secondary {
        background-color: white;
        color: orange;
    }
}

/* .button- .button-secondary {
    background-color: orange;
    border-radius: 5px;
    border: 1px solid orange;
    color: white;
    padding: 7px;
    padding-left: 26px;
    padding-right: 26px;
} */
</style>