<script setup lang="ts">

</script>
<template>
    <div id="contact">
        <h1 class="text-center mb-4">Entre em contato!</h1>
        <ul class="contact-list">
            <li><a href="https://api.whatsapp.com/send?phone=5519982439477" target="_blank"><i class="fa-brands fa-whatsapp me-2"></i>WhatsApp</a></li>
            <li><a href="mailto:exemplo@delta10.com.br" target="_blank"><i class="fa-solid fa-at me-2"></i> E-mail</a></li>
            <li><a href="https://instagram.com/delta_dez" target="_blank"><i class="fa-brands fa-instagram me-2"></i>Instagram</a></li>
        </ul>
    </div>
</template>
<style>
div#contact{
  margin: 2rem 0;
}
ul.contact-list{
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
ul.contact-list a {
  display: inline-flex;
  align-items: center;
  font-size: large;
  width: 10rem;
  color: var(--color-text);
  background-color: hsla(24,88%,50%, 1);
  padding: 0.8rem 2rem;
  border-radius: 0.5rem;
}
</style>