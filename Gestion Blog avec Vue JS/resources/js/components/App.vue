<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/students">Students</router-link>
        </nav>
        <router-view></router-view> <!-- This will render the components based on the route -->
    </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
nav {
    padding: 10px;
    background: #f8f9fa;
}
nav a {
    margin: 10px;
    text-decoration: none;
    color: #333;
}
</style>
