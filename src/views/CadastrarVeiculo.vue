<template>
  <ion-list>
    <ion-item>
      <ion-input label-placement="floating" v-model="modelo">
        <div slot="label">Modelo <ion-text color="danger">*</ion-text></div>
      </ion-input>

      <ion-input label-placement="floating" v-model="cor">
        <div slot="label">Cor <ion-text color="danger">*</ion-text></div>
      </ion-input>

      <ion-input label-placement="floating" type="number" v-model="ano">
        <div slot="label">Ano <ion-text color="danger">*</ion-text></div>
      </ion-input>

      <ion-input label-placement="floating" v-model="placa">
        <div slot="label">Placa <ion-text color="danger">*</ion-text></div>
      </ion-input>
    </ion-item>

    <ion-button expand="full" @click="submitForm">Enviar</ion-button>

    <ion-item>
      <div v-if="subimitted" class="alert">
        <p>O formulário foi enviado com sucesso!</p>
      </div>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
  import axios from 'axios'
  import { IonInput, IonItem, IonList, IonText, IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonInput, IonItem, IonList, IonText, IonButton },

    data() {
      return {
        modelo: '',
        cor: '',
        ano: '',
        placa: '',
        subimitted: false,
      };
    },

    methods: {
      async submitForm() {
        const formulario = {
          modelo: this.modelo,
          cor: this.cor,
          ano: this.ano,
          placa: this.placa,
        };

        try {
          const response = await axios.post('http://localhost/api-veiculos-laravel/public/api/cadastrar-veiculos', formulario);

          this.subimitted = true;
          console.log('Resposta do servidor:', response.data);

          setTimeout(() => {
            this.subimitted = false;
          }, 5000);

          } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
          }
      },
    },
  });
</script>

<style scoped>
  .alert{
    padding: 5px;
    background-color: #2cf02c;
    border: 1px solid;
    border-radius: 10px;
    font-weight: 500;
    color: black;
  }
</style>