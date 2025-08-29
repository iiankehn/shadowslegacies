// Mobile menu toggle & simple booking handler
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('[data-menu-btn]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!expanded));
    });
  }

  // Booking form -> mailto handoff (no backend)
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(bookingForm).entries());
      const subject = encodeURIComponent(`New Booking: ${data.service} for ${data.petName || 'Pet'}`);
      const body = encodeURIComponent(
        `Service: ${data.service}
Date: ${data.date} at ${data.time}
Pet Name: ${data.petName}
Pet Type: ${data.petType}
Notes: ${data.notes || ''}

Contact Info
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}`
      );
      // TODO: Replace with your business email
      const to = 'bookings@shadowslegacies.example';
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
      bookingForm.reset();
      alert('Booking details prepared in your email app. If it didn\'t open, please email us directly.');
    });
  }
});
