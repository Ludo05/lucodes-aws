// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bg_blue_light?: string;
      header?: string;
      body?: string;
      footer?: string;
      icons?: string;
      bg_dark?: string;
      accent?: string;
      bg_light?: string;
      text?: string;
      black: string;
      dark_blue: string;
      light_blue: string;
      h3_text_color: string;
      h3_purple_color: string;
    };
    mobile: string;
  }
}
