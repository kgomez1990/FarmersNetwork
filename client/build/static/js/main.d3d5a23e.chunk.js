(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{83:function(e,t,c){},93:function(e,t,c){},98:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(31),s=c.n(r),i=(c(83),c(4)),o=c(10),l=c(8),d=c(73),j=c(110),u=c(112),b=c(109),p=c(72),h=c(5);function O(e,t){return 1===t?e:e+"s"}function m(e,t,c){return new Promise((function(n,a){var r,s,i,o=window.indexedDB.open("shop-shop",1);o.onupgradeneeded=function(e){var t=o.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},o.onerror=function(e){console.log("There was an error")},o.onsuccess=function(a){switch(r=o.result,s=r.transaction(e,"readwrite"),i=s.objectStore(e),r.onerror=function(e){console.log("error",e)},t){case"put":i.put(c),n(c);break;case"get":var l=i.getAll();l.onsuccess=function(){n(l.result)};break;case"delete":i.delete(c._id);break;default:console.log("No valid method")}s.oncomplete=function(){r.close()}}}))}var x=c(24),g=c(26),f="UPDATE_PRODUCTS",v="ADD_TO_CART",y="ADD_MULTIPLE_TO_CART",w="REMOVE_FROM_CART",N="UPDATE_CART_QUANTITY",k="TOGGLE_CART",_="UPDATE_CATEGORIES",C="UPDATE_CURRENT_CATEGORY",S=function(e,t){switch(t.type){case f:case"CREATE_PRODUCT":case"ADD_PRODUCT":return Object(i.a)(Object(i.a)({},e),{},{products:Object(g.a)(t.products)});case v:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(g.a)(e.cart),[t.product])});case y:return Object(i.a)(Object(i.a)({},e),{},{cart:[].concat(Object(g.a)(e.cart),Object(g.a)(t.products))});case N:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case w:var c=e.cart.filter((function(e){return e._id!==t._id}));return Object(i.a)(Object(i.a)({},e),{},{cartOpen:c.length>0,cart:c});case"CLEAR_CART":return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!1,cart:[]});case k:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!e.cartOpen});case _:return Object(i.a)(Object(i.a)({},e),{},{categories:Object(g.a)(t.categories)});case C:return Object(i.a)(Object(i.a)({},e),{},{currentCategory:t.currentCategory});default:return e}};var P=c(0),E=["value"],T=Object(n.createContext)(),I=T.Provider,$=function(e){e.value;var t,c=Object(x.a)(e,E),a=(t={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(n.useReducer)(S,t)),r=Object(h.a)(a,2),s=r[0],o=r[1];return Object(P.jsx)(I,Object(i.a)({value:[s,o]},c))},D=function(){return Object(n.useContext)(T)};var A,F,R,Q,L,U=function(e){var t=D(),c=Object(h.a)(t,2),n=c[0],a=c[1],r=e.image,s=e.name,l=e._id,d=e.price,j=e.quantity,u=n.cart;return Object(P.jsxs)("div",{className:"Itemscard px-1 py-1",children:[Object(P.jsxs)(o.b,{to:"/products/".concat(l),children:[Object(P.jsx)("img",{alt:s,src:"/images/".concat(r)}),Object(P.jsx)("p",{children:s})]}),Object(P.jsxs)("div",{children:[Object(P.jsxs)("div",{children:[j," ",O("item",j)," in stock"]}),Object(P.jsxs)("span",{children:["$",d]})]}),Object(P.jsx)("button",{id:"addCart",onClick:function(){var t=u.find((function(e){return e._id===l}));t?(a({type:N,_id:l,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),m("cart","put",Object(i.a)(Object(i.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(a({type:v,product:Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:1})}),m("cart","put",Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:1})))},children:"Add to cart"})]})},q=c(103),B=c(20),W=c(111),H=Object(W.a)(A||(A=Object(B.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),Y=Object(W.a)(F||(F=Object(B.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),G=(Object(W.a)(R||(R=Object(B.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(W.a)(Q||(Q=Object(B.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),M=Object(W.a)(L||(L=Object(B.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),J=c.p+"static/media/spinner.689d9a07.gif";var z=function(){var e=D(),t=Object(h.a)(e,2),c=t[0],a=t[1],r=c.currentCategory,s=Object(q.a)(H),i=s.loading,o=s.data;return Object(n.useEffect)((function(){o?(a({type:f,products:o.products}),o.products.forEach((function(e){m("products","put",e)}))):i||m("products","get").then((function(e){a({type:f,products:e})}))}),[o,i,a]),Object(P.jsxs)("div",{className:"my-2",children:[Object(P.jsx)("h2",{children:"Our Products:"}),c.products.length?Object(P.jsx)("div",{className:"flex-row",children:(r?c.products.filter((function(e){return e.category._id===r})):c.products).map((function(e){return Object(P.jsx)(U,{_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity},e._id)}))}):Object(P.jsx)("h3",{children:"You haven't added any products yet!"}),i?Object(P.jsx)("img",{src:J,alt:"loading"}):null]})};var K=function(){var e=D(),t=Object(h.a)(e,2),c=t[0],a=t[1],r=c.categories,s=Object(q.a)(G),i=s.loading,o=s.data;return Object(n.useEffect)((function(){o?(a({type:_,categories:o.categories}),o.categories.forEach((function(e){m("categories","put",e)}))):i||m("categories","get").then((function(e){a({type:_,categories:e})}))}),[o,i,a]),Object(P.jsxs)("div",{children:[Object(P.jsx)("h2",{children:"Choose a Category:"}),r.map((function(e){return Object(P.jsx)("button",{onClick:function(){var t;t=e._id,a({type:C,currentCategory:t})},children:e.name},e._id)}))]})},V=c(13),X=c.n(V),Z=c(23),ee=c(67),te=c(104),ce=function(e){var t=e.item,c=D(),n=Object(h.a)(c,2)[1];return Object(P.jsxs)("div",{className:"flex-row",children:[Object(P.jsx)("div",{children:Object(P.jsx)("img",{src:"/images/".concat(t.image),alt:""})}),Object(P.jsxs)("div",{children:[Object(P.jsxs)("div",{children:[t.name,", $",t.price]}),Object(P.jsxs)("div",{children:[Object(P.jsx)("span",{children:"Qty:"}),Object(P.jsx)("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var c=e.target.value;"0"===c?(n({type:w,_id:t._id}),m("cart","delete",Object(i.a)({},t))):(n({type:N,_id:t._id,purchaseQuantity:parseInt(c)}),m("cart","put",Object(i.a)(Object(i.a)({},t),{},{purchaseQuantity:parseInt(c)})))}}),Object(P.jsx)("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){n({type:w,_id:e._id}),m("cart","delete",Object(i.a)({},e))}(t)},children:"\ud83d\uddd1\ufe0f"})]})]})]})},ne=c(68),ae=c(69),re=c(56),se=c.n(re),ie=new(function(){function e(){Object(ne.a)(this,e)}return Object(ae.a)(e,[{key:"getProfile",value:function(){return se()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return se()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),oe=(c(93),Object(ee.a)("pk_test_TYooMQauvdEDq54NiTphI7jx")),le=function(){var e=D(),t=Object(h.a)(e,2),c=t[0],a=t[1],r=Object(te.a)(Y),s=Object(h.a)(r,2),i=s[0],o=s[1].data;function l(){a({type:k})}return Object(n.useEffect)((function(){o&&oe.then((function(e){e.redirectToCheckout({sessionId:o.checkout.session})}))}),[o]),Object(n.useEffect)((function(){function e(){return(e=Object(Z.a)(X.a.mark((function e(){var t;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("cart","get");case 2:t=e.sent,a({type:y,products:Object(g.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c.cart.length||function(){e.apply(this,arguments)}()}),[c.cart.length,a]),c.cartOpen?Object(P.jsxs)("div",{className:"cart",children:[Object(P.jsx)("div",{className:"close",onClick:l,children:Object(P.jsx)("button",{children:"Close"})}),Object(P.jsx)("h2",{children:"Shopping Cart"}),c.cart.length?Object(P.jsxs)("div",{children:[c.cart.map((function(e){return Object(P.jsx)(ce,{item:e},e._id)})),Object(P.jsxs)("div",{className:"flex-row space-between",children:[Object(P.jsxs)("strong",{children:["Total: $",function(){var e=0;return c.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()]}),ie.loggedIn()?Object(P.jsx)("button",{onClick:function(){var e=[];c.cart.forEach((function(t){for(var c=0;c<t.purchaseQuantity;c++)e.push(t._id)})),i({variables:{products:e}})},children:"Checkout"}):Object(P.jsx)("span",{children:"(log in to check out)"})]})]}):Object(P.jsxs)("h3",{children:[Object(P.jsx)("span",{role:"img","aria-label":"shocked",children:"\ud83d\ude31"}),"You haven't added anything to your cart yet!"]})]}):Object(P.jsx)("div",{className:"cart-closed",onClick:l,children:Object(P.jsx)("span",{role:"img","aria-label":"trash",children:Object(P.jsx)("img",{src:"https://img.icons8.com/color/48/000000/shopping-bag--v2.png"})})})},de=c(34),je=(c(94),function(){return Object(P.jsxs)(de.a,{className:"imageslider",children:[Object(P.jsxs)(de.a.Item,{interval:1e3,children:[Object(P.jsx)("img",{className:"d-block w-100 ",src:"./images/sliderimage/image1.jpg",alt:"First slide"}),Object(P.jsxs)(de.a.Caption,{children:[Object(P.jsx)("h3",{className:"carouselHeader",children:"Welcome to the Farmer's Network!"}),Object(P.jsx)("p",{className:"carouselPara",children:"Your Online Blog for Local's looking for Fresh Produce at an affordable Price!"})]})]}),Object(P.jsxs)(de.a.Item,{interval:500,children:[Object(P.jsx)("img",{className:"d-block w-100 ",src:"./images/sliderimage/image2.jpg",alt:"Second slide"}),Object(P.jsxs)(de.a.Caption,{children:[Object(P.jsx)("h3",{className:"carouselHeader",children:"Interested in a Local Farmer's Produce?"}),Object(P.jsx)("p",{className:"carouselPara",children:"Look no further! Farmer's from all over are able to post and sell their products here!"})]})]}),Object(P.jsxs)(de.a.Item,{children:[Object(P.jsx)("img",{className:"d-block w-100 ",src:"./images/sliderimage/image3.jpg",alt:"Third slide"}),Object(P.jsxs)(de.a.Caption,{children:[Object(P.jsx)("h3",{className:"carouselHeader",children:"Interested in Selling your products?"}),Object(P.jsx)("p",{className:"carouselPara",children:"Anyone with fresh produce is able to post their products here. Please create an account with us and start Posting!!!"})]})]})]})}),ue=function(){return Object(P.jsxs)("div",{className:"flex-column",children:[Object(P.jsxs)("div",{className:"container",children:[Object(P.jsx)(je,{}),Object(P.jsx)(K,{}),Object(P.jsx)(z,{}),Object(P.jsx)(le,{})]}),Object(P.jsx)("footer",{className:"flex-column px-1  ",children:Object(P.jsxs)("a",{children:[Object(P.jsx)("ul",{children:" \xa9FarmerNetwork"}),Object(P.jsx)("ul",{children:"Dalton Rajesh Karim JHU-Boot-Camp-2021"})]})})]})};var be=function(){var e=D(),t=Object(h.a)(e,2),c=t[0],a=t[1],r=Object(l.f)().id,s=Object(n.useState)({}),d=Object(h.a)(s,2),j=d[0],u=d[1],b=Object(q.a)(H),p=b.loading,O=b.data,x=c.products,g=c.cart;return Object(n.useEffect)((function(){x.length?u(x.find((function(e){return e._id===r}))):O?(a({type:f,products:O.products}),O.products.forEach((function(e){m("products","put",e)}))):p||m("products","get").then((function(e){a({type:f,products:e})}))}),[x,O,p,a,r]),Object(P.jsxs)(P.Fragment,{children:[j&&g?Object(P.jsxs)("div",{className:"container my-1",children:[Object(P.jsx)(o.b,{to:"/",children:"\u2190 Back to Products"}),Object(P.jsx)("h2",{children:j.name}),Object(P.jsx)("p",{children:j.description}),Object(P.jsxs)("p",{children:[Object(P.jsx)("strong",{children:"Price:"}),"$",j.price," ",Object(P.jsx)("button",{onClick:function(){var e=g.find((function(e){return e._id===r}));e?(a({type:N,_id:r,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),m("cart","put",Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(a({type:v,product:Object(i.a)(Object(i.a)({},j),{},{purchaseQuantity:1})}),m("cart","put",Object(i.a)(Object(i.a)({},j),{},{purchaseQuantity:1})))},children:"Add to Cart"}),Object(P.jsx)("button",{disabled:!g.find((function(e){return e._id===j._id})),onClick:function(){a({type:w,_id:j._id}),m("cart","delete",Object(i.a)({},j))},children:"Remove from Cart"})]}),Object(P.jsx)("img",{src:"/images/".concat(j.image),alt:j.name})]}):null,p?Object(P.jsx)("img",{src:J,alt:"loading"}):null,Object(P.jsx)(le,{})]})};var pe,he,Oe,me,xe,ge=function(e){var t=e.children;return Object(P.jsx)("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"},children:t})},fe=function(){return Object(P.jsx)("div",{children:Object(P.jsxs)(ge,{children:[Object(P.jsx)("h1",{children:"404 Page Not Found"}),Object(P.jsx)("h1",{children:Object(P.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})},ve=c(30),ye=c(114),we=Object(W.a)(pe||(pe=Object(B.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),Ne=Object(W.a)(he||(he=Object(B.a)(["\n  mutation createProduct($name: String!, \n    $description: String, \n    $price: Float, \n    $categoryId: ID, \n    $image: String)\n  {\n    createProduct(name: $name, \n      description: $description, \n      price: $price, \n      categoryId: $categoryId, \n      image: $image) {\n      _id\n    }\n  }\n"]))),ke=(Object(W.a)(Oe||(Oe=Object(B.a)(["\n  mutation addProduct($products: [ID]!) {\n    addProduct(products: $products) {\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),Object(W.a)(me||(me=Object(B.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"])))),_e=Object(W.a)(xe||(xe=Object(B.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])));var Ce=function(e){var t=Object(n.useState)({email:"",password:""}),c=Object(h.a)(t,2),a=c[0],r=c[1],s=Object(ye.a)(we),l=Object(h.a)(s,2),d=l[0],j=l[1].error,u=function(){var e=Object(Z.a)(X.a.mark((function e(t){var c,n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d({variables:{email:a.email,password:a.password}});case 4:c=e.sent,n=c.data.login.token,ie.login(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.target,c=t.name,n=t.value;r(Object(i.a)(Object(i.a)({},a),{},Object(ve.a)({},c,n)))};return Object(P.jsxs)("div",{className:"container my-1",children:[Object(P.jsx)(o.b,{to:"/signup",children:"\u2190 Go to Signup"}),Object(P.jsx)("h2",{children:"Login"}),Object(P.jsxs)("form",{onSubmit:u,children:[Object(P.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(P.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(P.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:b})]}),Object(P.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(P.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(P.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:b})]}),j?Object(P.jsx)("div",{children:Object(P.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(P.jsx)("div",{className:"flex-row flex-end",children:Object(P.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var Se=function(e){var t=Object(n.useState)({email:"",password:""}),c=Object(h.a)(t,2),a=c[0],r=c[1],s=Object(ye.a)(_e),l=Object(h.a)(s,1)[0],d=function(){var e=Object(Z.a)(X.a.mark((function e(t){var c,n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,l({variables:{email:a.email,password:a.password,firstName:a.firstName,lastName:a.lastName}});case 3:c=e.sent,n=c.data.addUser.token,ie.login(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target,c=t.name,n=t.value;r(Object(i.a)(Object(i.a)({},a),{},Object(ve.a)({},c,n)))};return Object(P.jsxs)("div",{className:"container my-1",children:[Object(P.jsx)(o.b,{to:"/login",children:"\u2190 Go to Login"}),Object(P.jsx)("h2",{children:"Signup"}),Object(P.jsxs)("form",{onSubmit:d,children:[Object(P.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(P.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(P.jsx)("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:j})]}),Object(P.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(P.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(P.jsx)("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:j})]}),Object(P.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(P.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(P.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:j})]}),Object(P.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(P.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(P.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:j})]}),Object(P.jsx)("div",{className:"flex-row flex-end",children:Object(P.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var Pe=function(){return Object(P.jsxs)("header",{className:"flex-row px-1 justify-content: space-between ",children:[Object(P.jsxs)("h1",{children:[Object(P.jsx)(o.b,{to:"/",children:Object(P.jsx)("span",{role:"img","aria-label":"shopping bag",children:"\ud83c\udf3e\ud83c\udf3b\ud83c\udf3d"})}),Object(P.jsx)("h3",{children:"Farmer's Network"})]}),Object(P.jsxs)("form",{action:"/",method:"get",className:"  searchBar",children:[Object(P.jsx)("label",{htmlFor:"header-search",children:Object(P.jsx)("span",{className:"visually-hidden",children:"Search Listings"})}),Object(P.jsx)("input",{type:"text",id:"header-search",placeholder:"Enter a product...",name:"s"}),Object(P.jsx)("button",{type:"submit",children:"Search"})]}),Object(P.jsx)("nav",{children:ie.loggedIn()?Object(P.jsxs)("ul",{className:"flex-columnNav",children:[Object(P.jsx)("li",{className:"mx-1",children:Object(P.jsx)(o.b,{to:"/orderHistory",className:"addCartNav",children:"Order History"})}),Object(P.jsx)("li",{className:"mx-1",children:Object(P.jsx)(o.b,{to:"/NewListing",className:"addCartNav",children:"Create New Listing"})}),Object(P.jsx)("li",{className:"mx-1",children:Object(P.jsx)("a",{href:"/",className:"addCartNav",onClick:function(){return ie.logout()},children:"Logout"})})]}):Object(P.jsxs)("ul",{className:"flex-columnNav",children:[Object(P.jsx)("li",{className:"mx-1",children:Object(P.jsx)(o.b,{to:"/signup",className:"addCartNav",children:"Signup"})}),Object(P.jsx)("li",{className:"mx-1",children:Object(P.jsx)(o.b,{to:"/login",className:"addCartNav",children:"Login"})})]})})]})};var Ee=function(){var e=Object(ye.a)(ke),t=Object(h.a)(e,1)[0];return Object(n.useEffect)((function(){function e(){return(e=Object(Z.a)(X.a.mark((function e(){var c,n,a,r;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("cart","get");case 2:if(c=e.sent,!(n=c.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:n}});case 7:a=e.sent,r=a.data,r.addOrder.products.forEach((function(e){m("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(P.jsx)("div",{children:Object(P.jsxs)(ge,{children:[Object(P.jsx)("h1",{children:"Success!"}),Object(P.jsx)("h2",{children:"Thank you for your purchase!"}),Object(P.jsx)("h2",{children:"You will now be redirected to the home page"})]})})};var Te=function(){var e=Object(n.useState)({name:"",description:"",price:.99,categoryId:"",image:"public/images/stock-farmer.jpg"}),t=Object(h.a)(e,2),c=t[0],a=t[1],r=Object(q.a)(G),s=(r.loading,r.data),o=Object(ye.a)(Ne),l=Object(h.a)(o,2),d=l[0],j=(l[1].error,function(e){a(Object(i.a)(Object(i.a)({},c),{},Object(ve.a)({},e.target.id,e.target.value)))}),u=function(){var e=Object(Z.a)(X.a.mark((function e(t){var n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d({variables:{newProduct:c}});case 4:n=e.sent,n.data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:window.location.assign("/");case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(P.jsxs)("div",{className:"textArea",children:[Object(P.jsxs)("div",{className:"mb-3",children:[Object(P.jsx)("label",{className:"form-label",children:"Product"}),Object(P.jsx)("input",{type:"text",className:"form-control",id:"name",placeholder:"Please Enter Item for Sale",onChange:j})]}),Object(P.jsxs)("div",{className:"input-group mb-3",children:[Object(P.jsx)("div",{className:"input-group-prepend",children:Object(P.jsx)("span",{className:"input-group-text",children:"$"})}),Object(P.jsx)("input",{type:"text",className:"form-control","aria-label":"Amount (to the nearest dollar)"}),Object(P.jsx)("div",{className:"input-group-append",children:Object(P.jsx)("span",{className:"input-group-text",children:".00"})})]}),Object(P.jsxs)("div",{className:"form-group",children:[Object(P.jsx)("label",{children:"Example select"}),Object(P.jsx)("select",{className:"form-control",onChange:j,id:"categoryId",children:s&&s.categories?s.categories.map((function(e){return Object(P.jsx)("option",{value:e._id,children:e.name},e._id)})):""})]}),Object(P.jsxs)("div",{className:"mb-3",children:[Object(P.jsx)("label",{className:"form-label",children:"Description"}),Object(P.jsx)("textarea",{className:"form-control",id:"description",rows:"3",placeholder:"Please Enter Description of Products",onChange:j}),Object(P.jsx)("a",{href:"/",children:Object(P.jsx)("button",{className:"productButton",onClick:u,children:"Post Your Listing"})})]})]})};var Ie=function(){var e,t=Object(q.a)(M).data;return t&&(e=t.user),Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)("div",{className:"container my-1",children:[Object(P.jsx)(o.b,{to:"/",children:"\u2190 Back to Products"}),e?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)("h2",{children:["Order History for ",e.firstName," ",e.lastName]}),e.orders.map((function(e){return Object(P.jsxs)("div",{className:"my-2",children:[Object(P.jsx)("h3",{children:new Date(parseInt(e.purchaseDate)).toLocaleDateString()}),Object(P.jsx)("div",{className:"flex-row",children:e.products.map((function(e,t){var c=e._id,n=e.image,a=e.name,r=e.price;return Object(P.jsxs)("div",{className:"card px-1 py-1",children:[Object(P.jsxs)(o.b,{to:"/products/".concat(c),children:[Object(P.jsx)("img",{alt:a,src:"/images/".concat(n)}),Object(P.jsx)("p",{children:a})]}),Object(P.jsx)("div",{children:Object(P.jsxs)("span",{children:["$",r]})})]},t)}))})]},e._id)}))]}):null]})})},$e=Object(d.a)({uri:"/graphql"}),De=Object(p.a)((function(e,t){var c=t.headers,n=localStorage.getItem("id_token");return{headers:Object(i.a)(Object(i.a)({},c),{},{authorization:n?"Bearer ".concat(n):""})}})),Ae=new j.a({link:De.concat($e),cache:new u.a});var Fe=function(){return Object(P.jsx)(b.a,{client:Ae,children:Object(P.jsx)(o.a,{children:Object(P.jsx)("div",{children:Object(P.jsxs)($,{children:[Object(P.jsx)(Pe,{}),Object(P.jsxs)(l.c,{children:[Object(P.jsx)(l.a,{exact:!0,path:"/",component:ue}),Object(P.jsx)(l.a,{exact:!0,path:"/login",component:Ce}),Object(P.jsx)(l.a,{exact:!0,path:"/signup",component:Se}),Object(P.jsx)(l.a,{exact:!0,path:"/success",component:Ee}),Object(P.jsx)(l.a,{exact:!0,path:"/orderHistory",component:Ie}),Object(P.jsx)(l.a,{exact:!0,path:"/NewListing",component:Te}),Object(P.jsx)(l.a,{exact:!0,path:"/products/:id",component:be}),Object(P.jsx)(l.a,{component:fe})]})]})})})})},Re=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Qe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;null!=c&&(c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(P.jsx)(a.a.StrictMode,{children:Object(P.jsx)(Fe,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Re?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(c){var n=c.headers.get("content-type");404===c.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Qe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Qe(t,e)}))}}()}},[[98,1,2]]]);
//# sourceMappingURL=main.d3d5a23e.chunk.js.map