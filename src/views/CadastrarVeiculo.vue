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
  </ion-list>

  <ion-button expand="full" @click="submitForm">Enviar</ion-button>
</template>

<script lang="ts">
  import axios from 'axios'
  import { IonInput, IonItem, IonList, IonText } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonInput, IonItem, IonList, IonText },

    data() {
      return {
        modelo: '',
        cor: '',
        ano: '',
        placa: '',
      };
    },

    methods: {
      async submitForm() {
        const formulario = {
          modelo: this.modelo,
          cor: this.cor,
          ano: this.ano,
          placa: this.placa
        };

        try {

          const response = await axios.post('http://localhost/api-veiculos-laravel/public/api/cadastrar-veiculos', formulario);

          console.log('Resposta do servidor:', response.data);

          } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
          }
    },
  },
  });
</script>