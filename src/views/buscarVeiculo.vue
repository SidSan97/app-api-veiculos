<template>
  <ion-page>
    <ion-content>
      <h3 align="center">Informe dados do veículo que você procura</h3>

      <ion-list>
        <ion-item>
          <ion-select label="Escolha parâmetro da busca" label-placement="floating" v-model="parametro">
            <ion-select-option value="modelo">Modelo</ion-select-option>
            <ion-select-option value="cor">Cor</ion-select-option>
            <ion-select-option value="ano">Ano</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-input label-placement="floating" v-model="valor">
            <div slot="label">Informe a cor, placa, ano ou modelo do carro <ion-text color="danger">*</ion-text></div>
          </ion-input>
        </ion-item>
      </ion-list>

      <ion-button expand="full" @click="submitForm">Enviar</ion-button>

      <ion-card v-if="submitted">
        <ion-card-header v-for="carro in apiData" :key="carro.id" class="card">
          <ion-card-title>{{carro.modelo}}</ion-card-title>
          <ion-card-subtitle>Cor: {{carro.cor}}</ion-card-subtitle>
          <ion-card-subtitle>Ano: {{carro.ano}}</ion-card-subtitle>
          <ion-card-subtitle><strong>Placa: {{carro.placa}}</strong></ion-card-subtitle>
        </ion-card-header>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import axios from 'axios';
  import { IonPage, IonContent, IonList, IonItem, IonSelect, IonSelectOption, IonInput, IonText, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {IonPage, IonContent, IonList, IonItem, IonSelect, IonSelectOption, IonInput, IonText, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle },

    data() {
      return {
        parametro: '',
        valor: '',
        apiData: [],
        submitted: false,
      };
    },
    methods: {
      async submitForm() {
        axios.get(`http://localhost/api-veiculos-laravel/public/api/veiculos/${this.parametro}/${this.valor}`)
              .then(response => {
                this.apiData = response.data,
                this.submitted = true
              })
              .catch(error => console.log(error));
      }
    },
  });
</script>

<style scoped>
  .card {
    border-bottom: 1px solid silver !important;
  }
</style>