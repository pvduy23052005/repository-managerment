
// TINH NANG CAP ( IN RA THONG BAO . )
const show = document.querySelector("[show-alert]");
if (show) {
   const time = parseInt(show.getAttribute("data-time"));
   const close = show.querySelector("[close-alert]");
   setTimeout(() => {
      // de an thong bao sau 5s  
      show.classList.add("alert-hidden");
   }, time);

   // neu vao thi an thong bao luong . 
   close.addEventListener("click", () => {
      show.classList.add("alert-hidden");
   });
}

// tinh nang xoa 1 san pham 
const buttonDelete = document.querySelectorAll("[button-delete]");

if (buttonDelete.length >0 ) {
   const formDelete = document.querySelector("#from-change-item");
   const path = formDelete.getAttribute("data-path");

   buttonDelete.forEach((button) => {
      button.addEventListener("click", () => {
         //su dung Ham confirm . 
         const check = confirm("Bạn có muốn xóa không");
         // check xem client an ok khong . 
         if (check) {
            // lay ra id 
            const id = button.getAttribute("data-id");
            // gui len sever . 
            const action = path + `/${id}?_method=PATCH`;

            formDelete.action = action;

            // lay len submit . 
            formDelete.submit();
         }
      });
   });
}