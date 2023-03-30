<script setup lang="ts">
import HomeHeader from './components/HomeHeader.vue';
import ProductsCarousel from './components/ProductsCarousel.vue';
import ContactSection from './components/ContactSection.vue';
import ModalButton from './components/Buttons/ModalButton.vue';
import BudgetModal from './components/Modals/BudgetModal.vue';
</script>

<template>
  <HomeHeader />
  <main id="main-content" class="container">    
  <div id="introduction">
    <h1>Tecnologia que impulsiona seu negócio!</h1>
    <p>Encontre produtos de informática com muita qualidade e o preço mais atraente do mercado</p>
    <modal-button 
      style-classes="get-budget"
      modal-target="#budgetModal"
      msg="Solicite um Orçamento" 
    />
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
    <modal-button 
      style-classes="get-budget"
      modal-target="#budgetModal"
      msg="Solicite um Orçamento" 
    />
  </div>
  <contact-section />
  <budget-modal />
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
div#products-section{
  text-align: center;
}
</style>
