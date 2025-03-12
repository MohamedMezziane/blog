import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import StudentList from './components/StudentList.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/students', component: StudentList }  // New route for students
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
