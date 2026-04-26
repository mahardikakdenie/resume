<template>
	<footer class="relative z-10 bg-slate-900 text-slate-300 pt-16 pb-8 overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
				<div class="col-span-1 md:col-span-1">
                    <h3 class="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <span class="w-2 h-8 bg-purple-600 rounded-full"></span>
                        Mahardika
                    </h3>
                    <p class="text-sm leading-relaxed text-slate-400 mb-6">
                        Crafting digital experiences with clean code and modern aesthetics. Let's build something amazing together.
                    </p>
                    <div class="flex space-x-4">
                        <a href="https://linkedin.com" target="_blank" class="p-2 bg-slate-800 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300">
                            <img :src="linkedinImage" class="w-5 h-5 filter invert" alt="LinkedIn">
                        </a>
                        <a href="https://github.com" target="_blank" class="p-2 bg-slate-800 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300">
                            <img :src="githubImage" class="w-5 h-5 filter invert" alt="GitHub">
                        </a>
                        <a href="mailto:email@example.com" class="p-2 bg-slate-800 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300">
                            <img :src="emailImage" class="w-5 h-5 filter invert" alt="Email">
                        </a>
                    </div>
				</div>

                <div>
                    <h4 class="text-lg font-semibold text-white mb-6">Quick Links</h4>
                    <ul class="space-y-3 text-sm">
                        <li><router-link to="/" class="hover:text-purple-400 transition-colors">About Me</router-link></li>
                        <li><router-link to="/skills" class="hover:text-purple-400 transition-colors">My Skills</router-link></li>
                        <li><router-link to="/project" class="hover:text-purple-400 transition-colors">Portfolios</router-link></li>
                        <li><router-link to="/experiences" class="hover:text-purple-400 transition-colors">Experience</router-link></li>
                        <li><router-link to="/documentation" class="hover:text-purple-400 transition-colors">Documentation</router-link></li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-lg font-semibold text-white mb-6">Services</h4>
                    <ul class="space-y-3 text-sm">
                        <li class="hover:text-purple-400 transition-colors cursor-pointer">Web Development</li>
                        <li class="hover:text-purple-400 transition-colors cursor-pointer">Mobile App Development</li>
                        <li class="hover:text-purple-400 transition-colors cursor-pointer">UI/UX Design</li>
                        <li class="hover:text-purple-400 transition-colors cursor-pointer">System Architecture</li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-lg font-semibold text-white mb-6">Get in Touch</h4>
                    <p class="text-sm text-slate-400 mb-2">Jakarta, Indonesia</p>
                    <a href="mailto:hello@mahardika.dev" class="text-sm font-medium text-purple-400 hover:text-purple-300 mb-4 block">
                        hello@mahardika.dev
                    </a>
                </div>
			</div>

			<div class="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
				<p>&copy; {{ new Date().getFullYear() }} Mahardika Kessuma Denie. All rights reserved.</p>
                <div class="flex space-x-6 mt-4 md:mt-0">
                    <span class="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
                    <span class="hover:text-slate-300 cursor-pointer">Terms of Service</span>
                </div>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
import linkedinImage from '@/assets/linkedin.svg';
import githubImage from '@/assets/github.svg';
import emailImage from '@/assets/email.svg';
</script>
