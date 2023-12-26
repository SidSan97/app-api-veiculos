<template>
  <ion-page>
    <ion-content>
      <h3 align="center">Listagem de veículos cadastrados</h3>
      
      <ion-card v-if="dadosRecebidos">
        <ion-card-header v-for="carro in dadosRecebidos" :key="carro.id" class="card">
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
  import axios from 'axios'
  import { IonPage, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonRefresher} from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonPage, IonContent, IonRefresher},
    data() {
      return {
        dadosRecebidos: null,
      };
    },
    mounted() {
      this.realizarRequisicao();
    },
    methods: {
      async realizarRequisicao() {
        try {
          const response = await axios.get('http://localhost/api-veiculos-laravel/public/api/veiculos');
          
          this.dadosRecebidos = response.data;
        } catch (error) {
          console.error('Erro na requisição GET:', error);
        }
      },
    },
  });
</script>

<style scoped>
  .card {
    border-bottom: 1px solid silver !important;
  }
</style>
