var faqs=document.querySelectorAll("section");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  }
  );
});
