<template>
    <nav class="bg-primary ">
        <div class="container mx-auto">
            <div class="relative flex items-center justify-center h-20">
                <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex-shrink-0 flex items-center h-20 border-r px-3 border-primary-hover ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <div class="flex-shrink-0 flex items-center border-r px-3 border-primary-hover">
                        <!--                            <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">-->
                        <img class="hidden lg:block h-14 w-auto" src="https://courseco-demo.test.courseco.co/shared_media/courseco-demo/media/photos/logos/logo_CC_white.svg" alt="Workflow">
                    </div>
                    <div class="hidden sm:flex h-20 justify-center items-center flex border-r px-3 border-primary-hover">
                        <div class="flex space-x-4">
                            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                            <!-- This example requires Tailwind CSS v2.0+ -->
                            <div class="relative inline-block text-left">
                                <div>
                                        <span class="text-white px-3 py-4 rounded-md text-sm font-medium flex uppercase " id="menu-button" aria-expanded="true" aria-haspopup="true">
                                            Dashboard
                                            <!-- Heroicon name: solid/chevron-down -->
                                            <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                </div>
                                <div class="hidden origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                    <div class="py-1" role="none">
                                        <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                                        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                                        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                                        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                                        <form method="POST" action="#" role="none">
                                            <button type="submit" class="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">
                                                Sign out
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-shrink-0 flex items-center border-r px-3 border-primary-hover">
                        <button class="bg-white
                                           text-primary-hover
                                           hover:text-primary-hover
                                           py-2
                                           px-4
                                           hover:border-transparent
                                           rounded">
                            View Website
                        </button>
                    </div>
                    <div class="ml-auto">
                        <div class="relative inline-block text-left flex">
                            <div class="border-r px-3 border-primary-hover  h-20 flex justify-center items-center">
                                <img src="https://img.icons8.com/external-others-iconmarket/32/ffffff/external-notification-cyber-monday-others-iconmarket.png"/>
                            </div>
                            <div class="border-r px-3 border-primary-hover h-20 flex justify-center items-center">
                                <img src="https://img.icons8.com/glyph-neue/32/ffffff/inbox.png"/>
                            </div>
                            <div class="border-r px-3 border-primary-hover  h-20 flex justify-center items-center">
                                <img src="https://img.icons8.com/ios-glyphs/30/ffffff/question-mark.png"/>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="-mr-1 ml-2 h-5 w-5 text-white"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </div>
                            <div class="border-r px-3 border-primary-hover  h-20 flex justify-center items-center">
                                <img class="profile-section-avatar" src="//www.gravatar.com/avatar/31dccfbfe1d08d1f134d40c623fcfedd?s=40&amp;d=mm&amp;r=g" alt="profile" width="22" height="22" title="Profile: Demo">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="-mr-1 ml-2 h-5 w-5 text-white"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name:'Navbar',
    data() {
        return {
            products: []
        }
    },
    methods: {
    }
}
</script>
