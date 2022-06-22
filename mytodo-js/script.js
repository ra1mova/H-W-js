const main = document.createElement('main')
main.className = 'container'
document.body.prepend(main)

const shoppingCart = document.createElement("div")
shoppingCart.className = "shoppingCart"
main.append(shoppingCart)

const title = document.createElement("div")
title.className = "title"
title.innerHTML = "Shopping Bag"

shoppingCart.prepend(title)

const products = [
    {
        like: false,
        id:1,
        name: 'MacBook Pro 13',
        count: 1,
        firstPrice: 105780,
        price: 105780,
        color:
      "серебристый",
        img: './img/Pro-13.webp'
        
    },
    {
        like: true,
        id:2,
        name: 'HP ENVY',
        count: 1,
        firstPrice: 121020,
        price: 121020,
        color:
      "черный",
        img: './img/laptop2.jpg'
        
    },
    {
        like: true,
        id:3,
        name: 'ACER PREDATOR TRITON',
        count: 1,
        firstPrice: 109990,
        price: 109990,
        color:
      "серебристый",
        img: './img/laptop3.webp'
        
    },
]

const renderAllItems = () => {
	shoppingCart.innerHTML = ''

	products.forEach((item) => {
		renderProducts(item)
	})
}
function renderProducts() {
    products.map((item) =>{
        const renderAllProducts = document.createElement('div')
        renderAllProducts.className = 'itemContainer'
        const photos = document.createElement('img')
        photos.classList='imageOfShoes'
        photos.src=item.img
        const nameOfLaptop=document.createElement('span')
        nameOfLaptop.className = "nameOfLaptop"
        nameOfLaptop.innerHTML=item.name
        const colorLaptop  = document.createElement('span')
        colorLaptop.className = "colorLaptop"
	    colorLaptop.innerHTML = item.color

  
	    

        const deleteProduct = document.createElement('img')
         deleteProduct.setAttribute('src','https://img.icons8.com/external-becris-lineal-becris/344/external-cancel-mintab-for-ios-becris-lineal-becris.png')
         deleteProduct.classList='deleteProduct'
         deleteProduct.addEventListener('click',()=>{
            products.map((el)=>{
                if (el.name===item.name) {
                    renderAllProducts.innerHTML = "" 
                }
            })
            
        })

        const likeProduct = document.createElement('img')
        likeProduct.setAttribute('src', './img/dislike.png')
        likeProduct.classList = 'likeProduct'

        likeProduct.addEventListener('click', () =>{

            products.map((el)=>{
                if(el.name===item.name){
                    item.like = !item.like
                }
                if(item.like) {
                    likeProduct.setAttribute('src', "./img/dislike.png") 
                }else if(!item.like) {
                    likeProduct.setAttribute('src', './img/like.png') 
                    
                }
                return item
            })
        })

      
        const plusMinus = document.createElement('div')
	    plusMinus.className = 'plusMinus'
        const firstPrices = document.createElement('span')
	    firstPrices.className = 'firstPrices'
        firstPrices.innerHTML = item.firstPrice
        plusMinus.prepend(firstPrices)
        const plus=document.createElement('button')
        plus.textContent='+'
        plus.className='plus'
        plusMinus.prepend(plus)
        plus.addEventListener('click',()=> {
            products.map((element) => {
                if (element.name === item.name) {
                    element.count++
                    element.firstPrice = element.firstPrice + element.price
                }
                return element
            })
            renderAllItems()
        })


        const countSpan = document.createElement('span')
        countSpan.className='countSpan'
        countSpan.innerHTML='1'
        plusMinus.prepend(countSpan)
	    
    

        const minus=document.createElement('button')
        minus.className='minus'
        minus.textContent='-'
        plusMinus.prepend(minus)
        minus.addEventListener('click',()=>{
            products.map((element) => {
                if (element.name === item.name && element.count > 1) {
                    element.count--
                    element.firstPrice = element.firstPrice - element.price
                }
                return element
            })
            renderAllItems()
        })

        
        renderAllProducts.append(deleteProduct, likeProduct,photos,nameOfLaptop,colorLaptop,plusMinus)
        shoppingCart.append(renderAllProducts)
            
    })
}




renderProducts()










 


