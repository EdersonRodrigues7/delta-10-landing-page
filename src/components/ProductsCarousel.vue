<template>
<div
    id="carousel-wrapper"
    class="carousel slide my-4"
    data-bs-ride="carousel"
    data-interval="1200"
>
    <div class="carousel-inner mx-auto max-w-sm">
    <template v-for="item of items" :key="item.id">
        <div :class="getItemClasses(item.id, true)">
        <img :src="item.iconUrl" class="product-img" :alt="item.alt" />
        <h3 :class="item.color">{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        </div>
    </template>
    </div>
</div>
</template>

<script lang="ts">
import carouselItems from "../db/carousel-items.json";

interface CarouselItem{
    id: number;
    title: string;
    description: string;
    iconUrl: string;
    alt: string;
    color: string;
}

export default {
props: [],
data() {
    return {
    items: new Array<CarouselItem>(),
    slideClass: "",
    rideClass: "",
    intervalClass: "",
    innerClass: "",
    hasCarousel: false,
    };
},
methods: {
    getItemClasses(id: number, carousel: boolean) {
      if (!carousel) {
        return "py-4";
      } else if (carousel && id === 1) {
        return "carousel-item active";
      }
      return "carousel-item";
    },
},
beforeMount() {
    this.items = carouselItems.items;
    if (window.innerWidth < 1024) {
      this.slideClass = "carousel slide";
      this.rideClass = "carousel";
      this.intervalClass = "3000";
      this.innerClass = "carousel-inner mx-auto max-w-sm";
      this.hasCarousel = true;
    }
},
};
</script>
<style>
.grid-class{
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
}
.product-img{
    width: 50%;
    margin-bottom: 1.5rem;
}

@media(min-width: 1024px){
.product-img{
    width: 25%;
    margin-bottom: 1.5rem;
}
}
</style>