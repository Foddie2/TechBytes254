 <template>


    <section
      class="relative bg-no-repeat">
      <div
        class="absolute inset-0 bg-blue/75 sm:bg-transparent sm:from-blue/95 sm:to-white/25 ltr:sm:bg-gradient-to-r bg-gradient-to-r from-blue-400 to-teal-400"
      ></div>

     
        <div class="p-10 sm:p-10 dark:text-white text-white flex items-center justify-center overflow-hidden">
            <div class="w-full max-w-6xl px-4 sm:px-6">
              <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                <!-- Left Section: Text Content -->
                <div class="flex flex-col justify-center text-start md:text-left z-10">
                  <h1 class="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase leading-tight tracking-tight">
                    Empowering Businesses through <span class="text-stone-900">Technology</span>
                  </h1>
                  <p class="mt-4 text-xl sm:text-lg md:text-xl font-medium dark:text-gray-400 text-gray-700 text-balance">
                    Where imagination meets innovation, We do everything with you in mind! We help you grow your business.
                  </p>
                  <div class="mt-10 sm:mt-8 flex flex-wrap gap-4">
                    <NuxtLink to="/about">
                      <a class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-white rounded-full hover:text-white group hover:bg-gray-50">
                      
                        <span class="absolute left-0 block w-full h-0 transition-all bg-blue-400 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease group-hover:bg-gradient-to-r from-[#7899f2] to-[#16b2f0]"></span>
                        <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span class="relative">Get Started</span>
                        </a >
                      </NuxtLink>
                
                  </div>
                </div>
          
                <!-- Right Section: Visual Block -->
                <div class="relative max-sm:hidden flex items-center sm:m-10">
                  <div
                    class="absolute -top-10 md:-top-20 -left-10 sm:w-32 sm:h-32 lg:w-64 lg:h-64 bg-cyan-500 rotate-12 rounded-lg border-cyan-700 border-b-4 border-r-8 max-sm:hidden">
                  </div>
                  <div class="relative z-10 bg-gray-800 dark:bg-gray-800 p-4 sm:p-6 -right-1/2 -translate-x-1/2 grow text-center shadow-2xl -rotate-2 rounded-xl text-nowrap border-slate-950 border-b-4 border-r-8">
                    <h2 class="text-2xl sm:text-3xl font-bold uppercase text-gray-50 dark:text-gray-50">
                      Bold. Strong. Raw.
                    </h2>
                    <p class="mt-1 text-sm sm:text-base font-light text-gray-400 dark:text-gray-400">
                      Embrace minimalism with maximal impact.
                    </p>
                  </div>
                  <div class="absolute -bottom-10 md:-bottom-20 -right-16 sm:w-32 sm:h-32 lg:w-64 lg:h-64 bg-cyan-500 -rotate-12 rounded-lg border-cyan-700 border-r-4 border-b-8 max-sm:hidden"></div>
                </div>
              </div>
            </div>
          </div>
  
    
         </section>
    </template>
    
    <script>
      export default {
        
      }
    </script>
    
    <style lang="scss" scoped>
    
    </style>


