/**
 * Mande Bem - Layout Centralizado
 * Este arquivo contém o HTML do cabeçalho e rodapé, além da lógica comum
 * para todas as páginas do site.
 */

const layout = {
  header: (activePage) => {
    const links = [
      { id: "home", label: "Home", href: "index.html" },
      { id: "blog", label: "Blog", href: "blog.html" },
      { id: "dicas", label: "Dicas", href: "dicas.html" },
      { id: "sobre", label: "Sobre", href: "sobre.html" },
    ];

    const navLinks = links
      .map(
        (link) => `
            <a href="${link.href}" class="text-sm font-bold uppercase tracking-widest ${activePage === link.id ? "text-orange-600" : "text-zinc-600 dark:text-zinc-400 hover:text-orange-600"} transition-colors">${link.label}</a>
        `,
      )
      .join("");

    const mobileLinks = links
      .map(
        (link) => `
            <a href="${link.href}" class="block text-sm font-bold uppercase tracking-widest ${activePage === link.id ? "text-orange-600" : "text-zinc-600 dark:text-zinc-400"}">${link.label}</a>
        `,
      )
      .join("");

    return `
            <nav class="fixed top-0 inset-x-0 z-[60] bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
                <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <a href="index.html" class="flex items-center gap-2">
                        <img src="https://mandebem.com/img/mandebem.com.png" alt="Logo" class="h-8 w-8 rounded-full">
                        <span class="font-black text-xl tracking-tighter text-zinc-900 dark:text-white uppercase">Mande <span class="text-orange-600">Bem</span></span>
                    </a>
                    
                    <div class="hidden md:flex items-center gap-8">
                        ${navLinks}
                    </div>

                    <div class="flex items-center gap-4">
                        <button id="theme-toggle" class="p-2 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full text-zinc-600 dark:text-orange-600 hover:scale-110 transition-all">
                            <i data-lucide="sun" id="theme-toggle-light-icon" class="w-5 h-5 hidden"></i>
                            <i data-lucide="moon" id="theme-toggle-dark-icon" class="w-5 h-5 hidden"></i>
                        </button>
                        <button id="mobile-menu-button" class="md:hidden p-2 text-zinc-600 dark:text-zinc-400">
                            <i data-lucide="menu" class="w-6 h-6"></i>
                        </button>
                    </div>
                </div>
                
                <!-- Mobile Menu -->
                <div id="mobile-menu" class="hidden md:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 px-6 py-4 space-y-4">
                    ${mobileLinks}
                </div>
        `;
  },
  footer: (activePage) => `
        <footer class="w-full max-w-7xl mx-auto px-6 py-6 border-t border-zinc-200 dark:border-zinc-900 mt-4 bg-white dark:bg-zinc-800 rounded-t-lg shadow-sm">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                <!-- Coluna 1: Contato (Esquerda) -->
                <div class="space-y-3">
                    <h3 class="text-sm font-bold tracking-widest uppercase text-orange-600">
                        Contato
                    </h3>
                    <div class="flex flex-col gap-3 text-sm font-semibold tracking-wide text-zinc-500">
                        <a href="mailto:contato@mandebem.com" class="hover:text-orange-600 transition-colors flex items-center justify-center md:justify-start gap-2">
                            <i data-lucide="mail" class="w-4 h-4"></i> contato@mandebem.com
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5511993788486" target="_blank" class="hover:text-orange-600 transition-colors flex items-center justify-center md:justify-start gap-2">
                            <i data-lucide="message-circle" class="w-4 h-4 text-green-500"></i> WhatsApp: (11) 99378-8486
                        </a>
                    </div>
                </div>

                <!-- Coluna 2: Links Úteis (Centro) -->
                <div class="space-y-3 md:text-center">
                    <h3 class="text-sm font-bold tracking-widest uppercase text-orange-600">
                        Links Úteis
                    </h3>
                    <div class="flex flex-col gap-1 text-sm font-semibold tracking-wide text-zinc-500 space-y-1">
                        <a href="index.html" class="hover:text-orange-600 transition-colors ${activePage === "home" ? "text-orange-600" : ""}">Início</a>
                        <a href="index.html#apps" class="hover:text-orange-600 transition-colors">Ferramentas</a>
                        <a href="blog.html" class="hover:text-orange-600 transition-colors ${activePage === "blog" ? "text-orange-600" : ""}">Blog</a>
                        <a href="dicas.html" class="hover:text-orange-600 transition-colors ${activePage === "dicas" ? "text-orange-600" : ""}">Dicas</a>
                        <a href="sobre.html" class="hover:text-orange-600 transition-colors ${activePage === "sobre" ? "text-orange-600" : ""}">Sobre</a>
                    </div>
                </div>

                <!-- Coluna 3: Logo/Sobre (Direita) -->
                <div class="space-y-3 md:text-right flex flex-col items-center md:items-end">
                    <img src="https://mandebem.com/img/mandebem.com.png" alt="Logo Mande Bem" class="h-16 w-auto mb-4 rounded-full">
                    <h3 class="text-lg font-black tracking-tight text-orange-600 uppercase">
                        Mande Bem em qualquer ocasião.
                    </h3>
                    <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xs">
                        Sua central de ferramentas inteligentes para economizar tempo, dinheiro e recursos. 
                        Transforme seu planejamento em consumo consciente hoje mesmo.
                    </p>
                </div>
            </div>

            <!-- Copyright -->
            <div class="border-t border-zinc-200 dark:border-zinc-900 text-center mt-12 pt-8">
                <div class="text-xs text-zinc-400 dark:text-zinc-500 font-medium tracking-wide">
                    Seus dados estão seguros conosco. Para saber como tratamos suas informações e o uso de cookies, acesse nossa <a href="politicadeprivacidade.html" class="hover:text-orange-600 transition-colors">Política de Privacidade</a> e nossos <a href="termosdeuso.html" class="hover:text-orange-600 transition-colors">Termos de Uso</a>.<br>
                    <span class="block mt-1 sm:inline sm:mt-0">Desenvolvido para facilitar o seu cotidiano.</span>
                </div>
            </div>
        </footer>
    `,
  cookieBanner: () => `
        <div id="cookie-banner" class="fixed bottom-0 inset-x-0 z-[100] p-4 md:p-6 translate-y-full transition-transform duration-500">
            <div class="max-w-4xl mx-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl p-6 md:p-8">
                <div class="flex flex-col md:flex-row items-center gap-8">
                    <div class="flex-1 space-y-2 text-center md:text-left">
                        <h3 class="text-xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">Valorizamos a sua privacidade</h3>
                        <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                            Nós utilizamos cookies para personalizar anúncios, fornecer recursos de redes sociais e analisar nosso tráfego. Também compartilhamos informações sobre o uso do site com nossos parceiros de publicidade (Google AdSense) e análise. Ao clicar em 'Aceitar todos', você concorda com o uso de cookies conforme nossa <a href="politicadeprivacidade.html" class="text-orange-600 hover:underline">Política de Privacidade</a> e <a href="termosdeuso.html" class="text-orange-600 hover:underline">Termos de Uso</a>.
                        </p>
                    </div>
                    <div class="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
                        <button id="cookies-config" class="text-sm font-bold text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 uppercase tracking-widest h-12">Configurações</button>
                        <button id="cookies-refuse" class="w-full sm:w-auto px-8 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 text-sm font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">Recusar</button>
                        <button id="cookies-accept" class="w-full sm:w-auto px-8 h-12 rounded-full bg-orange-600 text-white text-sm font-bold uppercase tracking-widest hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/20">Aceitar todos</button>
                    </div>
                </div>
            </div>
        </div>
    `,
};

function renderLayout(activePage = "") {
  // Injetar Header e Footer
  const headerPlaceholder = document.getElementById("header-placeholder");
  const footerPlaceholder = document.getElementById("footer-placeholder");

  if (headerPlaceholder)
    headerPlaceholder.innerHTML = layout.header(activePage);
  if (footerPlaceholder)
    footerPlaceholder.innerHTML = layout.footer(activePage);

  // Injetar Banner de Cookies se necessário
  if (!localStorage.getItem("cookies-accepted")) {
    const div = document.createElement("div");
    div.innerHTML = layout.cookieBanner();
    document.body.appendChild(div);

    setTimeout(() => {
      const banner = document.getElementById("cookie-banner");
      if (banner) banner.classList.remove("translate-y-full");
    }, 1000);

    setupCookies();
  }

  // Inicializar ícones Lucide
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // Configurar Menu Mobile
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.onclick = () => {
      mobileMenu.classList.toggle("hidden");
    };
  }

  // Configurar Lógica de Tema
  setupTheme();
}

function setupCookies() {
  const acceptBtn = document.getElementById("cookies-accept");
  const refuseBtn = document.getElementById("cookies-refuse");
  const configBtn = document.getElementById("cookies-config");
  const banner = document.getElementById("cookie-banner");

  if (!banner) return;

  const hideBanner = () => {
    banner.classList.add("translate-y-full");
    setTimeout(() => banner.remove(), 500);
  };

  if (acceptBtn) {
    acceptBtn.onclick = () => {
      localStorage.setItem("cookies-accepted", "true");
      hideBanner();
    };
  }

  if (refuseBtn) {
    refuseBtn.onclick = () => {
      localStorage.setItem("cookies-accepted", "false");
      hideBanner();
    };
  }

  if (configBtn) {
    configBtn.onclick = () => {
      window.location.href = "politicadeprivacidade.html";
    };
  }
}

function setupTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const lightIcon = document.getElementById("theme-toggle-light-icon");
  const darkIcon = document.getElementById("theme-toggle-dark-icon");
  const html = document.documentElement;

  if (!themeToggle || !lightIcon || !darkIcon) return;

  function updateIcons(theme) {
    if (theme === "dark") {
      lightIcon.classList.remove("hidden");
      darkIcon.classList.add("hidden");
    } else {
      lightIcon.classList.add("hidden");
      darkIcon.classList.remove("hidden");
    }
  }

  // Inicializar tema
  const savedTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

  html.classList.toggle("dark", savedTheme === "dark");
  updateIcons(savedTheme);

  themeToggle.onclick = () => {
    const isDark = html.classList.toggle("dark");
    const newTheme = isDark ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    updateIcons(newTheme);
  };
}
