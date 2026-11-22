# RONDONMT — aplicativo instalável (PWA)

Este pacote preserva a interface da versão HTML aprovada, mas inicia sem registros de exemplo. Os dados são locais ao navegador/dispositivo.

## Publicar no GitHub Pages
1. Crie um repositório no GitHub.
2. Envie **todos** os arquivos e a pasta `icons` para a raiz do repositório.
3. Em Settings → Pages → Build and deployment, escolha Deploy from a branch, `main`, `/ (root)` e salve.
4. Abra o endereço HTTPS publicado no Chrome Android, menu ⋮ → **Instalar aplicativo** (ou Adicionar à tela inicial).

O pacote é um **PWA**, não um APK Android. Para obter APK nativo é preciso compilar um wrapper Android e assinar o arquivo.

Os registros não são sincronizados entre aparelhos; use a função de backup/exportação.
