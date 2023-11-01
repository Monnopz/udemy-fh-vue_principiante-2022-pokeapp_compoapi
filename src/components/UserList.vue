<template>
    <!-- <ul>
        <li v-for="user in users" :key="user.id">
            <h1>HOLA MUNDO</h1>
        </li>
    </ul> -->
    <ul>
        <slot v-for="user in users" :key="user.id" :user="user"></slot>
    </ul>
</template>

<script>
export default {
    name: 'UserList',
    props: {
        users: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
    }
</style>