export default function opacity(el) {
  function fn() {
    el.childNodes.forEach((item, i) => {
      const rect = item.getBoundingClientRect();
      if (rect.top<window.innerHeight-100) {
          console.log(item);
          if (item.classList.contains('opacity-0')) {
          item.classList.remove('opacity-0');
          item.classList.add('opacity-1','transition-all','duration-[1.5s]');
        }
      }
    });
  }
  fn()
  window.addEventListener('scroll',fn)

}
