<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="CadastrarVeiculo" href="/tabs/CadastrarVeiculo">
          <ion-icon aria-hidden="true" :icon="addCircleOutline" />
          <ion-label>Cadastro</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="ListarVeiculos" href="/tabs/ListarVeiculos">
          <ion-icon aria-hidden="true" :icon="listCircleOutline" />
          <ion-label>Lista</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="buscarVeiculo" href="/tabs/buscarVeiculo">
          <ion-icon aria-hidden="true" :icon="searchCircleOutline" />
          <ion-label>Pesquisar Veículo</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { listCircleOutline, searchCircleOutline, addCircleOutline } from 'ionicons/icons';
</script>
