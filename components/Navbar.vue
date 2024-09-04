<template>
<header
        class="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
        <div class="px-4">
            <div class="flex items-center justify-between">
                <div class="flex shrink-0">
                    <a aria-current="page" class="flex items-center" href="/">
                        <NuxtLink
                        to="/" class="inline-flex items-center">
                          <span class="logo text-md font-bold tracking-wide text-stone-950">
                            Tech
                          </span>
                          <span class="bg-stone-950 text-white rounded-r-lg logo text-md font-bold tracking-wide">
                          Bytes
                          </span>
                        </NuxtLink>
                    </a>
                </div>
                <div class="hidden md:flex md:items-center md:justify-center md:gap-5">
                    <a aria-current="page"
                        class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 uppercase"
                        href="#">How it works</a>
                    <a class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 uppercase"
                        href="#">Pricing</a>
                        <a class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 uppercase"
                        href="#">Pricing</a>
                        <a class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 uppercase"
                        href="#">Pricing</a>    
                </div>
                <div class="flex items-center justify-end gap-3">
                    <a class="inline-flex items-center justify-center rounded-xl bg-stone-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600"
                        href="/login">Login</a>
                </div>
            </div>
        </div>
    </header>
    </template>
    
    <script>
        export default {
            
        }
    </script>
    
    <style lang="scss" scoped>
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