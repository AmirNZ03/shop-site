let product=[
    {id:4,img:"121654059.webp",title:"پنیر فتا دوشه هراز - 400 گرم",
        score:4.4,price:"39,900" , disc:"64,900",cou:"38%"}
        ,{id:3,img:"c4804fdd140a21f39cfb068c146192a9af8cefce_1638283241.webp",title:"کنسرو ماهی تن در روغن گالکسی - 180 گرم",
            score:4.4,price:"87,000" , disc:"90,900",cou:"38%"},
            {id:2,img:"428b3e2c583758782183d53231b198c1f2a46d5b_1686053583.webp",title:"روغن مایع آفتابگردان حاوی ویتامین دی م",
                score:4.5,price:"163,900" , disc:"197,900",cou:"38%"},
                {id:1,img:"f19874026544ebbad8ae31a272c3989762d36a17_1699093712.webp",title:"مایع لباسشویی سرخابی اکتیو 2500 گرم",
                    score:4.3,price:"139,000" , disc:"176,900",cou:"38%"}
]
let vvc=document.querySelector(".plo")
product.forEach(product=>{
    vvc.insertAdjacentHTML("beforeend",
        ` <a href="#">
              <div class="w-64 csa bg-white kio hover:shadow-lg">
                <div class="flex-col">
                  <p class="text-red-700 text-right font-bold">پیشنهاد شگفت انگیز</p>
                  <div class="bg-blue-400 text-white w-6 h-6 ml-52 mt-1 rounded-l-lg"><div class="pl-2">${product.id}</div>

                  </div>
              
                <img src="${product.img}" alt="">
                <p class="text-sm">${product.title}</p>
                <div class="flex">
                  <i class="fa-solid fa-star text-yellow-400 pt-3"></i>
                  <p class="text-sm pt-3">${product.score}</p>
                  <p class="text-sm pl-32 pt-3">ارسال فردا</p>
                </div>
                <div class="flex">
                 تومان <p class="text-sm pt-1 font-bold">${product.price}</p>
                 <div class="w-8 h-4 rounded-full bg-red-500 text-white ml-32 mt-2">
                <p class="text-sm ">${product.cou}</p>
              </div>
                </div>
                <p class="line-through text-sm text-gray-400 ml-4 mt-2">${product.disc}</p>
                <div><p></p>
                </div>
              </div>
              </div>
            </a>`

    )
})
let prods=[
    {id:10,img:"4bc080993af2f26c76e94fe7907ddef881f2b9c6_1609743727.webp",title:"آب معدنی میوا - 1.5 لیتر بسته 6 عددی",
        score:4.1,price:"42,000" , disc:"60,900",cou:"40%"}
        ,{id:9,img:"dba25b58eb5b78d2cbf41d5befd49e5f5f64b5e4_1730022466.webp",title:"شکر سفید الماس دانه - 1 کیلوگرم",
            score:4.6,price:"37,000" , disc:"60,900",cou:"44%"},
            {id:8,img:"9ba678e89378432d59e0ac5a13811d0ac8f084c0_1699094036.webp",title:"Poly Washپودر ماشین لباسشویی اکتیو مدل ",
                score:4,price:"31,000" , disc:"50,900",cou:"30%"},
                {id:7,img:"2180865dcfdaa31a9d98102465994e4498726a69_1716728856.webp",title:"گوشی موبایل نوکیا مدل 105 2023 ",
                    score:4.2,price:"879,000" , disc:"970,900",cou:"18%"},
                    {id:6,img:"8c776cb3a61dbf955a8f9af271522cd10661bce7_1729494166.webp",title:"Redmi Note 8گوشی موبایل شیائومی مدل ",
                        score:4.3,price:"9,380,000" , disc:"10,000,900",cou:"10%"}
]


let but=document.querySelector(".olp")
prods.forEach(prod=>{
    but.insertAdjacentHTML("beforeend",
        `<a href="#">
              <div class="w-64 csa bg-white kio hover:shadow-lg">
                <div class="flex-col">
                  <p class="text-red-700 text-right font-bold">پیشنهاد شگفت انگیز</p>
                  <div class="bg-blue-400 text-white w-6 h-6 ml-52 mt-1 rounded-l-lg"><div class="pl-2">${prod.id}</div>

                  </div>
              
                <img src="${prod.img}" alt="">
                <p class="text-sm">${prod.title}</p>
                <div class="flex">
                  <i class="fa-solid fa-star text-yellow-400 pt-3"></i>
                  <p class="text-sm pt-3">${prod.score}</p>
                  <p class="text-sm pl-32 pt-3">ارسال فردا</p>
                </div>
                <div class="flex">
                 تومان <p class="text-sm pt-1 font-bold">${prod.price}</p>
                 <div class="w-8 h-4 rounded-full bg-red-500 text-white ml-32 mt-2">
                <p class="text-sm ">${prod.cou}</p>
              </div>
                </div>
                <p class="line-through text-sm text-gray-400 ml-4 mt-2">${prod.disc}</p>
                <div><p></p>
                </div>
              </div>
              </div>
            </a>`


    )
})
let laa=document.querySelector(".xsa")
let kals=[
    {id:15,img:"8b203453ace0384d886b221d62df356b5ba0bb50_1614169370.webp",title:"پنیر خامه ای ویلی کاله - 350 گرم",
        score:4.3,price:"85,000" , disc:"95,000",cou:"10%"}
        ,{id:14,img:"e31bfd186d99275c45d189579d0d8456ebd03033_1716900817.webp",title:"گوشی موبایل نوکیا مدل  2023",
            score:4.6,price:"959,000" , disc:"1,000,000",cou:"4%"},
            {id:13,img:"79614762a83c72827adb5940fee9a27309233426_1661770880.webp",title:"کالباس 60 درصد قارچ و مرغ",
                score:4.4,price:"79,000" , disc:"89,900",cou:"20%"},
                {id:12,img:"5a303470d30d4f6cbfbf1d15f60b16ad931d989a_1661770457 (1).webp",title:"کالباس 90 درصد گوشت قرمز ",
                    score:4.3,price:"79,000" , disc:"97,900",cou:"11%"},
                    {id:11,img:"2439525.webp",title:"برنج طارم ممتاز گلستان",
                        score:4.6,price:"1,380,000" , disc:"2,000,000",cou:"10%"}
]
kals.forEach(kal=>{
    laa.insertAdjacentHTML("beforeend",
          `<a href="#">
              <div class="w-64 csa bg-white kio hover:shadow-lg">
                <div class="flex-col">
                  <p class="text-red-700 text-right font-bold">پیشنهاد شگفت انگیز</p>
                  <div class="bg-blue-400 text-white w-6 h-6 ml-52 mt-1 rounded-l-lg"><div class="pl-2">${kal.id}</div>

                  </div>
              
                <img src="${kal.img}" alt="">
                <p class="text-sm text-right">${kal.title}</p>
                <div class="flex">
                  <i class="fa-solid fa-star text-yellow-400 pt-3"></i>
                  <p class="text-sm pt-3">${kal.score}</p>
                  <p class="text-sm pl-32 pt-3">ارسال فردا</p>
                </div>
                <div class="flex">
                 تومان <p class="text-sm pt-1 font-bold">${kal.price}</p>
                 <div class="w-8 h-4 rounded-full bg-red-500 text-white ml-32 mt-2">
                <p class="text-sm ">${kal.cou}</p>
              </div>
                </div>
                <p class="line-through text-sm text-gray-400 ml-4 mt-2">${kal.disc}</p>
                <div><p></p>
                </div>
              </div>
              </div>
            </a>`

        
        )
})