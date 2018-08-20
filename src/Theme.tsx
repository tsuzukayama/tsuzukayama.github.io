import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

const {
    default: styled,
    css,
    injectGlobal,
    keyframes,
    ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<any> as ThemedStyledComponentsModule<IThemeInterface>;

export interface IThemeInterface {
    color: {
        black: string;
        dark: string;
        lightGrey: string;
        white: string;
    };
    fontSize: string;
    fontFamily: string;
}


export const theme: IThemeInterface = {
    color: {
        black: '#000000',
        dark: '#292929',
        lightGrey: '#BFBFBF',
        white: '#ffffff',
    },
    fontFamily: 'Inconsolata',
    fontSize: '16px',
};

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider };

