<template>
    <div class="container mx-auto mt-8 flex h-screen justify-center items-center">
        <div class="flex flex-col rounded w-full flex items-center">
            <div class="w-1/3 shadow-2xl rounded-lg">

                <div class="bg-primary w-full rounded-t">
                    <div class="py-4 px-24">
                        <img class="hidden lg:block h-14 w-auto"
                             src="https://courseco-demo.test.courseco.co/shared_media/courseco-demo/media/photos/logos/logo_CC_white.svg"
                             alt="Workflow">
                    </div>
                    <div class="flex px-8">
                        <div @click="login=false" class="text-white w-2/3 text-center cursor-pointer" :class="{'border-b-8 border-success': !login}">
                            <span class="cursor-pointer">Sign up</span>
                        </div>
                        <div @click="login=true" class="text-white w-2/3 text-center cursor-pointer" :class="{'border-b-8 border-success': login}">
                            <span class="cursor-pointer">Log in</span>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col p-8 w-full">
                    <div class="w-full" :class="{'block': !login, ' hidden':login }">
                        <p class="">Sign up to your account</p>
                        <p>I am an</p>
                        <div class="w-full flex">
                            <button class="border py-1 w-1/2" @click="individual=true" :class="{'bg-primary text-white': individual}">Individual</button>
                            <button class="border py-1 w-1/2" @click="individual=false" :class="{'bg-primary text-white': !individual}">Organisation</button>
                        </div>

                        <div class="w-full flex mt-8">
                            <div class="w-1/2 pr-1 justify-start"><input type="text" class="p-2 pl-6 border rounded"
                                                                         placeholder="First name:*"></div>
                            <div class="w-1/2 pl-1 flex justify-end"><input type="text" class="p-2 pl-6 border rounded"
                                                                            placeholder="Last name:*"></div>
                        </div>
                        <div class="w-full flex mt-2">
                            <input type="text" class="p-2 pl-6 border rounded w-full" placeholder="Your Email:*">
                        </div>
                        <div class="w-full flex  mt-2">
                            <div class="py-1 w-full" >
                                <div class="relative w-full">
                                    <input placeholder="Password:*" :type="show ? 'password' : 'text'"
                                           class="p-2 pl-6 border rounded w-full">
                                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                        <div :class="{'block': !show, ' hidden  ':show }">
                                            <i class="fas fa-eye cursor-pointer" @click="show = !show"
                                            ></i>
                                        </div>
                                        <div :class="{' hidden  ': !show, 'block':show }">
                                            <i class="fas fa-eye-slash cursor-pointer" @click="show = !show"
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full flex  mt-8">
                            <div class="w-4/5 flex items-center">
                                <p class="text-lightGrey text-xs">
                                    By signing up, you agree to th <a href="" class="text-success">privacy policy</a><br>
                                    and <a href="" class="text-success">terms of use</a>
                                </p>
                            </div>
                            <div class="w-1/5 flex items-center">
                                <img src="//courseco-demo.test.courseco.co/engine/shared/img/comodo-secure-logo.png" alt="">
                            </div>
                        </div>
                        <div class="w-full flex  mt-5">
                            <button class="w-full bg-success py-3 text-white font-bold">SIGN UP</button>
                        </div>
                        <div class="w-full flex justify-center mt-8">
                            <a href="">Go Back ></a>
                        </div>
                    </div>
                    <div class="w-full" :class="{'block': login, ' hidden': !login }">
                        <p class="">Log in to your account</p>
                        <div class="w-full flex mt-2">
                            <input type="text" class="p-2 pl-6 border rounded w-full" placeholder="Your Email:*">
                        </div>
                        <div class="w-full flex  mt-2">
                            <div class="py-1 w-full" >
                                <div class="relative w-full">
                                    <input placeholder="Password:*" :type="show ? 'password' : 'text'"
                                           class="p-2 pl-6 border rounded w-full">
                                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                        <div :class="{'block': !show, ' hidden  ':show }">
                                            <i class="fas fa-eye cursor-pointer" @click="show = !show"
                                            ></i>
                                        </div>
                                        <div :class="{' hidden  ': !show, 'block':show }">
                                            <i class="fas fa-eye-slash cursor-pointer" @click="show = !show"
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full flex  mt-8">
                            <div class="w-4/5 flex items-center">
                                <p class="text-lightGrey text-xs">
                                    By signing up, you agree to th <a href="" class="text-success">privacy policy</a><br>
                                    and <a href="" class="text-success">terms of use</a>
                                </p>
                            </div>
                            <div class="w-1/5 flex items-center">
                                <img src="//courseco-demo.test.courseco.co/engine/shared/img/comodo-secure-logo.png" alt="">
                            </div>
                        </div>
                        <div class="w-full flex  mt-5">
                            <button class="w-full bg-success py-3 text-white font-bold">LOG IN</button>
                        </div>
                        <div class="w-full flex justify-center mt-8">
                            <a href="">Go Back ></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    data() {
        return {
            show: true,
            login: false,
            individual: true
        }
    },
    methods: {}
}
</script>
