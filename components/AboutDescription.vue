<template>
  <!-- For translucent feel //bg-opacity-60  -->
  <section
    class="bg-white sticky bg-opacity-60 top-0 z-20 backdrop-filter blur-backdrop-filter"
  >
    <div
      class="bg-opacity-60 px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <div class="relative flex items-center justify-between">
        <NuxtLink
        to="/" class="inline-flex items-center">
          <span class="logo font-bold tracking-wide text-lg text-stone-950">
            Tech
          </span>
          <span class="bg-stone-950 text-white rounded-r-lg logo text-lg font-bold tracking-wide  ">
          Bytes
          </span>
          <br/>
        </NuxtLink>

        <ul class="items-center hidden space-x-8 lg:flex">
          <li>
            <NuxtLink
              to="/"
              class="font-medium tracking-wide text-stone-950 hover:text-blue-500 uppercase nav-link"
            >
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/about"
              class="font-medium tracking-wide text-stone-950 hover:text-blue-500 uppercase nav-link"
            >
              About Us
            </NuxtLink>
          </li>
        
        <!--   <li>
            <NuxtLink
              to="/Blog"
              class="font-medium tracking-wide text-gray-500 hover:text-blue-500 uppercase nav-link"
              >Blog
            </NuxtLink>
          </li> -->
          <li class="relative parent font-medium tracking-wide text-stone-950 hover:text-blue-500 uppercase ">services
            <a href="#" class="flex justify-between md:inline-flex p-2 items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current pt-1" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                </a>
                  <ul class="child bg-opacity-90 transition duration-300 md:absolute top-full right-0 md:w-72 bg-white md:shadow-lg md:rounded-b ">
                    <li> 
                      <NuxtLink to="/services/consultancy">
                        <a href="" class="flex px-4 py-3 text-stone-950 hover:bg-blue-50 hover:text-blue-500">
                          Consultancy
                        </a>
                      </NuxtLink>
                    </li>
                    <li> 
                      <NuxtLink to="/services/technical_IT-support">
                        <a href="" class="flex px-4 py-3 text-stone-950 hover:bg-blue-50 hover:text-blue-500">
                          Technical & IT Support
                        </a>
                      </NuxtLink>
                    </li>
                    <li> 
                      <NuxtLink to="/services/software-development">
                        <a href="" class="flex px-4 py-3 text-stone-950 hover:bg-blue-50 hover:text-blue-500">
                          Software Development
                        </a>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/services/graphic-design">
                        <a href="" class="flex px-4 py-3 text-stone-950 hover:bg-blue-50 hover:text-blue-500">
                          Graphic Design
                        </a>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/services/web-design_development">
                        <a href="" class="flex px-4 py-3 text-stone-950 hover:bg-blue-50 hover:text-blue-500">
                          Web Design & Development
                        </a>
                      </NuxtLink>
                    </li>
                </ul>
          </li>
          <li>
            <NuxtLink
              to="/how-to"
              class="font-medium tracking-wide text-stone-950 hover:text-blue-500 uppercase nav-link"
            >
              How To
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/portfolio"
              class="font-medium tracking-wide text-stone-950 hover:text-blue-500 uppercase nav-link"
              >Portfolio
            </NuxtLink>
          </li>
          <div class="flex items-center space-x-4">
            <NuxtLink to="/contact">
              <a href="tel:+254711974716"
              class="px-5 py-2.5 relative rounded group font-medium text-white uppercase inline-block">
              <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-blue-600 to-teal-500"></span>
              <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-blue-400 to-teal-400"></span>
              <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-blue-600 to-teal-500"></span>
              <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-blue-600 from-teal-500"></span>
              <span class="relative">Get support</span>
              </a>
            </NuxtLink>
          </div>
        </ul>
        <div class="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-blue-70 focus:bg-blue-70"
            @click="isMenuOpen = true"
          >
            <svg class="w-5 text-stone-950" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              ></path>
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              ></path>
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              ></path>
            </svg>
          </button>
          <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">
            <div class="p-5 bg-white border rounded shadow-sm">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <NuxtLink
                  to="/" class="inline-flex items-center">
                    <span class="logo text-xl font-bold tracking-wide text-stone-950">
                      Tech
                    </span>
                    <span class="bg-stone-950 text-white rounded-r-lg logo text-xl font-bold tracking-wide hover:bg-blue-700">
                    Bytes
                    </span>
                    <br/>
                  </NuxtLink>
                </div>
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    @click="isMenuOpen = false"
                  >
                    <svg class="w-5 text-stone-950" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul class="space-y-4">
                  <li>
                    <NuxtLink
                      to="/home"
                      class="font-medium tracking-wide text-stone-950 hover:text-blue-500 uppercase nav-link"
                    >
                      Home
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/about"
                      class="font-medium tracking-wide text-stone-950 hover:text-blue-500 uppercase nav-link"
                      >About Us
                    </NuxtLink>
                  </li>
                           
                 <!--  <li>
                    <NuxtLink
                      to="/blog"
                      class="font-medium tracking-wide text-gray-500 hover:text-blue-500 uppercase nav-link"
                      >Blog
                    </NuxtLink>
                  </li> -->
                  <li class="relative parent font-medium tracking-wide text-stone-950 hover:text-blue-500 uppercase ">services
                    <a href="#" class="flex justify-between md:inline-flex p-2 items-center space-x-2">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current pt-1" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                        </a>
                          <ul class="child transition duration-300 md:absolute top-full right-0 md:w-52 bg-white md:shadow-lg md:rounded-b ">
                            <li> 
                              <NuxtLink to="/services/consultancy">
                                <a href="" class="flex px-4 py-3 text-stone-950 hover:bg-blue-50 hover:text-blue-500">
                                  Consultancy
                                </a>
                              </NuxtLink>
                            </li>
                            <li> 
                              <NuxtLink to="/services/technical_IT-support">
                                <a href="" class="flex px-4 py-3 text-stone-950 hover:bg-blue-50 hover:text-blue-500">
                                  Technical & IT Support
                                </a>
                              </NuxtLink>
                            </li>
                            <li> 
                              <NuxtLink to="/services/software-development">
                                <a href="" class="flex px-4 py-3 text-stone-950 hover:bg-blue-50 hover:text-blue-500">
                                  Software Development
                                </a>
                              </NuxtLink>
                            </li>
                            <li>
                              <NuxtLink to="/services/graphic-design">
                                <a href="" class="flex px-4 py-3 text-stone-950 hover:bg-blue-50 hover:text-blue-500">
                                  Graphic Design
                                </a>
                              </NuxtLink>
                            </li>
                            <li>
                              <NuxtLink to="/services/web-design_development">
                                <a href="" class="flex px-4 py-3 text-stone-950 hover:bg-blue-50 hover:text-blue-500">
                                  Web Design & Development
                                </a>
                              </NuxtLink>
                            </li>
                        </ul>
                  </li>
                  <li>
                    <NuxtLink
                      to="/how-to"
                      class="font-medium tracking-wide text-stone-950 hover:text-blue-500 uppercase nav-link"
                      >How To
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/portfolio"
                      class="font-medium tracking-wide text-stone-950 hover:text-blue-500 uppercase nav-link"
                      >Portfolio
                    </NuxtLink>
                  </li>
                  <li>
                    <div class="flex items-center space-x-4">
                  <!--     <a
                        href="tel:+254711974716"
                        class="inline-flex items-center mt-7 uppercase font-bold bg-blue-500 hover:bg-white hover:text-blue-500 justify-center h-12 px-6 mr-6 tracking-wide text-white rounded shadow-md focus:shadow-outline focus:outline-solid"
                      >
                        Get support
                      </a> -->
                      <NuxtLink to="/contact">
                      <a href="tel:+254711974716"
                      class="px-5 py-2.5 relative rounded group font-medium text-white uppercase inline-block">
                      <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-blue-600 to-teal-500"></span>
                      <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-blue-400 to-teal-400"></span>
                      <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-blue-600 to-teal-500"></span>
                      <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-blue-600 from-teal-500"></span>
                      <span class="relative">Get support</span>
                      </a>
                      </NuxtLink>
                  
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
};

// const route = useRoute();

// const navigation = [
//   {name: 'Home', href: '/', current: route.name =='index'},
//   {name: 'Blog', href: '/blog', current: route.name.includes ('blog')},
//   {name: 'our-story', href: '/our-story', current: route.name =='our-story'},
//   {name: 'pc-world', href: '/pc-world', current: route.name =='pc-world'},
//   {name: 'how-to', href: '/how-to', current: route.name =='how-to'},
//   {name: 'portfolio', href: '/portfolio', current: route.name =='portfolio'},



// ]

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
.logo {
  font-family: "Press Start 2P", cursive;
}

.backdrop-filter {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.blur-backdrop-filter {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.nav-link {
  background-image: linear-gradient(to right, #78b7f2, #012392 50%, #0c0a09 50%);
  background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  padding: 5px 0;
  position: relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;
}

.nav-link:before {
  content: "";
  background: #4e74f2;
  display: block;
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 3px;
  transition: all 0.3s ease-in-out;
}

.nav-link:hover {
  background-position: 0;
}

.nav-link:hover::before {
  width: 100%;
}
@media only screen and (min-width: 768px) {
  .parent:hover .child {
    opacity: 1;
    height: auto;
    overflow: none;
    transform: translateY(0);
  }

  .child {
    position: absolute;
    z-index: 2;
    opacity: 0;
    height: 0;
    overflow: hidden;
    transform: translateY(-10%);
  }
}
</style>
<template>
    <div class="max-w-screen-xl sm:px-6 sm:py-6 lg:px-8 mx-auto">

    <main class="mt-10">
      <div class="block md:flex md:space-x-2 px-2 lg:p-0">
        <a 
          class="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block" 
          style="height: 24em;"
          href="#"
        >
          <div class="absolute left-0 bottom-0 w-full h-full z-10"
            style="background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.7));"></div>
          <img src="https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="absolute left-0 top-0 w-full h-full rounded z-0 object-cover" />
          <div class="p-4 absolute bottom-0 left-0 z-10">
            <span class="px-4 py-1 bg-blue-400 text-stone-200 inline-flex items-center justify-center mb-2">Technology</span>
            <h2 class="text-4xl font-semibold text-stone-100 leading-tight">
              Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales, massa et auctor.
            </h2>
            <div class="flex mt-3">
              <img src="https://randomuser.me/api/portraits/men/97.jpg"
                class="h-10 w-10 rounded-full mr-2 object-cover" />
              <div>
                <p class="font-semibold text-stone-200 text-sm"> Mike Sullivan </p>
                <p class="font-semibold text-stone-400 text-xs"> 14 Aug </p>
              </div>
            </div>
          </div>
        </a>

       
        <div class="w-full md:w-1/3 relative rounded" 
          style="height: 24em;"
          href=""
        >
          <div class="absolute left-0 top-0 w-full h-full z-10"
            style="background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.7));"></div>
          <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="absolute left-0 top-0 w-full h-full rounded z-0 object-cover" />
          <div class="p-4 absolute bottom-0 left-0">
            <span class="px-4 py-1 bg-blue-400 text-white inline-flex items-center justify-center mb-2">Development</span>
            <h2 class="text-3xl font-semibold text-white leading-tight">Lorem ipsum dolor sit amet, consectetur
              adipisicing elit.</h2>
          </div>
        </div>
</div>
      <div class="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
        <!-- post cards -->
        <div class="w-full lg:w-2/3">

          <a class="block rounded w-full lg:flex mb-10"
            href="#"
          >
            <div 
              class="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
              style="background-image: url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')" 
              title="deit is very important"
            >
            </div>
            <div class="bg-white rounded px-4 flex flex-col justify-between leading-normal">
              <div>
                <div class="mt-3 md:mt-0 text-stone-700 font-bold text-2xl mb-2">
                  Aliquam venenatis nisl id purus rhoncus, in efficitur sem hendrerit.
                </div>
                <p class="text-stone-700 text-base">
                  Duis euismod est quis lacus elementum, eu laoreet dolor consectetur. 
                  Pellentesque sed neque vel tellus lacinia elementum. Proin consequat ullamcorper eleifend.
                </p>
              </div>
              <div class="flex mt-3">
                <img src="https://randomuser.me/api/portraits/men/86.jpg"
                  class="h-10 w-10 rounded-full mr-2 object-cover" />
                <div>
                  <p class="font-semibold text-stone-700 text-sm capitalize"> eduard franz </p>
                  <p class="text-stone-600 text-xs"> 14 Aug </p>
                </div>
              </div>
            </div>
          </a>

          <div class="rounded w-full lg:flex mb-10">
            <div class="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
              style="background-image: url('https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')" title="deit is very important">
            </div>
            <div class="bg-white rounded px-4 flex flex-col justify-between leading-normal">
              <div>
                <div class="mt-3 md:mt-0 text-stone-700 font-bold text-2xl mb-2">
                  Integer commodo, sapien ut vulputate viverra
                </div>
                <p class="text-stone-700 text-base">
                  Nam malesuada aliquet metus, ac commodo augue mollis sit amet. 
                  Nam bibendum risus sit amet metus semper consectetur.
                  Proin consequat ullamcorper eleifend.
                  Nam bibendum risus sit amet metus semper consectetur.
                </p>
              </div>
              <div class="flex mt-3">
                <img src="https://randomuser.me/api/portraits/women/54.jpg"
                  class="h-10 w-10 rounded-full mr-2 object-cover" />
                <div>
                  <p class="font-semibold text-stone-700 text-sm capitalize"> Serenity Hughes </p>
                  <p class="text-stone-600 text-xs"> 14 Aug </p>
                </div>
              </div>
            </div>
          </div>

          <div class="rounded w-full lg:flex mb-10">
            <div class="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
              style="background-image: url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')" title="deit is very important">
            </div>
            <div class="bg-white rounded px-4 flex flex-col justify-between leading-normal">
              <div>
                <div class="mt-3 md:mt-0 text-stone-700 font-bold text-2xl mb-2">
                  Suspendisse varius justo eu risus laoreet fermentum non aliquam dolor
                </div>
                <p class="text-stone-700 text-base">
                  Mauris porttitor, velit at tempus vulputate, odio turpis facilisis dui, 
                  vitae eleifend odio ipsum at odio. Phasellus luctus scelerisque felis eget suscipit. 
                </p>
              </div>
              <div class="flex mt-3">
                <img src="https://randomuser.me/api/portraits/men/86.jpg"
                  class="h-10 w-10 rounded-full mr-2 object-cover" />
                <div>
                  <p class="font-semibold text-stone-700 text-sm capitalize"> eduard franz </p>
                  <p class="text-stone-600 text-xs"> 14 Aug </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- right sidebar -->
        <div class="w-full lg:w-1/3 px-3">
          <!-- topics -->
          <div class="mb-4">
            <h5 class="font-bold text-lg uppercase text-stone-700 px-1 mb-2"> Popular Brands </h5>
            <ul>
              <li class="px-1 py-4 border-b border-t border-white hover:border-stone-200 transition duration-300">
                <a href="#" class="flex items-center text-stone-600 cursor-pointer">
                  <span class="inline-block h-4 w-4 bg-blue-300 mr-3"></span>
                  Apple
                  <span class="text-stone-500 ml-auto">23 articles</span>
                  <i class='text-stone-500 bx bx-right-arrow-alt ml-1'></i>
                </a>
              </li>
              <li class="px-1 py-4 border-b border-t border-white hover:border-stone-200 transition duration-300">
                <a href="#" class="flex items-center text-stone-600 cursor-pointer">
                  <span class="inline-block h-4 w-4 bg-indigo-300 mr-3"></span>
                  Dell
                  <span class="text-stone-500 ml-auto">18 articles</span>
                  <i class='text-stone-500 bx bx-right-arrow-alt ml-1'></i>
                </a>
              </li>
              <li class="px-1 py-4 border-b border-t border-white hover:border-stone-200 transition duration-300">
                <a href="#" class="flex items-center text-stone-600 cursor-pointer">
                  <span class="inline-block h-4 w-4 bg-yellow-300 mr-3"></span>
                  HP
                  <span class="text-stone-500 ml-auto">34 articles</span>
                  <i class='text-stone-500 bx bx-right-arrow-alt ml-1'></i>
                </a>
              </li>
              <li class="px-1 py-4 border-b border-t border-white hover:border-stone-200 transition duration-300">
                <a href="#" class="flex items-center text-stone-600 cursor-pointer">
                  <span class="inline-block h-4 w-4 bg-blue-300 mr-3"></span>
                  Lenovo
                  <span class="text-stone-500 ml-auto">9 articles</span>
                  <i class='text-stone-500 bx bx-right-arrow-alt ml-1'></i>
                </a>
              </li>
            </ul>
          </div>

          <!-- divider -->
          <div class="border border-dotted"></div>

          <!-- subscribe -->
          <div class="p-1 mt-4 mb-4">
            <h5 class="font-bold text-lg uppercase text-stone-700 mb-2"> Subscribe </h5>
            <p class="text-stone-600">
              Subscribe to our newsletter. We deliver the best health related articles to your inbox
            </p>
            <input placeholder="your email address"
              class="text-stone-700 bg-gray-100 rounded-t hover:outline-none p-2 w-full mt-4 border" />
            <button class="px-4 py-2 bg-indigo-600 text-stone-200 rounded-b w-full capitalize tracking-wide">
              Subscribe
            </button>
          </div>

          <!-- divider -->
          <div class="border border-dotted"></div>

        </div>

      </div>
    </main>
    <!-- main ends here -->
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>