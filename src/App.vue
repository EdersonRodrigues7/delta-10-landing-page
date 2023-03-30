<script setup lang="ts">
import HomeHeader from './components/HomeHeader.vue';
import ProductsCarousel from './components/ProductsCarousel.vue';
</script>

<template>
  <HomeHeader />
  <main id="main-content" class="container">    
  <div id="introduction">
    <h1>Tecnologia que impulsiona seu negócio!</h1>
    <p>Encontre produtos de informática com muita qualidade e o preço mais atraente do mercado</p>
    <button class="get-budget" type="button" onclick="">Solicite um Orçamento</button>
  </div>
  <div id="animation-wrapper">
    <lottie-player 
      src="https://assets6.lottiefiles.com/packages/lf20_26ewjioz.json"  
      background="transparent"  
      speed="1"  
      style="width: 300px; height: 300px;"
      autoplay 
      loop  
      >
    </lottie-player>
  </div>
  <div id="products-section">
    <h1>Conheça nossos produtos</h1>
    <p>Trabalhamos com todas as categorias de produtos para informática, desde produtos centrais até peças de melhoramento</p>
    <products-carousel />
    <button class="get-budget" type="button" onclick="">Solicite um Orçamento</button>
  </div>
  <div id="contact">
    <h1 class="text-center mb-4">Entre em contato!</h1>
    <ul class="contact-list">
      <li><a><i class="fa-brands fa-whatsapp me-2"></i>WhatsApp</a></li>
      <li><a><i class="fa-solid fa-at me-2"></i> E-mail</a></li>
      <li><a><i class="fa-brands fa-instagram me-2"></i>Instagram</a></li>
    </ul>
  </div>
  </main>
</template>

<style scoped>
main#main-content{
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 2rem;
  font-family: 'Roboto';
  max-width: 1280px;
  margin: 0 auto;
}
div#introduction {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 100vw;
  gap: 1rem;
}
div#introduction p {
  font-size: 1.2rem;
  max-width: 325px;
}
div#animation-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
}
button.get-budget{
  padding: 1rem 2rem;
  background-color: hsla(24,88%,50%, 1);
  color: var(--color-text);
  font-weight: 500;
  border: none;
  border-radius: 1.4rem;
  box-shadow: inset;
}
div#products-section{
  text-align: center;
}
ul.contact-list{
  list-style: none;
}
</style>
