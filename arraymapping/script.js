var loadButton = document.querySelector('.header button');
var container = document.querySelector('.container');
var totalBussiness=document.querySelector('.header .extra-details .totalBusiness')
var actionContainer=document.querySelector('.action-container')
var allProductBtn=document.querySelector('#allProductBtn')
var activeProductBtn=document.querySelector('#activeProductBtn')
var inActiveProductBtn=document.querySelector('#inActiveProductBtn')

var products = [
    { productName: "Trendy-Top", 
      productImage: "https://tiimg.tistatic.com/fp/1/007/230/floral-design-girls-tops-026.jpg", 
      inStock: true, 
      productPrice: 900,
      quantity:21
    },
    { productName: "Patyala suit", 
      productImage: "https://opusrkid.com/cdn/shop/files/3_c1458b46-b896-4bcc-98b8-cd59adc333e7.jpg", 
      inStock: true,
      productPrice: 200,
      quantity:15 
    },
    { productName: "Mastani", 
      productImage: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7838077/2018/11/22/a74d5929-48cd-42c4-8b88-2326e204cc6e1542876746315-Aarika-Girls-Premium-Ethnic-Mastani-Lehenga-Dress-Set-9431542876745877-1.jpg", 
      inStock: false, 
      productPrice: 3000,
      quantity:0
    },
    { productName: "Partywear", 
      productImage: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2025/JULY/15/5UxQmX2F_3860edd2e38246f2a005cd77f6bd6cc1.jpg",
      inStock: true, 
      productPrice: 8000,
      quantity:34 
    },
    { productName: "Korean Dress", 
      productImage: "https://image.made-in-china.com/202f0j00yOHWslmREagh/Children-s-Dress-New-Korean-Dress-French-Sweet-Floral-Skirt-Girls-Summer-Princess-Skirt.jpg", 
      inStock: true, 
      productPrice: 4500,
      quantity:41 
    },
    { 
        productName: "mini skirt", 
      productImage: "https://media-us.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000013583687-Pink-ROSEPINK-1000013583687_02-2100.jpg", 
      inStock: false, 
      productPrice: 7800,
      quantity:0 
    },
    {
          productName:"stylish wear",
        productImage:"https://5.imimg.com/data5/SELLER/Default/2022/7/FO/FF/VS/156789636/45df6-512-jpg-500x500.jpg",
      inStock: true, 
      productPrice: 1200,
      quantity:18 
    },
    {
         productName:"Baggy Jeans",
        productImage:"https://m.media-amazon.com/images/I/71wX4iqZSnL._UY350_.jpg",
 
      inStock: true, 
      productPrice: 7100,
      quantity:51 
    },
    {
        productName:"Japanese wears",
        productImage:"https://5.imimg.com/data5/ANDROID/Default/2024/10/455923734/WB/XG/SI/233462911/product-jpeg.jpg",

      inStock: false, 
      productPrice: 1500,
      quantity:0 
    },
    { 
         productName:"Onepiece Gown",
        productImage:"https://5.imimg.com/data5/CV/TF/MY-38900969/anarkali-suits-500x500.jpg",
      inStock: true, 
      productPrice: 8800,
      quantity:29 
    },
    {
        productName:"Harrypotter",
        productImage:"https://i.etsystatic.com/14094325/r/il/d026ec/1200784076/il_570xN.1200784076_ngqc.jpg",
      inStock: true, 
      productPrice: 7200,
      quantity:39 
    },
    { productName:"kurti-set",
        productImage:"https://i.pinimg.com/736x/3e/66/b9/3e66b937b41ef5f294240c0d9dce001a.jpg",

      inStock: false, 
      productPrice: 1700,
      quantity:0
     },
    {  productName:"jumpsuit",
        productImage:"https://www.stylestone.in/cdn/shop/products/9457DenimJumpsuit_2.jpg",

      inStock: true, 
      productPrice: 13200,
      quantity:14 
    },
    {  productName:"frok",
        productImage:"https://www.cutedoll.in/cdn/shop/files/434355380_18027047207307195_1870764301313977123_n_1.jpg",
      inStock: true, 
      productPrice: 690,
      quantity:30 
    },
    { productName:"saree",
        productImage:"https://m.media-amazon.com/images/I/81vfSNMuUgL._UY1100_.jpg",
      inStock: true, 
      productPrice: 8400,
      quantity:64
    },
   
];

activeProductBtn.addEventListener('click',()=>{
  allProductBtn.classList.remove('active')
  inActiveProductBtn.classList.remove('active')
  activeProductBtn.classList.add('active')

  let activeProducts=products.filter((product)=>product.inStock==true)
        container.innerHTML=''
        activeProducts.map((product) => {
        let cardDiv = document.createElement('div')
        cardDiv.classList.add('card')

        let imgEle = document.createElement('img')
        imgEle.setAttribute('src', product.productImage)
        cardDiv.appendChild(imgEle)

        let h2Ele = document.createElement('h2')
        h2Ele.innerHTML = product.productName
        cardDiv.appendChild(h2Ele)

        let detailsDiv = document.createElement('div')
        detailsDiv.classList.add('details')

        let availableP = document.createElement('p')
        if (product.inStock) {
            availableP.innerHTML = 'In Stock'
            availableP.classList.add('available')
        } else {
            availableP.innerHTML = 'Out of Stock'
            availableP.classList.add('not-available')
        }

        availableP.innerHTML +="("+product.quantity+")"

        let priceP = document.createElement('p')
        priceP.innerHTML = 'Rs.' + product.productPrice
        priceP.classList.add('price')

        detailsDiv.appendChild(availableP)
        detailsDiv.appendChild(priceP)

        cardDiv.append(detailsDiv)
        container.appendChild(cardDiv)
    })

    let totalBussiness1=activeProducts.reduce((total,product)=>{
      return total+(Number.parseInt(product.productPrice)*Number(product.quantity))
    },0)
    totalBussiness.style.display='block'
    totalBussiness.innerHTML='Rs.'+totalBussiness1
    actionContainer.style.display='flex'
})

inActiveProductBtn.addEventListener('click',()=>{
  allProductBtn.classList.remove('active')
  activeProductBtn.classList.remove('active')
  inActiveProductBtn.classList.add('active')

        let activeProducts=products.filter((product)=>product.inStock==false)
        container.innerHTML=''
        activeProducts.map((product) => {
        let cardDiv = document.createElement('div')
        cardDiv.classList.add('card')

        let imgEle = document.createElement('img')
        imgEle.setAttribute('src', product.productImage)
        cardDiv.appendChild(imgEle)

        let h2Ele = document.createElement('h2')
        h2Ele.innerHTML = product.productName
        cardDiv.appendChild(h2Ele)

        let detailsDiv = document.createElement('div')
        detailsDiv.classList.add('details')

        let availableP = document.createElement('p')
        if (product.inStock) {
            availableP.innerHTML = 'In Stock'
            availableP.classList.add('available')
        } else {
            availableP.innerHTML = 'Out of Stock'
            availableP.classList.add('not-available')
        }

        availableP.innerHTML+="("+product.quantity+")"

        let priceP = document.createElement('p')
        priceP.innerHTML = 'Rs.' + product.productPrice
        priceP.classList.add('price')

        detailsDiv.appendChild(availableP)
        detailsDiv.appendChild(priceP)

        cardDiv.append(detailsDiv)
        container.appendChild(cardDiv)
    })

    let totalBussiness1=activeProducts.reduce((total,product)=>{
      return total+(Number.parseInt(product.productPrice)*Number(product.quantity))
    },0)
    totalBussiness.style.display='block'
    totalBussiness.innerHTML='Rs.'+totalBussiness1
    actionContainer.style.display='flex'
})

allProductBtn.addEventListener('click',()=>{
  allProductBtn.classList.add('active')
  activeProductBtn.classList.remove('active')
  inActiveProductBtn.classList.remove('active')
  container.innerHTML=''
      products.map((product,index) => {
        let cardDiv = document.createElement('div')
        cardDiv.classList.add('card')

        let imgEle = document.createElement('img')
        imgEle.setAttribute('src', product.productImage)
        cardDiv.appendChild(imgEle)

        let h2Ele = document.createElement('h2')
        h2Ele.innerHTML = product.productName
        cardDiv.appendChild(h2Ele)

        let detailsDiv = document.createElement('div')
        detailsDiv.classList.add('details')

        let availableP = document.createElement('p')
        if (product.inStock) {
            availableP.innerHTML = 'In Stock'
            availableP.classList.add('available')
        } else {
            availableP.innerHTML = 'Out of Stock'
            availableP.classList.add('not-available')
        }

        availableP.innerHTML+="("+product.quantity+")"

        let priceP = document.createElement('p')
        priceP.innerHTML = 'Rs.' + product.productPrice
        priceP.classList.add('price')

        detailsDiv.appendChild(availableP)
        detailsDiv.appendChild(priceP)

        cardDiv.append(detailsDiv)
        container.appendChild(cardDiv)
    })

    let totalBussiness1=products.reduce((total,product)=>{
      return total+(Number.parseInt(product.productPrice)*Number(product.quantity))
    },0)
    totalBussiness.style.display='block'
    totalBussiness.innerHTML='Rs.'+totalBussiness1
    actionContainer.style.display='flex'
})

loadButton.addEventListener('click', () => {
    products.map((product,index) => {
        let cardDiv = document.createElement('div')
        cardDiv.classList.add('card')

        let imgEle = document.createElement('img')
        imgEle.setAttribute('src', product.productImage)
        cardDiv.appendChild(imgEle)

        let h2Ele = document.createElement('h2')
        h2Ele.innerHTML = product.productName
        cardDiv.appendChild(h2Ele)

        let detailsDiv = document.createElement('div')
        detailsDiv.classList.add('details')

        let availableP = document.createElement('p')
        if (product.inStock) {
            availableP.innerHTML = 'In Stock'
            availableP.classList.add('available')
        } else {
            availableP.innerHTML = 'Out of Stock'
            availableP.classList.add('not-available')
        }

        availableP.innerHTML+="("+product.quantity+")"

        let priceP = document.createElement('p')
        priceP.innerHTML = 'Rs.' + product.productPrice
        priceP.classList.add('price')

        detailsDiv.appendChild(availableP)
        detailsDiv.appendChild(priceP)

        cardDiv.append(detailsDiv)
        container.appendChild(cardDiv)
    })

    let totalBussiness1=products.reduce((total,product)=>{
      return total+(Number.parseInt(product.productPrice)*Number(product.quantity))
    },0)
    totalBussiness.style.display='block'
    totalBussiness.innerHTML='Rs.'+totalBussiness1
    actionContainer.style.display='flex'
})