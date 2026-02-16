# 🏍️ Consórcio Rosane Machado - Veículos e Motos

Website profissional de consórcio de veículos para Rosane Machado.

## 📋 Sobre o Projeto

Site responsivo e moderno com:
- ✅ Design em tons neutros profissionais
- ✅ Modal de política de privacidade
- ✅ Formulário de simulação de consórcio completo
- ✅ Validação de CPF e formatação de dados
- ✅ Integração com WhatsApp para simulações
- ✅ Link para loja de motos no Instagram
- ✅ Sistema de navegação suave
- ✅ Ícones de motos, dinheiro, cartão de crédito e explicação

## 🎨 Características

### Seções do Site
1. **Hero Section** - Apresentação principal com CTA
2. **Benefícios** - Por que escolher nosso consórcio
3. **Como Funciona** - Passo a passo do processo
4. **Simulação** - Formulário para solicitar simulação
5. **Loja de Motos** - Link para Instagram | Gordin Motos Multimarcas
6. **Footer** - Informações e links rápidos

### Recursos JavaScript
- Validação de CPF (algoritmo de validação oficial)
- Formatação automática de CPF e telefone
- Modal de privacidade interativo
- Redirecionamento para WhatsApp com dados do formulário
- Navegação ativa ao rolar a página
- Responsividade mobile

## 📱 Contato
- **Nome:** Rosane Machado
- **Telefone:** (43) 99872-1117
- **Loja de Motos:** https://www.instagram.com/gordinmotosmultimarcas?igsh=cjBva2RyNmZxeXZh

## 🚀 Como Usar

### Abrir o Site
1. Navegue até a pasta do projeto
2. Duplo clique em `index.html`
3. O site abrirá no seu navegador padrão

### Recursos do Usuário
- Preencher formulário com dados pessoais
- Aceitar política de privacidade
- Submeter para receber simulação via WhatsApp
- Navegar pelas seções do site com menu superior

## 🛠️ Personalização

### Alterar Telefone do WhatsApp
Editar `script.js`, linha 2:
```javascript
const PHONE = '5543998721117'; // Alterar número aqui
```

### Alterar Link do Instagram
Procurar na seção HTML "Nossas Motos" pelo link do Instagram:
```html
https://www.instagram.com/gordinmotosmultimarcas?igsh=cjBva2RyNmZxeXZh
```

### Alterar Cores
Editar `styles.css` seção `:root` com as cores desejadas:
```css
:root {
    --primary-color: #6B5B4F; /* Cor principal */
    --secondary-color: #A89F8F;
    --light-color: #F5F3F0;
    /* ... outras cores ... */
}
```

## 📊 Estrutura dos Arquivos

```
Consorcio/
├── index.html      # Estrutura HTML do site
├── styles.css      # Estilos e responsividade
├── script.js       # Lógica JavaScript
└── README.md       # Este arquivo
```

## ✨ Destaques

- **Tons Neutros Profissionais:** Paleta de cores sofisticada e corporativa
- **Validação Completa:** CPF verificado por algoritmo oficial
- **Mobile First:** Totalmente responsivo em todos os dispositivos
- **WhatsApp Integration:** Envio direto de simulações via WhatsApp
- **Acessibilidade:** Ícones Font Awesome para melhor UX
- **Performance:** Carregamento rápido e otimizado

## 📝 Notas

- A política de privacidade aparece ao carregar a página
- O CPF é validado pelo algoritmo oficial brasileiro
- Telefone e CPF são formatados automaticamente
- Mensagens de erro claras e amigáveis
- Suporte completo a dispositivos mobile

---

**Desenvolvido com qualidade para Consórcio Rosane Machado** ✨

- Substitua o placeholder (ícone de spa) criando um logo em SVG ou PNG
- Altere a classe `.logo-placeholder` no CSS ou crie uma `<img>` tag

### 3. Personalizar Cores

Se quiser mudar as cores, edite as variáveis no início do `styles.css`:

```css
:root {
    --primary-pink: #E91E63;      /* Rosa principal */
    --light-pink: #F48FB1;        /* Rosa claro */
    --pale-pink: #FCE4EC;         /* Rosa muito claro */
    --white: #FFFFFF;             /* Branco */
    --dark-gray: #333333;         /* Cinza escuro */
    --light-gray: #F5F5F5;        /* Cinza claro */
}
```

## 📝 Estrutura de Arquivos

```
KM/
├── index.html        # Página HTML principal
├── styles.css        # Estilos CSS
├── script.js         # Funcionalidades JavaScript
├── README.md         # Este arquivo
└── IMPORTANTE.txt    # Arquivo de notas
```

## 🔧 Tecnologias Utilizadas

- **HTML5** - Estrutura
- **CSS3** - Estilos e animações
- **JavaScript (Vanilla)** - Interatividade
- **Leaflet.js** - Mapa interativo
- **Font Awesome** - Ícones
- **OpenStreetMap** - Camada de mapa

## 📞 Funcionalidades Principais

### Botão WhatsApp Flutuante
- Botão sempre visível no canto inferior direito
- Anima com pulse e aumenta ao passar o mouse
- Abre conversa no WhatsApp

### Formulário de Agendamento
- Coleta dados do cliente
- Valida campos obrigatórios
- Envia mensagem automática ao WhatsApp
- Mostra confirmação após envio

### Navegação
- Menu sticky (fixo ao scrollar)
- Links de navegação suave
- Indicador ativo de seção atual
- Responsivo em dispositivos móveis

### Seções
1. **Header** - Logo e navegação
2. **Hero** - Chamada principal
3. **Serviços** - Características dos atendimentos
4. **Localização** - Mapa e informações de contato
5. **Agendamento** - Formulário de agendamento
6. **Contato** - Links rápidos (WhatsApp, Telefone, Email)
7. **Footer** - Créditos

## 📱 Responsividade

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

Todos os elementos se adaptam automaticamente aos diferentes tamanhos de tela.

## 🎯 Dicas de Otimização

1. **Adicione uma logo real:**
   - Crie uma pasta `assets/` e adicione `logo.png`
   - Altere o placeholder por uma `<img>`

2. **Customize os serviços:**
   - Edite os 4 cards de serviços conforme seus atendimentos

3. **Adicione fotos:**
   - Crie um seção "Galeria" com suas melhores fotos

4. **Implemente backlog:**
   - Conecte o formulário a um backend para salvar agendamentos

5. **SEO:**
   - Adicione meta tags (description, keywords)
   - Configure Google Analytics

## 📧 Suporte

Para dúvidas sobre personalização, consulte a documentação das bibliotecas:
- Leaflet.js: https://leafletjs.com/
- Font Awesome: https://fontawesome.com/
- MDN Web Docs: https://developer.mozilla.org/

---

**Desenvolvido com ❤️ para seu bem-estar**
