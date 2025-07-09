declare module '@vitejs/plugin-vue' {
    import { Plugin } from 'vite';
    const plugin: () => Plugin;
    export default plugin;
}
