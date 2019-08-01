<template>
    <el-input
        v-model="num"
        @change="change"
        @
    ></el-input>
</template>

<script>
    export default {
        props: {
            value: {

            },
        },
        data () {
            return {

            }
        },
        watch: {
            value (val) {
                this.num = val;
            }
        },
        methods: {
            change (value) {
                this.$emit('input', value);
                this.$emit('change', value);
            }
        }
    }
</script>
