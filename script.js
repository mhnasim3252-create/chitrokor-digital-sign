const menuBtn=document.getElementById("menuBtn");
const nav=document.getElementById("nav");
menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const themeBtn=document.getElementById("themeBtn");
const savedTheme=localStorage.getItem("cds-theme");
if(savedTheme==="dark"){document.body.classList.add("dark");themeBtn.textContent="☀";}
themeBtn.addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  const dark=document.body.classList.contains("dark");
  themeBtn.textContent=dark?"☀":"☾";
  localStorage.setItem("cds-theme",dark?"dark":"light");
});

const search=document.getElementById("serviceSearch");
const cards=[...document.querySelectorAll(".service-card")];
const noResult=document.getElementById("noResult");
search.addEventListener("input",()=>{
  const q=search.value.trim().toLowerCase();
  let visible=0;
  cards.forEach(card=>{
    const ok=card.dataset.name.toLowerCase().includes(q);
    card.style.display=ok?"block":"none";
    if(ok) visible++;
  });
  noResult.style.display=visible?"none":"block";
});

const form=document.getElementById("orderForm");
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const phone=document.getElementById("phone").value.trim();
  const service=document.getElementById("service").value;
  const qty=document.getElementById("qty").value.trim();
  const msg=document.getElementById("message").value.trim();
  const text=`আসসালামু আলাইকুম, আমি চিত্রকর ডিজিটাল সাইনে অর্ডার করতে চাই।

নাম: ${name}
মোবাইল: ${phone}
সেবা: ${service}
পরিমাণ/সাইজ: ${qty || "উল্লেখ নেই"}
বিস্তারিত: ${msg || "উল্লেখ নেই"}`;
  window.open("https://wa.me/8801984721775?text="+encodeURIComponent(text),"_blank");
});

const topBtn=document.getElementById("topBtn");
window.addEventListener("scroll",()=>{
  topBtn.style.display=window.scrollY>500?"grid":"none";
});
topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
document.getElementById("year").textContent=new Date().getFullYear();

