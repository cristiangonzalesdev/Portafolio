// Script para interacciones: menú, scroll suave, y manejo básico del formulario de contacto
document.addEventListener('DOMContentLoaded', function(){
  const certificates = [
    {
      title: 'Inteligencia Artificial Aplicada',
      type: 'PDF',
      issuer: 'MinTIC e IBM SkillsBuild',
      description: 'Fundamentos y aplicaciones prácticas de inteligencia artificial.',
      href: 'assets/certificates/ia-aplicada.pdf',
      preview: 'assets/certificates/ia-aplicada.png'
    },
    {
      title: 'IA y Deep Learning desde Cero en Python',
      type: 'PDF',
      issuer: 'IBM SkillsBuild y Udemy',
      description: 'Formación en inteligencia artificial, deep learning y Python.',
      href: 'assets/certificates/deep-learning-python.pdf',
      preview: 'assets/certificates/deep-learning-python.png'
    },
    {
      title: 'Programación Orientada a Objetos en Python',
      type: 'PDF',
      issuer: 'IBM SkillsBuild',
      description: 'Conceptos de programación orientada a objetos aplicados con Python.',
      href: 'assets/certificates/poo-python.pdf',
      preview: 'assets/certificates/poo-python.png'
    },
    {
      title: 'Pruebas con Python',
      type: 'PDF',
      issuer: 'IBM SkillsBuild',
      description: 'Principios de pruebas de software y validación de código con Python.',
      href: 'assets/certificates/pruebas-python.pdf',
      preview: 'assets/certificates/pruebas-python.png'
    }
  ];

  const certificateGrid = document.getElementById('certificatesGrid');

  function renderCertificates() {
    if(!certificateGrid || certificateGrid.dataset.loaded === 'true') return;

    certificateGrid.innerHTML = certificates.map((certificate) => `
      <article class="card certificate-card">
        <div class="certificate-preview">
          <img src="${certificate.preview}" alt="${certificate.title}">
        </div>
        <p class="certificate-type">${certificate.type}</p>
        <h3>${certificate.title}</h3>
        <p class="certificate-issuer">${certificate.issuer}</p>
        <p>${certificate.description}</p>
        <a class="btn primary" href="${certificate.href}" target="_blank" rel="noopener">
          Ver certificado
        </a>
      </article>
    `).join('');

    certificateGrid.dataset.loaded = 'true';
  }

  renderCertificates();

  document.querySelectorAll('.cert-btn').forEach((button) => {
    button.addEventListener('click', function () {
      renderCertificates();
      const targetSelector = this.dataset.target || '#certifications';
      const target = document.querySelector(targetSelector);
      if(target){
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Menú responsive (mejorado con clase y aria-expanded)
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if(toggle && nav){
    toggle.setAttribute('aria-expanded', 'false');
    toggle.addEventListener('click', ()=>{
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('nav-open');
    });
  }

  // Scroll suave para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = this.getAttribute('href');
      if(target.length > 1){
        e.preventDefault();
        const el = document.querySelector(target);
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

});
