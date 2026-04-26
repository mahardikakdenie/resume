<template>
  <div class="min-h-screen py-20 relative overflow-hidden bg-slate-50 flex items-center justify-center text-left">
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div class="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-300/30 rounded-full blur-[120px]"></div>
        <div class="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-[120px]"></div>
    </div>

    <div class="container mx-auto px-4 md:px-8 relative z-10">
      
      <div class="max-w-6xl mx-auto bg-white/80 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/50 grid grid-cols-1 lg:grid-cols-5">
        
        <div class="lg:col-span-2 bg-slate-900 text-white p-10 md:p-14 relative overflow-hidden flex flex-col justify-between text-left">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 pointer-events-none"></div>
            <div class="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl pointer-events-none"></div>

            <div class="relative z-10 text-left">
                <h2 class="text-3xl md:text-4xl font-black mb-6 tracking-tight">{{ $t('contact.title') }}</h2>
                <p class="text-slate-400 leading-relaxed mb-12 font-medium">
                    {{ $t('contact.description') }}
                </p>

                <div class="space-y-6 text-left">
                    <div class="flex items-start gap-4">
                        <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-purple-400 shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <div class="text-left">
                            <h4 class="font-bold text-lg">{{ $t('contact.chat_title') }}</h4>
                            <a href="mailto:dikamahar884@gmail.com" class="text-slate-400 hover:text-white transition-colors">dikamahar884@gmail.com</a>
                        </div>
                    </div>

                    <div class="flex items-start gap-4">
                        <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-blue-400 shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        </div>
                        <div class="text-left">
                            <h4 class="font-bold text-lg">{{ $t('contact.office_title') }}</h4>
                            <p class="text-slate-400">Jakarta / Bandung, Indonesia</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="relative z-10 mt-12 text-left">
                <h4 class="font-bold text-sm uppercase tracking-widest text-slate-500 mb-4">{{ $t('contact.connect_title') }}</h4>
                <div class="flex gap-3">
                    <a href="https://linkedin.com" target="_blank" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-600 hover:scale-110 transition-all duration-300">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg" class="w-5 h-5 filter invert" alt="LinkedIn">
                    </a>
                    <a href="https://github.com" target="_blank" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-600 hover:scale-110 transition-all duration-300">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" class="w-5 h-5 filter invert" alt="GitHub">
                    </a>
                </div>
            </div>
        </div>

        <div class="lg:col-span-3 p-10 md:p-14 bg-white text-left">
            <div class="max-w-lg">
                <h2 class="text-3xl font-black text-slate-900 mb-2 tracking-tight text-left">{{ $t('contact.form_title') }}</h2>
                <p class="text-slate-500 mb-8 font-medium text-left">{{ $t('contact.form_description') }}</p>

                <form @submit.prevent="handleSubmit" class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        <div class="space-y-2">
                            <label class="text-[10px] font-black uppercase tracking-widest text-slate-400">{{ $t('contact.first_name') }}</label>
                            <input 
                                v-model="form.firstName" 
                                type="text" 
                                placeholder="John"
                                class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none font-bold"
                                required
                            />
                        </div>
                        <div class="space-y-2 text-left">
                            <label class="text-[10px] font-black uppercase tracking-widest text-slate-400">{{ $t('contact.last_name') }}</label>
                            <input 
                                v-model="form.lastName" 
                                type="text" 
                                placeholder="Doe"
                                class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none font-bold"
                                required
                            />
                        </div>
                    </div>

                    <div class="space-y-2 text-left">
                        <label class="text-[10px] font-black uppercase tracking-widest text-slate-400">{{ $t('contact.email_address') }}</label>
                        <input 
                            v-model="form.email" 
                            type="email" 
                            placeholder="john@example.com"
                            class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none font-bold"
                            required
                        />
                    </div>

                    <div class="space-y-2 text-left">
                        <label class="text-[10px] font-black uppercase tracking-widest text-slate-400">{{ $t('contact.your_message') }}</label>
                        <textarea 
                            v-model="form.message" 
                            rows="4" 
                            placeholder="Tell me about your project..."
                            class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none resize-none font-bold"
                            required
                        ></textarea>
                    </div>

                    <div class="pt-4">
                        <button 
                            type="submit" 
                            :disabled="isSubmitting"
                            class="w-full px-8 py-4 bg-slate-900 text-white text-xs font-black uppercase tracking-widest rounded-xl shadow-xl hover:shadow-purple-500/20 hover:bg-purple-600 transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            <span v-if="!isSubmitting">{{ $t('contact.send_message') }}</span>
                            <span v-else>{{ $t('contact.sending') }}</span>
                            <svg v-if="!isSubmitting" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </button>
                    </div>

                    <div v-if="isSent" class="p-4 bg-green-50 text-green-700 rounded-xl flex items-center gap-3 animate-fade-in">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span class="font-bold text-sm">{{ $t('contact.success_msg') }}</span>
                    </div>
                </form>
            </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const { t } = useI18n();

const form = ref({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
});

const isSubmitting = ref(false);
const isSent = ref(false);

const handleSubmit = () => {
    isSubmitting.value = true;

    // Simulate API Call
    setTimeout(() => {
        isSubmitting.value = false;
        isSent.value = true;
        
        // Reset form
        form.value = { firstName: '', lastName: '', email: '', message: '' };
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            isSent.value = false;
        }, 5000);
    }, 1500);
};
</script>

<style scoped>
.animate-fade-in {
    animation: fadeIn 0.5s ease-out;
}
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
</style>
