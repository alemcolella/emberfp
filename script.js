
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const status = document.querySelector('.form-status');
  status.textContent = "Message sent! We'll get back to you soon.";
  this.reset();
});
