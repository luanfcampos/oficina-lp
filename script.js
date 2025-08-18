// Função para abrir WhatsApp
function openWhatsApp() {
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços de preparação automotiva.');
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
}

// Função para rolar suavemente para uma seção
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Função para lidar com o envio do formulário
function handleSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
        nome: formData.get('nome'),
        email: formData.get('email'),
        telefone: formData.get('telefone'),
        mensagem: formData.get('mensagem')
    };
    
    // Aqui você pode implementar a lógica de envio do formulário
    console.log('Formulário enviado:', data);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    
    // Limpar o formulário
    event.target.reset();
}

// Animações ao rolar a página
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.service-card, .gallery-item, .testimonial-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Inicializar animações
function initAnimations() {
    const elements = document.querySelectorAll('.service-card, .gallery-item, .testimonial-card');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
    handleScrollAnimations();
});

window.addEventListener('scroll', handleScrollAnimations);

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efeito parallax simples para o hero
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Adicionar classe ativa ao rolar pelas seções (para futuro menu de navegação)
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.pageYOffset + 200;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            // Aqui você pode adicionar lógica para destacar itens de menu
            console.log('Seção ativa:', sectionId);
        }
    });
});

