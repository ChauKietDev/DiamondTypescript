type Tcategory = {
    id: number,
    name: string,
    image: string
}

type Tjewelry = {
    id: number,
    name: string,
    image: string,
    gia: number
}

const menu = () => {
    let str: string = ` `
    str += `<li class="nav-item"> <a class="nav-link active" aria-current="page" href="#">Trang chủ</a></li>`
    str += `<li class="nav-item"><a class="nav-link" href="#">Sản phẩm</a> </li>`
    str += `<li class="nav-item"><a class="nav-link" href="#">Giới thiệu</a> </li>`
    str += `<li class="nav-item"><a class="nav-link" href="#">Tin tức</a> </li>`
    str += `<li class="nav-item"><a class="nav-link" href="#">Liên hệ</a> </li>`
    return `<ul class="navbar-nav me-auto mb-2 mb-lg-0">${str}</ul>`
}
document.querySelector('#menu-ts').innerHTML = menu()

const getSp = (sp: Tjewelry) => {
    let str: string = `
            <div class="col-md-3">
                    <div class="card card-img">
                        <a href="" class="img-relative">
                            <img class="show" src="${sp.image}" alt="">
                            <img class="hide" src="${sp.image}" alt="">
                        </a>
                        <div class="content-option">
                            <a href="">
                                <i class="fa-solid fa-cart-plus"></i>
                            </a>
                            <a href="">
                                <i class="fa-regular fa-heart"></i>
                            </a>
                            <a href="">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </a>
                        </div>
                        <p class="price">${sp.gia}</p>
                        <p class="name-sale">${sp.name}</p>
                        <p class="star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </p>
                        <p class="sold">Đã bán hết: 17/100</p>
                        <div class="progress progress-edit" role="progressbar" aria-label="Basic example"
                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-orange" style="width: 25%"></div>
                        </div>
                        <div class="content-sale">
                            <p class="salee">SALE</p>
                            <p class="polular">PHỔ BIẾN</p>
                        </div>
                    </div>
                </div>
        `
    return str
}

const showCategory = (e) => {
    let cte = `
            <div class="item-category">
                <a href="">
                    <img src="${e.image}" alt="">
                </a>
                <div class="content-item-category">
                    <p class="name-item">${e.name}</p>
                </div>
            </div>            
        `
    return cte
}


const URL_KEY = "http://localhost:3000"

export const lay_sp = async (sosp) => {
    let sp_arr: Tjewelry[];
    sp_arr = await fetch(URL_KEY + `/product?_limit=${sosp}`)
        .then(res => res.json())
        .then(data => data)
    let kq = ``
    sp_arr.forEach(sp => {
        kq += getSp(sp)
    })
    return kq
}

export const lay_dm = async (so_dm) => {
    let dm_arr: Tcategory[]
    dm_arr = await fetch(URL_KEY + `/category?_limit=${so_dm}`)
        .then(res => res.json())
        .then(data => data)
    let kq = ``
    dm_arr.forEach(d => {
        kq += showCategory(d)
    })
    return kq
}

// export const lay_sp_noi_bat = async (slsp) => {
//     let sp:Tjewelry[]
//     sp = await fetch(URL_KEY + `/product?_limit?${slsp}`)
//     .then(res => res.json())
//     .then(data => data)
//     let kq = ``
//     sp.forEach(e => {
//         kq += getSp(e)
//     })
//     return kq
// }