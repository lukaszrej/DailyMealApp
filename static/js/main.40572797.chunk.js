(this["webpackJsonpdaily-meal-app"]=this["webpackJsonpdaily-meal-app"]||[]).push([[0],{143:function(e,t,a){e.exports=a(180)},180:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a.n(l),i=a(7),o=a(17),u=a(55),d=a(107),m=a(14),s="HIDE_WELCOME_MESSAGE",p={started:!1,showAlert:!1},b={name:"",height:"",weight:"",age:"",gender:"male",activityLevel:"1.2"},g={labels:["Calories","Fat","Carbs","Protein"]},h=a(118),f={isLoading:!1,foundProducts:[],storedProducts:[]},E=Object(u.c)({start:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START":return Object(m.a)(Object(m.a)({},e),{},{started:!0,showAlert:!0});case s:return Object(m.a)(Object(m.a)({},e),{},{showAlert:!1});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER":return Object(m.a)(Object(m.a)({},e),{},{name:t.name,height:t.height,weight:t.weight,age:t.age,gender:t.gender,activityLevel:t.activityLevel});default:return e}},product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return Object(m.a)(Object(m.a)({},e),{},{isLoading:!0});case"FIND_PRODUCT":return Object(m.a)(Object(m.a)({},e),{},{foundProducts:t.payload,isLoading:!1});case"STORE_PRODUCT":return Object(m.a)(Object(m.a)({},e),{},{storedProducts:[].concat(Object(h.a)(e.storedProducts),[t.payload]),foundProducts:[]});case"DELETE_PRODUCT":return Object(m.a)(Object(m.a)({},e),{},{storedProducts:t.payload});default:return e}},chart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHART":return Object(m.a)(Object(m.a)({},e),{},{state:e});default:return e}}}),v=Object(u.d)(E,Object(u.a)(d.a)),y=a(263),O=a(108),j=a(119),C=a(117),w=a(45),x=a(25),N=Object(x.a)(),k=function(e){Object(j.a)(a,e);var t=Object(C.a)(a);function a(){var e;return Object(O.a)(this,a),(e=t.call(this)).history=N,e}return a}(w.a),S=a(13),D=a(247),T=a(241),P=a(266),A=a(245),L=a(246),I=a(185),F=a(239),M=a(78),R=a(271),W=a(4),B=a(236),_=a(181),H=a(109),z=a.n(H),V=a(49),U=Object(W.a)((function(e){return Object(R.a)({root:{margin:0,padding:e.spacing(2),minWidth:500},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}})}))((function(e){var t=e.children,a=e.classes,n=e.onClose,l=Object(M.a)(e,["children","classes","onClose"]);return r.a.createElement(B.a,Object.assign({disableTypography:!0,className:a.root},l),r.a.createElement(V.a,{variant:"h6"},t),n?r.a.createElement(_.a,{"aria-label":"close",className:a.closeButton,onClick:n},r.a.createElement(z.a,null)):null)})),G=a(237),Y=Object(W.a)((function(){return{root:{padding:16,"& > div":{marginTop:8,marginBottom:8},"& > fieldset":{display:"flex","& > div":{flexDirection:"row",justifyContent:"center"}}}}}))(G.a),K=a(193),q=a(244),J=a(190),Q=a(40),X=a.n(Q),Z=a(238),$=Object(Z.a)((function(e){return Object(R.a)({root:{display:"flex",flexWrap:"wrap",flexDirection:"column"},form:{display:"flex",flexDirection:"column"},fieldset:{marginTop:16,marginBottom:8},radioGroup:{flexDirection:"row",justifyContent:"center"},button:{marginTop:16,fontSize:18,minHeight:48,background:"#00A8CC",color:"white","&:hover":{background:"#025997"}},formControl:{minWidth:120,marginTop:16,marginBottom:8}})})),ee=[{activityValue:"1.2",activityDescription:"Sedentary (little or no exercise)"},{activityValue:"1.375",activityDescription:"Lightly active (light exercise 1-3 days/week)"},{activityValue:"1.55",activityDescription:"Moderately active (moderate exercise 3-5 days/week)"},{activityValue:"1.725",activityDescription:"Very active (hard exercise 6-7 days a week)"},{activityValue:"1.9",activityDescription:"Extra active (very hard exercise & physical job"}],te=function(e){return e.start.started},ae=function(e){return e.start.showAlert},ne=function(e){var t=e.name,a=e.height,n=e.weight,r=e.age,l=e.gender,c=e.activityLevel;return function(e){e({type:"USER",name:t,height:a,weight:n,age:r,gender:l,activityLevel:c})}},re=function(){var e=$(),t=Object(i.b)(),a=Object(i.c)(te),n=r.a.useState(""),l=Object(S.a)(n,2),c=l[0],o=l[1],u=r.a.useState("170"),d=Object(S.a)(u,2),m=d[0],s=d[1],p=r.a.useState("70"),b=Object(S.a)(p,2),g=b[0],h=b[1],f=r.a.useState("28"),E=Object(S.a)(f,2),v=E[0],y=E[1],O=r.a.useState("male"),j=Object(S.a)(O,2),C=j[0],w=j[1],x=r.a.useState("1.2"),N=Object(S.a)(x,2),k=N[0],M=N[1];return r.a.createElement(F.a,{open:!a,"aria-labelledby":"customized-dialog-title"},r.a.createElement(U,{id:"customized-dialog-title"},"Fill the form and start the app!"),r.a.createElement(Y,{dividers:!0},r.a.createElement("form",{noValidate:!0,onSubmit:function(e){e.preventDefault(),t(ne({name:c,height:m,weight:g,age:v,gender:C,activityLevel:k})),t((function(e){e({type:"START"})}))},className:e.form},r.a.createElement(T.a,{variant:"outlined",margin:"normal",fullWidth:!0,id:"name",name:"name",label:"Your name",autoComplete:"name",onChange:function(e){return o(e.target.value)},value:c}),r.a.createElement(T.a,{variant:"outlined",margin:"normal",fullWidth:!0,id:"height",name:"height",label:"Your height (cm)",autoComplete:"height",type:"number",onChange:function(e){return s(e.target.value)},value:m}),r.a.createElement(T.a,{variant:"outlined",margin:"normal",fullWidth:!0,id:"weight",name:"weight",label:"Your weight (kg)",autoComplete:"weight",type:"number",onChange:function(e){return h(e.target.value)},value:g}),r.a.createElement(T.a,{variant:"outlined",margin:"normal",fullWidth:!0,id:"age",name:"age",label:"Your age (years)",autoComplete:"age",type:"number",onChange:function(e){return y(e.target.value)},value:v}),r.a.createElement(I.a,{variant:"outlined",className:e.formControl},r.a.createElement(K.a,{id:"demo-simple-select-outlined-label"},"Activity level"),r.a.createElement(J.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:k,displayEmpty:!0,onChange:function(e){M(e.target.value)},label:"Activity level"},ee.map((function(e){return r.a.createElement(q.a,{value:e.activityValue,key:X.a.generate()},e.activityDescription)})))),r.a.createElement(I.a,{component:"fieldset",className:e.fieldset},r.a.createElement(A.a,{"aria-label":"gender",name:"gender1",value:C,onChange:function(e){w(e.target.value)},className:e.radioGroup},r.a.createElement(L.a,{value:"male",control:r.a.createElement(P.a,null),label:"Male"}),r.a.createElement(L.a,{value:"female",control:r.a.createElement(P.a,null),label:"Female"}))),r.a.createElement(D.a,{type:"submit",variant:"contained",className:e.button},"Start"))))},le=a(269),ce=a(249),ie=a(250),oe=a(243),ue=a(251),de=a(187),me=a(252),se=a(248),pe=a(111),be=a.n(pe),ge=a(110),he=a.n(ge),fe=Object(Z.a)((function(e){return Object(R.a)({root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,background:"linear-gradient(270deg, #025997 0%, #00A8CC 55%)"},drawer:{width:250,flexShrink:0},drawerPaper:{width:250,background:"#282828",color:"#e6e7e8"},drawerContainer:{overflow:"auto"},listItem:{"&:hover":{background:"#4d4d4d",textDecoration:"underline"}},listItemIcon:{color:"#e6e7e8"},content:{flexGrow:1,padding:e.spacing(3)},home:{background:"red"}})})),Ee=Object(Z.a)((function(){return Object(R.a)({root:{"& > div > span.MuiTypography-displayBlock":{fontSize:14,color:"grey"}}})})),ve=function(){var e=Ee();return r.a.createElement("footer",null,r.a.createElement(oe.a,null,r.a.createElement(de.a,{className:e.root},r.a.createElement(se.a,{primary:"@2020 DailyMealApp"}))))},ye=function(e){var t=e.children,a=fe(),n=Object(o.g)(),l=Object(i.c)(te);return r.a.createElement("div",{className:a.root},r.a.createElement(ce.a,{position:"fixed",className:a.appBar},r.a.createElement(ie.a,null,r.a.createElement(V.a,{variant:"h6",noWrap:!0},"DailyMealApp"))),r.a.createElement(le.a,{className:a.drawer,variant:"permanent",classes:{paper:a.drawerPaper}},r.a.createElement(ie.a,null),r.a.createElement("div",{className:a.drawerContainer},r.a.createElement(ue.a,null),r.a.createElement(oe.a,null,r.a.createElement(de.a,{className:a.listItem,disabled:!l,button:!0,onClick:function(){return n.push("/home")}},r.a.createElement(me.a,null,r.a.createElement(he.a,{className:a.listItemIcon})),r.a.createElement(se.a,{primary:"Home"})),r.a.createElement(de.a,{className:a.listItem,disabled:!l,button:!0,onClick:function(){return n.push("/meals")}},r.a.createElement(me.a,null,r.a.createElement(be.a,{className:a.listItemIcon})),r.a.createElement(se.a,{primary:"Your meals"}))),r.a.createElement(ue.a,null),r.a.createElement(ve,null))),r.a.createElement("main",{className:a.content},r.a.createElement(ie.a,null),r.a.createElement(r.a.Fragment,null,t)))},Oe=function(){return r.a.createElement("main",null,"The page does not exist. ",r.a.createElement(w.b,{to:"/home"},"Go back to the home page"))},je=function(e){return e.user.name},Ce=function(e){return e.user.height},we=function(e){return e.user.weight},xe=function(e){return e.user.age},Ne=function(e){return e.user.gender},ke=function(e){return e.user.activityLevel},Se=a(120),De=a(264),Te=a(261),Pe=a(116),Ae=a.n(Pe),Le=a(115),Ie=a.n(Le),Fe=a(258),Me=a(257),Re=a(52),We=a(3),Be=a(270),_e=a(113),He=a.n(_e),ze=a(10),Ve=Object(Z.a)((function(e){return Object(R.a)({root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(ze.e)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}})})),Ue=function(e){var t=Ve(),a=e.numSelected,n=e.handleDeleteAllProducts;return r.a.createElement(ie.a,{className:Object(We.a)(t.root,Object(Re.a)({},t.highlight,a>0))},a>0?r.a.createElement(V.a,{className:t.title,color:"inherit",variant:"subtitle1",component:"div"},a," selected"):r.a.createElement(V.a,{className:t.title,variant:"h6",id:"tableTitle",component:"div"},"Your meal"),a>0&&r.a.createElement(Be.a,{title:"Delete"},r.a.createElement(_.a,{"aria-label":"delete",onClick:n},r.a.createElement(He.a,null))))},Ge=a(255),Ye=a(253),Ke=a(254),qe=a(267),Je=[{id:"name",numeric:!1,disablePadding:!0,label:"Product (100g serving)"},{id:"calories",numeric:!0,disablePadding:!1,label:"Calories"},{id:"fat",numeric:!0,disablePadding:!1,label:"Fat\xa0(g)"},{id:"carbs",numeric:!0,disablePadding:!1,label:"Carbs\xa0(g)"},{id:"protein",numeric:!0,disablePadding:!1,label:"Protein\xa0(g)"}],Qe=function(e){var t=e.onSelectAllClick,a=e.numSelected,n=e.rowCount;return r.a.createElement(Ye.a,null,r.a.createElement(Ke.a,null,r.a.createElement(Ge.a,{padding:"checkbox"},r.a.createElement(qe.a,{indeterminate:a>0&&a<n,checked:n>0&&a===n,onChange:t,inputProps:{"aria-label":"select all products"}})),Je.map((function(e){return r.a.createElement(Ge.a,{key:e.id,align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default"},e.label)}))))},Xe=a(256),Ze=function(e){return e.product.isLoading},$e=function(e){return e.product.foundProducts},et=function(e){return e.product.storedProducts},tt=function(e){var t=Object(i.c)(et),a=e.isSelected,n=e.handleSelectClick;return r.a.createElement(Xe.a,null,t.map((function(e,t){var l=a(e.food.foodId),c="enhanced-table-checkbox-".concat(t);return r.a.createElement(Ke.a,{hover:!0,onClick:function(t){return n(t,e.food.foodId)},role:"checkbox","aria-checked":l,tabIndex:-1,key:e.food.foodId,selected:l},r.a.createElement(Ge.a,{padding:"checkbox"},r.a.createElement(qe.a,{checked:l,inputProps:{"aria-labelledby":c}})),r.a.createElement(Ge.a,{component:"th",id:c,scope:"row",padding:"none"},e.food.label),r.a.createElement(Ge.a,{align:"right"},Math.round(e.food.nutrients.ENERC_KCAL)),r.a.createElement(Ge.a,{align:"right"},Math.round(e.food.nutrients.FAT)),r.a.createElement(Ge.a,{align:"right"},Math.round(e.food.nutrients.CHOCDF)),r.a.createElement(Ge.a,{align:"right"},Math.round(e.food.nutrients.PROCNT)))})))},at=a(59),nt=a.n(at),rt=a(77),lt=a(114),ct=a.n(lt),it=function(){var e=Object(rt.a)(nt.a.mark((function e(t){var a;return nt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.edamam.com/api/food-database/parser?nutrition-type=logging&app_id="+"".concat("95cca2e7","&&app_key=").concat("82a7588a4ea9d81983e0794927c8cee6","&ingr=").concat(t),e.next=3,ct.a.get(a);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ot=function(e){return function(t){t({type:"STORE_PRODUCT",payload:e})}},ut=Object(Z.a)((function(e){return Object(R.a)({root:{width:"100%"},paper:{width:"100%",padding:12},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}})})),dt=function(){var e=ut(),t=Object(i.b)(),a=Object(i.c)(et),n=r.a.useState([]),l=Object(S.a)(n,2),c=l[0],o=l[1];return 0===a.length?null:r.a.createElement("div",{className:e.root},r.a.createElement(Se.a,{className:e.paper},r.a.createElement(Ue,{numSelected:c.length,handleDeleteAllProducts:function(){c.map((function(e){return t(function(e){return function(t,a){t({type:"DELETE_PRODUCT",payload:a().product.storedProducts.filter((function(t){return t.food.foodId!==e}))})}}(e))}))}}),r.a.createElement(Me.a,null,r.a.createElement(Fe.a,{className:e.table,"aria-labelledby":"tableTitle",size:"medium","aria-label":"enhanced table"},r.a.createElement(Qe,{numSelected:c.length,onSelectAllClick:function(e){if(e.target.checked){var t=a.map((function(e){return e.food.foodId}));o(t)}else o([])},rowCount:a.length}),r.a.createElement(tt,{isSelected:function(e){return-1!==c.indexOf(e)},handleSelectClick:function(e,t){var a=c.indexOf(t),n=[];-1===a?n=n.concat(c,t):0===a?n=n.concat(c.slice(1)):a===c.length-1?n=n.concat(c.slice(0,-1)):a>0&&(n=n.concat(c.slice(0,a),c.slice(a+1))),o(n)}})))))},mt=a(183),st=a(259),pt=a(186),bt=a(188),gt=Object(Z.a)((function(e){return Object(R.a)({root:{display:"flex",flexWrap:"wrap",flexDirection:"column",width:"80%","& button":{marginTop:18}},margin:{margin:e.spacing(1),marginBottom:0,marginLeft:0,marginRight:0},withoutLabel:{marginTop:e.spacing(3)}})})),ht=function(){var e=gt(),t=Object(i.b)(),a=r.a.useState({name:"",calories:0,fat:0,carbs:0,protein:0}),n=Object(S.a)(a,2),l=n[0],c=n[1],o=function(e){return function(t){c(Object(m.a)(Object(m.a)({},l),{},Object(Re.a)({},e,t.currentTarget.value)))}},u=function(e){e.preventDefault(),t(ot({food:{foodId:X.a.generate(),label:l.name,nutrients:{CHOCDF:l.carbs,ENERC_KCAL:l.calories,FAT:l.fat,PROCNT:l.protein}}})),c({name:"",calories:0,fat:0,carbs:0,protein:0})};return r.a.createElement("div",{className:e.root},r.a.createElement("form",{onSubmit:u},r.a.createElement(bt.a,{className:Object(We.a)(e.margin,e.withoutLabel)},r.a.createElement(mt.a,{id:"standard-adornment-product-name",type:"text",placeholder:"Type product name",value:l.name,onChange:o("name"),"aria-describedby":"standard-product-name-helper-text"}),r.a.createElement(pt.a,{id:"standard-product-name-helper-text"},"Product name"),r.a.createElement(mt.a,{id:"standard-adornment-calories",value:l.calories,type:"number",onChange:o("calories"),endAdornment:r.a.createElement(st.a,{position:"end"},"kcal"),"aria-describedby":"standard-calories-helper-text",inputProps:{"aria-label":"calories",min:"0",max:"100",step:"1"}}),r.a.createElement(pt.a,{id:"standard-weight-helper-text"},"Calories"),r.a.createElement(mt.a,{id:"standard-adornment-fat",value:l.fat,type:"number",onChange:o("fat"),endAdornment:r.a.createElement(st.a,{position:"end"},"g/100g"),"aria-describedby":"standard-fat-helper-text",inputProps:{"aria-label":"fat",min:"0",max:"100",step:"1"}}),r.a.createElement(pt.a,{id:"standard-fat-helper-text"},"Fat"),r.a.createElement(mt.a,{id:"standard-adornment-carbs",value:l.carbs,type:"number",onChange:o("carbs"),endAdornment:r.a.createElement(st.a,{position:"end"},"g/100g"),"aria-describedby":"standard-carbs-helper-text",inputProps:{"aria-label":"carbs",min:"0",max:"100",step:"1"}}),r.a.createElement(pt.a,{id:"standard-carbs-helper-text"},"Carbs"),r.a.createElement(mt.a,{id:"standard-adornment-protein",value:l.protein,type:"number",onChange:o("protein"),endAdornment:r.a.createElement(st.a,{position:"end"},"g/100g"),"aria-describedby":"standard-protein-helper-text",inputProps:{"aria-label":"protein",min:"0",max:"100",step:"1"}}),r.a.createElement(pt.a,{id:"standard-carbs-helper-text"},"Protein"),r.a.createElement(D.a,{onSubmit:function(e){return u(e)},variant:"contained",color:"secondary",type:"submit",disabled:""===l.name},"Submit product"))))},ft=a(260),Et=Object(Z.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)}}}})),vt=function(){var e=Et();return r.a.createElement("div",{className:e.root},r.a.createElement(ft.a,{size:24}))},yt=Object(W.a)((function(e){return{tooltip:{boxShadow:e.shadows[1],fontSize:9}}}))(Be.a),Ot=function(e){var t=e.product;return r.a.createElement("div",null,!isNaN(Math.ceil(t.food.nutrients.ENERC_KCAL))&&Math.ceil(t.food.nutrients.ENERC_KCAL)+" kcal",!isNaN(Math.ceil(t.food.nutrients.PROCNT))&&" | "+Math.ceil(t.food.nutrients.PROCNT)+" g protein",!isNaN(Math.ceil(t.food.nutrients.CHOCDF))&&" | "+Math.ceil(t.food.nutrients.CHOCDF)+" g carbs",!isNaN(Math.ceil(t.food.nutrients.FAT))&&" | "+Math.ceil(t.food.nutrients.FAT)+" g fat ")},jt=Object(Z.a)((function(e){return Object(R.a)({root:{listStyle:"none",padding:0,width:"80%",margin:0,"& > li":{paddingTop:8,paddingBottom:4,paddingLeft:8,borderBottom:"1px solid #3f51b5"},"& > li:hover":{background:"#00A8CC",color:"white"},"& > * > div":{fontSize:13,fontStyle:"italic"}}})})),Ct=function(){var e=jt(),t=Object(i.b)(),a=Object(i.c)($e);return r.a.createElement("ul",{className:e.root},a.map((function(e){return r.a.createElement(yt,{key:X.a.generate(),arrow:!0,title:"Click to add",placement:"top",enterDelay:450,leaveDelay:50},r.a.createElement("li",{onClick:function(a){return function(e,a){e.preventDefault(),t(ot(a))}(a,e)}},e.food.label.toLowerCase(),r.a.createElement(Ot,{product:e})))})))},wt=Object(Z.a)((function(e){return Object(R.a)({root:{marginTop:24,width:"80%","& > div":{width:"100%"},"& .MuiButton-root":{width:"100%",marginTop:18}}})})),xt=function(){var e=wt(),t=Object(i.b)(),a=r.a.useState(""),n=Object(S.a)(a,2),l=n[0],c=n[1],o=Object(i.c)(Ze);return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:e.root,onSubmit:function(e){var a;e.preventDefault(),t((a=l,function(){var e=Object(rt.a)(nt.a.mark((function e(t){var n;return nt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING"}),e.prev=1,e.next=4,it(a);case 4:n=e.sent,t({type:"FIND_PRODUCT",payload:n.data.hints}),!n.data.hints.length&&alert("nothing found"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.warn("server problem, error -> ",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())),c("")},noValidate:!0,autoComplete:"on"},r.a.createElement(mt.a,{id:"standard-adornment-find-product",type:"text",placeholder:"Type product to be found",value:l,onChange:function(e){return c(e.currentTarget.value)},"aria-describedby":"standard-find-product-helper-text"}),r.a.createElement(pt.a,{id:"standard-find-product-helper-text"},"Find product"),r.a.createElement(D.a,{type:"submit",disabled:""===l,color:"secondary",variant:"contained"},o?r.a.createElement(vt,null):"Search")),r.a.createElement(Ct,null))},Nt=Object(Z.a)((function(){return Object(R.a)({root:{"& h6":{padding:24},"& > div":{marginBottom:12}},tabs:{paddingBottom:24,paddingTop:24,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}})})),kt=function(){var e=Nt(),t=r.a.useState(0),a=Object(S.a)(t,2),n=a[0],l=a[1];return r.a.createElement("section",{className:e.root},r.a.createElement(Se.a,{square:!0},r.a.createElement(V.a,{variant:"h6",noWrap:!0},"Find or add own product to the report")),r.a.createElement(Se.a,{square:!0},r.a.createElement(De.a,{value:n,onChange:function(e,t){e.preventDefault(),l(t)},variant:"fullWidth",indicatorColor:"primary",textColor:"inherit","aria-label":"add or find product tabs"},r.a.createElement(Te.a,{icon:r.a.createElement(Ie.a,null),label:"Find product"}),r.a.createElement(Te.a,{icon:r.a.createElement(Ae.a,null),label:"Add own product"})),r.a.createElement("div",{className:e.tabs},n?r.a.createElement(ht,null):r.a.createElement(xt,null))),r.a.createElement(dt,null))},St=function(e){var t="";switch(e){case"1.2":t="Sedentary, not active";break;case"1.375":t="Lightly active";break;case"1.55":t="Moderately active";break;case"1.725":t="Very active";break;case"1.9":t="Extra active";break;default:return null}return t},Dt=a(268),Tt=a(265),Pt=Object(Z.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),At=function(e){return r.a.createElement(Tt.a,Object.assign({elevation:6,variant:"filled"},e))},Lt=function(e){var t=Pt(),a=Object(i.b)(),n=e.children,l=e.severity,c=r.a.useState(!0),o=Object(S.a)(c,2),u=o[0],d=o[1],m=function(e,t){"clickaway"!==t&&(a((function(e){e({type:s})})),d(!1))};return r.a.createElement("div",{className:t.root},r.a.createElement(Dt.a,{open:u,autoHideDuration:3500,onClose:m},r.a.createElement(At,{onClose:m,severity:l},n)))},It=a(262),Ft=Object(W.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(It.a),Mt=Object(Z.a)((function(e){return Object(R.a)({activity:{width:"100%"}})})),Rt=function(){var e=Mt(),t=Object(i.b)(),a=r.a.useState(!1),n=Object(S.a)(a,2),l=n[0],c=n[1],o=r.a.useState(!1),u=Object(S.a)(o,2),d=u[0],m=u[1],s=Object(i.c)(je),p=r.a.useState(s),b=Object(S.a)(p,2),g=b[0],h=b[1],f=Object(i.c)(Ce),E=r.a.useState(f),v=Object(S.a)(E,2),y=v[0],O=v[1],j=Object(i.c)(we),C=r.a.useState(j),w=Object(S.a)(C,2),x=w[0],N=w[1],k=Object(i.c)(xe),M=r.a.useState(k),R=Object(S.a)(M,2),W=R[0],B=R[1],_=Object(i.c)(Ne),H=r.a.useState(_),z=Object(S.a)(H,2),V=z[0],G=z[1],Q=Object(i.c)(ke),Z=r.a.useState(Q),$=Object(S.a)(Z,2),te=$[0],ae=$[1],re=function(){c(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{variant:"outlined",color:"primary",onClick:function(){c(!0),m(!1)}},"Edit data"),r.a.createElement(F.a,{onClose:re,"aria-labelledby":"customized-dialog-title",open:l},r.a.createElement(U,{id:"customized-dialog-title",onClose:re},"Edit user data"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(ne({name:g,height:y,weight:x,age:W,gender:V,activityLevel:te})),c(!1),g===s&&y===f&&x===j&&W===k&&V===_&&te===Q||m(!0)}},r.a.createElement(Y,{dividers:!0},r.a.createElement(T.a,{variant:"outlined",fullWidth:!0,id:"name",name:"name",label:"Name",autoComplete:"name",onChange:function(e){return h(e.target.value)},value:g}),r.a.createElement(T.a,{variant:"outlined",margin:"normal",fullWidth:!0,id:"height",name:"height",label:"Height (cm)",autoComplete:"height",type:"number",onChange:function(e){return O(e.target.value)},value:y}),r.a.createElement(T.a,{variant:"outlined",fullWidth:!0,id:"weight",name:"weight",label:"Weight (kg)",autoComplete:"weight",type:"number",onChange:function(e){return N(e.target.value)},value:x}),r.a.createElement(T.a,{variant:"outlined",fullWidth:!0,id:"age",name:"age",label:"Age (years)",autoComplete:"age",type:"number",onChange:function(e){return B(e.target.value)},value:W}),r.a.createElement(I.a,{variant:"outlined",className:e.activity},r.a.createElement(K.a,{id:"demo-simple-select-outlined-label"},"Activity level"),r.a.createElement(J.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:te,displayEmpty:!0,onChange:function(e){ae(e.target.value)},label:"Activity level"},ee.map((function(e){return r.a.createElement(q.a,{value:e.activityValue,key:X.a.generate()},e.activityDescription)})))),r.a.createElement(I.a,{component:"fieldset"},r.a.createElement(A.a,{"aria-label":"gender",name:"gender1",value:V,onChange:function(e){G(e.target.value)}},r.a.createElement(L.a,{value:"male",control:r.a.createElement(P.a,null),label:"Male"}),r.a.createElement(L.a,{value:"female",control:r.a.createElement(P.a,null),label:"Female"})))),r.a.createElement(Ft,null,r.a.createElement(D.a,{autoFocus:!0,type:"submit",color:"primary"},"Save")))),d&&r.a.createElement(Lt,{severity:"success"},"The data has been correctly updated."))},Wt=Object(Z.a)((function(){return Object(R.a)({root:{padding:24,display:"flex",flexDirection:"column","& p":{margin:0,marginBottom:12},"& h6":{marginBottom:12}}})})),Bt=function(){var e=Wt(),t=Object(i.c)(je),a=Object(i.c)(Ce),n=Object(i.c)(we),l=Object(i.c)(xe),c=Object(i.c)(Ne),o=Object(i.c)(ke);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Se.a,{className:e.root},r.a.createElement(V.a,{variant:"h6",noWrap:!0},"User details"),t&&r.a.createElement("p",null,"Name: ",t),a&&r.a.createElement("p",null,"Height: ",a," cm"),n&&r.a.createElement("p",null,"Current weight: ",n," kg"),l&&r.a.createElement("p",null,"Age: ",l),c&&r.a.createElement("p",null,"Gender: ",c),o&&r.a.createElement("p",null,"Activity level: ",St(o)),r.a.createElement(Rt,null)))},_t=Object(Z.a)((function(){return Object(R.a)({root:{padding:24,display:"flex",flexDirection:"column",marginTop:24,"& p":{margin:0,marginBottom:12},"& h6":{marginBottom:12}}})})),Ht=function(e){var t=e.weight,a=e.height,n=e.age,r=e.gender,l=e.activityLevel;return"Male"===r?Number(l)*(10*Number(t))+6.25*Number(a)-5*Number(n)+5:Number(l)*(10*Number(t))+6.25*Number(a)-5*Number(n)-166},zt=function(){var e=_t(),t=Object(i.c)(Ce),a=Object(i.c)(we),n=Object(i.c)(xe),l=Object(i.c)(Ne),c=Object(i.c)(ke);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Se.a,{className:e.root},r.a.createElement(V.a,{variant:"h6",noWrap:!0},"Daily calorie need"),r.a.createElement(V.a,{variant:"h3",color:"primary",noWrap:!0},Ht({weight:a,height:t,age:n,gender:l,activityLevel:c})," kcal")))},Vt=Object(Z.a)((function(e){return Object(R.a)({root:{display:"flex","& > article":{width:"70%",marginRight:24},"& > aside":{width:"30%"}}})})),Ut=function(){var e=Vt(),t=Object(i.c)(ae),a=Object(i.c)(je);return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:e.root},r.a.createElement("article",null,r.a.createElement(kt,null)),r.a.createElement("aside",null,r.a.createElement(Bt,null),r.a.createElement(zt,null))),t&&r.a.createElement(Lt,{severity:"info"},"Hello ",a||"User","!"))},Gt=Object(Z.a)((function(){return Object(R.a)({root:{display:"flex",flexDirection:"column","& .MuiTypography-h6":{paddingBottom:12}}})})),Yt=function(){var e=Gt();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Se.a,{className:e.root},r.a.createElement(V.a,{variant:"h6",noWrap:!0},"Meals addded"),r.a.createElement(V.a,{variant:"h3",color:"primary",noWrap:!0},"0")))},Kt=Object(Z.a)((function(e){return Object(R.a)({root:{"& > article":{width:"70%",marginRight:24},"& > aside":{width:"30%"},display:"flex","& h6, & h3":{padding:24},"& h3":{paddingTop:0}}})})),qt=function(){var e=Kt(),t=Object(i.c)(et);return r.a.createElement("main",{className:e.root},r.a.createElement("article",null,r.a.createElement(Se.a,{square:!0},r.a.createElement(V.a,{variant:"h6",noWrap:!0},"Your meals goes here..."),t.map((function(e){return r.a.createElement("div",{key:e.food.foodId},e.food.label)})))),r.a.createElement("aside",null,r.a.createElement(Yt,null)))},Jt=function(e){var t=e.component,a=Object(M.a)(e,["component"]),n=Object(i.c)(te)?t:re;return r.a.createElement(o.b,Object.assign({},a,{component:n}))},Qt=function(){return r.a.createElement(i.a,{store:v},r.a.createElement(y.a,null),r.a.createElement(k,null,r.a.createElement(ye,null,r.a.createElement(o.d,null,r.a.createElement(o.a,{exact:!0,from:"/",to:"/home"}),r.a.createElement(o.b,{path:"/start",component:re}),r.a.createElement(Jt,{path:"/home",component:Ut}),r.a.createElement(Jt,{path:"/meals",component:qt}),r.a.createElement(o.b,{path:"*",component:Oe})))))};c.a.render(r.a.createElement(Qt,null),document.getElementById("root"))}},[[143,1,2]]]);
//# sourceMappingURL=main.40572797.chunk.js.map