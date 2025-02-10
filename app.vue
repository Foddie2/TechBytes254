<template>
  <div class=" bg-white">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <a href="https://api.whatsapp.com/send?phone=711974716&text=Hello%21%20TechBytes%20." class="float" target="_blank">
    <i class="fa fa-whatsapp my-float"></i>
    </a>

    </div>



</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Techbytes254',
  ogTitle: 'Techbytes254',
  description: 'This is Techbytes254, let me tell you all about it.',
  ogDescription: 'This is Techbytes254, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>


<style lang="scss" scoped>
.float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:#25d366;
	color:#FFF;
	border-radius:50px;
	text-align:center;
  font-size:30px;
	box-shadow: 2px 2px 3px #999;
  z-index:100;
}

.my-float{
	margin-top:16px;
}

</style>