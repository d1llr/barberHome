(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(3418)}])},3418:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return B}});var t=a(5893),r=a(1527),i=a(3334),n=a.n(i),l=a(5827),c=a(5675),d=a.n(c),m=a(5865);let o=()=>{let e=(0,r.TL)();return(0,t.jsxs)("main",{className:n().main,children:[(0,t.jsxs)("div",{className:n().image_wrapper,children:[(0,t.jsx)(d(),{src:m.Z,width:250,height:250,alt:"Logotype"}),(0,t.jsx)("span",{children:"— стрижем и бреем —"})]}),(0,t.jsx)("button",{className:n().next_stage,onClick:()=>e((0,l.pp)(1)),children:"Записаться"})]})};var h=a(7030),x=a(3092),_=a.n(x),p=a(2748),u=a(2317);let j=()=>{let{data:e,isError:s,isLoading:a,isSuccess:i}=(0,h.L)(""),n=(0,r.TL)(),c=(0,r.CG)(e=>e.cartSlice.department);return(0,t.jsxs)(t.Fragment,{children:[i&&(0,t.jsxs)("main",{className:_().main,children:[e.map((e,s)=>(0,t.jsxs)("div",{className:c.id==e.id?_().department_checked:_().department,onClick:()=>n((0,u.fH)({id:e.id,address:e.address})),children:[(0,t.jsx)("div",{className:_().image_wrapper,children:(0,t.jsx)(d(),{src:e.logo,alt:"logo",width:100,height:100})}),(0,t.jsx)("span",{className:_().adress,children:e.address}),(0,t.jsx)("span",{className:_().schedule,children:e.schedule})]},s)),s&&(0,t.jsx)("button",{className:_().next_stage,children:(0,t.jsx)("span",{children:"Ошибка"})}),0!=c.id?(0,t.jsx)("button",{className:_().next_stage,onClick:()=>n((0,l.pp)(1)),children:(0,t.jsx)("span",{children:"Перейти к заказу"})}):(0,t.jsx)("button",{className:_().next_stage_disable,children:(0,t.jsx)("span",{children:"Перейти к заказу"})})]}),a&&(0,t.jsx)(p.Z,{})]})};var b=a(8826),g=a.n(b),v=a(822),N=a(8368),f=a(6497);let y=()=>{let e=(0,r.CG)(e=>e.cartSlice),{data:s,isLoading:a,isError:i,isSuccess:n}=(0,N.Q)({services:e.services.map(e=>e.id),departmentID:e.department.id}),l=(0,r.TL)(),c=s=>{s.currentTarget.dataset.id&&s.currentTarget.dataset.name&&(e.barber.id==Number(s.currentTarget.dataset.id)?l((0,u.Gk)()):l((0,u.OT)({id:Number(s.currentTarget.dataset.id),name:s.currentTarget.dataset.name})))};return console.log("render"),a?(0,t.jsx)(p.Z,{}):n?(0,t.jsx)("main",{className:g().barber_container,children:(0,t.jsx)("div",{className:g().barber_wrapper,children:n&&0!=s.length?s.map(s=>(0,t.jsxs)("div",{className:e.barber.id!=s.id?g().barber:g().barber_checked,onClick:e=>c(e),"data-id":s.id,"data-name":s.name,children:[(0,t.jsx)("div",{className:g().image_wrapper,children:(0,t.jsx)(d(),{src:s.avatar,width:200,height:200,alt:"Фото барбера"})}),(0,t.jsx)("span",{className:g().name,children:s.name}),(0,t.jsx)("span",{className:g().role,children:s.specialization}),(0,t.jsxs)("div",{className:g().rating,children:[(0,t.jsx)("span",{className:g().stars,children:"★★★★★"}),(0,t.jsx)("span",{className:g().comments,children:s.comments_count})]})]},s.id)):(0,t.jsx)(f.Z,{title:"На выбранные услуги не нашлось мастеров"})})}):(0,t.jsx)(f.Z,{title:"Ошибка, отображение барберов невозможно"})};var A=a(8935),k=a(7294),w={src:"/_next/static/media/calendar.5a12f6f3.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEX////Ev8P/AAD/AADp7e719/j19/f////////yYVbCyMzIzdDIvL/N0tXO09bHf3zqMADo5OXi5ujg5+jg5ObhY1nY3d/i4OHX3uDd4uTd4uPi3+DV3N7W2t3MeHXpaF7jZlwdpd9TAAAAGXRSTlMAAAYJDxISExQVQUROW2HV5ujp6e3u/P3+J7UwKwAAAEJJREFUeNoFQIUNgDAAKw5zd/v/SoKNsONgZMMuh1JD7vj8mnP5D5euMVZ947EtpWYfvKaH0M2L05WcizsBKjgXFD+PpwQWa9A48gAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},D=a(2381),T=a(6756),C=a.n(T),M=(0,k.memo)(function(e){let{barber:s}=e,a=(0,r.CG)(e=>e.cartSlice),{data:i,isLoading:n,isError:l,isSuccess:c,isFetching:d}=(0,D.y)({barber:s,date:a.date,departmentID:a.department.id}),m=(0,r.TL)(),o=e=>{e.currentTarget.dataset.datetime&&m((0,u.yn)(e.currentTarget.dataset.datetime))};return l?(0,t.jsx)("div",{children:"An error has occurred!"}):n?(0,t.jsx)(p.Z,{}):c?(0,t.jsx)("ul",{className:C().ul,children:0!=i.length?i.map((e,s)=>(0,t.jsx)("li",{className:a.dateTime==e.datetime?C().li_checked:C().li,"data-datetime":e.datetime,onClick:e=>o(e),children:e.time},s)):(0,t.jsx)(f.Z,{title:"Ошибка, на данную дату времени нет"})}):(0,t.jsx)(f.Z,{title:"Ошибка при выводе времени"})});let S=()=>{let e=(0,r.CG)(e=>e.cartSlice),s=(0,r.TL)(),{data:a,isLoading:i,isError:n,isSuccess:l}=(0,A.e)({barber:e.barber.id,departmentID:e.department.id}),[c,m]=(0,k.useState)(!1),o=["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"],h=new Date;o[h.getMonth()];let x=t=>{t.currentTarget.dataset.id&&(e.date!=a.booking_dates[t.currentTarget.dataset.id]&&s((0,u.fm)()),s((0,u.rm)(t.currentTarget.dataset.id)))};console.log("render");let _=e=>{let s=a.booking_days[h.getMonth()+1].indexOf(e);return a.booking_dates[s]},j=(0,k.useCallback)((e,s)=>{console.log(new Date(s,e-1,0).getDate());let a=[];for(let t=1;t<=new Date(s,e-1,0).getDate();t++)a.push(t);return a},[l]);return(0,k.useEffect)(()=>{l&&""==e.date&&s((0,u.rm)(a.booking_dates[0]))},[l]),i?(0,t.jsx)(p.Z,{}):l?(0,t.jsxs)("main",{className:g().dates_container,children:[(0,t.jsxs)("p",{children:["Сегодня ",h.getDate()," ",o[h.getMonth()]," | ",["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"][h.getDay()]]}),(0,t.jsxs)("div",{className:g().dates_wrapper,children:[(0,t.jsxs)("ul",{className:g().ul,children:[l&&a.booking_days[h.getMonth()+1].map((s,a)=>{if(a<5)return(0,t.jsx)("li",{className:e.date==_(s)?g().li_selected:g().li,onClick:e=>x(e),"data-id":_(s),children:(0,t.jsx)("span",{children:s})},a)}),(0,t.jsx)("li",{className:g().li,onClick:()=>{m(e=>!e)},children:(0,t.jsx)(d(),{src:w,width:30,height:30,alt:"Календарь"})})]}),c&&(0,t.jsxs)("div",{className:g().calendar_wrapper,children:[(0,t.jsxs)("div",{className:g().header,children:[["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"][h.getMonth()]," ",h.getFullYear()]}),(0,t.jsx)("ul",{className:g().ul_dates,children:j(h.getMonth(),h.getFullYear()).map((s,r)=>a.booking_days[h.getMonth()+1].includes(s)?(0,t.jsx)("li",{className:e.date==_(s)?g().li_selected:g().li_avaible,onClick:e=>x(e),"data-id":_(s),children:s},r):(0,t.jsx)("li",{className:g().li_unavailible,children:s},r))})]}),(0,t.jsx)("div",{className:g().hr}),""!=e.date&&(0,t.jsx)(M,{barber:e.barber.id})]})]}):(0,t.jsx)(f.Z,{title:"Ошибка"})};var Z=a(7914),O=a(8058),L=a(7536),E=a(6627),G=a.n(E),I=a(1806),F=a(5333),z=a(5872),H=a(8392),Q=a(3270),U=a.n(Q),W=a(855);let X={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"rgb(32, 32, 32)",borderRadius:"20px",boxShadow:24,display:"flex",flexDirection:"column",p:4};function Y(){let{register:e,handleSubmit:s,formState:{errors:a}}=(0,L.cI)(),i=(0,r.CG)(e=>e.cartSlice),n=(0,r.CG)(e=>e.ModalSlice),l=(0,r.TL)(),[c,{isLoading:d,isSuccess:m,isUninitialized:o,isError:h}]=(0,W.D)(),x=()=>l((0,H.Mr)()),_=async e=>{let s=await c({phone:n.phone,fullname:n.fullname,email:n.email,comment:n.comment,departmentID:i.department.id,code:e.code,notify_by_sms:6,appointments:[{id:1,services:i.services.map(e=>e.id),staff_id:i.barber.id,datetime:i.dateTime}]});console.log("fulfilled",s)};return(0,t.jsx)(z.Z,{open:n.isOpen,onClose:x,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",sx:{backdropFilter:"blur(10px)"},children:(0,t.jsxs)(F.Z,{sx:X,children:[o&&(0,t.jsxs)("form",{className:U().form,onSubmit:s(_),children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("label",{children:["Введите код, отправленный на ",n.phone.replace(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/,"+$1($2)$3-$4-$5")]}),(0,t.jsx)("input",{...e("code"),className:h?U().error:U().input})]}),(0,t.jsx)("button",{type:"submit",className:U().button,children:"Подтвердить"})]}),d&&(0,t.jsx)(p.Z,{}),m&&(0,t.jsx)("div",{className:U().success_container,children:"Запись успешно создана!"})]})})}var R=a(3798);let V=()=>{let{register:e,handleSubmit:s,formState:{errors:a}}=(0,L.cI)(),[i,n]=(0,k.useState)(!1),l=(0,r.CG)(e=>e.cartSlice),c=(0,r.TL)(),[d,{isLoading:m,isSuccess:o,isUninitialized:h}]=(0,R.Q)(),x=async e=>{e.department=l.department.id.toString(),e.services=l.services.map(e=>e.id),e.staff_id=l.barber.id,e.datetime=l.dateTime,n(!0),e.phone=e.phone.replace(/[+()-\s]+/g,""),console.log(e),c((0,H.h7)({phone:e.phone,fullname:e.name,email:e.email,comment:e.comment,isOpen:!0}));let s=await d({phone:e.phone.replace(/[+()-\s]+/g,""),departmentID:l.department.id});console.log("fulfilled",s)},_=e=>{e&&c((0,u.O9)(e))};return(0,t.jsxs)("main",{className:g().order_container,children:[(0,t.jsx)("h2",{children:"Моя запись"}),(0,t.jsxs)("form",{onSubmit:s(x),children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{children:"Отделение"}),(0,t.jsx)("input",{type:"text",readOnly:!0,value:l.department.address,...e("department")})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{children:"Услуга"}),(0,t.jsx)("ul",{children:l.services.map(e=>(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{className:g().name,children:e.name}),(0,t.jsxs)("span",{className:g().price,children:[e.price,"₽"]}),(0,t.jsx)("span",{className:g().close,"data-id":e.id,onClick:()=>_({id:e.id,name:e.name,price:e.price}),children:"✖"})]},e.id))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{children:"Мастер"}),(0,t.jsx)("input",{type:"text",readOnly:!0,value:l.barber.name,...e("staff_id")})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{children:"Дата, время"}),(0,t.jsx)("input",{type:"text",readOnly:!0,value:(0,O.Z)(new Date(l.dateTime),"dd MMMM yyyy, HH:mm",{locale:I.Z}),...e("datetime")})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{children:"Ваше имя"}),(0,t.jsx)("input",{type:"text",...e("name"),required:!0,className:a.name&&g().error,onFocus:e=>e.currentTarget.classList.remove(g().error)})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{children:"Номер телефона"}),(0,t.jsx)(G(),{mask:"+7 (999) 999-99-99",maskChar:"_",type:"text",required:!0,...e("phone",{pattern:/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/}),placeholder:"Введите номер телефона",className:a.phone&&g().error,onFocus:e=>e.currentTarget.classList.remove(g().error)})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{children:"Email"}),(0,t.jsx)("input",{type:"text",...e("email",{required:!0,validate:e=>!!e.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)||"Неверный формат email"}),required:!0,placeholder:"Введите ваш email",className:a.email&&g().error,onFocus:e=>e.currentTarget.classList.remove(g().error)})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{children:"Комментарий"}),(0,t.jsx)("input",{type:"text",...e("comment")})]}),(0,t.jsx)("button",{type:"submit",className:g().button,children:" Отправить "})]}),i&&(0,t.jsx)(Y,{})]})},$=()=>{let e=(0,r.TL)(),s=(0,r.CG)(e=>e.cartSlice),a=(0,r.CG)(e=>e.orderStageSlice.stage),i=a=>{switch(a){case 1:e((0,Z.jD)(1));break;case 2:0!=s.services.length&&e((0,Z.jD)(2));break;case 3:0==s.services.length?e((0,Z.jD)(1)):0==s.barber.id?e((0,Z.jD)(2)):e((0,Z.jD)(3));break;case 4:0==s.services.length?e((0,Z.jD)(1)):0==s.barber.id?e((0,Z.jD)(2)):""==s.dateTime?e((0,Z.jD)(3)):e((0,Z.jD)(4))}};return(0,t.jsxs)("main",{className:g().main,children:[(0,t.jsxs)("div",{className:g().stages_container,children:[(0,t.jsx)("div",{className:1==a?g().item_current:g().item_available,onClick:()=>i(1),children:(0,t.jsx)("span",{children:"1"})}),(0,t.jsx)("div",{className:g().line}),(0,t.jsx)("div",{className:2==a?g().item_current:0!=s.services.length?g().item_available:g().item_unavailable,onClick:()=>i(2),children:(0,t.jsx)("span",{children:"2"})}),(0,t.jsx)("div",{className:g().line}),(0,t.jsx)("div",{className:3==a?g().item_current:0!=s.barber.id?g().item_available:g().item_unavailable,onClick:()=>i(3),children:(0,t.jsx)("span",{children:"3"})}),(0,t.jsx)("div",{className:g().line}),(0,t.jsx)("div",{className:4==a?g().item_current:""!==s.dateTime?g().item_available:g().item_unavailable,onClick:()=>i(4),children:(0,t.jsx)("span",{children:"4"})})]}),(e=>{switch(e){case 1:return(0,t.jsx)(v.Z,{});case 2:return(0,t.jsx)(y,{});case 3:return(0,t.jsx)(S,{});case 4:return(0,t.jsx)(V,{})}})(a),(0,t.jsxs)("div",{className:a>=1&&0!=s.services.length?g().buttons_container:g().buttons_container_inactive,children:[a>1&&(0,t.jsx)("button",{onClick:()=>e((0,Z.eT)()),children:"Назад"}),1==a?0!=s.services.length&&(0,t.jsx)("button",{onClick:()=>e((0,Z.pp)()),children:"Далее"}):2==a?0!=s.barber.id&&(0,t.jsx)("button",{onClick:()=>e((0,Z.pp)()),children:"Далее"}):3==a?""!=s.date&&(0,t.jsx)("button",{onClick:()=>e((0,Z.pp)()),children:"Далее"}):""]})]})};function B(){(0,r.TL)();let e=(0,r.CG)(e=>e.stageSlice.stage);switch(console.log(e),e){case 0:return(0,t.jsx)(o,{});case 1:return(0,t.jsx)(j,{});case 2:return(0,t.jsx)($,{})}}},3092:function(e){e.exports={main:"styles_main__Ys70I",header_text:"styles_header_text__Qhciq",department:"styles_department__MLANV",department_checked:"styles_department_checked__mBafc",image_wrapper:"styles_image_wrapper__75QI4",adress:"styles_adress__SZQfj",schedule:"styles_schedule__l94nr",next_stage:"styles_next_stage__6hibv",next_stage_disable:"styles_next_stage_disable__izz4r"}},3334:function(e){e.exports={main:"styles_main__xzHDf",image_wrapper:"styles_image_wrapper__5Rysn",next_stage:"styles_next_stage__ZcApn"}},3270:function(e){e.exports={form:"styles_form__DmnCA",error:"styles_error__BALtx",name:"styles_name__bjm8O",price:"styles_price__vO3cW",close:"styles_close__gmz14",send_code:"styles_send_code__rhuvZ",button:"styles_button__Tm2wW",success_container:"styles_success_container__kkOBr"}},6756:function(e){e.exports={ul:"styles_ul__fAx71",li:"styles_li__F_8lO",li_checked:"styles_li_checked__Ad_WG"}}},function(e){e.O(0,[461,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);