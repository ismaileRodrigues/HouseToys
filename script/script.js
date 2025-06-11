 // Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

menuToggle.addEventListener('click', () => {
  mobileNav.classList.add('active');
  overlay.classList.add('active');
  menuToggle.style.display = 'none'; // Hide hamburger icon
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  mobileNav.classList.remove('active');
  overlay.classList.remove('active');
  menuToggle.style.display = 'block'; // Show hamburger icon
  document.body.style.overflow = '';
});

overlay.addEventListener('click', () => {
  mobileNav.classList.remove('active');
  overlay.classList.remove('active');
  menuToggle.style.display = 'block'; // Show hamburger icon
  document.body.style.overflow = '';
});

const mobileLinks = document.querySelectorAll('.mobile-nav a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
    menuToggle.style.display = 'block'; // Show hamburger icon
    document.body.style.overflow = '';
  });
});
    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    })

    // Contact Form Submission Handling
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;

      // Basic form validation
      if (name  && phone && message) {
        // Format the message for WhatsApp
        const whatsappNumber = '5541998281626'; // Your WhatsApp number
        const formattedMessage = `Nova mensagem de ${name} %0ATelefone: ${phone} %0AEmail: ${email} %0AMensagem: ${message}`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${formattedMessage}`;
        
        // Redirect to WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Show success message and reset form
        alert('Redirecionando para o WhatsApp para enviar sua mensagem!');
        contactForm.reset();
      } else {
        alert('Por favor, preencha todos os campos.');
      }
    });

    $(document).ready(function() {
  // Mobile Menu Toggle
  $('#menuToggle').click(function() {
    $('#mobileNav').addClass('active');
    $('#overlay').addClass('active');
  });

  $('#closeBtn').click(function() {
    $('#mobileNav').removeClass('active');
    $('#overlay').removeClass('active');
  });

  $('#overlay').click(function() {
    $('#mobileNav').removeClass('active');
    $('#overlay').removeClass('active');
  });

  // Header Scroll Effect
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  // Modal Functionality
  $('.modal-trigger').click(function() {
    const imgSrc = $(this).attr('src');
    $('#modalImage').attr('src', imgSrc);
    $('#imageModal').fadeIn();
  });

  $('.modal-close').click(function() {
    $('#imageModal').fadeOut();
  });

  // Close modal when clicking outside the image
  $('#imageModal').click(function(e) {
    if ($(e.target).hasClass('modal')) {
      $('#imageModal').fadeOut();
    }
  });

  // Form Submission (Placeholder)
  $('#contactForm').submit(function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    this.reset();
  });
});