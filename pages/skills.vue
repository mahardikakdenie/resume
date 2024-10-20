<template>
    <div class="mt-4">
        <div class="flex justify-center items-center gap-2">
            <img src="https://cdn-icons-png.flaticon.com/512/10262/10262300.png" width="30" alt="">
            <span class="text-2xl font-bold">
                Skill &
            </span>
            <span class="text-purple-500 text-2xl font-bold">Abilities</span>
        </div>
        
        <div class="mt-9 px-3">
            <div class="grid grid-cols-6 px-2 gap-4">
                <div v-for="(ability, index) in abilities" :key="index" class="border p-5 rounded-md cursor-pointer hover:border-purple-500">
                    <div class="flex justify-center">
                        <img :src="ability.image" width="40" class="sc-cCYyox fnxLGg">
                    </div>
                    <div class="text-center mt-4">
                        <span class="font-bold text-sm">
                            {{ ability.title }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import abilitiesImg from '@/assets/abilities.svg';

const abilities = ref<{
    title: string;
    image: string;
}[]>([
    {
        title: 'ReactJS',
        image: 'http://api-portfolio.bhaktibuana.com/images/skills/20230427-195219-ReactJs.png',
    },
    {
        title: 'Vue',
        image: 'https://api-portfolio.bhaktibuana.com/images/skills/20230427-195946-VueJs.png',
    },
    {
        title: 'NodeJS',
        image: 'https://api-portfolio.bhaktibuana.com/images/skills/20230427-192739-NodeJs.png',
    },
    {
        title: 'ExpressJS',
        image: 'https://api-portfolio.bhaktibuana.com/images/skills/20230427-193735-ExpressJs.png',
    },
    {
        title: 'HTML5',
        image: 'https://api-portfolio.bhaktibuana.com/images/skills/20230427-201206-Html5.png',
    },
    {
        title: 'Tailwind Css',
        image: 'https://api-portfolio.bhaktibuana.com/images/skills/20230427-201654-TailwindCss.png',
    },
    {
        title: 'Boostrap',
        image: 'https://api-portfolio.bhaktibuana.com/images/skills/20230427-200522-Bootstrap.png'
    },
    {
        title: 'SASS',
        image: 'https://api-portfolio.bhaktibuana.com/images/skills/20230427-200915-Sass.png',
    },
    {
        title: 'CSS3',
        image: 'https://api-portfolio.bhaktibuana.com/images/skills/20230427-202042-Css3.png',
    },
    {
        title: 'Javascript',
        image: 'https://api-portfolio.bhaktibuana.com/images/skills/20230329-221857-JavaScript.png',
    },
    {
        title: 'Typescript',
        image: 'https://api-portfolio.bhaktibuana.com/images/skills/20230427-194450-TypeScript.png',
    },
    {
        title: 'Python',
        image: 'https://api-portfolio.bhaktibuana.com/images/skills/20230427-202434-Python.png',
    },
    {
        title: 'PHP',
        image: 'http://api-portfolio.bhaktibuana.com/images/skills/20230427-202703-Php.png',
    },
    {
        title: 'CodeIgniter',
        image: 'http://api-portfolio.bhaktibuana.com/images/skills/20230427-203051-CodeIgniter.png'
    },
    {
        title: 'Laravel',
        image: 'http://api-portfolio.bhaktibuana.com/images/skills/20230427-203233-Laravel.png',
    },
    {
        title: 'Mysql',
        image: 'http://api-portfolio.bhaktibuana.com/images/skills/20230427-204749-MySql.png',
    },
    {
        title: 'PostgreSql',
        image: 'http://api-portfolio.bhaktibuana.com/images/skills/20230427-204931-PostgreSql.png',
    },
    {
        title: 'MongoDb',
        image: 'http://api-portfolio.bhaktibuana.com/images/skills/20230427-204441-MongoDb.png',
    },
    {
        title: 'Docker',
        image: 'http://api-portfolio.bhaktibuana.com/images/skills/20230427-211426-Docker.png',
    },
    {
        title: 'Heroku',
        image: 'http://api-portfolio.bhaktibuana.com/images/skills/20230427-211605-Heroku.png',
    },
    {
        title: 'Netlify',
        image: 'http://api-portfolio.bhaktibuana.com/images/skills/20230427-211644-Netlify.png',
    },
]);
</script>
