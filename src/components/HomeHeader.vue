<script setup lang="ts">

</script>
<template>
    <header id="header">
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div id="nav-container" class="container-fluid d-flex align-items-center">
                <a id="header-brand" class="navbar-brand d-flex align-items-center justify-content-center" href="#">
                    <span class="brand-name">DELT</span>
                    <img alt="Delta 10 Logo" class="logo" src="../assets/brand-triangle.png" width="40" height="35" />
                    <span class="brand-name">10</span>  
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navOptions" aria-controls="navOptions" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navOptions" class="collapse navbar-collapse justify-content-end">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#products-section">Produtos</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#contact">Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<style>
    header#header{
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 10;
        background-color: var(--color-background);
        box-shadow: 0px 8px 8px hsla(24,88%,50%, 0.5);
        margin-bottom: 2rem;
    }
    a#header-brand{
        background-color: var(--color-background);
    }
    .brand-name{
        font-size: 3rem;
        font-weight: 700;
        color: var(--color-text);
        font-family: 'Roboto';
        letter-spacing: .2rem;
    }
    div#nav-container{
        width: 100%;
    }
    @media(min-width: 992px){
        div#nav-container{
        width: 75%;
        margin: 0 auto;
    }
    }
</style>