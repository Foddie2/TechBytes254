<template>
  <div class=" bg-gray-100">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
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
