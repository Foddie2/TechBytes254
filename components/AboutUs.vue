<template>
    <div class="relative h-96 flex flex-col items-center justify-center text-center text-white ">
        <div class="video-docker absolute top-0 left-0 w-full h-96 overflow-hidden">
            <video class="min-w-full min-h-full absolute object-cover"
                src="~/assets/img/Typing.mp4" 
                type="video/mp4" autoplay muted loop></video>
            </div>
        <div class="video-content space-y-2 z-10">
            <h1 class="font-semibold text-6xl">full Hero Video</h1>
            <h3 class="font-light text-3xl">with TailwindCSS</h3>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.video-docker video {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.video-docker::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
}

</style>