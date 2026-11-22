# RONDONMT — pacote PWA para GitHub Pages

Envie **todos os arquivos e a pasta `icons`** para a raiz do repositório (não envie apenas o ZIP).
Ative **Configurações → Pages → Deploy from a branch → main / (root)**.
Abra a URL publicada via **HTTPS** no Chrome e atualize a página.
No Chrome Android, use o menu de três pontos → **Adicionar à tela inicial → Instalar**.

Arquivos obrigatórios: `index.html`, `manifest.webmanifest`, `sw.js`,
`icons/icon-192.png`, `icons/icon-512.png`, `icons/icon-maskable-512.png`.

O painel, o histórico, o Dashboard, os relatórios e as configurações permanecem no HTML aprovado.
O armazenamento é local ao navegador/dispositivo, não sincronizado entre celulares.
Se o Chrome ainda mostrar 'Não é possível instalar', confira se todos os arquivos estão publicados,
se a URL está em HTTPS e se o navegador já atualizou a versão antiga.
Este pacote é um PWA instalável, **não** um APK Android.
