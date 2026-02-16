// Configurações
const PHONE = '5543998721117';
const WHATSAPP_URL = 'https://wa.me/';

// Elementos do DOM
const privacyModal = document.getElementById('privacyModal');
const acceptBtn = document.getElementById('acceptBtn');
const declineBtn = document.getElementById('declineBtn');
const formCadastro = document.getElementById('formCadastro');
const whatsappBtn = document.getElementById('whatsappBtn');

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    updateNavActiveLink();
});

// Setup de Event Listeners
function setupEventListeners() {
    acceptBtn.addEventListener('click', acceptPrivacy);
    declineBtn.addEventListener('click', declinePrivacy);
    formCadastro.addEventListener('submit', handleFormSubmit);
    
    // Navega para whatsapp quando clica no botão flutuante
    whatsappBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.open(`${WHATSAPP_URL}${PHONE}?text=Olá!%20Gostaria%20de%20fazer%20uma%20simulação%20de%20consórcio%20de%20veículos.`, '_blank');
    });

    // Atualizar link ativo da navegação ao scrollar
    window.addEventListener('scroll', updateNavActiveLink);
}

// Aceitar Privacidade
function acceptPrivacy() {
    privacyModal.classList.add('hidden');
    localStorage.setItem('privacyAccepted', 'true');
}

// Recusar Privacidade
function declinePrivacy() {
    alert('Você precisa aceitar a política de privacidade para continuar.');
    privacyModal.classList.remove('hidden');
}

// Formatar CPF
function formatarCPF(cpf) {
    return cpf.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

// Validar CPF
function validarCPF(cpf) {
    const cpfLimpo = cpf.replace(/\D/g, '');
    if (cpfLimpo.length !== 11) return false;
    
    // Verificação básica de CPF (algoritmo de validação)
    let soma = 0;
    let resto;
    
    if (cpfLimpo === '00000000000') return false;
    
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpfLimpo.substring(i - 1, i)) * (11 - i);
    }
    
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpfLimpo.substring(9, 10))) return false;
    
    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpfLimpo.substring(i - 1, i)) * (12 - i);
    }
    
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpfLimpo.substring(10, 11))) return false;
    
    return true;
}

// Formatador de Telefone
function formatarTelefone(telefone) {
    return telefone.replace(/\D/g, '').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
}

// Handle do Formulário
function handleFormSubmit(e) {
    e.preventDefault();

    // Verificar se privacidade foi aceita
    if (!document.getElementById('privacidade').checked) {
        alert('Por favor, aceite a política de privacidade para continuar.');
        return;
    }

    // Coletar dados
    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const veiculo = document.getElementById('veiculo').value;
    const valor = document.getElementById('valor').value;
    const meses = document.getElementById('meses').value;

    // Validações
    if (!nome || nome.length < 3) {
        alert('Por favor, digite um nome válido.');
        return;
    }

    if (!validarCPF(cpf)) {
        alert('CPF inválido. Por favor, verifique.');
        return;
    }

    if (!telefone || telefone.length < 10) {
        alert('Por favor, digite um telefone válido.');
        return;
    }

    if (!veiculo) {
        alert('Por favor, selecione um tipo de veículo.');
        return;
    }

    if (!valor || valor <= 0) {
        alert('Por favor, digite um valor válido.');
        return;
    }

    if (!meses) {
        alert('Por favor, selecione o número de parcelas.');
        return;
    }

    // Preparar mensagem para WhatsApp
    const cpfFormatado = formatarCPF(cpf);
    const telefoneFormatado = formatarTelefone(telefone);
    const valorFormatado = parseFloat(valor).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    const mensagem = `Olá! Gostaria de fazer uma simulação de consórcio.

*Dados do Cliente:*
Nome: ${nome}
CPF: ${cpfFormatado}
Telefone: ${telefoneFormatado}

*Detalhes da Simulação:*
Tipo de Veículo: ${veiculo.charAt(0).toUpperCase() + veiculo.slice(1)}
Valor Desejado: ${valorFormatado}
Número de Parcelas: ${meses} meses

Por favor, me envie mais informações sobre este consórcio.`;

    // Redirecionar para WhatsApp
    const whatsappURL = `${WHATSAPP_URL}${PHONE}?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappURL, '_blank');

    // Resetar formulário
    formCadastro.reset();
}

// Atualizar link ativo na navegação
function updateNavActiveLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// Mascarar inputs
document.addEventListener('DOMContentLoaded', function() {
    const cpfInput = document.getElementById('cpf');
    const telefoneInput = document.getElementById('telefone');

    if (cpfInput) {
        cpfInput.addEventListener('input', function() {
            this.value = this.value.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        });
    }

    if (telefoneInput) {
        telefoneInput.addEventListener('input', function() {
            this.value = this.value.replace(/\D/g, '').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        });
    }
});

