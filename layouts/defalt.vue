<template>
    <header class = "flex flex-row w-full bg-blue-900">
        <div class = "basis-1/4 items-center justify-start px-8">
            <a href="http://localhost:3000/" class="w-16 h-16"><img src="/assets/images/image.png" class="h-16 w-16 bg-transparent"></a>
        </div>
        <div class="basis-1/4">
        </div>
        <nav class = "basis-1/2 flex flex-row items-center justify-end px-8 gap-4">
            <NuxtLink to="/" class="my-auto p-2 text-white hover:bg-blue-900 hover:text-yellow-400">Home</NuxtLink>
            <NuxtLink to="/meme" class="my-auto p-2 text-white hover:bg-blue-900 hover:text-yellow-400">Memes</NuxtLink>
            <NuxtLink to="/Lab3" class="my-auto p-2 text-white hover:bg-blue-900 hover:text-yellow-400">Lab3</NuxtLink>
            <NuxtLink to="/login" class="my-auto p-2 text-white hover:bg-blue-900 hover:text-yellow-400">Login</NuxtLink>
            <NuxtLink to="/logout" class="my-auto p-2 text-white hover:bg-blue-900 hover:text-yellow-400">LogOut</NuxtLink>
        </nav>
    </header>
    
    <main class="p-5 flex flex-row w-full bg-[url(/assets/images/donpollobg.jpg)] h-screen bg-center bg-no-repeat bg-cover text-white">
        <slot />
    </main>

    <footer class="flex flex-row w-full bg-gray-800 items-center justify-center text-white px-4 py-2 gap-4">
        <a href="https://www.youtube.com/"><img src="/assets/images/youtube.png" class="w-16 h-16"></a>
        <a href="https://www.facebook.com/"><img src="/assets/images/facebook.png" class="w-16 h-16 bg-transparent"></a>
        <a href="https://github.com/"><img src="/assets/images/github.png" class="w-16 h-16 bg-transparent"></a>
    </footer>
</template>



<script setup>
import { useHead } from "#app";

useHead({
    script: [
        {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-K2NYFMRNR9',
        },
        {
            innerHTML:`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K2NYFMRNR9');            
            `,
            type: 'text/javascript',
        },
    ],
    _dangerouslyDisableSanitizersByTagID: {
        gtag: ['innerHTML'],
    },
})
</script>

