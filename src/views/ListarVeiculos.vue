<template>
  <ion-page>
    <ion-content>
      <h3 align="center">Listagem de veículos cadastrados</h3>
      
      <ion-refresher slot="fixed" @ionRefresh="handleRefresh($event)">
        <ion-refresher-content>
        </ion-refresher-content>
      </ion-refresher>
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
  import { IonPage, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonRefresher, IonRefresherContent} from '@ionic/vue';
  import { defineComponent, ref, onMounted } from 'vue';

  export default defineComponent({
    components: { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonPage, IonContent, IonRefresher, IonRefresherContent},

    setup() {
      const dadosRecebidos = ref(null);

      const realizarRequisicao = async () => {
        try {
          const response = await axios.get('http://localhost/api-veiculos-laravel/public/api/veiculos');
          dadosRecebidos.value = response.data;
        } catch (error) {
          console.error('Erro na requisição GET:', error);
        }
      };

      onMounted(() => {
        realizarRequisicao();
      });

      const handleRefresh = async (event: CustomEvent) => {
        await realizarRequisicao();
        event.detail.complete();
      };

      return { dadosRecebidos, handleRefresh };
    },
  });
</script>

<style scoped>
  .card {
    border-bottom: 1px solid silver !important;
  }
</style>
