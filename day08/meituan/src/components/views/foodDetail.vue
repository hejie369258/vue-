<template>
    <div>
        <h1>foodDetail</h1>
        <go-back></go-back>
        <h1>接收query参数是---{{$route.query.id}}</h1>
         <h1>接收params参数是---{{$route.params.id}}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
};
</script>

<style  lang="" scoped>

</style>
