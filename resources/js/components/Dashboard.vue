<template>
    <div>
        <Navbar ></Navbar>
        <div class="container mx-auto mt-8 flex">
            <div class="w-64 border">
                <LeftMenu></LeftMenu>
            </div>
            <div class="w-full ml-4 ">
                <div class="flex justify-between items-center w-full border-b pb-8">
                    <p class="text-primary font-bold text-2xl">System</p>
                    <button class="bg-transparent text-gray-400 font-semibold py-2 px-4 border border-gray-400 rounded">
                        <i class="fas fa-cog"></i>
                        Actions
                        <i class="fas fa-angle-right ml-2"></i>
                    </button>
                </div>
                <div class="py-8 border-b">
                    <div class="grid grid-cols-3 gap-4">
                        <div class="col-span-1">
                            <div class="border border-success flex items-center justify-center flex-col">
                                <p class="uppercase py-2">Payments</p>
                                <p class="text-success py-2 border-b text-3xl">77</p>
                                <div class="w-full my-4 flex">
                                    <div class="flex flex-col justify-center items-center  border-r w-1/2">
                                        <p class="text-success">77</p>
                                        <p class="">Previous year</p>
                                    </div>
                                    <div class="flex flex-col justify-center items-center w-1/2">
                                        <p class="text-success">—%</p>
                                        <p class="">Since last year</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-1">
                            <div class="border border-success flex items-center justify-center flex-col">
                                <p class="uppercase py-2">Payments</p>
                                <p class="text-success py-2 border-b text-3xl">77</p>
                                <div class="w-full my-4 flex">
                                    <div class="flex flex-col justify-center items-center  border-r w-1/2">
                                        <p class="text-success">77</p>
                                        <p class="">Previous year</p>
                                    </div>
                                    <div class="flex flex-col justify-center items-center w-1/2">
                                        <p class="text-success">—%</p>
                                        <p class="">Since last year</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-1">
                            <div class="border border-success flex items-center justify-center flex-col">
                                <p class="uppercase py-2">Payments</p>
                                <p class="text-success py-2 border-b text-3xl">77</p>
                                <div class="w-full my-4 flex">
                                    <div class="flex flex-col justify-center items-center  border-r w-1/2">
                                        <p class="text-success">77</p>
                                        <p class="">Previous year</p>
                                    </div>
                                    <div class="flex flex-col justify-center items-center w-1/2">
                                        <p class="text-success">—%</p>
                                        <p class="">Since last year</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-8">
                    <div class="grid grid-cols-6 gap-4">
                        <div class="col-span-1 bg-primary text-white flex flex-col justify-center items-center py-8 cursor-pointer hover:bg-primary-hover">
                            <i class="fas fa-file-invoice text-7xl"></i>
                            <span class="mt-3">Accounts</span>
                        </div>
                        <div class="col-span-1 bg-primary text-white flex flex-col justify-center items-center py-8 cursor-pointer hover:bg-primary-hover">
                            <i class="fas fa-bell text-7xl"></i>
                            <span class="mt-3">Automations</span>
                        </div>
                        <div class="col-span-1 bg-primary text-white flex flex-col justify-center items-center py-8 cursor-pointer hover:bg-primary-hover">
                            <i class="fas fa-ticket-alt text-7xl"></i>
                            <span class="mt-3">Bookings</span>
                        </div>
                        <div class="col-span-1 bg-primary text-white flex flex-col justify-center items-center py-8 cursor-pointer hover:bg-primary-hover">
                            <i class="fas fa-book text-7xl"></i>
                            <span class="mt-3">Courses</span>
                        </div>
                        <div class="col-span-1 bg-primary text-white flex flex-col justify-center items-center py-8 cursor-pointer hover:bg-primary-hover">
                            <i class="fas fa-tachometer-alt text-7xl"></i>
                            <span class="mt-3">Dashboards</span>
                        </div>
                        <div class="col-span-1 bg-primary text-white flex flex-col justify-center items-center py-8 cursor-pointer hover:bg-primary-hover">
                            <i class="fas fa-folder-open text-7xl"></i>
                            <span class="mt-3">Files</span>
                        </div>
                        <div class="col-span-1 bg-primary text-white flex flex-col justify-center items-center py-8 cursor-pointer hover:bg-primary-hover">
                            <i class="fas fa-play text-7xl"></i>
                            <span class="mt-3">Media</span>
                        </div>
                        <div class="col-span-1 bg-primary text-white flex flex-col justify-center items-center py-8 cursor-pointer hover:bg-primary-hover">
                            <i class="fas fa-bars text-7xl"></i>
                            <span class="mt-3">Menus</span>
                        </div>
                        <div class="col-span-1 bg-primary text-white flex flex-col justify-center items-center py-8 cursor-pointer hover:bg-primary-hover">
                            <i class="fas fa-comment text-7xl"></i>
                            <span class="mt-3">Messenger</span>
                        </div>
                        <div class="col-span-1 bg-primary text-white flex flex-col justify-center items-center py-8 cursor-pointer hover:bg-primary-hover">
                            <i class="fas fa-newspaper text-7xl"></i>
                            <span class="mt-3">News</span>
                        </div>
                        <div class="col-span-1 bg-primary text-white flex flex-col justify-center items-center py-8 cursor-pointer hover:bg-primary-hover">
                            <i class="fas fa-bell text-7xl"></i>
                            <span class="mt-3">Notifications</span>
                        </div>
                        <div class="col-span-1 bg-primary text-white flex flex-col justify-center items-center py-8 cursor-pointer hover:bg-primary-hover">
                            <i class="fas fa-pager text-7xl"></i>
                            <span class="mt-3">Pages</span>
                        </div>
                        <div class="col-span-1 bg-primary text-white flex flex-col justify-center items-center py-8 cursor-pointer hover:bg-primary-hover">
                            <i class="fas fa-columns text-7xl"></i>
                            <span class="mt-3">Panels</span>
                        </div>
                        <div class="col-span-1 bg-primary text-white flex flex-col justify-center items-center py-8 cursor-pointer hover:bg-primary-hover">
                            <i class="fas fa-tasks text-7xl"></i>
                            <span class="mt-3">Questionnaires</span>
                        </div>
                        <div class="col-span-1 bg-primary text-white flex flex-col justify-center items-center py-8 cursor-pointer hover:bg-primary-hover">
                            <i class="fas fa-chart-line text-7xl"></i>
                            <span class="mt-3">Reports</span>
                        </div>
                        <div class="col-span-1 bg-primary text-white flex flex-col justify-center items-center py-8 cursor-pointer hover:bg-primary-hover">
                            <i class="fas fa-poll-h text-7xl"></i>
                            <span class="mt-3">Surveys</span>
                        </div>
                        <div class="col-span-1 bg-primary text-white flex flex-col justify-center items-center py-8 cursor-pointer hover:bg-primary-hover">
                            <i class="fas fa-star text-7xl"></i>
                            <span class="mt-3">Testimonials</span>
                        </div>
                        <div class="col-span-1 bg-primary text-white flex flex-col justify-center items-center py-8 cursor-pointer hover:bg-primary-hover">
                            <i class="fas fa-calendar-check text-7xl"></i>
                            <span class="mt-3">Todos</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import LeftMenu from "./LeftMenu";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default {
    components: {Footer, Navbar, LeftMenu},

    methods: {}
}
</script>
