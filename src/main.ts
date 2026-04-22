// Load the lottie web-component only if it hasn't been registered yet.
if (!(window as any).customElements?.get('lottie-player')) {
  import('@lottiefiles/lottie-player').catch(() => {
    /* ignore load errors; fallback to script-included player */
  });
}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
