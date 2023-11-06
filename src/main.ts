import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';


enableProdMode();

// Use a setTimeout to delay the bootstrap process
setTimeout(() => {
  try {
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
  } catch (error) {
    console.error('Error during bootstrap:', error);
  }
}, 1000);
