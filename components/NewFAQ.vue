<template>
  <section class="dark:bg-gray-801 dark:text-stone-100">
		<div class="container flex flex-col justify-center py-9 md:p-8 mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
			<h1 class="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h1>
			<p class="mt-5 mb-8 dark:text-stone-400">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
			<div class="space-y-5">
  
      <nav class="accordion arrows">
      <!--   <header class="box">
          <label for="acc-close" class="box-title">Accordion menu</label>
        </header> -->
        <input type="radio" name="accordion" id="cb1" />
        <section class="box">
          <label class="box-title" for="cb1">Readme</label>
          <label class="box-close" for="acc-close"></label>
          <div class="box-content">Click on an item to open. Click on its header or the list header to close.</div>
        </section>
        <input type="radio" name="accordion" id="cb2" />
        <section class="box">
          <label class="box-title" for="cb2">Read me too</label>
          <label class="box-close" for="acc-close"></label>
          <div class="box-content">Add the class 'arrows' to nav.accordion to add dropdown arrows.</div>
        </section>
        <input type="radio" name="accordion" id="cb3" />
        <section class="box">
          <label class="box-title" for="cb3">Item 3</label>
          <label class="box-close" for="acc-close"></label>
          <div class="box-content">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque finibus tristique nisi, maximus ullamcorper ante finibus eget.</div>
        </section>
    
        <input type="radio" name="accordion" id="acc-close" />
      </nav>

    </div>
    </div>
  
</section> 
  
  </template>
  
  <script>
      export default {
          
      }
  </script>
  
  <style lang="scss" scoped>
  body {
    height: calc(100% - 20px);
    width: calc(100% - 20px);
    margin: 0;
    padding: 10px;
    display: flex;
    background: #f2f2f2;
    color: rgba(0,0,0,.87);
    font-family: 'Roboto', sans-serif;
  }
  .accordion {
    margin: auto;
    width: 900px;
  }
  .accordion input {
    display: none;
  }
  .box {
    position: relative;
    background: white;
      height: 64px;
      transition: all .15s ease-in-out;
  }
  .box::before {
      content: '';
      position: absolute;
      display: block;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      pointer-events: none;
      box-shadow: 0 -1px 0 #e5e5e5,0 0 2px rgba(0,0,0,.12),0 2px 4px rgba(0,0,0,.24);
  }
  header.box {
    background: #00BCD4;
    z-index: 100;
    cursor: initial;
    box-shadow: 0 -1px 0 #e5e5e5,0 0 2px -2px rgba(0,0,0,.12),0 2px 4px -4px rgba(0,0,0,.24);
  }
  header .box-title {
    margin: 0;
    font-weight: normal;
    font-size: 16pt;
    color: white;
    cursor: initial;
  }
  .box-title {
    width: calc(100% - 40px);
    height: 64px;
    line-height: 64px;
    padding: 0 20px;
    display: inline-block;
    cursor: pointer;
    -webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;
  }
  .box-content {
    width: calc(100% - 40px);
    padding: 30px 20px;
    font-size: 11pt;
    color: rgba(0,0,0,.54);
    display: none;
  }
  .box-close {
    position: absolute;
    height: 64px;
    width: 100%;
    top: 0;
    left: 0;
    cursor: pointer;
    display: none;
  }
  input:checked + .box {
    height: auto;
    margin: 16px 0;
      box-shadow: 0 0 6px rgba(0,0,0,.16),0 6px 12px rgba(0,0,0,.32);
  }
  input:checked + .box .box-title {
    border-bottom: 1px solid rgba(0,0,0,.18);
  }
  input:checked + .box .box-content,
  input:checked + .box .box-close {
    display: inline-block;
  }
  .arrows section .box-title {
    padding-left: 44px;
    width: calc(100% - 64px);
  }
  .arrows section .box-title:before {
    position: absolute;
    display: block;
    content: '\203a';
    font-size: 28pt;
    left: 20px;
    top: -2px;
    transition: transform .15s ease-in-out;
    color: rgba(14, 245, 60, 0.54);
  }
  input:checked + section.box .box-title:before {
    transform: rotate(90deg);
  }
  
  </style>