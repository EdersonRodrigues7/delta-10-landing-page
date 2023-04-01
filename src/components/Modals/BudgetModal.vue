<script lang="ts">
import { api } from '@/api';
import Swal from 'sweetalert2';
//Delta10 Informática <delta10@outlook.pt>
export default{
    data() {
        return {
            categories: ["Acessórios", "Automação", "Computadores", "Imagem", "Infraestrutura", "Print Solutions"],
            form: {
                destination: 'Ederson Rodrigues <ederson.rodrigues777@gmail.com>',
                name: '',
                email: '',
                product: '',
                observation: ''
            }
        }
    },
    methods: {
        isSelected(position: number) {
            if(position === 0){
                return true;
            }
            return false;
        },
        async submit(event: any) {
            console.log(event);
            await api.post('/request-budget', this.form)
                .then(res => {
                    this.resetForm();
                    Swal.fire(
                    'Certinho!',
                    'Orçamento solicitado com sucesso!',
                    'success'
                    );       
                })
                .catch(err => {
                    Swal.fire(
                    'Ops!',
                    'Requisição inválida! Por favor preencha todos os campos obrigatórios.',
                    'error'
                    );
                });
        },
        resetForm(){
            const closeModal = document.getElementById('close-modal');
            this.form.name = '';
            this.form.email = '';
            this.form.product = '';
            this.form.observation = '';
            closeModal?.click();
        }
    }
}
</script>
<template>
<div class="modal fade" id="budgetModal" tabindex="-1" aria-labelledby="budgetModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title fs-5" id="budgetModalLabel">Pedido de orçamento</h5>
                <button id="close-modal" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="budget-form" @submit.prevent="submit">
                    <input type="hidden" id="destination" name="destination" v-model="form.destination">
                    <div class="form-input-group">
                        <label for="name">Nome</label>
                        <input type="text" name="name" id="name" v-model="form.name">
                    </div>
                    <div class="form-input-group">
                        <label for="email">E-mail</label>
                        <input type="email" name="email" id="email" v-model="form.email">
                    </div>
                    <div class="form-input-group">
                        <label for="product">Tipo de Produto</label>
                        <select name="product" id="product" v-model="form.product">
                            <option 
                                v-for="(category, index) in categories" 
                                :key="index" 
                                :selected="isSelected(index)" 
                                :value="category"
                                >{{ category }}
                            </option>
                        </select>
                    </div>
                    <div class="form-input-group">
                        <label for="observation">Descreva seu pedido</label>
                        <textarea v-model="form.observation" name="observation" id="observation" cols="30" rows="4"></textarea>
                    </div>
                    <input type="submit" class="btn btn-primary" value="Enviar" @submit="submit"/>
                </form>
            </div>
        </div>
    </div>
</div>
</template>
<style>
.modal-content{
  background-color: var(--vt-c-black);
}
.btn-close{
    background-color: rgb(255, 115, 0);
    border-radius: 1rem;
}
#budget-form{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
}
.form-input-group{
    width: 80%;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: space-between;
}

.form-input-group select#product {
    width: 176.8px;
}
.observation-wrapper{
    display: grid;
    gap: 0.5rem;
}
</style>