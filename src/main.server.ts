import { ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server'; 
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app'; 
import { bootstrapApplication } from '@angular/platform-browser';

// 1. Configuração do Servidor
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ],
};

// 2. Mescle a configuração (Mantenha este objeto de configuração intacto)
export const config: ApplicationConfig = {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    ...serverConfig.providers!,
  ],
};

// 3. Exportação Padrão (CORREÇÃO FINAL):
// Exporte uma função que retorna a promessa de bootstrap,
// usando o AppComponent e a 'config' mesclada.
export default function render() {
  return bootstrapApplication(AppComponent, config);
}